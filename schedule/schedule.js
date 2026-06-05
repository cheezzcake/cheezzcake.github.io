const STORAGE_KEY = "yixuan-schedule-v3";
const TYPE_LABELS = {
  math: "数学",
  physics: "物理",
  general: "综合",
  life: "生活",
  exam: "考试",
};
const LEGACY_TYPE_MAP = {
  study: "math",
  research: "physics",
  deadline: "exam",
};

const board = document.querySelector("#schedule-board");
const addButton = document.querySelector(".add-task");
const uploadButton = document.querySelector(".upload-json");
const typeSelect = document.querySelector("#task-type");
const filterSelect = document.querySelector("#task-filter");
const trashZone = document.querySelector(".trash-zone");
const syncStatus = document.querySelector(".sync-status");

let tasks = [];

function toISODate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function startOfWeek(date) {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  result.setDate(result.getDate() - result.getDay());
  return result;
}

function addDays(date, count) {
  const result = new Date(date);
  result.setDate(result.getDate() + count);
  return result;
}

function formatDay(date) {
  return `${date.getMonth() + 1}.${date.getDate()}`;
}

function formatWeekRange(start) {
  const end = addDays(start, 6);
  return `${formatDay(start)} - ${formatDay(end)}`;
}

function loadLocalTasks() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function normalizeType(type) {
  return TYPE_LABELS[type] ? type : LEGACY_TYPE_MAP[type] || "general";
}

function normalizeTasks() {
  tasks = tasks.map((task) => ({
    ...task,
    type: normalizeType(task.type),
    completed: Boolean(task.completed),
  }));
}

function setStatus(message) {
  syncStatus.textContent = message;
}

function encodeBase64(text) {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

async function loadTasks() {
  const localTasks = loadLocalTasks();
  if (Array.isArray(localTasks)) {
    tasks = localTasks;
    normalizeTasks();
    return;
  }

  try {
    const response = await fetch("./schedule.json", { cache: "no-store" });
    tasks = await response.json();
    normalizeTasks();
  } catch {
    tasks = [];
  }
}

function createTaskElement(task) {
  const taskEl = document.createElement("label");
  const type = normalizeType(task.type);
  taskEl.className = `task-block task-${type}`;
  if (task.completed) taskEl.classList.add("is-complete");
  taskEl.draggable = true;
  taskEl.dataset.id = task.id;
  taskEl.title = `${TYPE_LABELS[type]} · 双击编辑`;

  const checkbox = document.createElement("input");
  checkbox.className = "task-check";
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  checkbox.setAttribute("aria-label", `完成${task.title}`);

  const title = document.createElement("span");
  title.className = "task-title";
  title.textContent = task.title;

  taskEl.append(checkbox, title);

  checkbox.addEventListener("change", () => {
    toggleTaskComplete(task.id, checkbox.checked);
  });

  taskEl.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", task.id);
    event.dataTransfer.effectAllowed = "move";
    taskEl.classList.add("is-dragging");
  });

  taskEl.addEventListener("dragend", () => {
    taskEl.classList.remove("is-dragging");
  });

  taskEl.addEventListener("dblclick", (event) => {
    if (event.target === checkbox) return;
    editTask(task.id);
  });

  return taskEl;
}

function createDayCell(date) {
  const iso = toISODate(date);
  const today = toISODate(new Date());
  const cell = document.createElement("article");
  cell.className = "day-cell";
  cell.dataset.date = iso;
  if (iso === today) cell.classList.add("is-today");

  const header = document.createElement("div");
  header.className = "day-header";

  const weekday = document.createElement("span");
  weekday.className = "weekday";
  weekday.textContent = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()];

  const day = document.createElement("strong");
  day.textContent = formatDay(date);

  header.append(weekday, day);
  cell.append(header);

  const list = document.createElement("div");
  list.className = "task-list";
  tasks
    .filter((task) => {
      const type = normalizeType(task.type);
      const filter = filterSelect.value;
      return task.date === iso && (filter === "all" || type === filter);
    })
    .forEach((task) => list.append(createTaskElement(task)));
  cell.append(list);

  cell.addEventListener("dragover", (event) => {
    event.preventDefault();
    cell.classList.add("is-drop-target");
  });

  cell.addEventListener("dragleave", () => {
    cell.classList.remove("is-drop-target");
  });

  cell.addEventListener("drop", (event) => {
    event.preventDefault();
    cell.classList.remove("is-drop-target");
    const taskId = event.dataTransfer.getData("text/plain");
    moveTask(taskId, iso);
  });

  return cell;
}

function render() {
  board.replaceChildren();

  const firstWeek = startOfWeek(new Date());
  for (let weekIndex = 0; weekIndex < 4; weekIndex += 1) {
    const weekStart = addDays(firstWeek, weekIndex * 7);
    const week = document.createElement("section");
    week.className = "schedule-week";

    const heading = document.createElement("h2");
    heading.textContent = `Week ${weekIndex + 1} · ${formatWeekRange(weekStart)}`;
    week.append(heading);

    const grid = document.createElement("div");
    grid.className = "week-grid";
    for (let dayIndex = 0; dayIndex < 7; dayIndex += 1) {
      grid.append(createDayCell(addDays(weekStart, dayIndex)));
    }
    week.append(grid);
    board.append(week);
  }
}

function addTaskToToday() {
  const title = window.prompt("日程内容", "新日程");
  if (!title || !title.trim()) return;
  tasks.push({
    id: crypto.randomUUID(),
    title: title.trim(),
    type: typeSelect.value,
    date: toISODate(new Date()),
    completed: false,
  });
  saveTasks();
  render();
}

function editTask(taskId) {
  const task = tasks.find((item) => item.id === taskId);
  if (!task) return;
  const title = window.prompt("编辑日程", task.title);
  if (!title || !title.trim()) return;
  task.title = title.trim();
  saveTasks();
  render();
}

function moveTask(taskId, date) {
  const task = tasks.find((item) => item.id === taskId);
  if (!task) return;
  task.date = date;
  saveTasks();
  render();
}

function toggleTaskComplete(taskId, completed) {
  const task = tasks.find((item) => item.id === taskId);
  if (!task) return;
  task.completed = completed;
  saveTasks();
  render();
}

function deleteTask(taskId) {
  tasks = tasks.filter((item) => item.id !== taskId);
  saveTasks();
  render();
}

async function uploadJsonToGitHub() {
  const token = window.prompt("GitHub token");
  if (!token) return;

  const owner = "Cheezzcake";
  const repo = "cheezzcake.github.io";
  const path = "schedule/schedule.json";
  const branch = "main";
  const api = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  const content = `${JSON.stringify(tasks, null, 2)}\n`;

  uploadButton.disabled = true;
  setStatus("正在上传...");

  try {
    const current = await fetch(`${api}?ref=${branch}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    if (!current.ok) throw new Error("无法读取远端 JSON");
    const currentJson = await current.json();

    const response = await fetch(api, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      body: JSON.stringify({
        message: "Update schedule data",
        content: encodeBase64(content),
        sha: currentJson.sha,
        branch,
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || "上传失败");
    }

    setStatus("已上传到 GitHub");
  } catch (error) {
    setStatus(error.message);
  } finally {
    uploadButton.disabled = false;
  }
}

addButton.addEventListener("click", addTaskToToday);
uploadButton.addEventListener("click", uploadJsonToGitHub);
filterSelect.addEventListener("change", render);

trashZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  trashZone.classList.add("is-drop-target");
});

trashZone.addEventListener("dragleave", () => {
  trashZone.classList.remove("is-drop-target");
});

trashZone.addEventListener("drop", (event) => {
  event.preventDefault();
  trashZone.classList.remove("is-drop-target");
  deleteTask(event.dataTransfer.getData("text/plain"));
});

loadTasks().then(render);
