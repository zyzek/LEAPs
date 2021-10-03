---
leap: 6
title: Incentivise Lyra ETH and LINK option markets
status: Implemented
author: Domrom (@DominicRomanowski)
created: 2021-9-28
requires: LEAP-5
---

## Simple Summary
Distribute LYRA tokens to users who provide liquidity to the following pools:

[Lyra ETH Option Market](https://optimistic.etherscan.io/address/0x176b9e1BcE6757Ab23235FA9899B32e89B105b0d)

[Lyra LINK Option Market](https://optimistic.etherscan.io/address/0xd0Df278F36778a5cCE926B92Ccc90B2bbbBfB3B3)

This program will run from Monday, 4th October (23:00 UTC) through Tuesday, October 26th (8:00 UTC).

As the markets have been re-deployed, there must be ample time for users to migrate to the new LiquidityPools so that they can participate.

## Abstract

LEAP-6 is intended to be a continuation of Lyra's liquidity mining program on the ETH option market, as well as providing incentive for the new LINK option market. Users who provide liquidity will receive LYRA tokens in proportion with their share of the total liquidity for the specific market. The tokens will be distributed on a date yet to be determined.


Rewards should match the previous incentive (187,500 per week, over the intended 4 weeks = 750,000) with an 80 (ETH) to 20 (LINK) split of them.

| Pool          | Reward        | Begining         | Ending           |
| ------------- | ------------- | ---------------- | ---------------- |
| [Lyra ETH option market LiquidityPool](https://optimistic.etherscan.io/address/0x2935CD347B79C319A6464fe3b1087170f142418C)| 600,000 LYRA | Monday 4 October 23:00 UTC | Tuesday 26 October 08:00 UTC |
| [Lyra LINK option market LiquidityPool](https://optimistic.etherscan.io/address/0x69B4B35504a8c1d6179fef7AdDCDB37A8c663BC9)| 150,000 LYRA | Monday 4 October 23:00 UTC | Tuesday 26 October 08:00 UTC |


## Motivation

[LEAP-3](https://leaps.lyra.finance/leaps/leap-3/), the first liquidity mining program, has been successful in bringing millions of sUSD liquidity into the ETH option market. With the launch of the new LINK market, we want to ensure there is enough liquidity for reasonable trade volume to occur on the new LINK market.

The rewards are split based on the previous round value so that existing liquidity is utilised rather than putting undue stress on the sUSD peg on Optimism. As trade volume on the ETH market is expected to be higher, we provide a higher portion of the rewards for that market.

We include an extra week of rewards in the total pools due to the inconvenience of having to migrate liquidity to the new contracts, as well as having to deal with any issues surrounding regenesis.

## Specification

### Overview

Since the LYRA token is not live, it is not feasible to use the popular staking rewards contracts. Instead, rewards for both pools will be computed off-chain using a script that determines the average liquidity provided by an address over the period. The work required in this LEAP is determining the eligibility criteria and implementing the script.

### Rationale

As previous reward programs were successful, we want to maintain momentum by providing a similar amount of rewards. We want to also ensure there is ample liquidity in the LINK market, as it is the first of it's kind anywhere.

### Technical Specification

Lyra ETH Option Market
```
Address: 0x1f6D98638Eee9f689684767C3021230Dd68df419
Liquidity Pool Address: 0x2935CD347B79C319A6464fe3b1087170f142418C
Amount: 600,000 LYRA
Start: 1633388400
End: 1635235200
```

Lyra LINK Option Market
```
Address: 0xBCB01210BD1c0790ca45Cc4C49d9a183be99824d
LiquidityPool Address: 0x69B4B35504a8c1d6179fef7AdDCDB37A8c663BC9
Amount: 150,000 LYRA
Start: 1633388400
End: 1635235200
```

### Test Cases

The script will be open sourced and available for anyone to run and verify.

### Configurable Values

```
Lyra ETH Market Rewards = 600,000
Lyra LINK Market Start = 1633388400
Lyra LINK Market End = 1635235200

Lyra LINK Market Rewards = 150,000
Lyra LINK Market Start = 1633388400
Lyra LINK Market End = 1635235200
```

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
