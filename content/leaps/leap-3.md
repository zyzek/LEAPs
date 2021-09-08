---
leap: 3
title: Incentivise Uniswap sUSD / ETH and Lyra ETH market
status: Proposed
author: Michael Spain (@mjs-12)
created: 2021-08-23
---

<!--You can leave these HTML comments in your merged LEAP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new LEAPs. Note that a LEAP number will be assigned by an editor. When opening a pull request to submit your LEAP, please use an abbreviated title in the filename, `leap-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->
Distribute LYRA tokens to users who provide liquidity to the following pools:
- [Uniswap sUSD / ETH](https://optimistic.etherscan.io/address/0xa194977b416f082f71a0362041b57208c91ee1c1)
- [Lyra ETH](https://optimistic.etherscan.io/address/0x7af4e1ce484f40d927b9c90fb6905df4376fc3f6)

This will be a trial program running form Monday 13 September to Friday 1 October. LYRA rewards will be distributed when the token is officially launched.

## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the LEAP is implemented, not *why* it should be done or *how* it will be done. If the LEAP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->
This LEAP proposes incentivising users to provide liquidity to the following pools.

| Pool        | Reward      | Beginning | Ending |
| ----------- | ----------- | ----------- | ----------- |
| [Uniswap sUSD / ETH](https://optimistic.etherscan.io/address/0xa194977b416f082f71a0362041b57208c91ee1c1) | 375,000 LYRA | Monday 13 September 00:00 UTC | Monday 27 September 00:00 UTC |
| [Lyra ETH](https://optimistic.etherscan.io/address/0x7af4e1ce484f40d927b9c90fb6905df4376fc3f6)| 375,000 LYRA | Friday 17 September 09:00 UTC | Friday 1 October 09:00 UTC |

Users who provide liquidity to either pool will receive LYRA tokens in proportion with their share of the total liquidity. Rewards will be determined using a script posted on [github](https://github.com/lyra-finance). The script is under active development and will be open sourced when ready.

The tokens will be distributed at a date yet to be determined. This will likely be at the initial token distribution, which is still being planned. For the sake of transparency, current estimates are that this will happen some time in October.



## Motivation
<!--This is the problem statement. This is the *why* of the LEAP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the LEAP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the LEAP will address the issue!-->
The first round finishedd succesfully but with only 500,000 sUSD in liquidity the trading experience is far from ideal. Due to the collateralisation requirements, it is only possible for the AMM to sell around 150 options. As such, slippage was set high, discouraging large trades. Traders have also struggled to acquire sUSD through Uniswap without incurring substantial slippage.

With only 8 million sUSD on OE, it is clear that we need to increase the sUSD supply. Our community is aligned with SNX here, who are currently pursuing three routes:
- Divert inflation from L1 ([SCCP-1336](https://sips.synthetix.io/sccp/sccp-136))
- Lower the c-ratio ([SCCP-137](https://sips.synthetix.io/sccp/sccp-137))
- Launch the ETH wrapper

Introducing LYRA rewards will provide a direct incentive for more stakers to move to OE.

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
Since the LYRA token is not live, it is not feasible to use the popular staking rewards contracts. Instead, rewards for both pools will be computed off-chain using a script that determines the average liquidity provided by an address over the period. The work required in this LEAP is determining the eligibility criteria and implementing the script.

### Rationale
<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
It is difficult to determine how many tokens to distribute without a market valuation. It is also still relatively difficulty for stakers to move debt from L1  to L2. By running a two week trial, we can see how the market reacts and update future programs with this knowleddge.

The Uniswap pool rewards begin before the ETH market rewards. This is to allow the pool of available sUSD on OE to increase, enabling prospective Lyra LPs who are not SNX holders to swap ETH for sUSD in the Uniswap pool.

### Technical Specification
<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Lyra currently exposes or the creations of new ones.-->

The total supply of Lyra tokens is 1,000,000,000. The contract can be viewed [here](https://etherscan.io/address/0x01ba67aac7f75f647d94220cc98fb30fcc5105bf).

#### Uniswap sUSD / ETH

```
Amount: 375,000 LYRA
Start: 1631491200
End: 1632700800
```

To be eligible for the rewards, liquidity must be provided with the following bounds:
```
950 < minPrice < 1050
7950 < maxPrice < 8050
```

Although this reduces the flexibility afforded by Uniswap V3, it simplifies the logic for determining who is eligible to receive rewards. This is important since the script is off-chain and has centralisation risks that contracts do not. It will also ensure that  people are providing liquidity on both sides of the market and not trying to game the rewards system by not making their liquidity active.

The algorithm for the script is as follows:
```
1. Find all mint events at the pool address for ETH:sUSD 0.3% fee rate
2. Find all nft ids using transfer events that are at the same block number as the mint events
3. Find all "increaseLiquidity" events for the nfts in step 2
4. Find all "decreaseLiquidity" events for the nfts in step 2
5. Get "liquidity" per nft as at the snapshot period end block number
6. Get "owner" per nft as at the snapshot period end block number
7. Discard any nfts that were transfered or had liquidity modified between snapshot start and end block numbers
8. Allocate share of tokens for the snapshot period to each nft/owner
```

#### Lyra ETH Market

```
Amount: 375,000 LYRA
Start: 1631869200
End: 1633078800
```

To be eligible for the rewards, sUSD must be deposited before the start of the round. Only active liquidity will be rewarded.

### Test Cases
<!--Test cases for an implementation are mandatory for LEAPs but can be included with the implementation..-->
Test cases for this LEAP will be provdied with the script.

### Configurable Values
<!--Please list all values configurable under this implementation.-->
```
Uniswap Rewards = 375,000
Uniswap Start = 1631491200
Uniswap End = 1632700800

Lyra Rewards = 375,000
Lyra Start = 1631869200
Lyra End = 1633078800
```

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
