---
title: Practical Byzantine Fault Tolerance (In Progress)
tags: Blockchain, Consensus
mathjax: true
author: Si Yuan JIN
article_header:
  type: overlay
  theme: dark
  background_color: '#123'
  background_image: false
---
# Practical Byzantine Fault Tolerance (In Progress)
Recently, I found a figure about PBFT state machine which describes how the network processes request [1]. 

![Image](/assets/images/posts/PBFT/state_machine.png "PBFT State Machine")

PBFT is a fault tolerated algorithm, which will continue to work if up to $$1/3$$ of machines fail in arbitrary ways. How to ensure that?

Let us imagine the worst case in which the $$1/3$$ of machines (we denote the number of machines as $$f$$) are all normal machines that fail now. However, we still have $$1 + f$$ normal machines, which is still more than f malicious machines. Therefore, when processing the request, normal machines will still take the lead, which means PBFT can work if the network has $$f$$ malicious machines.

On the other hand, normal machines do not need to get all prevotes and precommits in the process; they just need to wait to get $$1 + 2f$$ responses to trigger the next move.

We can formally prove why the number is $$1/3$$. Let us assume we have a network of $$n$$ machines, and the network can function well if $$f$$ machines are malicious. Therefore we have $$n - f$$ normal machines.

Then to make sure the network can function well, we need to know how many votes are needed in each round, denoted as $$X$$. 

To make sure that the decision is right, normal machines should be more than malicious machines at decisions:

$$
X>\frac{n-f}{2} + f
$$

And we know that X should satisfy the following condition:

$$
X \leq n
$$

Combining the above two inequalities, we can get:
$$
n>3f
$$

**Reference:**

`1. Hitesh Malviya, "Develop PBFT Consensus based application on tendermint.", Available at: https://itsblockchain.com/develop-pbft-consensus-based-application-on-tendermint/`