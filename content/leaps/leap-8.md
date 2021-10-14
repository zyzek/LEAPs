---
leap: 8
title: Launch LYRA Token
status: Draft
author: mjs (@mjs-12)
created: 2021-9-28
requires: LEAP-5
---

## Simple Summary

A distribution plan for Lyra's "ignitiion phase" between November 1 and December 10, before the official token launch on December 14.

## Abstract

This LEAP proposes distributing 42,000,000 LYRA (4.2% of the total supply) between November 1 and December 10 to the following groups:

| Group | Reward | Notes |
| ------------- | ------------- | ---------------- |
| Lyra Market LPs| 15,000,000 LYRA | Split between ETH and LINK markets	 |
| Lyra Traders | 2,000,000 LYRA | Split between ETH and LINK markets   |
| Lyra Security Module Stakers | 5,000,000 LYRA | USDC staking on L1  |
| SNX L2 Stakers | 20,000,000 LYRA | Average debt on L2 |

The ignition phase will consist of two trading rounds and all LYRA earned during this period will be distributed when the token is launched on December 14.

## Motivation

A successful LYRA token launch requires a sufficient % of supply circulating on launch day, a diverse group of token holders, and more sUSD on L2. This LEAP aims to ensure that all of these requirements are met.

## Specification

### Overview

The "ignition" phase will consist of two trading rounds:

| Round          | Beginning | Ending         |
| ------------- | ------------- | ---------------- |
| 1 | November 1 | November 19 |
| 2 | November 19 | December 10  |


### Rationale

By having two trading rounds, we allow LPs who missed the first round another chance to earn rewards. The total amount of trading rewards must be significantly less than the LP rewards to accommodate for the capital inefficiency of the system.

### Technical Specification

Liquidity and trading rewards for each round are grouped together, since the latter depends on the former. The security module and SNX staking programs are independent of the trading rounds.

#### 1. Trading Round 1 (November 1  - November 19)

| Group          | Rewards |
| ------------- | ------------- |
| Lyra ETH Market LPs | 6,750,000 LYRA |
| Lyra ETH Traders | 900,000 LYRA |
| Lyra LINK Market LPs | 750,000 LYRA |
| Lyra LINK Traders | 100,000 LYRA |

#### 2. Trading Round 2 (November 19 - December 10)

| Group          | Rewards |
| ------------- | ------------- |
| Lyra ETH Market LPs | 6,750,000 LYRA |
| Lyra ETH Traders | 900,000 LYRA |
| Lyra LINK Market LPs | 750,000 LYRA |
| Lyra LINK Traders | 100,000 LYRA |

#### 3. Security Module and SNX stakers (November 1 - December 10)

| Group          | Rewards |
| ------------- | ------------- |
| Lyra Security Module Stakers | 5,000,000 LYRA |
| SNX L2 Stakers | 20,000,000 LYRA |

The security moodule will be deployed onto Ethereum L1 and allow users to stake USDC to earn LYRA. Only SNX stakers on Optimism will be eligible for rewards.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
