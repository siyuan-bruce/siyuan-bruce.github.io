---
title: Accounting and Information Theory
tags: Information
mathjax: true
author: Siyuan JIN
article_header:
  type: overlay
  theme: dark
  background_color: '#123'
  background_image: false
---
# Accounting and Information Theory

Information is defined in this context as a function of the two sets of probabilities: the one before the reception of the message and the other after it. Knowledge of the changes in the probabilities permits measurement of the amount of information contained in the message that induced these changes.

The function:

$$
h(p)=log\frac{1}{p}=-log(p)
$$

- The total amount of information received is independent of the order in which the messages arrive.
- not consider the information importance

Entropy is the expected information content:

$$
H=ph(p)+(1-p)h(1-p)
$$

- when p = 0 or 1, no information is expected from the message about occurrence of the event.

Financial statement preparation can be defined as a process of aggregation.

- It may be assumed that users of financial statements would in principle prefer to have access to detailed rather than aggregated figures in their decision making
- it is postulated that important or significant items should be disclosed in the financial statement while unimportant items may be aggregated.
- Attention is confined to the set of all admissible pairs, whose items may in principle be combined
- when to aggregate information
    - two items combined form a large fraction of a related total
    - two items are more equal to each other.
- The degree to which aggregation is objectionable will be measured by means of entropies.
- therefore, aggregation leads to a loss of information (pair of items (S))
    
    $$
    H-H^{\prime}=P_{S}H_{S}
    $$
    

The exposition of information concepts was in terms of probabilities, whereas the present analysis if formulated in shares of some total.

how to measure the degree to which it is objectionable

- The total information loss with two aggregation is

$$
P_{S}H_{S}+P_{T}H_{T}
$$

The aggregation Procedure

- admissible pair aggregation - from the **minimum to the maximum**
- need a decision about the **maximum allowable loss**
    - all aggregated into one - the entropy of the unaggregated items
    

The extent of aggregation in the financial statement is controlled by the specification of the total allowable loss (the cut-off point).

- The actual cut-off point may provide valuable piece of information
- The aggregation process can be programmed
- Further sophistication of the decision rule is possible
- The specification of the cut-off point for aggregation may be in percentages of the maximum loss rather than in bits.
- The information loss measure is objective and independent of the specifc aggregation procedure

The information measure enables one not only to compare alternative aggregation (ordinal measure) but also to quantify the difference between aggregations (cardinal measure).

Prerequisite

- The candidates for aggregation should already be determined
- that the relative size of the itesm is the only important factor in the aggregation decsion

Non-definite message computation (probability transformation from p to q):

$$
h(p)-h(q)=log\frac{q}{p}
$$

Explaination about information decrease:

- We get new information (p smaller than q)
- we know that E will occur

The expected information content of the non-definite message is then (Taylor expansion when p close to q):

$$
I=q_{1}log\frac{q_{1}}{p_{1}}+···+q_{1}log\frac{q_{n}}{p_{n}}=-\sum_{i=1}^{n}{q_{i}log(1+\frac{p_{i}-q_{i}}{q_{i}})} \\ =-\sum_{i=1}^{n}{q_{i}\frac{p_{i}-q_{i}}{q_{i}}}+\frac{1}{2}\sum_{i=1}^{n}{q_{i}(\frac{p_{i}-q_{i}}{q_{i}}})^2 + ··· \\ =\frac{1}{2}\sum_{i=1}^{n}{q_{i}(\frac{p_{i}-q_{i}}{q_{i}}})^2
$$

The assets information describes the behavior of individual asset items over the time spanned by the two balance sheets.

- Same if all the corresponding asset items differ at most by a proportionality factor

The liabilities information measure will indicate the degree to which corresponding liabilities deviated from proportional development in the period spanned by the two balance sheets. Informational analysis of liabilities differs from that of assets in one respect - the possible existence of negative items.

- The occurrence of negative items is rare and when such items are encoutered they may be bypassed by aggregating them with positive items.

Balance sheet information measure

|  | Assets | Liabilities | Total |
| --- | --- | --- | --- |
| Current | $$p_{11}$$ | $$p_{12}$$ | $$p_{1.}$$ |
| Fixed | $$p_{21}$$ | $$p_{22}$$ | $$p_{2.}$$ |
| Total | 1/2 | 1/2 | 1 |

Two ways of measuring information values:

- the information value between the groups
- the information values of the individual items within each group

The expected information of thse two sets of **fractions**:

$$
\sum_{i=1}^{2}\sum_{j=1}^{2}{q_{ij}log\frac{q_{ij}}{p_{ij}}}=\sum_{j=1}^{2}{q_{.j}}\sum_{i=1}^{2}{\frac{q_{ij}}{q_{.j}}log\frac{q_{ij}/q_{.j}}{p_{ij}/p_{.j}}} + \sum_{j=1}^{2}{q_{.j}}log\frac{q_{.j}}{p_{.j}}\\ = \frac{1}{2}\sum_{i=1}^{2}(2q_{i1})log\frac{2q_{i1}}{2p_{i1}} + \frac{1}{2}\sum_{i=1}^{2}(2q_{i2})log\frac{2q_{i2}}{2p_{i2}} \\=\text{one-half the assets information + one-half the liabilities information}
$$

The balance sheet information is equal to the arithmetic mean of the assets information and the liabilities information

---

Time horizon decomposition

$$
\sum_{i=1}^{2}\sum_{j=1}^{2}{q_{ij}log\frac{q_{ij}}{p_{ij}}}=\sum_{i=1}^{2}{q_{i.}}\sum_{j=1}^{2}{\frac{q_{ij}}{q_{i.}}log\frac{q_{ij}/q_{.i}}{p_{ij}/p_{.i}}} + \sum_{i=1}^{2}{q_{i.}}log\frac{q_{i.}}{p_{i.}}
\\ = \text{weighted means of current items information and fixed items information} \\ \text{+ time-horizon information}
$$

time-horizon information concerned with the changes in the relative positions of all current items

- The first term discriminates between assets  and liabilities.
- Current items information
    - i = 1
- Fixed items information
    - i = 2
    - measures the degree of change over time in the ratio of fixed assets to fixed liabiltiies

---

Informational measures compared with Financial Ratios

Virtually all financial ratios are “measures of level”. The informational measures disccused here are measures of variability. Information measurs are dynamic, whereas financial ratios are static.

Informational measures are more powerful than financial ratios because of their disaggregation properties.

Information measures are distance measures and hence are directionless. Financial ratios indicate neither distance nor direction.

Information measure can be used to predict financial failure:

- Financial failure was defined as the **inability** of a firm to pay its financial obligations as they mature.

---

Budgets are made for two major purposes: planning and control. Planning refers to the selection of future goals and the provision of adequate means to attain these goals. Control embraces all managerial actions to achieve conformity with the plans.

Their causes are traced to: 

- determine responsibility for the unattained goals
- correct processes that got out of control
- imporve future forecasts.

**Summarizing measures** useful in handling complicated budgets and in analyzing mass data.

sets of fractions by the familiar procedure of dividing each individual item by the total. We obtain a set of **predicted** fractions, denoted by $$p_{1},p_{2},···p_{n}$$, and a set of **realized** fractions, denoted by $$p_{1},p_{2},···p_{n}$$. Application of the expected information to the two sets of fractions provides us with the information inaccuracy

$$
I=\sum_{i=1}^{n}{q_{i}log\frac{q_{i}}{p_{i}}}
$$

which is a measure for the quality of the forcast.

- **The information inaccuracy** will be infinite when $$q_{i}>p_{i}=0$$, which means **the prediction error** is infinitely large.

The information content of realization message is in fact equivalent to the **inaccurancy of the forecast** because the more inaccurate the forecast the larger the surprise caused to the forecaster, hense the larger the information content of the message about realizations.

**The information inaccuracy** is equal to the sum of the squared relative prediction errors weighted by the realized fractions q. (Tylor Expansion)

When deviation is due to general causes which equally affect each area, the information inaccuracy would be zero. which means decomposition is redundant.

Information measures or inaccuracy can be used to evaluate the accuracy of budgets:

- A measure for the quality of forecasts.

**Bivariabte** information inaccuracy

$$
I(X,Y)=\sum_{i=1}^{m}\sum_{j=1}^{n}{q_{ij}log\frac{q_{ij}}{p_{ij}}}
$$

The difference between the bivariate inaccuracy measure and the univariate marginal inaccuracy of the rows:

$$
\sum_{i=1}^{m}\sum_{j=1}^{n}{q_{ij}log\frac{q_{ij}}{p_{ij}}}-\sum_{i=1}^{m}q_{i}log\frac{q_{i}}{p_{i}} = \sum_{i=1}^{m}{q_{i}}\sum_{j=1}^{n}{({log\frac{q_{ij}}{p_{ij}}}-log\frac{q_{i}}{p_{i}})}
$$

This conditional measure enables us to analyze seperately the rediction errors within each row.

Similarly, we can also measure the information inaccuracies within each column.

$$
I(X,Y)=I(X)+I(Y|X)
$$

---

**Mutual information measure**:

$$
h_{ij}=log\frac{p_{ij}}{p_{i.}p_{.j}}
$$

refers to specific cell to measure dependence

Assumption: **h is same over time.**

The degree of deviation between the **actual fraction of products** and the independence fraction is caused by the business characterstics related to the specific product and the specific location of customers.

The Two-Stage **Forcasting** Method

The predicted fraction should conform with the marginals:

$$
\sum_{j=1}^{n}{\hat{p_{ij}}}=p_{i.}, \sum_{i=1}^{n}{\hat{p_{ij}}}=p_{.j}
$$

Based on the assumption of **constant mutual information values**, we derive a prediction of the joint fractions as follows:

$$
p_{ij}\prime=\frac{p_{i.}p_{.j}}{q_{i.}q_{.j}}q_{ij}
$$

We need to adjust the value since the sum should be one.

$$
p_{ij}\prime\prime=\frac{p_{ij}\prime}{\sum_{h=1}^{m}\sum_{k=1}^{n}p_{hk}\prime}
$$

The p should be changed to satisfy the marginal constraints. Therefore, we **minimize** the following information ainaccuracy:

$$
\sum_{i=1}^{m} \sum_{j=1}^{n}{ p_{ij}\prime\prime log \frac{p_{ij}\prime\prime}{\hat{p_{ij} } }} \\ subject: \sum_{j=1}^{n}{\hat{p_{ij}}}=p_{i.}, \sum_{i=1}^{n}{\hat{p_{ij}}}=p_{.j}
$$

---

**Continuous Variable**

The entropy of a continuous distribution is defined as 

$$
H=-\int_{-\inf}^{\inf}{f(x)logf(x)dx}
$$

if f(x) is normal distributed, then:

$$
H=\frac{1}{2}log2\pi e \sigma^{2}
$$

a change from x to hx leads to a new value of the entropy:

$$
H=\frac{1}{2}log2\pi e \sigma^{2}+logk
$$

prediction error is of the form $$P(\tau)$$ is the peak demand which will occur in month t; $$\tau$$ is the time prior to t.)

$$
e_{t}(\tau) = log\frac{P_{t}(\tau)}{A_{t}}
$$

Information gain:

$$
H[e_{t}(\tau)]-H[e_{t}(\tau-m)]
$$

Information Theory and **Markov** Processes

- estimate the allowance for **doubtful** accounts
- select a portfolio of **credit risks**
- calculate depreciation where **assets** are **aggregated** into groups

Benefits

- **Uncertainty** about a Markov process can be measured by its entropy.
- Successful application of Markov models depends on stability. The expected information measure may be used to summarize the **instability** of the transition probabilities.