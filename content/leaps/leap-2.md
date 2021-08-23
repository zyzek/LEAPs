---
leap: 2
title: Deploy ETH Market to Optimism Mainnet
status: Proposed
author: Michael Spain (@mjs-12)
created: 2021-08-23
---

<!--You can leave these HTML comments in your merged LEAP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new LEAPs. Note that a LEAP number will be assigned by an editor. When opening a pull request to submit your LEAP, please use an abbreviated title in the filename, `leap-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->
Deploy the Ethereum market to Optimism Mainnet.

## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the LEAP is implemented, not *why* it should be done or *how* it will be done. If the LEAP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

This LEAP proposes deploying the Lyra Protocol to Optimism Mainnet, with all the contracts needed to support an Ethereum Option Market. Two expiries will be added, 14 days and 7 days. The LyraDAO will provide $1M sUSD as liquidity for the first round.

This market will not be delta hedged. Synthetix needs to deploy the shorting mechanism before delta hedging can be enabled.

## Motivation
<!--This is the problem statement. This is the *why* of the LEAP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the LEAP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the LEAP will address the issue!-->
Lyra has been designed for Optimism. It goes without saying that deploying to Optimism Mainnet is a crucial step forward for the project. Currently, deploying to mainnet requires being whitelisted. There are several important critera that need to be satisfied:

- [Testnet](https://blog.lyra.finance/lyra-testnet/)
- [Open source](https://github.com/lyra-finance/lyra-protocol)
- [Audits](https://github.com/lyra-finance/lyra-protocol/tree/master/audits)

Recently, the core team received clearance from Optimism to deploy to mainnet. Now that we have clearance, this LEAP will describe the process by which the protocol will be deployed.

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
The work required to implement v1 of the Lyra Protocol has been completed and is viewable [here](https://github.com/lyra-finance/lyra-protocol). This LEAP decsribes the process of deploying the relevant smart contracts needed for an Ethereum Market.

### Rationale
<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
This LEAP proposes launching only the Ethereum market, to allow for close monitoring of the performance of the mechanism, contracts and parameters.

### Technical Specification
<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Lyra currently exposes or the creations of new ones.-->
There are two steps required, deploying the smart contracts and creating the listings.

#### 1. Deploy Smart Contracts

Deploy the following system wide contracts:
```
BlackScholes.sol
LyraGlobal.sol
```

These contracts only need to be deployed once and will be reused by subsequent markets. Then deploy the following contracts for the Ethereum Market:
```
LiquidityPool.sol
LiquidityCertificate.sol
OptionMarket.sol
OptionMarketPricer.sol
OptionGreekCache.sol
ShortCollateral.sol
PoolHedger.sol
```

Descriptions of these contracts can be found [here](https://docs.lyra.finance/implementation/lyra-protocol-architecture).

#### 2. Add Options

Add the following OptionBoard, expiring 14 days from launch:
```
expiry=
baseIv=
strikes=
skews=
```

Add the following OptionBoard, expiring 7 days from launch:
```
expiry=
baseIv=
strikes=
skews=
```

### Test Cases
<!--Test cases for an implementation are mandatory for LEAPs but can be included with the implementation..-->
Test cases are included with the implementation and are available [here](https://github.com/lyra-finance/lyra-protocol)

### Configurable Values
<!--Please list all values configurable under this implementation.-->
The following values are configurable for the Ethereum Option Market. The core team has proposed the initial configuration.

```
optionPriceFeeCoefficient = 0.015
spotPriceFeeCoefficient = 0.004
vegaFeeCoefficient = 400
vegaNormFactor = 0.2
standardSize = 0.5
skewAdjustmentFactor = 0.0125
rateAndCarry = 0
minDelta = 0.15
volatilityCutoff = 0.60
quoteKey = sUSD
baseKey = sETH
```

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
