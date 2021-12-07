---
title: Option Pricing with Quantum Monte Carlo Simulation
tags: QuantumComputing
mathjax: true
author: Si Yuan JIN
article_header:
  type: overlay
  theme: dark
  background_color: '#123'
  background_image: false
---
For the pricing problem in finance, the main challenge is to compute an expectation value of a function of one or more underlying stochastic financial assets. For models beyond BSM, such pricing is often performed via Monte Carlo evaluation. Quantum Monte Carlo simulation would have a quadratic speedup compared to classical one.

## 1. How quantum computing can result an expectation value?

### We can implement a rotation onto an ancilla qubit that we can input information into circuit:

$$\mathcal{R}|x\rangle|0\rangle=|x\rangle(\sqrt{1-v(x)}|0\rangle+\sqrt{v(x)}|1\rangle)$$

In this equation, $v$ could be the price of assets and some other information.

### Then we can mesaure $\mathbb{E}[v(\mathcal{A})]$
$A$ is an algorithm to describe the distribution of $x$.

$v(A)$ denotes the random variable specified by the algorithm $A$ and the function $v(x)$.

$\mathbb{E}[v(\mathcal{A})]:=\sum_{x=0}^{2^{n}-1}\left|a_{x}\right|^{2} v(x)$


1. Apply the algorithm $A$, 
   
   $$\mathcal{A}\left|0^{n}\right\rangle=\sum_{x=0}^{2^{n}-1} a_{x}|x\rangle$$
   
   where $\left|0^{n}\right\rangle$ denotes the $n$ qubit register with all qubits in the state $|0\rangle$. 
2. Perform the rotation of an ancilla via $\mathcal{R}$
  $$
  \begin{gathered}
  \sum_{x=0}^{2^{n}-1} a_{x}|x\rangle|0\rangle \\
  \rightarrow \sum_{x=0}^{2^{n}-1} a_{x}|x\rangle(\sqrt{1-v(x)}|0\rangle+\sqrt{v(x)}|1\rangle)=:|\chi\rangle
  \end{gathered}
  $$
3. Measure the ancilla in the state $\vert 1 \rangle$ obtains as the success probability of the expectation value
  $$
  \mu:=\left\langle\chi\left|\left(\mathcal{I}_{2^{n}} \otimes|1\rangle\langle 1|\right)\right| \chi\right\rangle=\sum_{x=0}^{2^{n}-1}\left|a_{x}\right|^{2} v(x) \equiv \mathbb{E}[v(\mathcal{A})] .
  $$


<!-- Combining the two operations defines a unitary $\mathcal{F}$ and the resulting state $|\chi\rangle$
$$
\mathcal{F}\left|0^{n+1}\right\rangle:=\mathcal{R}\left(\mathcal{A} \otimes \mathcal{I}_{2}\right)\left|0^{n+1}\right\rangle \equiv|\chi\rangle .
$$ -->

This success probability can be obtained by repeating the procedure $t$ times and collecting the clicks for the |1) state as a fraction of the total measurements. The variance is $\epsilon^{2}=\frac{\mu(1-\mu)}{t}$ from the Bernoulli distribution, i.e. the standard deviation is $\epsilon=\sqrt{\frac{\mu(1-\mu)}{t}}$. Hence, the experiment has to be repeated
$$
t=\mathcal{O}\left(\frac{\mu(1-\mu)}{\epsilon^{2}}\right)
$$

This quadratic dependency in  is analogous to the classical Monte Carlo dependency.

## 2. How to speed up the process by circuit design?