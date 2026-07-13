# Chap 02. Introduction to ED of SC

## The London Equations

```
$$E=\frac{\partial}{\partial t}(\Lambda J)\\
\Rightarrow \nabla \times \frac{d \mathbf{J}_s}{d t}=\frac{n_s e^2}{m}(\nabla \times \mathbf{E})\\
\Rightarrow \frac{\partial}{\partial t}\left(\nabla \times \mathbf{J}_s\right)=-\frac{n_s e^2}{m} \frac{\partial \mathbf{B}}{\partial t}$$
```

Here given $\Lambda = \frac{m}{n_se^2}$，while we know that $J=0\ B=0$ at the same time,

```
$$\mathbf{H}=-\frac1c\nabla\times(\Lambda \mathbf{J}_s)$$
```

considering Maxwell equation:

```
$$\nabla\times \mathbf{H}=\frac{4\pi}c\mathbf{J}$$
```

and  $\nabla \cdot \mathbf{H} =0$

we get

```
$$\nabla^2\mathbf{H}=\frac1{\lambda^2}\mathbf{H},\ \lambda^2=\frac{mc^2}{4\pi n_se^2}$$
```

($\lambda$ is around 200$\AA$)

## Flat Slab in Parallel Magnetic Field

micro-field

```
$$h=H_a \frac{\cosh(x/\lambda)}{\cosh(d/2\lambda)}\\
B=\bar{h}=H_a \frac{2\lambda}d\tanh{\frac{d}{2\lambda}}$$
```

B reduces to zero when $d\gg\lambda$ , and that’s the Meissner effect

## Helmholtz energy

```
$$\begin{aligned}
F_n-F_s & =V\left(f_{n 0}-f_{s 0}\right)+\frac{V H_a^2}{8 \pi} \\
& =V\left(\frac{H_c^2}{8 \pi}\right)+V\left(\frac{H_a^2}{8 \pi}\right)
\end{aligned}$$
```

when there exists a magnetic field $H=H_a<H_c$

particularly, at the transitioning point,

```
$$\Delta f(H_c)=\frac{H_c^2}{4\pi}$$
```

similarly,

```
$$G_n-G_s=V\left(f_{n 0}-f_{s 0}\right)-\frac{V H_a^2}{8 \pi}$$
```

(obviously, at $H_c$, $G$ stays the same)

## Complex conductivity

```
$\begin{aligned}
\sigma_i&\equiv \sigma_{1i}-i\sigma_{2i}\\
\sigma_{1 i}(\omega) & =\sigma_{0 i} /\left(1+\omega^2 \tau_i^2\right) \\ \sigma_{2 i}(\omega) & =\sigma_{0 i} \omega \tau_i /\left(1+\omega^2 \tau_i^2\right)\end{aligned}$$
```

where $\sigma_{0i}\equiv n_ie^2\tau_i/m$, $i=n,s$

and as $\tau_s\rightarrow\infty$, it turns out that

```
$\begin{aligned}\sigma_1(\omega) & =\left(\pi n_s e^2 / 2 m\right) \delta(\omega)+n_n e^2 \tau_n / m \\ \sigma_2(\omega) & =n_s e^2 / m \omega\end{aligned}$$
```

## High-Frequency Dissipation

```
$$\frac{J_s}{J_n}=\frac{n_s e^2 / m \omega}{n_n e^2 \tau_n / m}=\frac{n_s}{n_n \omega \tau_n}$$
```

whereas $ n_n \sim e^{-\Delta / k T}$

and there’s dissipation power

$\rho J^2=\operatorname{Re}(1 / \sigma) J^2=\left[\sigma_1 /\left(\sigma_1^2+\sigma_2^2\right)\right] J^2 \approx\left(\sigma_1 / \sigma_2^2\right) J^2$

- the f dependence is $\omega^2$ since $\sigma_2\propto\omega^-1$
- E proportional to $\omega$
- proportional to $\sigma_1$

> only hold for frequency below the BCS energy gap

# Chapter 3: BCS 理论

## Cooper 对

> 只要相互作用是吸引的，无论多弱，电子的费米海都会对至少一个束缚对的形成变得不稳定。——Cooper

Cooper问题： 在**费米面之上**加两个电子，看看他们的势能

根据 **Bloch 定理**，这两个电子的总动量应为 $0$，从而“质心动能”为 $0$。于是相对运动波函数可写成
$$
\psi_0(\mathbf{r}_1,\mathbf{r}_2)=\sum_\mathbf{k}g_\mathbf{k}e^{i\mathbf{k}\cdot\mathbf{r}_1}e^{-i\mathbf{k}\cdot\mathbf{r}_2}
$$

成键态会降低能量，因此 Cooper 对倾向于形成成键态。

> 成键态：空间波函数对称，自旋部分反对称，即自旋单态（singlet state）。

记自旋态为 $\alpha$ 和 $\beta$，有

$$
\psi_0\left(\mathbf{r}_1-\mathbf{r}_2\right)=\left[\sum_{k>k_F} g_{\mathbf{k}} \cos \mathbf{k} \cdot\left(\mathbf{r}_1-\mathbf{r}_2\right)\right]\left(\alpha_1 \beta_2-\beta_1 \alpha_2\right)
$$


代入薛定谔方程


$$
(E-2\epsilon_{\mathbf{k}})g_{\mathbf{k}}
=\sum_{k'>k_F}V_{\mathbf{k}\mathbf{k}'}g_{\mathbf{k}'}
$$


> 这相当于一个 $K$ 维齐次线性方程组；若要存在非零解，系数行列式必须为零，由此可以确定能量 $E$。

$V_{\mathbf{k}\mathbf{k}'}$ 是相互作用矩阵元，例如电子屏蔽或声子屏蔽给出的有效相互作用；它刻画一对电子从 $(\mathbf{k}',-\mathbf{k}')$ 散射到 $(\mathbf{k},-\mathbf{k})$ 的强度。

### 近似：声子能量壳层内的常数吸引

**最重要的势能假设**：在费米面上方一个声子能量壳层内，取有效相互作用为常数吸引：
$$
V_{\mathbf{k}\mathbf{k}'}=-V,\qquad
0<\xi_{\mathbf{k}},\xi_{\mathbf{k}'}<\hbar\omega_c,
$$
壳层外取 $V_{\mathbf{k}\mathbf{k}'}=0$。这个近似抓住了 Cooper 不稳定性的核心：任意弱吸引都会让费米面附近的一对时间反演态形成束缚关联。

由齐次方程可以得到
$$
g_{\mathbf{k}}=
V\frac{\sum_{k'>k_F}g_{\mathbf{k}'}}{2\epsilon_{\mathbf{k}}-E}
\quad\Rightarrow\quad
\frac{1}{V}=\sum_{k>k_F}\left(2\epsilon_{\mathbf{k}}-E\right)^{-1}
$$
连续化为积分，其中 $N(0)$ 表示费米面附近的态密度。

$$
\frac{1}{V}=N(0) \int_{E_F}^{E_F+\hbar \omega_c} \frac{d \epsilon}{2 \epsilon-E}=\frac{1}{2} N(0) \ln \frac{2 E_F-E+2 \hbar \omega_c}{2 E_F-E}
$$

在多数常规超导体适用的弱耦合近似 $N(0)V\ll1$ 下，


$$
E\approx 2E_F-2\hbar \omega e^{-2/N(0)V}
$$


所以**费米面上的一对电子会跳到这个能量耕地的态**


$$
\psi(\mathbf{r_1}-\mathbf{r_2})\propto \sum_{k>k_F} \frac{\cos \mathbf{k} \cdot \mathbf{r}}{2 \xi_{\mathbf{k}}+E^{\prime}}
$$


> 其中 $\xi_{\mathbf{k}}=\epsilon_{\mathbf{k}}-E_F$，束缚能定义为 $E^{\prime}=2E_F-E>0$。
>
> 当 $N(0)V<1$ 时，$E^{\prime}\ll\hbar\omega_c$，因此声子能量壳层外的 $V_{\mathbf{k}\mathbf{k}'}$ 对束缚态贡献很小。

**由于球对称和自旋单态结构，Cooper 对的空间尺度通常远大于平均电子间距。**

因此，最强参与束缚态形成的是费米面上方能量范围约为 $E'$ 的电子态。

进一步，束缚对的尺度不小于 $\hbar v_F/E'\sim\hbar v_F/k_BT_C$，通常远大于平均电子间距，说明 Cooper 对在实空间中高度重叠。

> $\Delta x=\frac{\hbar}{\Delta p},\ \Delta p=\Delta E/ v$, and $\Delta E=E’$

## 吸引势的起源

参见 Solid State Physics (Ashcroft & Mermin)

以下采用高斯单位制，$\mathbf q$ 表示两电子交换的动量，$\omega$ 表示交换的角频率。

### 裸库仑相互作用

两电子之间的裸库仑势为排斥势：

$$
V_0(q)=\frac{4\pi e^2}{q^2}.
$$

### 电子屏蔽

其他导电电子会重新分布，屏蔽库仑相互作用。Thomas-Fermi 近似下，

$$
\varepsilon_e(q)=1+\frac{k_{\mathrm{TF}}^2}{q^2},
$$

其中 $k_{\mathrm{TF}}$ 是 Thomas--Fermi 屏蔽波数。

因此，电子屏蔽后的库仑排斥为

$$
V_C(q)
=
\frac{4\pi e^2}{q^2\varepsilon_e(q)}
=
\frac{4\pi e^2}{q^2+k_{\mathrm{TF}}^2}.
$$

### 裸离子的介电响应

不考虑电子屏蔽云时，裸离子的介电函数为

$$
\varepsilon_{\mathrm{ion}}^{\mathrm{bare}}(\omega)
=
1-\frac{\omega_{pi}^2}{\omega^2},
$$

其中 $\omega_{pi}$ 是离子等离子体频率。

### 被电子云包裹的离子（dressed ion）与声子屏蔽

真实晶格中，离子被电子屏蔽云包裹，形成 dressed ion。总介电函数为

$$
\varepsilon(q,\omega)
=
\varepsilon_e(q)-\frac{\omega_{pi}^2}{\omega^2}.
$$

定义电子屏蔽后的离子振动频率

$$
\omega_q^2
=
\frac{\omega_{pi}^2}{\varepsilon_e(q)}
=
\omega_{pi}^2\frac{q^2}{q^2+k_{\mathrm{TF}}^2},
$$

则

$$
\varepsilon(q,\omega)
=
\varepsilon_e(q)
\left(
1-\frac{\omega_q^2}{\omega^2}
\right).
$$

这里的 $\omega_q$ 就是纵向声子的频率。

### 两电子的完整有效势能

因此，两电子之间的完整有效相互作用为

$$
\boxed{
V_{\mathrm{eff}}(q,\omega)
=
\frac{4\pi e^2}
{q^2\left[
1+\dfrac{k_{\mathrm{TF}}^2}{q^2}
-\dfrac{\omega_{pi}^2}{\omega^2}
\right]}
}
$$

等价地，

$$
\boxed{
V_{\mathrm{eff}}(q,\omega)
=
\frac{4\pi e^2}{q^2+k_{\mathrm{TF}}^2}
\frac{\omega^2}{\omega^2-\omega_q^2}
}
$$

当

$$
|\omega|<\omega_q
$$

时，$\omega^2-\omega_q^2<0$，所以

$$
V_{\mathrm{ph}}(q,\omega)<0.
$$

因此声子介导部分是吸引的；当它超过剩余的库仑排斥时，两电子之间便产生净有效吸引。

## BCS基态

创造多个电子对，我们可以这样写：$\left|\psi_0\right\rangle=\sum_{k>k_F} g_{\mathbf{k}} c_{\mathbf{k} \uparrow}^* c_{-\mathbf{k} \downarrow}^*|F\rangle$， $c^*$是创造算符。

对于N/2个pair，我们定义
$$
\left|\psi_N\right\rangle=\sum g\left(\mathbf{k}_i, \ldots, \mathbf{k}_l\right) c_{\mathbf{k}_i \uparrow}^* c_{-\mathbf{k}_i \downarrow}^* \cdots c_{\mathbf{k}_l \uparrow}^* c^* _{\mathbf{k}_l\downarrow}\left|\phi_0\right\rangle
$$


需要满足的规则：费米子正则反交换关系
$$
\begin{gathered}
{\left[c_{\mathbf{k} \sigma}, c_{\mathbf{k}^{\prime} \sigma^{\prime}}^*\right]_{+} \equiv c_{\mathbf{k} \sigma} c_{\mathbf{k}^{\prime} \sigma^{\prime}}^*+c_{\mathbf{k}^{\prime} \sigma^{\prime}}^* c_{\mathbf{k} \sigma}=\delta_{\mathbf{k} \mathbf{k}^{\prime}} \delta_{\sigma \sigma^{\prime}}} \\
{\left[c_{\mathbf{k} \sigma}, c_{\mathbf{k}^{\prime} \sigma^{\prime}}\right]_{+}=\left[c_{\mathbf{k} \sigma^{\prime}}^*, c_{\mathbf{k}^{\prime} \sigma^{\prime}}^*\right]_{+}=0}
\end{gathered}
$$
定义数算符 $n_{\mathbf{k} \sigma}=c_{\mathbf{k} \sigma}^* c_{\mathbf{k} \sigma}$

再看$\ket{\psi_N}$，一共有$N/2$个pairs，$M$个可选的$k$值，可能的选法
$$
\binom{M}{N / 2}=\frac{M!}{[M-(N / 2)]!(N / 2)!}
$$
可能性非常多，需要给每一种配置指定一个独立的系数，系数难以列举。

故在此采用类似计算“自然数所有因子和”的思路，将BCS波函数化为
$$
\left|\psi_G\right\rangle=\prod_{\mathbf{k}=\mathbf{k}_{1, \ldots,} \mathbf{k}_M}\left(u_{\mathbf{k}}+v_{\mathbf{k}} c_{\mathbf{k} \uparrow}^* c_{-\mathbf{k} \downarrow}^*\right)\left|\phi_0\right\rangle
$$

这类似于一个巨正则系综，他的粒子数（Cooper pair数的两倍）在一个特定的N有一个尖锐的峰值
$$
\bar{N}=\sum_{\mathbf{k}} 2\left|v_{\mathbf{k}}\right|^2
$$

>具体推导：
>$$
>\begin{aligned}
>\bar{N}&=\left\langle\psi_G\right| \sum_{\mathbf{k}}\left(n_{\mathbf{k} \uparrow}+ n_{-\mathbf{k} \downarrow}\right)\left|\psi_G\right\rangle\\\\
>&=\begin{aligned}
>& 2 \sum_{\mathbf{k}}\left\langle\phi_0\right|\left(u_{\mathbf{k}}^*+v_{\mathbf{k}}^* c_{-\mathbf{k} \downarrow} c_{\mathbf{k} \uparrow}\right) c_{\mathbf{k} \uparrow}^* c_{\mathbf{k} \uparrow}\left(u_{\mathbf{k}}+v_{\mathbf{k}} c_{\mathbf{k} \uparrow}^* c_{-\mathbf{k} \downarrow}^*\right) \\
>& \quad \times \prod_{\mathbf{l} \neq \mathbf{k}}\left(u_{\mathbf{l}}^*+v_\mathbf{l}^* c_{-\mathbf{l} \downarrow} c_{\mathbf{l}\uparrow}\right)\left(u_\mathbf{l}+v_\mathbf{l} c_{\mathbf{l}\uparrow}^* c_{-\mathbf{l} \downarrow}^*\right)\left|\phi_0\right\rangle
>\end{aligned}
>\end{aligned}
>$$
>现在来拆解一下。首先真空态是由各种子空间张成的：（超导计算，需要注意不同子空间的~~变换~~算符~~可交换~~对易）
>$$
>\ket{\phi_0}=\ket{\mathrm{0} _k}\ket{\mathrm{0} _l}\ket{\mathrm{0} _m}\cdots
>$$
>
>$l$的升降算符只处理$\ket{0_l}$子空间的变换，连乘项结果为 $1$ 。于是通过计算可以得到该估计结果。

$$
\left\langle(N-\bar{N})^2\right\rangle=4 \sum_{\mathbf{k}} u_{\mathbf{k}}^2 v_{\mathbf{k}}^2
$$

是粒子数的涨落。$0\text{ K}$ 时粒子服从费米球分布，球内$u=0,\ v=1$，球外相反，此时不会有粒子数（Cooper对数）不确定性。

经过综合估计（见教材），粒子相对涨落在1e-13左右。

### 序参量

$$
\left|\psi_{\varphi}\right\rangle=\prod_{\mathbf{k}}\left(\left|u_k\right|+\left|v_k\right| e^{i \varphi} c_{\mathbf{k} \uparrow}^* c_{-\mathbf{k} \downarrow}^*\right)\left|\phi_0\right\rangle
$$

此时，若按粒子数展开，可以得到
$$
\left|\psi_G\right\rangle=\sum_N \lambda_N\left|\psi_N\right\rangle
$$
而这个时候，每个特定粒子数 ket 相当于傅里叶变换。
$$
\left|\psi_N\right\rangle=\int_0^{2 \pi} d \varphi e^{-i N \varphi / 2} \prod_{\mathbf{k}}\left(\left|u_{\mathbf{k}}\right|+\left|v_{\mathbf{k}}\right| e^{i \varphi} c_{\mathbf{k} \uparrow}^* c_{-\mathbf{k} \downarrow}^*\right)\left|\phi_0\right\rangle=\int_0^{2 \pi} d \varphi e^{-i N \varphi / 2}\left|\psi_{\varphi}\right\rangle
$$

## 计算u与v

$$
\mathscr{H}=\sum_{k \sigma} \epsilon_k n_{k \sigma}+\sum_{k l} V_{\mathbf{k l}}c_{\mathbf{k} \uparrow}^* c_{-\mathbf{k} \downarrow}^* c_{-\mathbf{l} \downarrow} c_{\mathbf{l} \uparrow}
$$

这是哈密顿量。第二项：只有存在 $l$ 库珀对，作用湮灭算符后波函数才不为 $0$.

现在固定化学势，不固定粒子数，让热力学巨势取极值 ($-TS$ 项因为温度低而省略)
$$
\delta\left\langle\psi_G\right| \mathscr{H}-\mu N_{\mathrm{op}}\left|\psi_G\right\rangle=0
$$
于是
$$
\delta\left\langle\psi_G\right| \sum_{\mathbf{k} \sigma} \xi_{\mathbf{k}} n_{\mathbf{k} \sigma}+\sum_{\mathbf{k} \mathbf{l}} V_{\mathbf{k} 1} c_{\mathbf{k} \uparrow}^* c_{-\mathbf{k} \downarrow}^* c_{-\mathbf{l} \downarrow} c_{\mathbf{l} \uparrow}\left|\psi_G\right\rangle=0
$$
此处 $\xi_{\mathbf{k}}=\epsilon_{\mathbf{k}}-\mu$ 。先计算需要变分的巨热力学势期望为
$$
2 \sum_k \xi_k\left|v_k\right|^2+\sum_{\mathbf{k}\mathbf{l}} V_{\mathbf{k}\mathbf{l}} u_{\mathbf{k}} v_{\mathbf{k}}^* u_{\mathbf{l}}^* v_{\mathbf{l}}
$$

> Alternatively, it can be seen by inspection by noting that the term $V_{\mathbf{k} \mathbf{l}}$ scatters from a state with $(\mathbf{l} \uparrow,-\mathbf{l} \downarrow)$ to one with $(\mathbf{k} \uparrow,-\mathbf{k} \downarrow)$. This requires the initial state to have the $\mathbf{l}$ pair occupied and the $\mathbf{k}$ pair empty and vice versa for the final state. The probability amplitude for such an initial state is $u_{\mathbf{k}} v_{\mathbf{l}}$ and for the final state it is $v_{\mathbf{k}}^* u_{\mathbf{l}}^*$, thus leading to the preceding result.	-*Tinkham p.54*

然后，为了方便，我们取$u_k,\ v_k$为实数（就算有序参量相因子也会消掉），再由概率归一化设 $u_{\mathbf{k}}=\sin \theta_{\mathbf{k}} \quad \text { and } \quad v_{\mathbf{k}}=\cos \theta_{\mathbf{k}}$

化为
$$
\sum_{\mathbf{k}} \xi_{\mathbf{k}}\left(1+\cos 2 \theta_{\mathbf{k}}\right)+\frac{1}{4} \sum_{\mathbf{k} \mathbf{l}} V_{\mathbf{k} \mathbf{l}} \sin 2 \theta_{\mathbf{k}} \sin 2 \theta_{\mathbf{l}}
$$
对 $\theta_k$ 变分：
$$
\frac{\partial}{\partial \theta_{\mathbf{k}}}\left\langle\psi_G\right| \mathscr{H}-\mu N_{\mathrm{op}}\left|\psi_G\right\rangle=0=-2 \xi_{\mathbf{k}} \sin 2 \theta_{\mathbf{k}}+\sum_{\mathbf{l}} V_{\mathbf{k} \mathbf{l}} \cos 2 \theta_{\mathbf{k}} \sin 2 \theta_{\mathbf{l}}
$$
于是
$$
\tan 2 \theta_{\mathbf{k}}=\frac{\sum_{\mathbf{l}} V_{\mathbf{kl}} \sin 2 \theta_\mathbf{l}}{2 \xi_{\mathbf{k}}}
$$
此时的思路是，n个方程n个未知数，似乎可以求解。于是定义$\Delta_\mathrm{k} =-\frac12\sum_{\mathbf{l}} V_{\mathbf{kl}}\sin 2 \theta_\mathbf{l}$，那么“三角形斜边”就是$E_{\mathbf{k}}=\left(\Delta_{\mathbf{k}}^2+\xi_{\mathbf{k}}^2\right)^{1 / 2}$，这时候可以得到
$$
\begin{aligned}
&\sin 2 \theta_{\mathbf{k}}=\frac{\Delta_{\mathbf{k}}}{E_{\mathbf{k}}}\\
&\cos 2 \theta_{\mathbf{k}}=-\frac{\xi_{\mathbf{k}}}{E_{\mathbf{k}}}
\end{aligned}
$$
回代得到
$$
\Delta_{\mathbf{k}}=-\frac{1}{2} \sum_{\mathbf{I}} \frac{\Delta_{\mathbf{l}}}{E_{\mathbf{l}}} V_{\mathbf{k l}}=-\frac{1}{2} \sum_1 \frac{\Delta_{\mathbf{l}}}{\left(\Delta_{\mathbf{l}}^2+\xi_{\mathbf{l}}^2\right)^{1 / 2}} V_{\mathbf{k l}}
$$
同时，采用声子屏蔽中的势能：在费米球表面厚度为$\hbar\omega_c$的壳层中为$-V$，否则为 $0$，于是得到：
$$
\Delta_{\mathbf{k}}= \begin{cases}\hbar \omega_c/\sinh (1 / N(0) V) \approx 2 \hbar \omega_c e^{-1 / N(0) V} & \text { for }\left|\xi_{\mathbf{k}}\right|<\hbar \omega_c \\ 0 & \text { for }\left|\xi_{\mathbf{k}}\right|>\hbar \omega_c\end{cases}
$$
（壳层内记作$\Delta$）
$$
v_{\mathbf{k}}^2=\frac{1}{2}\left[1-\frac{\xi_{\mathbf{k}}}{\left(\Delta^2+\xi_{\mathbf{k}}^2\right)^{1 / 2}}\right]
$$
### $v_k^2$ 分布与 $T_c$ 费米分布的对比

这里最容易混淆的是：BCS 的 $v_k^2$ 不是把费米面附近“挖空”，而是在 $T=0$ 的超导基态里，把每个 $(\mathbf{k}\uparrow,-\mathbf{k}\downarrow)$ 子空间写成
$$
|G_k\rangle=u_k|0\rangle_k+v_k|P\rangle_k ,
$$
其中 $v_k^2$ 是该动量对被占据的概率。它与正常态的 Fermi-Dirac 分布
$$
f(\xi,T)=\frac{1}{e^{\xi/k_BT}+1}
$$
外形都在费米面附近变宽，但物理含义不同：$f(\xi,T_c)$ 是热激发造成的单粒子占据平滑；$v_k^2$ 是配对基态的量子相干混合。

在 $T=0$ 且 $\Delta\neq0$ 时，
$$
v_k^2=\frac12\left(1-\frac{\xi_k}{\sqrt{\xi_k^2+\Delta^2}}\right),\qquad
u_k^2=1-v_k^2.
$$
当 $\Delta\to0$，它退化为正常费米球的阶跃分布；当 $\Delta$ 增大，只有 $|\xi_k|\lesssim\Delta$ 的能量层显著参与配对混合。

分布概率如下：


需要注意三点：

1. 一个是$T_c$，一个是$T=0$！

2. 早期有人认为超导转变就是电子占据数发生巨大变化，比如费米面附近空出一块或者重新分布。然而实际上，能隙不是k分布上空出一块。具体是什么，见接下来的介绍。
3. 只有费米面附近宽度大约 $\Delta$ 的能量层显著参与配对混合。

现在，我们重新考察 Cooper 对的能量
$$
\left\langle\psi_G\right| \mathscr{H}-\mu N_{\text {op }}\left|\psi_G\right\rangle=2 \sum_k \xi_k\left|v_k\right|^2+\sum_{\mathbf{k}\mathbf{l}} V_{\mathbf{k}\mathbf{l}} u_{\mathbf{k}} v_{\mathbf{k}}^* u_{\mathbf{l}}^* v_{\mathbf{l}}=\sum_{\mathbf{k}}\left(\xi_{\mathbf{k}}-\frac{\xi_{\mathbf{k}}^2}{E_{\mathbf{k}}}\right)-\frac{\Delta^2}{V}
$$
对于正常态，费米球内的电子，$\xi_k$ 是负数，故
$$
\left\langle\psi_n\right| \mathscr{H}-\mu N_{\mathrm{op}}\left|\psi_n\right\rangle=\sum_{|\mathbf{k}|<k_F} 2 \xi_{\mathbf{k}}
$$
正常态和超导态的能量差（费米面上之差+费米面下之差）（考虑到就在球附近反转，不用考虑态密度变化）
$$
\begin{aligned}
\langle E\rangle_s-\langle E\rangle_n & =\sum_{|\mathbf{k}|>k_F}\left(\xi_{\mathbf{k}}-\frac{\xi_{\mathbf{k}}^2}{E_{\mathbf{k}}}\right)+\sum_{|\mathbf{k}|<k_F}\left(-\xi_{\mathbf{k}}-\frac{\xi_{\mathbf{k}}^2}{E_{\mathbf{k}}}\right)-\frac{\Delta^2}{V} \\
& =2 \sum_{|\mathbf{k}|>k_F}\left(\xi_{\mathbf{k}}-\frac{\xi_{\mathbf{k}}^2}{E_{\mathbf{k}}}\right)-\frac{\Delta^2}{V}\\
& = \left[\frac{\Delta^2}{V}-\frac{1}{2} N(0) \Delta^2\right]-\frac{\Delta^2}{V}\\
& = -\frac12N(0)\Delta^2
\end{aligned}
$$
这个值应当等于$H_c^2(0)/8\pi$。

## 超导能隙、Bogoliubov 准粒子

### 平均场近似、对角化、准粒子激发

> In this section, we outline another approach, closer to the more sophisticated modern methods, which is well suited to handle excitations. - Tinkham p.59

$$
c_{-\mathbf{k} \downarrow} c_{\mathbf{k} \uparrow}=b_{\mathbf{k}}+\delta_\mathbf{k}
$$

粒子数很多，b是算符期望，涨落是小量。

把这个代入$$\mathscr{H} = \sum_{\mathbf{k} \sigma} \xi_{\mathbf{k}} n_{\mathbf{k} \sigma}+\sum_{\mathbf{k} \mathbf{l}} V_{\mathbf{k} 1} c_{\mathbf{k} \uparrow}^* c_{-\mathbf{k} \downarrow}^* c_{-\mathbf{l} \downarrow} c_{\mathbf{l} \uparrow} $$

得到
$$
\mathscr{H}_M=\sum_{\mathbf{k} \sigma} \xi_{\mathbf{k}} c_{\mathbf{k} \sigma}^* c_{\mathbf{k} \sigma}+\sum_{\mathbf{k} \mathbf{l}} V_{\mathbf{k l}}\left(c_{\mathbf{k} \uparrow}^* c_{-\mathbf{k} \downarrow}^* b_1+b_{\mathbf{k}}^* c_{-1 \downarrow} c_{\mathbf{l} \uparrow}-b_{\mathbf{k}}^* b_1\right)
$$
称为**模型哈密顿量** (model hamiltonian)。此时粒子数不再守恒（ket被hamiltonian操作后，分裂出n、n+2和n-2。）

这称为**平均场近似**，意在消除耦合项，取其他所有粒子测量量的期望值。

下一步：提取系数
$$
\Delta_k=-\sum_1 V_{k l} b_1
$$
（和上一节的定义十分类似）此时
$$
\mathscr{H}_M=\sum_{\mathbf{k} \sigma} \xi_{\mathbf{k}} c_{\mathbf{k} \sigma}^* c_{\mathbf{k} \sigma}-\sum_{\mathbf{k}}\left(\Delta_{\mathbf{k}} c_{\mathbf{k} \uparrow}^* c_{-\mathbf{k} \downarrow}^*+\Delta_{\mathbf{k}}^* c_{-\mathbf{k} \downarrow} c_{\mathbf{k} \uparrow}-\Delta_{\mathbf{k}} b_{\mathbf{k}}^*\right)
$$
这是一个关于$c_k$的二次型。可以这样对角化（设算符进行了下面这样的酉变换，后续会说明下面u、v的意义和前文相同）
$$
\begin{aligned}
c_{\mathbf{k} \uparrow} & =u_{\mathbf{k}}^* \gamma_{\mathbf{k} 0}+v_{\mathbf{k}} \gamma_{\mathbf{k} 1}^* \\
c_{-\mathbf{k} \downarrow}^* & =-v_{\mathbf{k}}^* \gamma_{\mathbf{k} 0}+u_{\mathbf{k}} \gamma_{\mathbf{k} 1}^*
\end{aligned}
$$
于是
$$
\begin{aligned}
& \mathscr{H}_M=\sum_{\mathbf{k}} \xi_{\mathbf{k}}\left[\left(\left|u_{\mathbf{k}}^2\right|-\left|v_{\mathbf{k}}\right|^2\right)\left(\gamma_{\mathbf{k} 0}^* \gamma_{\mathbf{k} 0}+\gamma_{\mathbf{k} 1}^* \gamma_{\mathbf{k} 1}\right)+2\left|v_{\mathbf{k}}\right|^2+2 u_{\mathbf{k}}^* v_{\mathbf{k}}^* \gamma_{\mathbf{k} 1} \gamma_{\mathbf{k} 0}\right. \\
& \left.\quad+2 u_{\mathbf{k}} v_{\mathbf{k}} \gamma_{\mathbf{k} 0}^* \gamma_{\mathbf{k} 1}^*\right]+\sum_{\mathbf{k}}\left[\left(\Delta_{\mathbf{k}} u_{\mathbf{k}} v_{\mathbf{k}}^*+\Delta_{\mathbf{k}}^* u_{\mathbf{k}}^* v_{\mathbf{k}}\right)\left(\gamma_{\mathbf{k} 0}^* \gamma_{\mathbf{k} 0}+\gamma_{\mathbf{k} 1}^* \gamma_{\mathbf{k} 1}-1\right)\right. \\
& \left.\quad+\left(\Delta_{\mathbf{k}} v_{\mathbf{k}}^{* 2}-\Delta_{\mathbf{k}}^* u_{\mathbf{k}}^{* 2}\right) \gamma_{\mathbf{k} 1} \gamma_{\mathbf{k} 0}+\left(\Delta_{\mathbf{k}}^* v_{\mathbf{k}}^2-\Delta_{\mathbf{k}} u_{\mathbf{k}}^2\right) \gamma_{\mathbf{k} 0}^* \gamma_{\mathbf{k} 1}^*+\Delta_{\mathbf{k}} b_{\mathbf{k}}^*\right]
\end{aligned}
$$
我们需要消掉不想要的交叉项$\gamma_{\mathbf{k} 1} \gamma_{\mathbf{k} 0}$、$\gamma_{\mathbf{k} 1}^* \gamma_{\mathbf{k} 0}^*$，系数应当满足
$$
2 \xi_{\mathbf{k}} u_{\mathbf{k}} v_{\mathbf{k}}+\Delta_{\mathbf{k}}^* v_{\mathbf{k}}^2-\Delta_{\mathbf{k}} u_{\mathbf{k}}^2=0
$$
两边同乘$\Delta_\mathbf{k}^*/u_\mathbf{k}^2$解得
$$
\frac{\Delta_{\mathbf{k}}^* v_{\mathbf{k}}}{u_{\mathbf{k}}}=\left(\xi_{\mathbf{k}}^2+\left|\Delta_{\mathbf{k}}\right|^2\right)^{1 / 2}-\xi_{\mathbf{k}} \equiv E_{\mathbf{k}}-\xi_{\mathbf{k}}
$$
于是可以得到u、v比值。再结合之前的归一化关系，即可解出u、v。
$$
\left|v_{\mathbf{k}}\right|^2=1-\left|u_{\mathbf{k}}\right|^2=\frac{1}{2}\left(1-\frac{\xi_{\mathbf{k}}}{E_{\mathbf{k}}}\right)
$$
接下来说明$u, v$就是概率幅

我们已经知道
$$
\mathscr{H}_M \text { 被对角化后 } \Rightarrow \mathscr{H}_M=E_0+\sum_{\mathbf{k}} E_{\mathbf{k}}\left(\gamma_{\mathbf{k} 0}^{\dagger} \gamma_{\mathbf{k} 0}+\gamma_{\mathbf{k} 1}^{\dagger} \gamma_{\mathbf{k} 1}\right)
$$
因此准粒子激发数应当为0
$$
\gamma_{\mathbf{k} 0}^{\dagger} \gamma_{\mathbf{k} 0}=0, \quad \gamma_{\mathbf{k} 1}^{\dagger} \gamma_{\mathbf{k} 1}=0
$$
于是
$$
\gamma_{\mathbf{k} 0}\left|G_{\mathbf{k}}\right\rangle=0
$$
可以推出
$$
\left|G_{\mathbf{k}}\right\rangle=u_{\mathbf{k}}|0\rangle_{\mathbf{k}}+v_{\mathbf{k}}|P\rangle_{\mathbf{k}}=\left(u_{\mathbf{k}}+v_{\mathbf{k}} c_{\mathbf{k} \uparrow}^* c_{-\mathbf{k} \downarrow}^*\right)\ket{0}_\mathbf{k}
$$

### 准粒子激发能与超导能隙

现在我们来看一下对角化后的哈密顿量（准粒子的产生/湮灭算符作为新的正则变量）
$$
\mathscr{H}_M=\sum_{\mathbf{k}}\left(\xi_{\mathbf{k}}-E_{\mathbf{k}}+\Delta_{\mathbf{k}} b_{\mathbf{k}}^*\right)+\sum_{\mathbf{k}} E_{\mathbf{k}}\left(\gamma_{\mathbf{k} 0}^* \gamma_{\mathbf{k} 0}+\gamma_{\mathbf{k} 1}^* \gamma_{\mathbf{k} 1}\right)
$$
​	（$E_k:=\sqrt{\Delta_k^2+\xi_k^2}$）

先来看常数项

+ 正常态，$\langle b\rangle,\Delta_k$都为0，正常态的常数项为$0$

+ 超导态，大概不为0了。这个值就是上一节算出来的凝聚能$\langle E\rangle_s-\langle E\rangle_n$

剩下的就是**Bogoliubons**激发。从$\gamma$的定义可以看出它混合了单电子和单“空穴“（不是半导体意义上的，只是说电子不配对）

$E_k:=\sqrt{\Delta_k^2+\xi_k^2}$是准粒子的能量。$\xi$是相对费米面的能量，可以看出准粒子能量最低为$\Delta$，这就是**超导能隙**

能隙的表达式
$$
\Delta_{\mathbf{k}}=-\sum_1 V_{\mathbf{k l}}\left\langle c_{-1 \downarrow} c_{1 \uparrow}\right\rangle=-\sum_1 V_{\mathbf{k l}} u_1^* v_1\left\langle 1-\gamma_{10}^* \gamma_{10}-\gamma_{11}^* \gamma_{11}\right\rangle
$$
