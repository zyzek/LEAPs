---
leap: 8
title: Launch LYRA Token
status: Draft
author: mjs (@mjs-12), Nick Forster (@nickf24), Sean Dawson (@SeanDaws), Domrom (@DominicRomanowski), SteveNX, Burt Rock
created: 2021-9-28
---

## Simple Summary

A token distribution plan for Lyra's "ignition phase" between October 29 and January 7, including the official token launch on December 14.

## Abstract

This LEAP proposes distributing 42,000,000 LYRA (4.2% of the total supply) between October 29 and December 10 (pre-ignition) to the following groups:

| Group | Reward | Notes |
| ------------- | ------------- | ---------------- |
| Lyra Market LPs| 15,000,000 LYRA | Split between all markets	 |
| Lyra Traders[*](#trading-rewards) | Up to 2,000,000 LYRA | Split between all markets   |
| Lyra Security Module Stakers | 5,000,000 LYRA | USDC staking on L1  |
| SNX L2 Stakers (pre-ignition) | 19,000,000 LYRA | Average debt on L2 |
| SNX L2 Stakers (retroactive) | 1,000,000 LYRA | Retroactive average debt on L2 |

All rewards earned during pre-ignition will be distributed on December 14 when the token is oficially launched. From December 10 to January 7 (post-ignition), a further 18,000,000 LYRA (1.8% of the total supply) will be distributed to the following groups:

| Group | Reward | Notes |
| ------------- | ------------- | ---------------- |
| Lyra Market LPs| 12,000,000 LYRA | Split between all markets	 |
| Lyra Traders[*](#trading-rewards) | Up to 1,600,000 LYRA | Split between all markets   |

Trading rewards for the post-ignition period will be distributed on January 7. Market LP rewards for the post-ignition period will be distributed on December 14 with the token launch, since the distribution will be known on December 10[*](#rationale).

Tokens will be claimable on Ethereum Mainnet. Those who have earned an amount of less than 1,000 LYRA during the pre-ignition phase or trading competition will be given a choice to claim on either mainnet or OE after the official token launch. LYRA will have the most utility on mainnet however, we recognize that gas costs may be prohibitive for claiming smaller amounts there.

## Motivation

A successful LYRA token launch requires a sufficient % of supply circulating on launch day, a diverse group of token holders, and more sUSD on L2. This LEAP aims to ensure that all of these requirements are met.

## Specification

### Overview

There will be two trading rounds in the "pre-ignition" phase:

| Round          | Beginning | Ending         |
| ------------- | ------------- | ---------------- |
| 1 | November 5 | November 19 |
| 2 | November 19 | December 10  |


There will be one trading round in the "post-ignition" phase:
| Round          | Beginning | Ending         |
| ------------- | ------------- | ---------------- |
| 3 | December 10 | January 7 |


### Rationale

By having two pre-ignition trading rounds, we allow LPs who missed the first round another chance to earn rewards before the token is launched. The total amount of trading rewards must be significantly less than the LP rewards to accommodate for the capital inefficiency of the system.

Users who have staked SNX on L2 already have bootstrapped the network by providing crucial sUSD liquidity. By requiring that these stakers also interacted with the Lyra protocol and/or liquidity mining programs, we avoid rewarding idle L2 stakers. 

Distributing the post-ignition market LP rewards on launch day will increase the circulating supply significantly and should support accurate price discovery.

### Technical Specification

Liquidity and trading rewards for each round are grouped together, since the latter depends on the former. The security module and SNX staking programs are independent of the trading rounds and addressed separately.

The Council has the right to delay the start of trading round 1 (and potentially alter other rounds), in the event that the ETH wrapper has not been deployed. Exact times for each trading round will be provided at least 48 hours before it starts.

#### 1. Trading Round 1 (November 5  - November 19)

| Group          | Rewards |
| ------------- | ------------- |
| Lyra Market LPs | 6,000,000 LYRA |
| Lyra Traders[*](#trading-rewards) | Up to 800,000 LYRA |

#### 2. Trading Round 2 (November 19 - December 10)

| Group          | Rewards |
| ------------- | ------------- |
| Lyra Market LPs | 9,000,000 LYRA |
| Lyra Traders[*](#trading-rewards) | Up to 1,200,000 LYRA |

#### 3. Trading Round 3 (December 10 - January 7)

| Group          | Rewards |
| ------------- | ------------- |
| Lyra Market LPs | 12,000,000 LYRA |
| Lyra Traders[*](#trading-rewards) | Up to 1,600,000 LYRA |

#### 4. Security Module (November 2 00:00 UTC - January 7 00:00 UTC)

| Group          | Rewards |
| ------------- | ------------- |
| Lyra Security Module Stakers | 5,000,000 LYRA |

The security module will be deployed onto Ethereum L1 and allow users to stake USDC to earn LYRA.

#### 5. SNX stakers (October 29 00:00 UTC - December 10 00:00 UTC)

| Group          | Rewards |
| ------------- | ------------- |
| SNX L2 Stakers | 19,000,000 LYRA |

Those who stake SNX on L2 between October 29 and December 10 and meet at least one of the below eligibility requirements will receive a share of 19,000,000 LYRA. Once they have become eligible, they will begin receiving a share of LYRA in proportion with their debt relative to the total eligible debt. These rewards will be computed in 3 hour epochs.

Eligibility requirements:
- Provided liquidity to Uniswap pools containing sUSD
- Sold sUSD on Uniswap in a non synth pair
- Traded options on Lyra
- Provided liquidity to ANY Lyra Market Pool (i.e ETH or LINK)

#### 6. Retroactive SNX stakers (September 13 00:00 UTC - October 10 00:00 UTC)

| Group          | Rewards |
| ------------- | ------------- |
| SNX L2 Stakers | 1,000,000 LYRA |

Those who staked SNX on L2 between September 13 and October 10 and meet at least one of the below eligibility requirements will receive a share of 1,000,000 LYRA. Once they became eligible, they will begin receiving a share of LYRA in proportion with their debt to the total eligible debt. These rewards will be computed in 3 hour epochs.

Eligibility requirements:
- Provided liquidity to Uniswap pools containing sUSD
- Sold sUSD on Uniswap in a non synth pair
- Traded options on Lyra
- Provided liquidity to ANY Lyra Market Pool (i.e ETH or LINK)

### Trading Rewards

This is the maximum number of LYRA that can be distributed to traders for the round. The actual amount will be determined as follows:
- Long positions: 0.35 LYRA per $1 of fees paid
- Short positions: 0.45 LYRA per $1 of fees paid
- Short collateral: LYRA LP reward rate * 2/3 * time short position held

If the cap for a round is hit, rewards will be distributed among all traders equally. For example, if a trader is owed 100 LYRA but the total owed for the round is 20% more than the cap, the trader would only receive 100/120 = 83 LYRA.


## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
