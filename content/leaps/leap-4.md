---
leap: 4
title: Launch LINK Market
status: Proposed
author: Nick Forster (@nickf24)
created: 2021-09-21
---

<!--You can leave these HTML comments in your merged LEAP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new LEAPs. Note that a LEAP number will be assigned by an editor. When opening a pull request to submit your LEAP, please use an abbreviated title in the filename, `leap-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->
Launch the LINK market on the Optimistic Ethereum mainnet.

## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the LEAP is implemented, not *why* it should be done or *how* it will be done. If the LEAP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

This LEAP proposes launching the LINK market on the Optimistic Ethereum (OΞ) mainnet. A two week liquidity round will be initiated, with 200,000 LYRA incentivizing a 2 week round. Two boards will be created, expiring on the 1st of October and the 8th of October (both at 8am UTC time). Each board will have seven strikes listed.

## Motivation
<!--This is the problem statement. This is the *why* of the LEAP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the LEAP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the LEAP will address the issue!-->
Lyra's AMM mechanism generalizes to any asset with a liquid spot market. sLINK is now tradeable on Synthetix's Optimistic Ethereum (OΞ) deployment, and currently Lyra only offers options on ETH. 

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
The work required to implement v1 of the Lyra Protocol has been completed and is viewable [here](https://github.com/lyra-finance/lyra-protocol). This section describes the process of deploying the relevant smart contracts, adding liquidity and creating the listings. The process will only differ in that there is currently no liquid LINK options market in existence, so the initalizations of the board will be determined by the core team, with input from the commmunity. 

### Rationale
<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
This LEAP proposes launching the LINK market alongside the ETH market. The ETH markets have been live for almost a month, and the Lyra mechanism is performing as intended. The AMM was designed to generalize to any ERC-20 assets with a liquid spot market, and LINK fits these requirements. Moreover, given Chainlink's early presence on OΞ and their thriving community, it stands to reason that interest and demand for LINK options will be high. The LINK market (like the ETH market) will be launched without delta hedging, as Synthetix shorting is not live on OΞ. The progress on shorting can be tracked in [SIP-135](https://sips.synthetix.io/sips/sip-135).

### Technical Specification
<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Lyra currently exposes or the creations of new ones.-->

#### 1. Liquidity

Liquidity sourcing and possible rewards will be discussed by the Council prior to market launch. 

#### 2. Options Quoted
Options will be listed with 7 and 14 days from launch expiries. Longer dated expirations are desirable, but not feasible before the Optimism regenesis timelines are determined. 

### Test Cases
<!--Test cases for an implementation are mandatory for LEAPs but can be included with the implementation..-->
Test cases are included with the implementation and are available [here](https://github.com/lyra-finance/lyra-protocol/tree/master/test)

### Configurable Values
<!--Please list all values configurable under this implementation.-->
Configurable values will be determined by the core team, in consultation with the community, prior to market launch. 


## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
