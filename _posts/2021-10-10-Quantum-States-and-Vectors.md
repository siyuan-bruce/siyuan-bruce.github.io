---
title: Observables and Generalized Time Dependent Schrodinger Equation
tags: QuantumComputing
mathjax: true
author: Si Yuan JIN
article_header:
  type: overlay
  theme: dark
  background_color: '#123'
  background_image: false
---
Now it’s time to try our hand at representing spin states using state-vectors. Our goal is to build a representation that captures everything we know about the behavior of spins. 

## 1. Reprensenting Spin States
At this point, the process will be more intuitive than formal. We will try to fit things together the best we can, based on what we’ve already learned. Please read this section carefully. Believe me, it will pay off. Let’s begin by labeling the possible spin states along the three coordinate axes.


Let's begin by labeling the possible spin states along the three coordinate axes. If $\boldsymbol{A}$ is oriented along the $z$ axis, the two possible states that can be prepared correspond to $\sigma_{z}=\pm 1$. Let's call them $u p$ and down and denote them by ket-vectors $|u\rangle$ and $|d\rangle$. Thus, when the apparatus is oriented along the $z$ axis and registers $+1$, the state $|u\rangle$ has been prepared.

On the other hand, if the apparatus is oriented along the $x$ axis and registers $-1$, the state $|l\rangle$ has been prepared. We'll call it left. If $\boldsymbol{A}$ is along the $y$ axis, it can prepare the states $|i\rangle$ and $|o\rangle$ (in and $o u t$ ). You get the idea.

The idea that there are no hidden variables has a very simple mathematical representation: the space of states for a single spin has only two dimensions. This point deserves emphasis:
**All possible spin states can be represented in a two-dimensional vector space.**

We could, somewhat arbitrarily, ${ }^{1}$ choose $|u\rangle$ and $|d\rangle$ as the two basis vectors and write any state as a linear superposition of these two. We'll adopt that choice for now. Let's use the symbol $|A\rangle$ for a generic state. We can write this as an equation,
$$
|A\rangle=\alpha_{u}|u\rangle+\alpha_{d}|d\rangle
$$

where $\alpha_{u}$ and $\alpha_{d}$ are the components of $|A\rangle$ along the basis directions $|u\rangle$
and $|d\rangle$. Mathematically, we can identify the components of $|A\rangle$ as
$$
\begin{aligned}
&\alpha_{u}=\langle u \mid A\rangle \\
&\alpha_{d}=\langle d \mid A\rangle
\end{aligned}
$$

These equations are extremely abstract, and it is not at all obvious what their physical significance is. I am going to tell you right now what they mean: First of all, $|A\rangle$ can represent any state of the spin, prepared in any manner. The components $\alpha_{u}$ and $\alpha_{d}$ are complex numbers; by themselves, they have no experimental meaning, but their magnitudes do. In particular, $\alpha_{u}^{*} \alpha_{u}$ and $\alpha_{d}^{*} \alpha_{d}$ have the following meaning:
- Given that the spin has been prepared in the state $|A\rangle$, and that the apparatus is oriented along $z$, the quantity $\alpha_{u}^{*} \alpha_{u}$ is the probability that the spin would be measured as $\sigma_{z}=+1$. In other words, it is the probability of the spin being $u p$ if measured along the $z$ axis.
- Likewise, $\alpha_{d}^{*} \alpha_{d}$ is the probability that $\sigma_{z}$ would be down if measured.

The $\alpha$ values, or equivalently $\langle u \mid A\rangle$ and $\langle d \mid A\rangle$, are called probability amplitudes. They are themselves not probabilities. To compute a probability, their magnitudes must be squared. In other words, the probabilities for measurements of $u p$ and down are given by
$$
\begin{aligned}
&P_{u}=\langle A \mid u\rangle\langle u \mid A\rangle \\
&P_{d}=\langle A \mid d\rangle\langle d \mid A\rangle
\end{aligned}
$$

Two other points are important: First, note that and are mutually orthogonal. The physical meaning of this is that, if the spin is prepared up, then the probability to detect it down is zero,
$$\langle u  \mid u\rangle=0$$

The directions up and down are not orthogonal directions in space, even though their associated state-vectors are orthogonal in state space.

The second important point is that for the total probability to come out equal to unity, we must have
$$
\alpha_{u}^{*} \alpha_{u}+\alpha_{d}^{*} \alpha_{d}=1
$$
This is equivalent to saying that the vector $|A\rangle$ is normalized to a unit vector:
$$
\langle A \mid A\rangle=1
$$
This is a very general principle of quantum mechanics that extends to all quantum systems: the state of a system is represented by a unit (normalized) vector in a vector space of states. Moreover, **the squared magnitudes of the components of the state-vector, along particular basis vectors, represent probabilities for various experimental outcomes.**

## 2. Along the x Axis
We said before that we can represent any spin state as a linear combination of the basis vectors $|u\rangle$ and $|d\rangle$. Let's try doing this now for the vectors $|r\rangle$ and $|l\rangle$, which represent spins prepared along the $x$ axis. We'll start with $|r\rangle$. As
you recall from Lecture 1 , if $A$ initially prepares $|r\rangle$, and is then rotated to measure $\sigma_{z}$, there will be equal probabilities for $u p$ and down. Thus, $\boldsymbol{\alpha}_{u}^{*} \boldsymbol{\alpha}_{u}$ and $\boldsymbol{\alpha}_{d}^{*} \boldsymbol{\alpha}_{d}$ must both be equal to $\frac{1}{2}$. A simple vector that satisfies this rule is
$$
|r\rangle=\frac{1}{\sqrt{2}}|u\rangle+\frac{1}{\sqrt{2}}|d\rangle
$$
There is some ambiguity in this choice, but as we will see later, it is nothing more than the ambiguity in our choice of exact directions for the $x$ and $y$ axes.
Next, let's look at the vector $|l\rangle$. Here is what we know: when the spin has been prepared in the left configuration, the probabilities for $\sigma_{z}$ are again equal to $\frac{1}{2}$. That is not enough to determine the values $\alpha_{u}^{*} \alpha_{u}$ and $\boldsymbol{\alpha}_{d}^{*} \alpha_{d}$, but there is another condition that we can infer. Earlier, I told you that $|u\rangle$ and $|d\rangle$ are orthogonal for the simple reason that, if the spin is $u p$, it's definitely not down. But there is nothing special about $u p$ and down that is not also true of right and left. In particular, if the spin is right, it has zero probability of being left. Thus, by analogy with Eq. 2.3,
$$
\begin{aligned}
&\langle r \mid l\rangle=0 \\
&\langle l \mid r\rangle=0
\end{aligned}
$$
This pretty much fixes $|l\rangle$ in the form
$$
|l\rangle=\frac{1}{\sqrt{2}}|u\rangle-\frac{1}{\sqrt{2}}|d\rangle
$$

### Along the y Axis

Similarly, we have enough conditions to determine the form of the vectors $|i\rangle$ and |o), apart from the phase ambiguity. Here is the result:
$|i\rangle=\frac{1}{\sqrt{2}}|u\rangle+\frac{i}{\sqrt{2}}|d\rangle$ $|0\rangle=\frac{1}{\sqrt{2}}|u\rangle-\frac{i}{\sqrt{2}}|d\rangle$

## 3. Counting Parameter
The general spin state is defined by two complex numbers, $\alpha_{u}$ and $\alpha_{d}$. That seems
to add up to four real parameters, with each complex parameter counting as two real ones. But recall that the vector has to be normalized as in Eq. $2.4$. The normalization condition gives us one equation involving real variables, and cuts the number of parameters down to three.

No measurable quantity is sensitive to the overall phase-factor. So the physical properties of a state-vector do not depend on the overall phase-factor. This means that one of the three remaining parameters is redundant, leaving only two-the same as the number of parameters we need to specify a direction in three-dimensional space. **Thus, there is enough freedom in the expression**
$$
\alpha_{u}|u\rangle+\alpha_{d}|d\rangle
$$
**to describe all the possible orientations of a spin**, even though there are only two possible outcomes of an experiment along any axis.

## 4. Representing Spin States as Column Vectors

So far, we have been able to learn a lot by using the abstract forms of our state-vectors, that is, $|u\rangle$ and $|d\rangle$ and so forth. These abstractions help us focus on mathematical relationships without worrying about unnecessary details. However, soon we will need to perform detailed calculations on spin states, and for that we'll need to write our state-vectors in column form. Because of "phase indifference," the column representations are not unique, and we'll try to choose the simplest and most convenient ones we can find.
As usual, we'll start with $|u\rangle$ and $|d\rangle$. We need them to have unit length, and to be mutually orthogonal. A pair of columns that satisfies these requirements is
$$
|u\rangle=\left(\begin{array}{l}
1 \\
0
\end{array}\right)
$$
$$
|d\rangle=\left(\begin{array}{l}
0 \\
1
\end{array}\right)
$$

## 5. Summary
Here is a brief outline of what we did:
- Based on our knowledge of spin measurements, we chose three pairs of mutually orthogonal basis vectors. Pair-wise, we named them $|u\rangle$ and $|d\rangle,|r\rangle$ and $|l\rangle$, and $|i\rangle$ and $|o\rangle$. Because the basis vectors $|u\rangle$ and $|d\rangle$ represent physically distinct states, we were able to assert that they are mutually orthogonal. In other words, $\langle u \mid d\rangle=0$. The same holds for $|r\rangle$ and $|l\rangle$, and also for $|i\rangle$ and $|o\rangle$.
- We found that it takes two independent parameters to specify a spin state, and then we arbitrarily chose one of the orthogonal pairs, $|u\rangle$ and $|d\rangle$, as our basis vectors for representing all spin states - even though the two complex numbers in a state-vector require four real numbers to specify them. How did we get away with this? We were clever enough to notice that these four numbers are not all independent. ${ }^{4}$ The normalization constraint (total probability must equal 1) eliminates one independent parameter, and "phase indifference" (the physics of a statevector is unaffected by its overall phase-factor) eliminates a second.
- Having chosen $|u\rangle$ and $|d\rangle$ as our main basis vectors, we figured out how to represent the other two pairs of basis vectors as linear combinations of $|u\rangle$ and $|d\rangle$, using additional orthogonality and probability-based constraints.
- Finally, we established a way to represent our main basis vectors as columns. This representation is not unique. 