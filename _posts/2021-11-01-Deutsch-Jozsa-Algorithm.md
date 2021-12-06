---
title: Deutsch-Jozsa Algorithm
tags: QuantumComputing
mathjax: true
author: Si Yuan JIN
article_header:
  type: overlay
  theme: dark
  background_color: '#123'
  background_image: false
---

The Deutsch-Jozsa algorithm, first introduced in Reference, was the first example of a quantum algorithm that performs better than the best classical algorithm. It showed that there can be advantages to using a quantum computer as a computational tool for a specific problem. We will fisrt talk about Deutsch Algorithm step by step and then go into Deutsch-Jozsa algorithm.

## 1. Deutsch Algorithm

### 1.1 Problem Statement

Given a function $f(x), x\in\{0,1\}$, how can we know whether f(x) is a balanced function or constant function?

We first dig into what is balanced function and constant function.

- Balanced Function means $f(0)\ne f(1)$, including two possibilites:
  - $$f(0) = 0, f(1) = 1$$

![Image](https://jsybruce.github.io/Homepage/assets/images/posts/Deutsch-Jozsa-Algorithm/BalancedOne.png "Image@512x512"){:width="512px"}

  - $$f(0) = 1, f(1) = 0$$
![Image](https://jsybruce.github.io/Homepage/assets/images/posts/Deutsch-Jozsa-Algorithm/BalancedTwo.png "Image@512x512"){:width="512px"}


- Constant Function means $f(0)= f(1)$, including two possibilites:
  - $$f(0) = f(1) = 0$$

![Image](https://jsybruce.github.io/Homepage/assets/images/posts/Deutsch-Jozsa-Algorithm/ConstantOne.png "Image@512x512"){:width="512px"}

  - $$f(0) = f(1) = 1$$
![Image](https://jsybruce.github.io/Homepage/assets/images/posts/Deutsch-Jozsa-Algorithm/ConstantTwo.png "Image@512x512"){:width="512px"}

### 1.2 Solution Circuit
We first present solution circuit and try to find why it can help to find the solution. In the following picture, we assume $n=1$ in the upper regitser.

![Image](https://jsybruce.github.io/Homepage/assets/images/posts/Deutsch-Jozsa-Algorithm/Deutsch-Circuit.png "Image@512x512"){:width="512px"}

The following figure shows how we deduce from the beginning to the end. (I will spend some time to use markdown to compile it in future :).)

![Image](https://jsybruce.github.io/Homepage/assets/images/posts/Deutsch-Jozsa-Algorithm/Deduction.png "Image@512x512"){:width="512px"}

### 1.3 Example Circuit
We use balanced function as an example to see what happened.

- Balanced Function One

![Image](https://jsybruce.github.io/Homepage/assets/images/posts/Deutsch-Jozsa-Algorithm/ExampleBalancedOne.png "Image@512x512"){:width="512px"}

The process goes like:

$$
\begin{aligned}
&\left|\psi_{0}\right\rangle=|01\rangle \\
&\left|\psi_{1}\right\rangle=\left[\frac{|0\rangle+|1\rangle}{\sqrt{2}}\right]\left[\frac{|0\rangle-|1\rangle}{\sqrt{2}}\right] \\
&\left|\psi_{2}\right\rangle=\frac{1}{2}(|0\rangle-|1\rangle)(|0\rangle-|1\rangle) \\
&\left|\psi_{3}\right\rangle=\frac{1}{2}|1\rangle(|0\rangle-|1\rangle)
\end{aligned}
$$

![Image](https://jsybruce.github.io/Homepage/assets/images/posts/Deutsch-Jozsa-Algorithm/ExampleBalancedTwo.png "Image@512x512"){:width="512px"}

The process goes like:

$$
\begin{aligned}
&\left|\psi_{0}\right\rangle=|01\rangle \\
&\left|\psi_{1}\right\rangle=\left[\frac{|0\rangle+|1\rangle}{\sqrt{2}}\right]\left[\frac{|0\rangle-|1\rangle}{\sqrt{2}}\right] \\
&\left|\psi_{2}\right\rangle=\frac{1}{2}(|0\rangle-|1\rangle)(-|0\rangle+|1\rangle) \\
&\left|\psi_{3}\right\rangle=\frac{1}{2}|1\rangle(-|0\rangle+|1\rangle)
\end{aligned}
$$

We can find that the results of the first register in two circuits are $|1\rangle$. Similarly, if we use constant function as example, the result will be $|0\rangle$. That's what Deutsch can do to solve this problem.

By only one measurement, we can know whether a function is balanced or constant, while in classical computing world, we need twice to know the result.


## 2. Deutsch-Jozsa Algorithm
Deutsch-Jozsa Algorithm extends Deutsch algorithm into $2^{n}$ dimensions.

The algorithm goes with following precedures:

1. State Preparation

$$
\left|\psi_{0}\right\rangle=|0\rangle^{\otimes n}|1\rangle $$

2. Superposition by using Hardmard Gate

$$
\left|\psi_{1}\right\rangle=\sum_{x \in\{0,1\}^{n}} \frac{|x\rangle}{\sqrt{2^{n}}}\left[\frac{|0\rangle-|1\rangle}{\sqrt{2}}\right]$$

3. Use targeted function in the circuit
   
$$ \left|\psi_{2}\right\rangle=\sum_{x} \frac{(-1)^{f(x)}|x\rangle}{\sqrt{2^{n}}}\left[\frac{|0\rangle-|1\rangle}{\sqrt{2}}\right] $$

4. Another Hardmard Gate 
$$H^{\otimes n}$$
to the first register.

$$ \left|\psi_{3}\right\rangle=\sum_{z} \sum_{x} \frac{(-1)^{x \cdot z+f(x)}|z\rangle}{2^{n}}\left[\frac{|0\rangle-|1\rangle}{\sqrt{2}}\right]$$

5. Measurement

Note that the amplitude for the state 

$$
|0\rangle^{\otimes n} $$
is
$$ \sum_{x}(-1)^{f(x)} / 2^{n}
$$ 

Let's look at the two possible cases $f$ constant and $f$ balanced $-$ to discern what happens. In the case where $f$ is constant the amplitude for $|0\rangle^{\otimes n}$ is $+1$ or $-1$, depending on the constant value $f(x)$ takes. Because $\left|\psi_{3}\right\rangle$ is of unit length it follows that all the other amplitudes must be zero, and an observation will yield 0s for all qubits in the query register. 

If $f$ is balanced then the positive and negative contributions to the amplitude for $|0\rangle^{\otimes n}$ cancel, leaving an amplitude of zero, and a measurement must yield a result other than 0 on at least one qubit in the query register. 
