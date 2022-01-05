---
title: Portfolio Optimization with HHL Algorithm
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

Modern finance employs large amounts of computational resources for a variety of tasks. Computers are used for example for the analysis of historical data, high-frequency trading, pricing of exotic financial derivatives, portfolio optimization and risk management.


Portfolio optimization can be phrased as an equality-constraint quadratic programming
problem: one finds the portfolio that maximizes expected return for fixed standard deviation (risk), or, equivalently, that minimizes the standard deviation of the return for fixed expected return. 


The quantum portfolio optimization algorithm can exhibit a run time that is logarithmic in the number
of assets and the number of time steps. 


Suppose that there are $N$ possible investments and $T$ time instances, and our data set consists of $T N$-dimensional vectors of the historic returns for those investments stored in random access memory (RAM). Direct classical algorithms for portfolio optimization proceed by constructing the $N \times N$ covariance matrix for the returns, using $\mathcal{O}\left(T N^{2}\right)$ operations/calls to RAM, and implementing its pseudo-inverse $\left(\mathcal{O}\left(N^{2}\right)\right.$ operations/memory calls) to construct the optimal risk-return curve and to find the portfolio that maximizes return for a fixed value of risk. The quantum algorithms for portfolio management presented here can find the risk-return curve and reveal the quantum state corresponding to the optimal portfolio in time $\mathcal{O}$ ( poly $\log (T N)$ ). If the relevant data is stored in quantum random access memory (qRAM). The quantum algorithm for performing the pseudoinverse can take $\mathcal{O}($ poly $\log (T N))$ operations/memory calls. Of course, loading the data set into the qRAM to begin with takes time $\mathcal{O}(T N)$ : the logarithmic run time refers to the analysis of the data once it has been loaded into memory. The output of the quantum algorithm is the optimal risk-return curve, together with quantum representations of the optimal portfolios that attain the maximum return for each value of the risk. The algorithm returns the optimal portfolio as a quantum state vector (dimension $N$ ). To determine the exact composition of the optimal portfolio would take time $\mathcal{O}(N)$ to determine each component of that state vector. We can, however, sample from the optimal portfolio: the probability of returning a particular stock is proportional to (the square of) its weight in the portfolio. By standard results on Monte Carlo sampling, a portfolio constructed from a sample of $M$ elements taken from the optimal portfolio has an expected standard deviation within $\mathcal{O}(1 / \sqrt{M})$ of the minimum standard deviation. Moreover, We can compare the expected return and variance of any specific portfolio with that of the optimal one, to determine the degree of sub-optimality. Finally, we can map out the efficient frontier, that is the optimal risk-return trade-off curve, in a time $\mathcal{O}(\log T N)$, where $T$ is the time horizon (number of time steps) and $N$ is the number of assets in the portfolio.

## 2. Portfolio Optimization
In a portfolio optimization problem, the assets are specified by a vector of today's asset prices given by $\vec{\Pi}$, the historical expected return vector of the assets $\vec{R}$, and the historical correlations in the assets given by $\Sigma$. Note the sampling errors when using $\vec{R}$ versus $\vec{R}^{\mathrm{id}}$ and $\Sigma$ versus $\Sigma^{\mathrm{id}}$, which carry over to the quantum algorithm. Let the total wealth of an investor be given by $\xi$. This wealth shall be allocated in the assets, specified by a portfolio allocation vector $\vec{w}$ which gives the amount invested in each asset. Here, we allow for short-selling, which means that the entries of $\vec{w}$ can be negative. Based on the total wealth, we obtain the constraint for the portfolio given by $\xi=\vec{\Pi}^{T} \vec{w}$. Based on the historical returns, the portfolio has an expected return given by $\vec{R}^{T} \vec{w}$. In addition, the portfolio risk can by specified as $\vec{w}^{T} \Sigma \vec{w}$. The portfolio optimization problem considered here is that the investor would like to achieve an expected return $\mu=\vec{R}^{T} \vec{w}$, while minimizing the portfolio risk $\vec{w}^{T} \Sigma \vec{w}$. Thus, the problem is an equality-constrained quadratic program as follows:

$$
\begin{array}{ll}
\min _{\vec{w}} & \vec{w}^{T} \Sigma \vec{w} \\
\text { s.t. } & \vec{R}^{T} \vec{w}=\mu, \\
& \vec{\Pi}^{T} \vec{w}=\xi .
\end{array}
$$

of all 1's. Introducing the Lagrange multipliers $\theta$ and $\eta$ for the equality constraints, the linear equation system to solve for the optimization problem is given by $M \vec{x}=\vec{b}$, which is defined as
$$
\left(\begin{array}{ccc}
0 & 0 & \vec{R}^{T} \\
0 & 0 & \vec{\Pi}^{T} \\
\vec{R} & \vec{\Pi} & \Sigma
\end{array}\right)\left(\begin{array}{l}
\eta \\
\theta \\
\vec{w}
\end{array}\right)=\left(\begin{array}{c}
\mu \\
\xi \\
\overrightarrow{0}
\end{array}\right) .
$$

Quantum mechanically, we solve the corresponding linear system $\hat{M}\vert \eta, \theta, \vec{w}\rangle=\vert \mu, \xi, \overrightarrow{0}\rangle$ via the HHL algorithm and its variants. The eigenvalues of the matrix $\hat{M}=M / \operatorname{Tr} M$ are denoted by $\lambda_{j}$ and the eigenvectors by $\left\vert u_{j}\right\rangle$. The right-hand side becomes the normalized quantum state $\vert \mu, \xi, \overrightarrow{0}\rangle .$ Such a state is easy to prepare since it only consists of the two quantities $\mu$ and $\xi$. The solution the HHL algorithm provides is the normalized quantum state:

$$
\vert \eta, \theta, \vec{w}\rangle=\frac{1}{\vert v\vert } \sum_{j: \lambda_{j} \geq 1 / \kappa} \frac{\beta_{j}}{\lambda_{j}}\left\vert u_{j}\right\rangle,
$$

with the norm $\vert v\vert =\sqrt{\sum_{j: \lambda_{j} \geq 1 / \kappa}\left(\beta_{j} / \lambda_{j}\right)^{2}}$ and $\beta_{j}:=\left\langle u_{j} \mid \mu, \xi, \overrightarrow{0}\right\rangle .$ Here, $\kappa$ is chosen to be a constant. The HHL algorithm projects onto the well-conditioned subspace with eigenvalues greater than $1 / \kappa$. In this way, the algorithm finds the pseudoinverse of $\hat{M}$ in such a way that only eigenvalues $\lambda_{j} \geq 1 / \kappa$ are taken into account. Let us denote this pseudoinverse by 
$$\hat{M}_{\kappa}^{-1}$$
. The procedure is equal to the actual pseudoinverse $$\hat{M}^{-1}$ whenever $1 / \kappa$$
is smaller than the smallest eigenvalue 
$$\left\vert \lambda_{\min }\right\vert $$
 of 
 $$\hat{M}$$
 . Otherwise, 
 $$\hat{M}_{\kappa}^{-1}\vert \overrightarrow{0}, \mu, \xi\rangle$$
  approximates $
  $\hat{M}^{-1}\vert \overrightarrow{0}, \mu, \xi\rangle$$
   to an error

$$
\left.\epsilon_{\kappa}:=\left\vert \hat{M}_{\kappa}^{-1}\right\vert  \overrightarrow{0}, \mu, \xi\right\rangle-\left.\hat{M}^{-1}\vert \overrightarrow{0}, \mu, \xi\rangle\right\vert _{2}
$$

Thus, efficient quantum portfolio optimization requires $\kappa=O($ poly $(\log d))$, but also the requirement that $\hat{M}$ to be such that either (1) $\left\vert \lambda_{\min }\right\vert  \geq 1 / \kappa$, with no additional errors in finding the pseudoinverse, or (2) $\left\vert \lambda_{\min }\right\vert <1 / \kappa$ but with $\epsilon_{\kappa}=\mathcal{O}(\epsilon)$ so that the error $\epsilon_{\kappa}$ accumulates in accordance with an overall desired error $\mathcal{O}(\epsilon)$.

The success probability of preparing $\vert \eta, \theta, \vec{w}\rangle$ is

$$
P_{w}=C^{2} \sum_{j: \lambda_{j} \geq 1 / \kappa}\left\vert \frac{\beta_{j}}{\lambda_{j}}\right\vert ^{2}
$$

with a user-specified $C=\mathcal{O}(1 / \kappa)$. We can determine $P_{w}$ itself from multiple runs of the linear systems algorithm. To relate the quantum state $\vert \eta, \theta, \vec{w}\rangle$ to the actual solution of (20), we multiply $\vert \eta, \theta, \vec{w}\rangle$ by a factor
$$
\sqrt{\frac{P_{w}\left(\mu^{2}+\xi^{2}\right)}{C^{2}}} \operatorname{tr} \Sigma,
$$
which involves only known quantities. The trace $\operatorname{tr} \Sigma$ is estimated via Appendix A, Eq. (A15). When measuring properties of the portfolio we always multiply the result by this factor to obtain the actual desired value. To obtain a quantum state $\vert \vec{w}\rangle$ **we project the state $\vert \eta, \theta, \vec{w}\rangle$ onto the desired part.**

## 3. Specific Simulation

## 4. Improvement

## 5. Summary

We leverage HHL algorithm and Lagrange multipliers to compute resulting state with two ancilla parameters.


---

**Reference:**

`1. Nielsen, Michael A., and Isaac Chuang. "Quantum computation and quantum information." (2002): 558-559.`

`2. Asfaw, Abraham, et al. "Learn quantum computation using qiskit." Accessed: Oct 24 (2020): 2020.`

`3. Susskind, Leonard, and Art Friedman. Quantum mechanics: the theoretical minimum. Basic Books, 2014.`
