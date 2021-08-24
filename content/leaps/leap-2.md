---
leap: 2
title: Launch Ethereum Market on Optimistic Ethereum
status: Proposed
author: Michael Spain (@mjs-12)
created: 2021-08-23
---

<!--You can leave these HTML comments in your merged LEAP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new LEAPs. Note that a LEAP number will be assigned by an editor. When opening a pull request to submit your LEAP, please use an abbreviated title in the filename, `leap-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->
Launch the Ethereum market on the Optimistic Ethereum mainnet.

## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the LEAP is implemented, not *why* it should be done or *how* it will be done. If the LEAP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

This LEAP proposes launching the Ethereum market on the Optimistic Ethereum (OΞ) mainnet. It also proposes beginning a two week liquidity round, with 500k sUSD provided by the LyraDAO. There will be a 14 day and 7 day expiry each with 7 strikes available to trade.

The market will not be delta hedged as Synthetix shorting is not live on OΞ.

## Motivation
<!--This is the problem statement. This is the *why* of the LEAP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the LEAP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the LEAP will address the issue!-->
Lyra has been designed for OΞ. It goes without saying that deploying on OΞ mainnet is an essential step for the project. In order to deploy, projects need to be whitelisted. There are several criteria that need to be satisfied:

- [Testnet](https://blog.lyra.finance/lyra-testnet/)
- [Open source](https://github.com/lyra-finance/lyra-protocol)
- [Audits](https://github.com/lyra-finance/lyra-protocol/tree/master/audits)

Recently, the core team received clearance from the Optimism team to deploy. This LEAP will describe the process by which the Ethereum market will be launched.

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
The work required to implement v1 of the Lyra Protocol has been completed and is viewable [here](https://github.com/lyra-finance/lyra-protocol). This LEAP decsribes the process of deploying the relevant smart contracts, adding liquidity and creating the listings.

### Rationale
<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
This LEAP proposes launching only the Ethereum market, to allow for close monitoring of the performance of the mechanism, contracts and parameters. Adding additional markets will be addressed in separate LEAPs, as confidence is built in the system.

### Technical Specification
<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Lyra currently exposes or the creations of new ones.-->
There are three steps required, deploying the smart contracts, adding liquidity and creating the listings.

#### 1. Deploy Smart Contracts

Deploy the following system wide contracts:
```
BlackScholes.sol
LyraGlobal.sol
```

Then deploy the following contracts for the Ethereum market:
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


#### 2. Deposit Liquidity

Add 500,000 sUSD to the `LiquidityPool` from Lyra's L2 DAO wallet.

#### 3. Add Options

Add the following OptionBoard, expiring 14 days from launch:
```
expiry=1631059200
baseIv=
strikes=
skews=
```

This will set `OptionMarket.maxExpiryTimestamp == 1631059200` and initiate a two week round in which liquidity cannot enter or exit.

Add the following OptionBoard, expiring 7 days from launch:
```
expiry=1630454400
baseIv=
strikes=
skews=
```

### Test Cases
<!--Test cases for an implementation are mandatory for LEAPs but can be included with the implementation..-->
Test cases are included with the implementation and are available [here](https://github.com/lyra-finance/lyra-protocol)

### Configurable Values
<!--Please list all values configurable under this implementation.-->
The following values are configurable for the Ethereum market. The core team has proposed the initial configuration.

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
