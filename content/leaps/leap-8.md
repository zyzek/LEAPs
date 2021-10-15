---
leap: 8
title: Launch LYRA Token
status: Draft
author: mjs (@mjs-12), Nick Forster (@nickf24), Sean Dawson (@SeanDaws)
created: 2021-9-28
requires: LEAP-5
---

## Simple Summary

A token distribution plan for Lyra's "ignitiion phase" between October 25 and January 7, including the official token launch on December 14.

## Abstract

This LEAP proposes distributing 42,000,000 LYRA (4.2% of the total supply) between November 1 and December 10 (pre-ignition) to the following groups:

| Group | Reward | Notes |
| ------------- | ------------- | ---------------- |
| Lyra Market LPs| 15,000,000 LYRA | Split between all markets	 |
| Lyra Traders[*](#trading-rewards) | Up to 2,000,000 LYRA | Split between all markets   |
| Lyra Security Module Stakers | 5,000,000 LYRA | USDC staking on L1  |
| SNX L2 Stakers | 20,000,000 LYRA | Average debt on L2 |

All rewards earned during pre-ignition will be distributed on December 14 when the token is oficially launched. From December 10 to January 7 (post-ignition), a further 18,000,000 LYRA (1.8% of the total supply) will be distributed to the following groups:

| Group | Reward | Notes |
| ------------- | ------------- | ---------------- |
| Lyra Market LPs| 12,000,000 LYRA | Split between all markets	 |
| Lyra Traders[*](#trading-rewards) | Up to 1,600,000 LYRA | Split between all markets   |

Rewards for the post-ignition period will be distributed on January 7.

## Motivation

A successful LYRA token launch requires a sufficient % of supply circulating on launch day, a diverse group of token holders, and more sUSD on L2. This LEAP aims to ensure that all of these requirements are met.

## Specification

### Overview

There will be two trading rounds in the "pre-ignition" phase:

| Round          | Beginning | Ending         |
| ------------- | ------------- | ---------------- |
| 1 | November 5 | November 19 |
| 2 | November 19 | December 10  |


There will be one trading round in the "post-ignitiion" phase:
| Round          | Beginning | Ending         |
| ------------- | ------------- | ---------------- |
| 3 | December 10 | January 7 |


### Rationale

By having two pre-ignition trading rounds, we allow LPs who missed the first round another chance to earn rewards before the token is launched. The total amount of trading rewards must be significantly less than the LP rewards to accommodate for the capital inefficiency of the system.


### Technical Specification

Liquidity and trading rewards for each round are grouped together, since the latter depends on the former. The security module and SNX staking programs are independent of the trading rounds and addressed separately.

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

#### 4. Security Module (November 1 - January 7)

| Group          | Rewards |
| ------------- | ------------- |
| Lyra Security Module Stakers | 5,000,000 LYRA |

The security moodule will be deployed onto Ethereum L1 and allow users to stake USDC to earn LYRA.

#### 5. SNX stakers (October 25 - December 10)

| Group          | Rewards |
| ------------- | ------------- |
| SNX L2 Stakers | 20,000,000 LYRA |

Those who stake SNX on L2 will receive a share of LYRA in proportion with their average debt relative to the total L2 debt over the period.

### Trading Rewards

This is the maximum number of LYRA that can be distributed to traders for the round. The actual amount will be determined as follows:
- Long positions: 0.35 LYRA per $1 of fees paid
- Short positions: 0.45 LYRA per $1 of fees paid
- Short collateral: (dollars locked in pool / LYRA rewards for the round) * 0.66


## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
