---
title: Practical Byzantine Fault Tolerance (In Progress)
tags: Information
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

![Image](../assets/images/posts/PBFT/state_machine.png "PBFT State Machine")

PBFT is a fault tolerated algorithm, which will continue to work if up to 1/3 of machines fail in arbitrary ways. How to ensure that?

Let us image the worst case which the 1/3 of machines (we denote the number of machines as f) are all normal machines that fails now. However, we still have 1 + f normal machines which is still more than f malicous machines. Therefore, when processing request, normal machine will still take the lead, which means PBFT can work if network has f malicous machines.

On the other perspective, normal machines do not need to get all prevotes and precommits in the process, and they just need to wait to get 1 + 2f responses to trigger next move.

**Reference:**

`1. Hitesh Malviya, "Develop PBFT Consensus based application on tendermint.", Available at: https://itsblockchain.com/develop-pbft-consensus-based-application-on-tendermint/`