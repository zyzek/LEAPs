---
leap: 4
title: Incentivise Uniswap sUSD / Dai Round 2
status: Implemented
author: Ksett (@ksett7)
created: 2021-9-22
---

<!--You can leave these HTML comments in your merged LEAP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new LEAPs. Note that a LEAP number will be assigned by an editor. When opening a pull request to submit your LEAP, please use an abbreviated title in the filename, `leap-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
Distribute LYRA tokens to users who provide liquidity to the following pool:
This LEAP includes modified paramaters for V4.1

[Uniswap sUSD / Dai](https://optimistic.etherscan.io/address/0xa14e5b3ba5dd981b536e0950390b03972b795018)

This program will run from Monday, 27 September through Monday, October 4th.

V4.1  will run from Monday, 4th October through Monday, October 11th.

V4.2  will begin Monday, 11th October, end date to be determined by council with 72 hours notice to LP's.


## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the LEAP is implemented, not *why* it should be done or *how* it will be done. If the LEAP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->
LEAP-4 is intended to be a continuation of Lyra's liquidity mining program on Uniswap's sUSD/DAI pair.  Users who provide liquidity will receive LYRA tokens in proportion with
their share of the total liquidity. The tokens will be distributed on a date yet to be determined. This will likely be around the initial token distribution, which is planned to
occur in late October.


| Pool          | Weekly Rewards| Begining         | Ending           |
| ------------- | ------------- | ---------------- | ---------------- |
| [Uniswap sUSD / Dai](https://optimistic.etherscan.io/address/0xa14e5b3ba5dd981b536e0950390b03972b795018)| 150,000 LYRA | Monday 27 September 00:00 UTC | Monday 4 October 00:00 UTC |
| [Uniswap sUSD / Dai](https://optimistic.etherscan.io/address/0xa14e5b3ba5dd981b536e0950390b03972b795018)| 150,000 LYRA | Monday 4 October 00:00 UTC | Monday 11 October 00:00 UTC |
| [Uniswap sUSD / Dai](https://optimistic.etherscan.io/address/0xa14e5b3ba5dd981b536e0950390b03972b795018)| 112,500 LYRA | Monday 11 October 00:00 UTC | TBD |

## Motivation
<!--This is the problem statement. This is the *why* of the LEAP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the LEAP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the LEAP will address the issue!-->
[LEAP-3](https://leaps.lyra.finance/leaps/leap-3/), the first liquidity mining program, has been successful in migrating millions of sUSD liquidity over to L2 but the sUSD/DAI
peg has become an even greater issue.  sUSD demand skyrocked and both Lyra and Synthetix are doing what they can to move the peg closer to a 1/1 ratio.

Synthetix community has successfully lowered the c-ratio to 600 ([SCCP-137](https://sips.synthetix.io/sccp/sccp-137/)) and continues to work on launching the ETH wrapper and
diverting inflation from L1 ([SCCP-136](https://sips.synthetix.io/sccp/sccp-137/)).  While we wait for ETH wrapper or for an additional injection of sUSD liquidity from
synthetix, we can offer a new liquidity mining program with a lower range to work towards acheiving a liquid and stable peg ratio.  

Continuing LYRA rewards for a lower and symetrical liquidity range will provide incentive for stakers to migrate their debt from L1 to OE and for current LPs to sell some sUSD
for DAI or bring more DAI over from L1 to continue liquidity providing. This should lead to the following outcomes:

- Moving the upper bound of the liquidity range closer to the current market.
- Requiring equal parts sUSD/DAI to liquidity provide in the range.
- Reduce the cost of acquiring sUSD on OE for non snx stakers, enabling liquidity providers and traders from the broader community to access the platform.
- Reduce the time frame to allow more flexibility to change with market conditions.

## Specification
<!--The specification should describe the syntax and semantics of any new feature, there are five sections

### Overview
<!--This is a high level overview of *how* the LEAP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

Since the LYRA token is not live, it is not feasible to use the popular staking rewards contracts. Instead, rewards for the pool will be computed off-chain using a script that
determines the average liquidity provided by an address over the period. The work required in this LEAP is determining the eligibility criteria and implementing the script.

### Rationale
<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->


It is not easy to determine how many tokens to distribute without a market valuation. It is also still relatively difficult for stakers to move debt from L1 to L2. Given the
total supply of 1B tokens ([verifiable here](https://etherscan.io/token/0x01ba67aac7f75f647d94220cc98fb30fcc5105bf)), a distribution of 150,000 over one week for sUSD/DAI pool
represents a 20% decrease in lyra rewards from the previous two weeks layed out in LEAP-3. The decrease in rewards is to signal a desire to still incentivise the sUSD/DAI pool
to support Lyras user experience, but the intention to not do so in perpituity.  By running a one week program, we can observe:

- What happens to the sUSD/DAI ratio 
- How much the sUSD supply expands 
- What % of the sUSD supply goes to the Uniswap pool 
- What % of the sUSD supply goes to the ETH Market pool 

V4.1 will extend the existing liquidity mining program for an additional week while we continue to evaluate market forces and conditions. 

V4.2 will lower and tighten the trading range and extend the liquidity mining program for an additional week.  The rewards will continue to be reduced by an additional 10%, 18,750 LYRA each week while the program is in effect.  We will continue to evaluate market forces and conditions during this program. Council may change the range required to receive rewards at any time with 24 hours notice or discontinue the program at any time with 72 hours notice.  Any changes will be announced via discord

This information will help inform future incentive programs.



### Technical Specification
<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Lyra currently exposes or the creations of new ones.-->


Uniswap sUSD / Dai
```
Address: 0xA14e5b3BA5dd981b536E0950390b03972B795018
Amount: 150,000 LYRA
Start: 1632700800 
End: 1633305600
```

V4.1 Uniswap sUSD / Dai
```
Address: 0xA14e5b3BA5dd981b536E0950390b03972B795018
Amount: 150,000 LYRA
Start: 1633305600 
End: 1633910400
```

V4.2 Uniswap sUSD / Dai
```
Address: 0xA14e5b3BA5dd981b536E0950390b03972B795018
Amount: 112,500 LYRA
Start: 1633910400 
End: 1634558400
```

An algorithm will be used to determine the range to be eligible for the rewards, the selected ratio will be announced in Lyras discord channel.  Liquidity must be provided with the following bounds:
```
Current Ratio = Uniswap sUSD/DAI spot price snapshot 1 hour before the incetive launch
maxPrice = Current ratio + .05 (rounded to the nearest .01)
minPrice = 1 - (maxPrice - 1)
```
V4.1 will use the same range calculated using the algorithm in LEAP-4
```
Min price: 0.80012 DAI per sUSD (-2230 mintick)
Max price: 1.1996 DAI per sUSD (1820 maxtick)
```
V4.2 will use a lower and tighter range than V4.1
```
Min price: 0.8496 DAI per sUSD (-1640 mintick)
Max price: 1.1503 DAI per sUSD (1400 maxtick)
```

Although fixing the bounds reduces the flexibility afforded by Uniswap V3, it simplifies the logic for determining who is eligible to receive rewards. It will also ensure that people are providing liquidity on both sides of the market and not trying to game the rewards system by not making their liquidity active. The symetrical range attempts to entice current liquidity providers to swap their sUSD for DAI to remain in the pool as it will require roughly equal parts of both.  While users can easily bridge DAI to OE quite easily, its likely that these LPs already have as much liquidity on OE as their risk tolerance allows. 

The start and end period will be broken up into 3 hour chunks, where the following algorithm is applied:
```
1. Find all mint events at the pool address
2. Find all nft ids using transfer events that are at the same block number as the mint events
3. Find all "increaseLiquidity" events for the nfts in step 2
4. Find all "decreaseLiquidity" events for the nfts in step 2
5. Get "liquidity" per nft as at the snapshot period end block number
6. Get "owner" per nft as at the snapshot period end block number
7. Discard any nfts that were transfered or had liquidity modified between snapshot start and end block numbers
8. Allocate share of tokens for the snapshot period to each nft/owner
```

### Test Cases
<!--Test cases for an implementation are mandatory for LEAPs but can be included with the implementation..-->

The script will be open sourced and available for anyone to run and verify.

### Configurable Values
<!--Please list all values configurable under this implementation.-->

LEAP-4
```
Uniswap Rewards = 150,000
Uniswap Start = 1632700800
Uniswap End = 1633305600
```
V4.1
```
Uniswap Rewards = 150,000
Uniswap Start = 1633305600 
Uniswap End = 1633910400
```
V4.2 Uniswap sUSD / Dai
```
Uniswap Rewards: 112,500 
Start: 1633910400 
End: 1634558400
```




## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
