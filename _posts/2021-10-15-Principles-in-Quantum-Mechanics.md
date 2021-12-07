---
title: Principles in Quantum Mechanics
tags: QuantumComputing
mathjax: true
author: Si Yuan JIN
article_header:
  type: overlay
  theme: dark
  background_color: '#123'
  background_image: false
---

## 1. Linear Operator

**States in quantum mechanics are mathematically described as vectors in a vector space. Physical observables—the things that you can measure—are described by linear operators. Operators corresponding to physical observables must be Hermitian as well as linear.**

Observables are the things you measure. For example, we can make direct measurements of the coordinates of a particle; the energy, momentum, or angular momentum of a system; or the electric field at a point in space. Observables are also associated with a vector space, but they are not state- vectors.

They are the things you measure $\sigma_{x}$ would be an example—and
they are represented by linear operators. John Wheeler liked to call such mathematical objects machines. He imagined a machine with two ports: an input port and an output port. In the input port you insert a vector, such as $\vert A \rangle$ .

The gears turn and the machine delivers a result in the output port. This result is another vector, say $\vert B \rangle$ .


## 2. Hermitian Operator
### The Fundamental Theorem
 - The eigenvectors of a Hermitian operator are a complete set. This means that any vector the operator can generate can be expanded as a sum of its eigenvectors.
 - If and are two unequal eigenvalues of a Hermitian operator, then the corresponding eigenvectors are orthogonal.
 - Even if the two eigenvalues are equal, the corresponding eigenvectors can be chosen to be orthogonal.


## 3. Principles
- Principle 1: The observable or measurable quantities of quantum mechanics are represented by linear operators $\mathbf{L}$ .

We'll soon see that $\mathbf{L}$ must also be Hermitian. Some authors regard this as a postulate, or basic principle. We have chosen instead to derive it from the other principles. The end result is the same either way: the operators that represent observables are Hermitian.
- Principle 2: The possible results of a measurement are the eigenvalues of the operator that represents the observable. We'll call these eigenvalues $\lambda_{i}$ . The state for which the result of a measurement is unambiguously $\lambda_{i}$ is the corresponding eigenvector $\left \vert \lambda_{i} \right \rangle$ .

Here's another way to say it: if the system is in the eigenstate $\left \vert \lambda_{i}\right \rangle$ , the result of a measurement is guaranteed to be $\lambda_{i}$ .
- Principle 3: Unambiguously distinguishable states are represented by orthogonal vectors.
- Principle 4: If $\vert A\rangle$ is the state-vector of a system, and the observable $\mathbf{L}$ is measured, the probability to observe value $\lambda_{i}$ is


$$
P\left(\lambda_{i}\right)=\left\langle A \vert \lambda_{i}\right\rangle\left\langle\lambda_{i} \vert A\right\rangle
$$

The $\lambda_{i}$ are the eigenvalues of $\mathbf{L}$ , and $\left \vert \lambda_{i}\right \rangle$ are the corresponding eigenvectors.


## 4. Example

Now, let's work out the details of spin operators. The first goal is to construct operators to represent the components of spin, $\sigma_{z}, \sigma_{y}$ , and $\sigma_{z}$ . Then we'll build on those results to construct an operator that represents a spin component in any direction. As usual, we begin with 
$$\boldsymbol{\sigma}_{\boldsymbol{z}}$$
 . 

We know that $\sigma_{z}$ has
definite, unambiguous values for the states 
$$\vert u\rangle$$
 and 
$$\vert d\rangle$$
 , 
and that the corresponding measurement values are 
$$\sigma_{z}=+\mathbf{1}$$
 and 
 $$\sigma_{z}=-\mathbf{1}$$
  . 

Here is what the first three principles tell us:
- Principle 1: Each component of $\boldsymbol{\sigma}$ is represented by a linear operator.
- Principle 2: The eigenvectors of $\sigma_{z}$ are $\vert u\rangle$ and $\vert d\rangle$ . The corresponding eigenvalues are $+1$ and $-1$ . We can express this with the abstract equations


$$
\begin{aligned}
&\sigma_{z}\vert u\rangle=\vert u\rangle \\
&\sigma_{z}\vert d\rangle=-\vert d\rangle
\end{aligned}
$$

- Principle 3: States $\vert u\rangle$ and $\vert d\rangle$ are orthogonal to each other. This can be expressed as

$$
\langle u \vert d\rangle=0 .
$$

Recalling our column representations of $\vert u\rangle$ and $\vert d\rangle$ , we can write it in matrix form as

$$
\left(\begin{array}{ll}
\left(\sigma_{z}\right)_{11} & \left(\sigma_{z}\right)_{12} \\
\left(\sigma_{z}\right)_{21} & \left(\sigma_{z}\right)_{22}
\end{array}\right)\left(\begin{array}{l}
1 \\
0
\end{array}\right)=\left(\begin{array}{l}
1 \\
0
\end{array}\right)
$$

and

$$
\left(\begin{array}{cc}
\left(\sigma_{z}\right)_{11} & \left(\sigma_{z}\right)_{12} \\
\left(\sigma_{z}\right)_{21} & \left(\sigma_{z}\right)_{22}
\end{array}\right) \quad\left(\begin{array}{l}
0 \\
1
\end{array}\right)=-\left(\begin{array}{c}
0 \\
1
\end{array}\right)
$$

There is only one matrix that satisfies these equations. I leave it as an exercise to prove

$$
\left(\begin{array}{ll}
\left(\sigma_{z}\right)_{11} & \left(\sigma_{z}\right)_{12} \\
\left(\sigma_{z}\right)_{21} & \left(\sigma_{z}\right)_{22}
\end{array}\right)=\left(\begin{array}{rr}
1 & 0 \\
0 & -1
\end{array}\right)
$$

or, more concisely,

$$
\sigma_{z}=\left(\begin{array}{rr}
1 & 0 \\
0 & -1
\end{array}\right)
$$


## 5. Summary

To summarize, the three operators $\sigma_{x}, \sigma_{y}$ , and $\sigma_{z}$ are represented by the three matrices

$$
\begin{aligned}
&\sigma_{z}=\left(\begin{array}{cc}
1 & 0 \\
0 & -1
\end{array}\right) \\
&\sigma_{x}=\left(\begin{array}{ll}
0 & 1 \\
1 & 0
\end{array}\right) \\
&\sigma_{y}=\left(\begin{array}{cc}
0 & -i \\
i & 0
\end{array}\right)
\end{aligned}
$$

If we use $\sigma_{x}$ to measure state $\vert up \rangle$, we will have half possibility to get value 0 and half possibility to get value 1. To be mentioned, the corresponding eigenvectors are $\vert left \rangle$ and $\vert right \rangle$. If we still use $\vert up \rangle$ and $\vert down \rangle$ to express the result, we can only get the flipped value.

---

**Reference:**

`1. Nielsen, Michael A., and Isaac Chuang. "Quantum computation and quantum information." (2002): 558-559.`

`2. Asfaw, Abraham, et al. "Learn quantum computation using qiskit." Accessed: Oct 24 (2020): 2020.`

`3. Susskind, Leonard, and Art Friedman. Quantum mechanics: the theoretical minimum. Basic Books, 2014.`