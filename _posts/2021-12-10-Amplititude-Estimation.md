---
title: Quantum Amplititude Estimation
tags: QuantumComputing
mathjax: true
author: Si Yuan JIN
article_header:
  type: overlay
  theme: dark
  background_color: '#123'
  background_image: false
---

## 1. Introduction
Given a set $X=0,1, \ldots N-1$ and a boolean function $\chi: X \longrightarrow 0,1$, we want to find a good
element, i.e. an $x \in X$ such that $\chi(x)=1$.


If there is only one good element, a classical search algorithm has an average complexity of
$\sum_{i=1}^{N} i \times \frac{1}{N}=\frac{N+1}{2}$.
Quantum approach: given an equal superposition of states $\vert \Psi\rangle=\frac{1}{\sqrt{N}} \sum_{x=0}^{N-1}\vert x\rangle$, if we measure $\vert \Psi\rangle$, we
get the correct $\vert x\rangle$ with probability $1 / N$ : so, the average number of iterations is $N$.


Grover's algorithm: we can transform $\vert \Psi\rangle$ in $\mathcal{O}(\sqrt{N})$ iterations so that performing a measurement on
it gives the correct $\vert x\rangle$ with high probability.


Amplitude amplification is a generalization of Grover's algorithm where the input is given as an
arbitrary superposition of elements of $X:\vert \Psi\rangle=\mathcal{A}\vert 0\rangle=\sum_{x \in X} \alpha_{x}\vert x\rangle$ and more than one element may
be good elements.


We can write: $\vert \Psi\rangle=\sum_{x: \chi(x)=1} \alpha_{x}\vert x\rangle+\sum_{x: \chi(x)=0} \alpha_{x}\vert x\rangle=\left\vert \Psi_{1}\right\rangle+\left\vert \Psi_{0}\right\rangle$ with $a=\left\langle\Psi_{1} \mid \Psi_{1}\right\rangle \ll 1$ is
the probability that measuring $\vert \Psi\rangle$ produces a good state.


The standard approach would thus need to iterate $1 / a$ times to find a good state. Amplitude
amplification enables a quadratic speed-up in $\mathcal{O}(1 / \sqrt{a})$.

## 2. Rview of Grover Search
The amplitude amplification operator
- $\vert \Psi\rangle=\mathcal{A}\vert 0\rangle=\left\vert \Psi_{1}\right\rangle+\left\vert \Psi_{0}\right\rangle .$
- $S_{\chi}$ is the oracle function: $\vert x\rangle \longmapsto\left\{\begin{aligned}-\vert x\rangle & \text { if } \chi(x)=1 \\\vert x\rangle & \text { otherwise } \end{aligned}\right.$

$$
S_{\chi}=\frac{2}{1-a}\left\vert \Psi_{0}\right\rangle\left\langle\Psi_{0}\right\vert -I
$$

$$S_{0}=I-2\vert 0\rangle\langle 0\vert  .$$

$$
Q=-\mathcal{A} S_{0} \mathcal{A}^{\dagger} S_{\chi}
$$
In this equation, $\mathcal{A}$ helps to transfer $\vert 0 \rangle$ to state $\vert \Psi_{0} \rangle$.

- The amplitude amplification operator is: $=\left(\mathcal{A}(2\vert 0\rangle\langle 0\vert -I) \mathcal{A}^{\dagger}\right) \times S_{\chi}$

$$
=(2\vert \Psi\rangle\langle\Psi\vert -I)\left(\frac{2}{1-a}\left\vert \Psi_{0}\right\rangle\left\langle\Psi_{0}\right\vert -I\right)
$$


![Image](https://jsybruce.github.io/Homepage/assets/images/posts/AE/Visualization.jpg "Image@512x512"){:width="512px"}

Now we try to infer
$$
\begin{aligned}
Q\left\vert \Psi_{1}\right\rangle &=U_{\Psi} U_{\Psi_{0}}\left\vert \Psi_{1}\right\rangle=-U_{\Psi}\left\vert \Psi_{1}\right\rangle=(I-2\vert \Psi\rangle\langle\Psi\vert )\left\vert \Psi_{1}\right\rangle \\
&=\left\vert \Psi_{1}\right\rangle-2 a\vert \Psi\rangle=(1-2 a)\left\vert \Psi_{1}\right\rangle-2 a\left\vert \Psi_{0}\right\rangle \\
Q\left\vert \Psi_{0}\right\rangle &=U_{\Psi}\left\vert \Psi_{0}\right\rangle=(2\vert \Psi\rangle\langle\Psi\vert -I)\left\vert \Psi_{0}\right\rangle \\
&=2(1-a)\vert \Psi\rangle-\left\vert \Psi_{0}\right\rangle=2(1-a)\left\vert \Psi_{1}\right\rangle+(1-2 a)\left\vert \Psi_{0}\right\rangle
\end{aligned}
$$
Using $\sin ^{2}\left(\theta_{a}\right)=a$ and $\cos ^{2}\left(\theta_{a}\right)=1-a$, we get:
$$
\begin{aligned}
Q \frac{\left\vert \Psi_{1}\right\rangle}{\sqrt{a}} &=(1-2 a) \frac{\left\vert \Psi_{1}\right\rangle}{\sqrt{a}}-2 \sqrt{a(1-a)} \frac{\left\vert \Psi_{0}\right\rangle}{\sqrt{1-a}} \\
&=\left(1-2 \sin ^{2}\left(\theta_{a}\right)\right) \frac{\left\vert \Psi_{1}\right\rangle}{\sqrt{a}}-2 \cos \left(\theta_{a}\right) \sin \left(\theta_{a}\right) \frac{\left\vert \Psi_{0}\right\rangle}{\sqrt{1-a}} \\
&=\cos \left(2 \theta_{a}\right) \frac{\left\vert \Psi_{1}\right\rangle}{\sqrt{a}}-\sin \left(2 \theta_{a}\right) \frac{\left\vert \Psi_{0}\right\rangle}{\sqrt{1-a}} \\
Q \frac{\left\vert \Psi_{0}\right\rangle}{\sqrt{1-a}} &=\sin \left(2 \theta_{a}\right) \frac{\left\vert \Psi_{1}\right\rangle}{\sqrt{a}}+\cos \left(2 \theta_{a}\right) \frac{\left\vert \Psi_{0}\right\rangle}{\sqrt{1-a}}
\end{aligned}
$$

Thus, $Q$ is a rotation matrix in the basis $\frac{1}{\sqrt{a}}\left\vert \Psi_{1}\right\rangle, \frac{1}{\sqrt{1-a}}\left\vert \Psi_{0}\right\rangle$ :

$$
Q=\left(\begin{array}{cc}
\cos 2 \theta_{a} & \sin 2 \theta_{a} \\
-\sin 2 \theta_{a} & \cos 2 \theta_{a}
\end{array}\right)
$$

It has eigenvalues $e^{2 i \theta_{a}}, e^{-2 i \theta_{a}}$ with corresponding eigenvectors $\frac{1}{2}(1 i), \frac{1}{2}(1-i)$, noted $\left\vert \Psi_{+}\right\rangle$and $\left\vert \Psi_{-}\right\rangle$.

We can now write $\vert \Psi\rangle$ in the $Q$-eigenvector basis:
$\vert \Psi\rangle=\frac{-i}{2}\left(e^{i \theta_{a}}\left\vert \Psi_{+}\right\rangle-e^{-i \theta_{a}}\left\vert \Psi_{-}\right\rangle\right)$and it follows that:
$$
Q^{j}\vert \Psi\rangle=\frac{-i}{2}\left(e^{(2 j+1) i \theta_{a}}\left\vert \Psi_{+}\right\rangle-e^{-(2 j+1) i \theta_{a}}\left\vert \Psi_{-}\right\rangle\right)
$$

By writing it back in the original $\frac{1}{\sqrt{a}}\left\vert \Psi_{1}\right\rangle, \frac{1}{\sqrt{1-a}}\left\vert \Psi_{0}\right\rangle$ basis:
$$

Q^{j}\vert \Psi\rangle=\sin \left((2 j+1) \theta_{a}\right) \frac{1}{\sqrt{a}}\left\vert \Psi_{1}\right\rangle+\cos \left((2 j+1) \theta_{a}\right) \frac{1}{\sqrt{1-a}}\left\vert \Psi_{0}\right\rangle
$$

After $m$ applications of the operator $Q$, measuring the state $\vert \Psi\rangle$ produces a good state with probability equal to $\sin ^{2}\left((2 m+1) \theta_{a}\right)$.

$\sin ^{2}\left((2 x+1) \theta_{a}\right)$ is maximized for $x=\frac{\pi}{4 \theta}-\frac{1}{2} .$

Thus the probability is maximized for $m=\left\lfloor\pi /\left(4 \theta_{a}\right)\right\rfloor$ (when the value of $a$ is known).

We can show that $\sin ^{2}\left((2 m+1) \theta_{a}\right) \geq 1-a$.


Complexity of the algorithm
- We use $2 m+1$ applications of $\mathcal{A}$ and $\mathcal{A}^{\dagger}$.
- Since $\theta_{a} \approx \sin \left(\theta_{a}\right)=\sqrt{a}$, we get:
$$
\begin{aligned}
2 m+1 &=2\left\lfloor\pi /\left(4 \theta_{a}\right)\right\rfloor+1 \\
& \approx 2\lfloor\pi /(4 \sqrt{a})\rfloor+1 \\
&=\mathcal{O}\left(\frac{1}{\sqrt{a}}\right)
\end{aligned}
$$
- And the success probability is $1-a \approx 1$.

From above conclusion, we can find that $\theta_{a}$ should be small enough to get the approximation $\theta_{a} \approx \sin \left(\theta_{a}\right)=\sqrt{a}$.


## 3. Overall Circuit

Then if we do not know $\alpha$ in the first place, how can we find it?

![Image](https://jsybruce.github.io/Homepage/assets/images/posts/AE/AECircuit.jpg "Image@512x512"){:width="512px"}

$$\left(F_{M}^{-1} \otimes I\right)\left(\Lambda_{M}(Q)\right)\left(F_{M} \otimes I\right) \text { applied on the state }\vert 0\rangle \otimes \mathcal{A}\vert 0\rangle
$$


### Proof of correctness

The quantum circuit corresponds to the unitary transformation $\left(F_{M}^{-1} \otimes I\right)\left(\Lambda_{M}(Q)\right)\left(F_{M} \otimes I\right)$ applied on the state $\vert 0\rangle \otimes \mathcal{A}\vert 0\rangle$, with

$$
\mathcal{A}\vert 0\rangle=-\frac{i}{\sqrt{2}}\left(e^{i \theta_{a}}\left\vert \Psi_{+}\right\rangle-e^{-i \theta_{a}}\left\vert \Psi_{-}\right\rangle\right)
$$

By applying $F_{M} \otimes I$ :

$$
\frac{1}{\sqrt{2 M}} \sum_{j=0}^{M-1}\vert j\rangle \otimes\left(e^{i \theta_{a}}\left\vert \Psi_{+}\right\rangle-e^{-i \theta_{a}}\left\vert \Psi_{-}\right\rangle\right)
$$

After applying $\Lambda_{M}(Q)$ :

$$
\frac{e^{i \theta_{a}}}{\sqrt{2}}\left\vert S_{M}\left(\theta_{a} / \pi\right)\right\rangle \otimes\left\vert \Psi_{+}\right\rangle-\frac{e^{-i \theta_{a}}}{\sqrt{2}}\left\vert S_{M}\left(1-\theta_{a} / \pi\right)\right\rangle \otimes\left\vert \Psi_{-}\right\rangle
$$

- Finally, after $F_{M}^{-1} \otimes I$, we have:
$$
\frac{e^{i \theta_{a}}}{\sqrt{2}} F_{M}^{-1}\left\vert S_{M}\left(\theta_{a} / \pi\right)\right\rangle \otimes\left\vert \Psi_{+}\right\rangle-\frac{e^{-i \theta_{a}}}{\sqrt{2}} F_{M}^{-1}\left\vert S_{M}\left(1-\theta_{a} / \pi\right)\right\rangle \otimes\left\vert \Psi_{-}\right\rangle
$$

- By tracing out the second register in the eigenvector basis $\left\vert \Psi_{+}\right\rangle,\left\vert \Psi_{-}\right\rangle$, we obtain a $\frac{1}{2}-\frac{1}{2}$ mixture of $F_{M}^{-1}\left\vert S_{M}\left(\theta_{a} / \pi\right)\right\rangle$ and $F_{M}^{-1}\left\vert S_{M}\left(1-\theta_{a} / \pi\right)\right\rangle .$
- By symmetry (since $\sin ^{2}\left(\pi \frac{y}{M}\right)=\sin ^{2}\left(\pi\left(1-\frac{y}{M}\right)\right)$ ), we can assume the measured $\vert y\rangle$ is the result of measuring $F_{M}^{-1}\left\vert S_{M}\left(\theta_{a} / \pi\right)\right\rangle$.
- We thus have $\tilde{\theta}_{a}=\pi \frac{y}{M}$ is a good estimate of $\theta_{a}$ (see next slide).


Bounding the error of the estimate
$\frac{1}{M} F_{M}^{-1}\left\vert S_{M}(\omega)\right\rangle$ is a good estimate of $\omega$. Indeed, if $\omega=x / M$ for some $0 \leq x<M$, then $F_{M}^{-1}\left\vert S_{M}(x / M)\right\rangle=\vert x\rangle$. 

Otherwise:
Theorem:
Let $X$ be the r.v. corresponding to the result of measuring $F_{M}^{-1}\left\vert S_{M}(\omega)\right\rangle$. Then:

$$
\mathbb{P}\left(\left\vert \frac{1}{M} X-\omega\right\vert  \leq \frac{1}{M}\right) \geq \frac{8}{\pi^{2}} \approx 0.81
$$

Lemma:
Letting $\Delta=\left\vert \frac{1}{M} x-\omega\right\vert $ for some $x \in 0, \ldots, M-1$, we have:

$$
\mathbb{P}[X=x]=\frac{\sin ^{2}(M \Delta \pi)}{M^{2} \sin ^{2}(\Delta \pi)}
$$

Proof of the Lemma:

$$
\begin{aligned}
\mathbb{P}[X=x] &=\left\vert \left\langle x\left\vert F_{M}^{-1}\right\vert  S_{M}(\omega)\right\rangle\right\vert ^{2} \\
&=\mid\left.\left(F_{M}\vert x\rangle\right)^{\dagger}\left\vert S_{M}(\omega)\right\rangle\right\vert ^{2} \\
&=\left\vert \left\langle S_{M}(x / M) \mid S_{M}(\omega)\right\rangle\right\vert ^{2} \\
&=\left\vert \left(\frac{1}{\sqrt{M}} \sum_{y=0}^{M-1} e^{2 \pi i x / M y}\langle y\vert \right)\left(\frac{1}{\sqrt{M}} \sum_{y=0}^{M-1} e^{2 \pi i \omega y}\vert y\rangle\right)\right\vert ^{2} \\
&=\frac{1}{M^{2}}\left\vert \sum_{y=0}^{M-1} e^{2 \pi i \Delta y}\right\vert ^{2}=\frac{\sin ^{2}(M \Delta \pi)}{M^{2} \sin ^{2}(\Delta \pi)}
\end{aligned}
$$

Proof of the Theorem:

$$
\begin{aligned}
\mathbb{P}[d(X / M, \omega) \leq 1 / M] &=\mathbb{P}[X=\lfloor M \omega\rfloor]+\mathbb{P}[X=[M \omega]] \\
&=\frac{\sin ^{2}(M \Delta \pi)}{M^{2} \sin ^{2}(\Delta \pi)}+\frac{\sin ^{2}\left(M\left(\frac{1}{M}-\Delta\right) \pi\right)}{M^{2} \sin ^{2}\left(\left(\frac{1}{M}-\Delta\right) \pi\right)} \\
& \geq \frac{8}{\pi^{2}}
\end{aligned}
$$

Since the minimum of this expression is reached at $\Delta=1 /(2 M)$.
A bounding error on $\tilde{\theta}_{a}$ translates into a bound on $\tilde{a}$.
Lemma:
Let $a=\sin ^{2}\left(\theta_{a}\right)$ and $\tilde{a}=\sin ^{2}\left(\tilde{\theta}_{a}\right)$ with $0 \leq \theta_{a}, \tilde{\theta}_{a} \leq \frac{\pi}{2}$. Then:

$$
\left\vert \tilde{\theta}_{a}-\theta_{a}\right\vert  \leq \epsilon \Longrightarrow\vert \tilde{a}-a\vert  \leq 2 \epsilon \sqrt{a(1-a)}+\epsilon^{2}
$$

A bounding error on $\tilde{\theta}_{a}$ translates into a bound on $\tilde{a}$.
Proof:

$$
\begin{aligned}
\tilde{a}-a=& \sin ^{2}\left(\tilde{\theta}_{a}\right)-\sin ^{2}\left(\theta_{a}\right) \leq \sin ^{2}\left(\theta_{a}+\epsilon\right)-\sin ^{2}\left(\theta_{a}\right) \\
=&\left(\sin \left(\theta_{a}\right) \cos (\epsilon)+\sin (\epsilon) \cos \left(\theta_{a}\right)\right)^{2}-\sin ^{2}\left(\theta_{a}\right) \\
=& \sin ^{2}\left(\theta_{a}\right) \cos (\epsilon)+\sin ^{2}(\epsilon) \cos ^{2}\left(\theta_{a}\right)+2 \cos \left(\theta_{a}\right) \sin \left(\theta_{a}\right) \cos (\epsilon) \sin (\epsilon) \\
&-\sin ^{2}\left(\theta_{a}\right) \\
=& \sin ^{2}(\epsilon)\left(\cos ^{2}\left(\theta_{a}\right)-\sin ^{2}\left(\theta_{a}\right)\right)+\sqrt{a(1-a)} \sin ^{2}(\epsilon) \\
=& \sqrt{a(1-a)} \sin (2 \epsilon)+(1-2 a) \sin ^{2}(\epsilon) \\
\leq & 2 \epsilon \sqrt{a(1-a)}+\epsilon^{2}
\end{aligned}
$$

Same for $a-\tilde{a}$.

Combining those results, the Amplitude Estimation algorithm outputs $\tilde{\theta}_{a}$ such that

$$
\begin{aligned}
&\left\vert \tilde{\theta}_{a} / \pi-\theta_{a} / \pi\right\vert  \leq \frac{1}{M} \\
&\Longleftrightarrow\left\vert \tilde{\theta}_{a}-\theta_{a}\right\vert  \leq \frac{\pi}{M}
\end{aligned}
$$

with probability greater than $8 / \pi^{2}$.
Thus, by setting $\epsilon=\frac{\pi}{M}$ :

$$
\vert \tilde{a}-a\vert  \leq 2 \pi \frac{\sqrt{a(1-a)}}{M}+\frac{\pi^{2}}{M^{2}}
$$


### Amplitude amplification when $\alpha$ is not known


## 4. Application to Monte Carlo sampling

- Let $X$ be a random variable taking values $0, \ldots, N$ with probability $p_{i}$. We want to compute $\mathbb{E}[f(X)]$.
- Using Monte Carlo sampling, with $M$ evaluations of $f$, we get: $\frac{1}{M} \sum_{k=0}^{M} f\left(X_{k}\right) \approx \mathbb{E}[f(X)] \pm \frac{C}{\sqrt{M}}$

Quantum approach: define

$$
\vert \Psi\rangle=\sum_{i=0}^{N-1} \sqrt{p_{i}}\vert i\rangle
$$

and the operator

$$
F:\vert i\rangle \otimes\vert 0\rangle \mapsto\vert i\rangle \otimes(\sqrt{1-f(i)}\vert 0\rangle+\sqrt{f(i)}\vert 1\rangle)
$$

Then:

$$
F\vert \Psi\rangle \otimes\vert 0\rangle=\sum_{i=0}^{N-1} \sqrt{1-f(i)} \sqrt{p_{i}}\vert i\rangle \otimes\vert 0\rangle+\sqrt{f(i)} \sqrt{p_{i}}\vert i\rangle \otimes\vert 1\rangle
$$

Using amplitude estimation, we estimate the probability to measure $\vert 1\rangle$ in the last Qbit: $\tilde{a}=\sum_{i=0}^{N-1} p_{i} f(i)=\mathbb{E}[f(X)]$, and using $M$ evaluations of $f$ :

$$
\vert \tilde{a}-a\vert  \leq 2 \pi \frac{\sqrt{a(a-a)}}{M}+\frac{\pi^{2}}{M^{2}}
$$

with a convergence rate of $\mathcal{O}\left(\frac{1}{M}\right)$ to be compared to the classical $\mathcal{O}\left(\frac{1}{\sqrt{M}}\right)$ rate.

## 5. QSearch Algorithm
To be updated.


---





**Reference:**

`1. Nielsen, Michael A., and Isaac Chuang. "Quantum computation and quantum information." (2002): 558-559.`

`2. Asfaw, Abraham, et al. "Learn quantum computation using qiskit." Accessed: Oct 24 (2020): 2020.`

`3. Susskind, Leonard, and Art Friedman. Quantum mechanics: the theoretical minimum. Basic Books, 2014.`
