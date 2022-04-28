---
title: Quantum Neural Network Get Started
tags: QuantumComputing
mathjax: true
author: Si Yuan JIN
article_header:
  type: overlay
  theme: dark
  background_color: '#123'
  background_image: false
---

## Content
1. Quantum Neural Network Overview
2. Quantum Neural Network Data Loading
3. Quantum Neural Network Forward
4. Quantum Neural Network Backward
5. Quantum Neural Network Measurement
6. Qiskit Implementation

---
## 1. Quantum Neural Network Overview

A typtical quantum neural network includes four steps:

- Step 1: Encode the classical data into a quantum state

- Step 2: Apply a parameterized model

- Step 3: Measure the circuit to extract labels

- Step 4: Use optimization techiiques to update model parameters

Before we dig into the details, we first clarity several concepts:
### 1.1 What is parameterized model
Parameterized circuit has three names:
- Parameterized quantum circuit
- Ansatz
- Variational Circuit

All of them refer to the same thing, which is a circuit that contains some variational paramters.

## 2. Quantum Neural Network Data Loading
We introduce three methods to encode data:

### 2.1 Basis encoding
This refers to encode data into computational basis states.

For example, if $x_{1} = 01$ and $x_{2} = 10$, we can use a two-qubit quantum state that is a superposition of state $\vert 01\rangle$ and $\vert 10\rangle$.

### 2.2 Amplitude Encoding

This refers to encode data into amplititudes.

For example, if a vector is $[1,1,0,1]$, we can use a two-qubit quantum state that is a superposition of state $\vert 00\rangle$, $\vert 01\rangle$, $\vert 11\rangle$ with equal weights.

### 2.3 Angle Encoding

This refers to encode data into rotation angle. We can see the following figure that encodes $x_{1}$, $x_{2}$, $x_{3}$ on the circuit.

<img src="https://jsybruce.github.io/Homepage/assets/images/posts/QuantumNeuralNetowrk/angleEncoding.jpg" alt="drawing" width="600"/>


## 3. Quantum Neural Network Forward
We combine Qiskit to explain how neural network forwards to the final cost function.

The following circuit uses a Hardmard gate, followed by a Rotation-Y and Rotation-X. The input and weight is encoded as angle to these two operations.

<img src="https://jsybruce.github.io/Homepage/assets/images/posts/QuantumNeuralNetowrk/NNForward.png" alt="drawing" width="600"/>

We then introduce Cost function to the circuit. The tutorial use a PauliSUmOp as the cost function, which means the Z and X operator will be used as the measurement operator to the final result. Both operator will times 1 and add together.

```py
# construct cost operator
H1 = StateFn(PauliSumOp.from_list([("Z", 1.0),("X", 1.0)]))
```

We will get the expectation value of neural network cost.

The overall circuit construction looks like the following:

```py
import numpy as np

from qiskit import Aer, QuantumCircuit
from qiskit.circuit import Parameter
from qiskit.circuit.library import RealAmplitudes, ZZFeatureMap
from qiskit.opflow import StateFn, PauliSumOp, AerPauliExpectation, ListOp, Gradient
from qiskit.utils import QuantumInstance, algorithm_globals
from qiskit_machine_learning.neural_networks import OpflowQNN

algorithm_globals.random_seed = 42

# set method to calculcate expected values
expval = AerPauliExpectation()

# define gradient method
gradient = Gradient()

# define quantum instances (statevector and sample based)
qi_sv = QuantumInstance(Aer.get_backend("aer_simulator_statevector"))

# we set shots to 10 as this will determine the number of samples later on.
qi_qasm = QuantumInstance(Aer.get_backend("aer_simulator"), shots=10)

# construct parametrized circuit
params1 = [Parameter("input1"), Parameter("weight1")]
qc1 = QuantumCircuit(1)
qc1.h(0)
qc1.ry(params1[0], 0)
qc1.rx(params1[1], 0)
qc_sfn1 = StateFn(qc1)

# construct cost operator
H1 = StateFn(PauliSumOp.from_list([("Z", 1.0), ("X", 1.0)]))

# combine operator and circuit to objective function
op1 = ~H1 @ qc_sfn1
print(op1)

# construct OpflowQNN with the operator, the input parameters, the weight parameters,
# the expected value, gradient, and quantum instance.
qnn1 = OpflowQNN(op1, [params1[0]], [params1[1]], expval, gradient, qi_sv)

```

Now let's test some parameters to see how it functions.

### Case 1: input = 0, weight = 0

```py
input1 = np.array([0])
weights1 = np.array([0])
# Use Aer's qasm_simulator
simulator = QasmSimulator()
#reproduce the circuit
qc1 = QuantumCircuit(1)
qc1.h(0)
qc1.ry(input1[0], 0)
qc1.rx(weights1[0], 0)
qc1.save_statevector() # Save statevector
qobj = assemble(qc1)
state = sim.run(qobj).result().get_statevector() # Execute the circuit
print(state)        
Result: [0.70710678+0.j 0.70710678+0.j] 
```

Here we get a qubit's statevector instead of the Bloch vector. The state vector is 

$$\vert q\rangle = 0.70711\vert 0\rangle + 0.70711\vert 1\rangle$$

THe bloch vector is shown in the below figure:
<img src="https://jsybruce.github.io/Homepage/assets/images/posts/QuantumNeuralNetowrk/bloch1.png" alt="drawing" width="600"/>

As you can see, the bloch vector is 

$$[1,0,0]$$

Now, we need to consider what is the cost value now?

The cost is a sum of two operators Z and X.

We think from a projection perspective, $[1,0,0]$ has projection on Z with value of 0 and has projection on X with value of 1. The final result should be 1. 

Let's verify it.

```py
# QNN batched forward pass
qnn1.forward(input1, weights1)
array([[1.]])
```

The result is exactly 1. But if we think from state vector, we may not be able to get 1 easily.

### Case 2: Input = 2/pi, weight = 0
```py
input1 = np.array([np.pi/2])
weights1 = np.array([0])
# Use Aer's qasm_simulator
simulator = QasmSimulator()
#reproduce the circuit
qc1 = QuantumCircuit(1)
qc1.h(0)
qc1.ry(input1[0], 0)
qc1.rx(weights1[0], 0)
qc1.save_statevector() # Save statevector
qobj = assemble(qc1)
state = sim.run(qobj).result().get_statevector() # Execute the circuit
print(state)
[0.+0.j 1.+0.j]         
```
Neural Network Forward - result:
```py
# QNN batched forward pass
qnn1.forward(input1, weights1)
array([[-1.]])
```
We also draw the bloch sphere here:
<img src="https://jsybruce.github.io/Homepage/assets/images/posts/QuantumNeuralNetowrk/bloch2.png" alt="drawing" width="600"/>

The bloch vector is 
$$[0,0,-1]$$

With the same projection idea, we can know the cost is -1. 

Now we know how neural network forwards and we can compute the exact cost value by ourselves.


### 3. Quantum Neural Network Backward




**Reference:**

`1. Nielsen, Michael A., and Isaac Chuang. "Quantum computation and quantum information." (2002): 558-559.`

`2. Qiskit Quantum Neural Network Tutorial (https://qiskit.org/documentation/machine-learning/tutorials/01_neural_networks.html)`