LEAP: 4
title: Incentivise Uniswap sUSD / Dai Round 2
status: Draft
author: Ksett
created: 2021-9-22
requires (*optional): <LEAP number(s)>
---

<!--You can leave these HTML comments in your merged LEAP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new LEAPs. Note that a LEAP number will be assigned by an editor. When opening a pull request to submit your LEAP, please use an abbreviated title in the filename, `leap-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
Distribute LYRA tokens to users who provide liquidity to the following pool:

[Uniswap sUSD / Dai](https://optimistic.etherscan.io/address/0xa14e5b3ba5dd981b536e0950390b03972b795018)

This program will run from Monday, 27 September through Monday, October 4th.

## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the LEAP is implemented, not *why* it should be done or *how* it will be done. If the LEAP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->
LEAP-4 is intended to be a continuation of Lyra's liquidity mining program on Uniswap's sUSD/DAI pair.  Users who provide liquidity will receive LYRA tokens in proportion with
their share of the total liquidity. The tokens will be distributed on a date yet to be determined. This will likely be around the initial token distribution, which is planned to
occur in late October.

| Pool          | Reward        | Begining         | Ending           |
| ------------- | ------------- | ---------------- | ---------------- |
| [Uniswap sUSD / Dai](https://optimistic.etherscan.io/address/0xa14e5b3ba5dd981b536e0950390b03972b795018)| 187,500       | Monday 27 September | Monday 4 October |
|               | LYRA          | 00:00 UTC        | 00:00 UTC        |


## Motivation
<!--This is the problem statement. This is the *why* of the LEAP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the LEAP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the LEAP will address the issue!-->
[LEAP-3](https://leaps.lyra.finance/leaps/leap-3/), the first liquidity mining program, has been successful in migrating millions of sUSD liquidity over to L2 but the sUSD/DAI
peg has become an even greater issue.  sUSD demand skyrocked and both Lyra and Synthetix are doing what they can to move the peg closer to a 1/1 ratio.

Synthetix community has successfully lowered the c-ratio to 600 ([SCCP-137](https://sips.synthetix.io/sccp/sccp-137/)) and continues to work on launching the ETH wrapper and
diverting inflation from L1 ([SCCP-136](https://sips.synthetix.io/sccp/sccp-137/)).  While we wait for ETH wrapper or for an additional injection of sUSD liquidity from
synthetix, we can offer a new liquidity mining program with a lower range to work towards acheiving a liquid and stable peg ratio.  

Continuing LYRA rewards for a lower and symetrical liquidity range will provide incentive for stakers to migrate their debt from L1 to OE and for current LPs to sell some sUSD
for DAI or bring more DAI over from L1 to continue liquidity providing. This should lead to the following outcomes:

Moving the upper bound of the liquidity range closer to the current market. 
Requiring equal parts sUSD/DAI to liquidity provide in the range. 
Reduce the cost of acquiring sUSD on OE for non snx stakers, enabling liquidity providers and traders from the broader community to access the platform. 
Reduce the time frame to allow more flexibility to change with market conditions 


## Specification
<!--The specification should describe the syntax and semantics of any new feature, there are five sections

### Overview
<!--This is a high level overview of *how* the LEAP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

Since the LYRA token is not live, it is not feasible to use the popular staking rewards contracts. Instead, rewards for the pool will be computed off-chain using a script that
determines the average liquidity provided by an address over the period. The work required in this LEAP is determining the eligibility criteria and implementing the script.

### Rationale
<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->


It is not easy to determine how many tokens to distribute without a market valuation. It is also still relatively difficult for stakers to move debt from L1 to L2. Given the
total supply of 1B tokens (verifiable here), a distribution of 187,500 over one week for sUSD/DAI pool continues with the reasonable 20M annualized distribution layed out in
LEAP-3. By running a one week program, we can observe:

- What happens to the sUSD/DAI ratio 
- How much the sUSD supply expands 
- What % of the sUSD supply goes to the Uniswap pool 
- What % of the sUSD supply goes to the ETH Market pool 

This information will help inform future incentive programs.

### Technical Specification
<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Lyra currently exposes or the creations of new ones.-->


Uniswap sUSD / Dai
```
Address: 0xA14e5b3BA5dd981b536E0950390b03972B795018
Amount: 187,500 LYRA
Start: XXXXX
End: XXXXXXX
```

An algorithm will be used to determine the range to be eligible for the rewards, liquidity must be provided with the following bounds:
```
maxPrice = Current ratio + .05 (rounded to the nearest .01)
minPrice = 1 - (maxPrice - 1)
```

Although fixing the bounds reduces the flexibility afforded by Uniswap V3, it simplifies the logic for determining who is eligible to receive rewards. It will also ensure that
people are providing liquidity on both sides of the market and not trying to game the rewards system by not making their liquidity active. The symetrical range attempts to
entice current liquidity providers to swap their sUSD for DAI to remain in the pool as it will require roughly equal parts of both.  While users can easily bridge DAI to OE
quite easily, its likely that these LPs already have as much liquidity on OE as their risk tolerance allows. 

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

```
Uniswap Rewards = 187,500
Uniswap Start = XXXXX
Uniswap End = XXXXXX
```






## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
