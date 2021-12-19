---
title: Quantum Variational Quantum Eigensolver
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

VQE allows us to find an upper bound of the lowest eigenvalue of a given Hamiltonian.

Let’s break it down:

- Upper bound — let’s say we have some quantity and we don’t know its value. For the sake of the example, let’s say it’s the level of water in a well. We know that the water surface can’t be above the edge of the well — if that was the case, the water would spill. So this is our upper bound. We also know that the level cannot fall below the bottom of the well — this is our lower bound. Sometimes when we describe a physical system, it’s very hard to find the real value, but knowing the lower or upper bound can help us estimate what the value might be.
- Hamiltonian — the Hamiltonian is a matrix which describes the possible energies of a physical system. If we know the Hamiltonian, we can calculate the behaviour of the system, learn what the physical states of the system are etc. It’s a central piece of quantum mechanics.
- Eigenvalue — a given physical system can be in various states. Each state has a corresponding energy. These states are described by the eigenvectors and their energies are equal to the corresponding eigenvalues. In particular, the lowest eigenvalue corresponds to the ground state energy.
- Ground state — this is the state of the system with the lowest energy, which means it’s the “most natural” state — i.e. a given system always tend to get there, and if it is in the ground state and is left alone, it will stay there forever.

Why do we care?
There are at least two reasons why we care about using a quantum computers to get the energy of a ground state:

1. Knowing a ground state is useful
2. It’s really difficult to obtain it using a classical computer


Ground state energy is fundamental in quantum chemistry. We use this value to calculate a number of other, more interesting properties of molecules, like their reaction rates, binding strengths or molecular pathways (the different ways in which a chemical reaction can occur). Many of these calculations involve several steps, so an error in the first step will introduce an error to all the subsequent steps. Therefore if one of the values we use in the first step (e.g. energy of the ground state) is closer to the reality, so will be our final result.


## 2. Why is this appropriate for NISQ devices?
As already mentioned, NISQ stands for “Noisy Intermediate Scale Quantum” (John Preskill explains what it exactly means in this video or paper) — so not perfect million-qubit devices that are needed to run the famous Shor’s or Grover’s algorithms, but rather several-qubit prototypes.

Some of the main disadvantages of NISQ devices are:

1. There’s a lot of noise — e.g. every time you apply a gate, there’s some substantial chance (e.g. 0.1%) that you’ll actually apply a different gate. And this is just one of many flavours of noise you can get.
2. The qubits don’t live for too long — after some time you can be pretty confident that whatever information was stored in your system, it’s lost. So the number of operations you can perform in this time is limited.
3. You don’t have too many qubits — right now (late 2019) the biggest chips have around 50. Also, there might be some restrictions on which qubits can interact with each other.
This translates to a pretty clear set of restrictions on your quantum circuit:

You can use only N operations per qubit (so called “circuit depth”)
You can’t assume everything will go according to plan and there will be no errors along the way. Even if there are errors, you should still get a reasonable (though not perfect) answer. We call this “robustness”.
Obviously, you can’t use more qubits than you have.
So why exactly VQE is a sensible proposition for NISQ devices?

1. It’s pretty flexible when it comes to the circuit depth, so you can make some tradeoffs. You can use a pretty simple ansatz if you want to keep your circuit very shallow. But once you have a machine which allows you for a deeper circuit — you can use more sophisticated ansatzes and your performance might increase as a result.
2. VQE has been shown to be somewhat resistant to noise — i.e. even in the presence of noise (up to some levels) it gives you the correct results. Some even claim that a pinch of noise might help with the optimization process, because it helps to escape local minima.
3. There are some practical problems that do not require a lot of qubits. One example can be nitrogen fixation - an important industrial process (Honestly, it’s not directly about VQE, but you can read details in this paper).


---

**Reference:**

`1. Nielsen, Michael A., and Isaac Chuang. "Quantum computation and quantum information." (2002): 558-559.`

`2. Asfaw, Abraham, et al. "Learn quantum computation using qiskit." Accessed: Oct 24 (2020): 2020.`

`3. Susskind, Leonard, and Art Friedman. Quantum mechanics: the theoretical minimum. Basic Books, 2014.`
