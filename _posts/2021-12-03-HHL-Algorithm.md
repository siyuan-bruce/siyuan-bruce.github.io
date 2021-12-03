---
title: HHL Algorithm
tags: QuantumComputing
mathjax: true
author: Si Yuan JIN
---
## Introduction
Systems of linear equations arise naturally in many real-life applications in a wide range of areas, such as in the solution of Partial Differential Equations, the calibration of financial models, fluid simulation or numerical field calculation. The problem can be defined as, given a $matrix A\in\mathbb{C}^{N\times N}$ and a vector $\vec{b}\in\mathbb{C}^{N}$, find $\vec{x}\in\mathbb{C}^{N}$ satisfying $A\vec{x}=\vec{b}$

For example, take N=2,

$$A = \begin{pmatrix}1 & -1/3\\-1/3 & 1 \end{pmatrix},\quad \vec{x}=\begin{pmatrix} x_{1}\\ x_{2}\end{pmatrix}\quad \text{and} \quad \vec{b}=\begin{pmatrix}1 \\ 0\end{pmatrix}$$

Then the problem can also be written as find $$x_{1}, x_{2}\in\mathbb{C} such that
\begin{cases}x_{1} - \frac{x_{2}}{3} = 1 \\ -\frac{x_{1}}{3} + x_{2} = 0\end{cases}$$

A system of linear equations is called s-sparse if A has at most s non-zero entries per row or column. Solving an s-sparse system of size N with a classical computer requires $\mathcal{ O }(Ns\kappa\log(1/\epsilon))$ running time using the conjugate gradient method. Here $\kappa$ denotes the condition number of the system and $\epsilon$ the accuracy of the approximation.

The HHL is a quantum algorithm to estimate a function of the solution with running time complexity of $\mathcal{ O }(\log(N)s^{2}\kappa^{2}/\epsilon)$ when A is a Hermitian matrix under the assumptions of efficient oracles for loading the data, Hamiltonian simulation and computing a function of the solution. This is an exponential speed up in the size of the system, however one crucial remark to keep in mind is that the classical algorithm returns the full solution, while the HHL can only approximate functions of the solution vector.


## The HHL algorithm 
### Some mathematical background 
The first step towards solving a system of linear equations with a quantum computer is to encode the problem in the quantum language. By rescaling the system, we can assume $\vec{b}$ and $\vec{x}$ to be normalised and map them to the respective quantum states $\vert b\rangle$ and $\vert x\rangle$. Usually the mapping used is such that $i^{th}$ component of $\vec{b}$ (resp. $\vec{x})$ corresponds to the amplitude of the $i^{th}$ basis state of the quantum state $\vert b\rangle$ (resp. $\vert x\rangle)$. From now on, we will focus on the rescaled problem

$$A\vert x\rangle=\vert b\rangle$$

Since A is Hermitian, it has a spectral decomposition

$$A=\sum_{j=0}^{N-1}\lambda_{j}\vert u_{j}\rangle\langle u_{j}\vert ,\quad \lambda_{j}\in\mathbb{ R }$$
where $\vert u_{j}\rangle is the j^{th}$ eigenvector of A with respective eigenvalue $\lambda_{j}$. Then,
$A^{-1}=\sum_{j=0}^{N-1}\lambda_{j}^{-1}\vert u_{j}\rangle\langle u_{j}\vert $

and the right hand side of the system can be written in the eigenbasis of A as

$$\vert b\rangle=\sum_{j=0}^{N-1}b_{j}\vert u_{j}\rangle,\quad b_{j}\in\mathbb{ C }$$

It is useful to keep in mind that the goal of the HHL is to exit the algorithm with the readout register in the state

$$\vert x\rangle=A^{-1}\vert b\rangle=\sum_{j=0}^{N-1}\lambda_{j}^{-1}b_{j}\vert u_{j}\rangle$$

Note that here we already have an implicit normalisation constant since we are talking about a quantum state.

All we need to find is 

### Description of the HHL algorithm 
The algorithm uses three quantum registers, all of them set to $\vert 0\rangle$ at the beginning of the algorithm. One register, which we will denote with the subindex $n_{l}$, is used to store a binary representation of the eigenvalues of A. A second register, denoted by $n_{b}$, contains the vector solution, and from now on $N=2^{n_{b}}$. There is an extra register, for the auxiliary qubits. These are qubits used as intermediate steps in the individual computations but will be ignored in the following description since they are set to $\vert 0\rangle$ at the beginning of each computation and restored back to the $\vert 0\rangle$ state at the end of the individual operation.


The following is an outline of the HHL algorithm with a high-level drawing of the corresponding circuit. For simplicity all computations are assumed to be exact in the ensuing description, and a more detailed explanation of the non-exact case is given in Section 2.D..

Load the data $\vert b\rangle\in\mathbb{ C }^{N}$ . That is, perform the transformation


$$  \vert 0\rangle _{n_{b}} \mapsto \vert b\rangle _{n_{b}}$$

Apply Quantum Phase Estimation (QPE) with
$$U = e ^ { i A t } := \sum _{j=0}^{N-1}e ^ { i \lambda _ { j } t } \vert u_{j}\rangle\langle u_{j}\vert $$
The quantum state of the register expressed in the eigenbasis of A is now
$\sum_{j=0}^{N-1} b_{ j }\vert \lambda _ {j }\rangle_{n_{l}}\vert u_{j}\rangle_{n_{b}}
where \vert \lambda _ {j }\rangle_{n_{l}}$ is the n_{l}-bit binary representation of $\lambda _ {j }$.

Add an auxiliary qubit and apply a rotation conditioned on $\vert \lambda_{ j }\rangle$,

$$\sum_{j=0}^{N-1} b _ { j } \vert \lambda _ { j }\rangle_{n_{l}}\vert u_{j}\rangle_{n_{b}} \left( \sqrt { 1 - \frac { C^{2}  } { \lambda _ { j } ^ { 2 } } } \vert 0\rangle + \frac { C } { \lambda _ { j } } \vert 1\rangle \right)$$

where C is a normalisation constant, and, as expressed in the current form above, should be less than the smallest eigenvalue $\lambda_{min}$ in magnitude, $i.e., \vert C\vert  < \lambda_{min}$.

Apply $QPE^{\dagger}$. Ignoring possible errors from QPE, this results in

$$\sum_{j=0}^{N-1} b _ { j } \vert 0\rangle_{n_{l}}\vert u_{j}\rangle_{n_{b}} \left( \sqrt { 1 - \frac {C^{2}  } { \lambda _ { j } ^ { 2 } } } \vert 0\rangle + \frac { C } { \lambda _ { j } } \vert 1\rangle \right)$$

Measure the auxiliary qubit in the computational basis. If the outcome is 1, the register is in the post-measurement state

$$\left( \sqrt { \frac { 1 } { \sum_{j=0}^{N-1} \left\vert  b _ { j } \right\vert  ^ { 2 } / \left\vert  \lambda _ { j } \right\vert  ^ { 2 } } } \right) \sum _{j=0}^{N-1} \frac{b _ { j }}{\lambda _ { j }} \vert 0\rangle_{n_{l}}\vert u_{j}\rangle_{n_{b}}$$

which up to a normalisation factor corresponds to the solution.

==We are almost there for  $\vert x\rangle=A^{-1}\vert b\rangle=\sum_{j=0}^{N-1}\lambda_{j}^{-1}b_{j}\vert u_{j}\rangle$==

Apply an observable M to calculate $F(x):=\langle x\vert M\vert x\rangle$.

### Quantum Phase Estimation (QPE) within HHL 
Quantum Phase Estimation is described in more detail in Chapter 3. However, since this quantum procedure is at the core of the HHL algorithm, we recall here the definition. Roughly speaking, it is a quantum algorithm which, given a unitary U with eigenvector $\vert \psi\rangle_{m}$ and eigenvalue $e^{2\pi i\theta}$, finds $\theta$. We can formally define this as follows.


**Definition:** Let $U\in\mathbb{ C }^{2^{m}\times 2^{m}}$ be unitary and let $\vert \psi\rangle_{m}\in\mathbb{ C }^{2^{m}}$ be one of its eigenvectors with respective eigenvalue $e^{2\pi i\theta}$. The Quantum Phase Estimation algorithm, abbreviated QPE, takes as inputs the unitary gate for U and the state $\vert 0\rangle_{n}\vert \psi\rangle_{m}$ and returns the state $\vert \tilde{\theta}\rangle_{n}\vert \psi\rangle_{m}. Here \tilde{\theta}$ denotes a binary approximation to $2^{n}\theta$ and the n subscript denotes it has been truncated to n digits.

$$\operatorname { QPE } ( U , \vert 0\rangle_{n}\vert \psi\rangle_{m} ) = \vert \tilde{\theta}\rangle_{n}\vert \psi\rangle_{m}$$

For the HHL we will use QPE with $U = e ^ { i A t }$, where A is the matrix associated to the system we want to solve. In this case,

$$e ^ { i A t } = \sum_{j=0}^{N-1}e^{i\lambda_{j}t}\vert u_{j}\rangle\langle u_{j}\vert $$

Then, for the eigenvector $\vert u_{j}\rangle_{n_{b}}$, which has eigenvalue $e ^ { i \lambda _ { j } t }$, QPE will output $\vert \tilde{\lambda }_ { j }\rangle_{n_{l}}\vert u_{j}\rangle_{n_{b}}$. Where $\tilde{\lambda }_ { j }$ represents an $n_{l}-bit$ binary approximation to $2^{n_l}\frac{\lambda_ { j }t}{2\pi}$. Therefore, if each $\lambda_{j}$ can be exactly represented with $n_{l}$ bits,

$$\operatorname { QPE } ( e ^ { i A t } , \sum_{j=0}^{N-1}b_{j}\vert 0\rangle_{n_{l}}\vert u_{j}\rangle_{n_{b}} ) = \sum_{j=0}^{N-1}b_{j}\vert \lambda_{j}\rangle_{n_{l}}\vert u_{j}\rangle_{n_{b}}$$




---
Reference: https://qiskit.org/textbook/ch-applications/hhl_tutorial.html