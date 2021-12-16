---
leap: 13
title: Anytime Entry/Exit 
status: Draft
author: Sean Dawson (@SeanDaws)
created: 2021-12-10
---

<!--You can leave these HTML comments in your merged LEAP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new LEAPs. Note that a LEAP number will be assigned by an editor. When opening a p ull request to submit your LEAP, please use an abbreviated title in the filename, `leap-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

TODO

## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the LEAP is implemented, not *why* it should be done or *how* it will be done. If the LEAP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

TODO

##  Motivation
<!--This is the problem statement. This is the *why* of the LEAP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the LEAP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the LEAP will address the issue!-->

TODO

## Specification

<!--The specification should describe the syntax and semantics of any new feature, there are five sections
1. Overview
2. Rationale
3. Technical Specification
4. Test Cases
5. Configurable Values
-->

### Overview
<!--This is a high level overview of *how* the LEAP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

TODO

### Technical Specification
<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Lyra currently exposes or the creations of new ones.-->

TODO

#### Net Asset Value

| Name | Symbol | Description |
| ---- | ------ | ----------- |
| Free liquidity | \\(L\\) | Definition? |
| Delta hedging funds | \\(H\\) | Definition? |
| Short collateral | \\(C\\) | Definition? |
| Long Value | \\(V_{long}\\) | The sum over the prices of every strike/expiry? |
| Short Value | \\(V_{short}\\) | ditto |
| Total Pool Value | \\(P = L + H + C + V_{long} - V_{short}\\) | Pool Value |


#### TWAP Computation

For entry/exit calculations

| Name | Symbol | Description |
| ---- | ------ | ----------- |
| Vol sequence | \\(\sigma\\) | The sequence of base volatility observations recorded on the smart contracts. \\(\sigma_i\\) corresponds to the \\(i\\)'th entry. \\(\sigma_0\\) is initialised this way: TODO |
| Time sequence | \\(t\\) | \\(t_i\\) is the timestamp of observation \\(\sigma_i\\). |
| Average volatility | GWAV | \\[GWAV(t_a, t_b) \\ = \\ \left(\prod\_{i=a}^{b-1}{\sigma_i^{t_{i+1}-t_i}}\right)^{\frac{1}{t_b-t_a}} \\ = \\ e^\frac{q_b - q_a}{t_b - t_a} \\] |
| Accumulator | \\(q\\) | \\[ q_j = \sum\_{i=0}^{j-1}{(t_{i+1} - t_i)\ln(\sigma_i)}\\] |

Note that the accumulator is derived by taking the logarithm of the GWAV calculation, and it allows constant-time queries of the GWAV value over any interval.

































We begin with some definitions:

| Name | Symbol | Definition |
| ---- | ------ | ---------- |
| Number of calls | \\(N^{(C)}\_{short}\\), \\(N^{(C)}\_{long}\\) | The number of call options outstanding. |
| Number of puts | \\(N^{(P)}\_{short}\\), \\(N^{(P)}\_{long}\\) | The number of put options outstanding. |

The value of in a pool is composed of several components:


quoteBalance
+ baseBalance * basePrice
+ usedDeltaLiquidity
- reservedTokens




usedDeltaLiquidity                                                        // Amount used for hedging
usedCollatLiquidity = lockedCollat.quote + lockedCollat.base * basePrice  // Amount locked for selling options
reservedTokenValue                                                        // Amount queued for withdrawal
totalUsed = usedDeltaLiquidity + usedCollatLiquidity + reservedTokenValue // 

if (totalUsed >= totalPoolValue) {
	freeCollatLiquidity = freeDeltaLiquidity = 0
}

freeValue = totalPoolValue - totalUsed

collatPortion = totalPoolValue * collatPercentage

if ()

deltaPortion = totalPoolValue - collatPortion











| Name | Symbol | Definition |
| ---- | ------ | ---------- |
| Free liquidity | \(L\) | sUSD available to trade options against. |
| Delta hedging funds | \(H\) | ??? | 
| Short collateral | \(C\) | Collateral deposited by traders selling options to the pool. |
| Locked option collateral | \(M = N^{(C)}_{short} S + N^{(P)}_{short} K\) | Inaccessible funds held to pay out options. |
| 



There are 4 main components of the value of a pool.

1. Free liquidity (\(L\))
2. Delta Hedging Funds (\(H\))
3. Funds used to collateralise AMM short positions () (\(S\) is spot, \(K is strike\)) 
4. The value of open options (\(OL + OS\))











#### Deposit / Withdrawal

#### TWAP Computation

Suppose we have a number of observations 


#### Liquidity Circuit Breaker

#### Volatility Circuit Breaker






### Configurable Values
<!--Please list all values configurable under this implementation.-->

TODO

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
