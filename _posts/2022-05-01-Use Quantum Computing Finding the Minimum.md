---
title: Use Quantum Computing Finding the Minimum (In Progress)
tags: QuantumComputing
mathjax: true
author: Siyuan JIN
article_header:
  type: overlay
  theme: dark
  background_color: '#123'
  background_image: false
---

## 1. Overview
The Quantum Minimum Search algorithm is a technique used to find the minimum value in a set of data. It works by using an Oracle function to identify states whose value is below a threshold, and then using the Grover Operator to increase the amplitude of these states. The measurement of the resulting state will result in a smaller value than the previous threshold, and the process is repeated until the minimum value is found.

## 2. Algorithm Workflow
QUANTUM MINIMUM SEARCHING ALGORITHM
1. Choose threshold index $$0 \leq y \leq N-1$$ uniformly at random.
2. Repeat the following and interrupt it when the total running time is more than $$22.5 \sqrt{N}+$$ $$1.4 \lg ^{2} N .{ }^{1}$$ Then go to stage $$2(2 \mathrm{c})$$.
(a) Initialize the memory as 
$$
\sum_{j} \frac{1}{\sqrt{N}}|j\rangle|y\rangle
$$
.
Mark every item $$j$$ for which $$T[j]<T[y]$$.
(b) Apply the quantum exponential searching algorithm of [2].
(c) Observe the first register: let $$y^{\prime}$$ be the outcome. If $$T\left[y^{\prime}\right]<T[y]$$, then set threshold index $$y$$ to $$y^{\prime}$$.
3. Return $$y$$.

### 2.1 How to determine the times of rotations?
The quantum exponential search algorithm will return one of the marked entries with equal probability after an expected number of $$\mathcal{O}(\sqrt{N / t})$$ iterations if there are $$t \geq 1$$ marked entries. If there are no marked entries, the algorithm will run indefinitely. The algorithm has a running time of $$\mathcal{O}(\sqrt{N})$$ and will find the index of the minimum value with a probability of at least $$\frac{1}{2}$$.


---
#### Qiskit Implementation Here
To be updated
---



## 3. Qiskit Overall Circuit
To be updated

**Reference:**

`1. Nielsen, Michael A., and Isaac Chuang. "Quantum computation and quantum information." (2002): 558-559.`

`2. C. Durr and P. Hoyer, “A Quantum Algorithm for Finding the Minimum,” arXiv:quant-ph/9607014, Jan. 1999, Accessed: May 04, 2022. [Online]. Available: http://arxiv.org/abs/quant-ph/9607014`

`3. Y. Kang and J. Heo, “Quantum Minimum Searching Algorithm and Circuit Implementation,” in 2020 International Conference on Information and Communication Technology Convergence (ICTC), 2020, pp. 214–219. doi: 10.1109/ICTC49870.2020.9289455.`