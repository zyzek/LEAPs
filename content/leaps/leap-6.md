---
leap: 6
title: Incentivise Lyra ETH and LINK option markets
status: Draft
author: Domrom
created: 2021-9-28
requires: LEAP-5
---

## Simple Summary
Distribute LYRA tokens to users who provide liquidity to the following pools:

[Lyra ETH Option Market](https://optimistic.etherscan.io/address/0x176b9e1BcE6757Ab23235FA9899B32e89B105b0d)
[Lyra LINK Option Market](https://optimistic.etherscan.io/address/0xd0Df278F36778a5cCE926B92Ccc90B2bbbBfB3B3)

This program will run from Friday, 1st October through Tuesday, October 25th. (End date may change depending on news from Optimism - ideally
we'd want to target Friday, October 28th but the Optimism regenesis is happening around that time)

## Abstract

LEAP-6 is intended to be a continuation of Lyra's liquidity mining program on the ETH option market, as well as providing incentive for the
new LINK option market. Users who provide liquidity will receive LYRA tokens in proportion with their share of the total liquidity for the
specific market. The tokens will be distributed on a date yet to be determined.


Rewards should match the previous incentive (187,500 per week, over 4 weeks = 750,000) with a 70 (ETH) to 30 (LINK) split of them.

| Pool          | Reward        | Begining         | Ending           |
| ------------- | ------------- | ---------------- | ---------------- |
| [Lyra ETH option market](https://optimistic.etherscan.io/address/0x176b9e1BcE6757Ab23235FA9899B32e89B105b0d)| 525,000 LYRA | Friday 1 October 09:00 UTC | Tuesday 25 October 09:00 UTC |
| [Lyra LINK option market](https://optimistic.etherscan.io/address/0xd0Df278F36778a5cCE926B92Ccc90B2bbbBfB3B3)| 225,000 LYRA | Friday 1 October 09:00 UTC | Tuesday 25 October 09:00 UTC |


## Motivation

[LEAP-3](https://leaps.lyra.finance/leaps/leap-3/), the first liquidity mining program, has been successful in bringing millions of sUSD liquidity
into the ETH option market. With the launch of the new LINK market, we want to ensure there is enough liquidity for reasonable trade volume to occur
 on the new LINK market.

The reduction of rewards on the ETH market exists so that there can be a fairer split of existing liquidity rather than putting undue stress on
the sUSD peg on Optimism. As trade volume on the ETH market is expected to be higher, we provide a higher portion of the rewards for that market.

## Specification

### Overview

Since the LYRA token is not live, it is not feasible to use the popular staking rewards contracts. Instead, rewards for both pools will be computed off-chain using a script
that determines the average liquidity provided by an address over the period. The work required in this LEAP is determining the eligibility criteria and implementing the script.

### Rationale

As previous reward programs were successful, we want to maintain momentum by providing a similar amount of rewards. We want to also ensure there is plenty of liquidity in the
LINK market, as it is the first of it's kind anywhere.

### Technical Specification

Lyra ETH Option Market
```
Address: 0xA14e5b3BA5dd981b536E0950390b03972B795018
Amount: 525,000 LYRA
Start: 1632700800
End: 1633305600
```

Lyra LINK Option Market
```
Address: 0xA14e5b3BA5dd981b536E0950390b03972B795018
Amount: 225,000 LYRA
Start: 1632700800
End: 1633305600
```

### Test Cases

The script will be open sourced and available for anyone to run and verify.

### Configurable Values

```
Lyra ETH Market Rewards = 375,000
Lyra LINK Market Start = 1633078800
Lyra LINK Market End = 1635148800

Lyra LINK Market Rewards = 375,000
Lyra LINK Market Start = 1633078800
Lyra LINK Market End = 1635148800
```

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
