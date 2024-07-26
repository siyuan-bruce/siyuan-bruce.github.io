---
title: Empirical IO Learning Notes
tags: Econometrics IO
mathjax: true
mermaid: true
author: Si Yuan JIN
article_header:
  type: overlay
  theme: dark
  background_color: '#123'
  background_image: false
---

Reference: 
1. Kohei K. (2023). ECON5630 Topics in Empirical Industrial Organization. 
2. Aguirregabiria, V. (2021). Empirical industrial organization: models, methods, and applications. University of Toronto, Preliminary version.

Why am I writing this note? I am currently working on a research project with Professor Kohei Kawaguchi focused on Central Bank Digital Currency (CBDC). My role in this project involves handling the empirical analysis. To do this effectively, I need to become proficient in empirical industrial organization (IO) methods. This note serves as a summary of my learning journey, and I will be updating it regularly.

## Keywords and definitions
- What IO study is about? To understand the strategic interaction **between firms** in the market and its implications for **market power** and **market structure**.
- Market power: the ability of a firm, or group of firms, to gain extraordinary profits
above those needed to remunerate all the inputs at market prices.
  - Measurement: Lerner index, price-cost margin, markup.
- Market structure: the number of firms in the market and the share of each firm, the products they sell.
  - Measurement: concentration ratio, Herfindahl-Hirschman Index (HHI).

What is given? What is to be determined?

- The typical model in IO treats consumer demand, technology (or costs), and institutional features (beliefs) as given and studies how these exogenous factors determine endogenously market structure and firms market power.
- Firms' strategy: profit maximizing strategy;

Examples:
- Perfect competition: firms take prices as given;
- Perfect monopoly: firm takes demand as given;
- Oligopoly: firms take each other's strategies as given.

Empirical Industrial Organization (EIO) deals with the combination
of data, models, and econometric methods to answer empirical questions related
to the behavior of firms in markets.

Old EIO use industry-level data to estimate demand and cost functions. New EIO use micro-level data to estimate demand and cost functions.

In terms of data, variation is imporatnt.  what are
the main sources of sample variability in empirical studies in modern EIO?
- Multiple products;
- local markets;

## Structure models

Structure models typically have compoents: 1) a model of consumer behavior or demand; 2) a specification of frims' costs; 3) a static equailibrium model of firms' competition in prices or quantities; 4) a dynamic equilibrium model of firms' competition in prices or quantities; 5) a model of firm entry or exit in a market. 

The parameters of the model are structural in the sense that they describe consumer preferences, production technology, and institutional constraints.


## Coding practice for simulation
There are some common components in a simulation model setting around equilibrium.
1. exogenous
2. endogenous
3. shock
4. constant
5. parameter 

Exogenous variables are the variables that are determined outside the model. Endogenous variables are the variables that are determined inside the model. Shocks are the random variables that are not controlled by the model. Constants are the variables that are fixed in the model. Parameters are the variables that are estimated in the model.

When using variables in the models, we should get it from the equilibrium object. 

For exogenous variables, they are categrized into demand side and supply side. 

Exogenous and endogeous variables can be named in natural language, such as fund\_allocation. Constants can be named as capital letter, such as J, K. Parameters can be named as Greek letters, such as sigma. Shock can be named as Greek letters, such as mu.

