---
title: Use Quantum Computing Finding the Minimum (In Progress)
tags: QuantumComputing
mathjax: true
author: Si Yuan JIN
article_header:
  type: overlay
  theme: dark
  background_color: '#123'
  background_image: false
---

## 1. Overview
Quantum Minimum Search algorithm helps to find the minimum. The general idea of this algorithm is to use an Oracle function to flip states whose value is lower than a threshold and then use Grover Operator to amplify their amplitude. After measurement, we can get a smaller value than the previous threshold. We repeat the process. 

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
If there are $$t \geq 1$$ marked table entries, the quantum exponential searching algorithm will return one of them with equal probability after an expected number of $$\mathcal{O}(\sqrt{N / t})$$ iterations. If no entry is marked, then it will run forever. The algorithm given below finds the index of the minimum value with probability at least $$\frac{1}{2}$$. Its running time is $$\mathcal{O}(\sqrt{N})$$.

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