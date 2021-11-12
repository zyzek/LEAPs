---
leap: 10
title: Extend Lyra Launch Council
status: Draft
author: mjs (@mjs-12)
created: 2021-11-12
---

<!--You can leave these HTML comments in your merged LEAP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new LEAPs. Note that a LEAP number will be assigned by an editor. When opening a pull request to submit your LEAP, please use an abbreviated title in the filename, `leap-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->
Extend the [Lyra Launch Council](https://blog.lyra.finance/introducing-the-lyra-launch-council/) until January 31, 2022, so that it can oversee the launch of the LYRA token. The LYRA token holders will elect the next council on January 28, 2022, to begin its term on February 1, 2022.

## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the LEAP is implemented, not *why* it should be done or *how* it will be done. If the LEAP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

This LEAP proposes extending the term of the Lyra Launch Council. As outlined in this [post](https://blog.lyra.finance/introducing-the-lyra-launch-council/), the council was initially intended to sit for three months, from August 17 to November 17. With the token launch scheduled for December 14, it is necessary to extend this term so that the council can fulfil its purpose.

## Motivation
<!--This is the problem statement. This is the *why* of the LEAP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the LEAP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the LEAP will address the issue!-->

Since introducing the council, we've bootstrapped a simple yet effective governance process. The [LEAP](https://leaps.lyra.finance/) framework allows anyone to propose a change to the protocol. The discussion for a proposal takes place in discord, and once social consensus is established, the LEAP is formally proposed on [snapshot](https://snapshot.org/#/lyra.eth) and council members cast their votes.

This system of delegated governance has found the right balance between decentralisation and efficiency, allowing the core team to iterate quickly whilst ensuring the community has the final say in how the protocol changes. As a community, we've passed nine leaps in just three months:
- Launched the ETH, BTC and LINK markets.
- Incentivised liquidity in the market pools and the Uniswap sUSD/DAI pair.
- Decided on the LYRA token distribution.
- Initiated the "ignition" phase to launch the LYRA token.

By maintaining the current council structure throughout the token launch, we minimise the chance of any disruption to the community.

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

The Lyra Council will retain the same members until January 31, 2022. The LYRA token holders will elect the next council on January 28, 2022, to begin its term on February 1, 2022. The specifics of the election process will be proposed in a separate LEAP.

### Rationale
<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
By waiting six weeks from token launch until the next council is elected, the community will be in a better position to focus on the election process:
- Initial fluctuations in the LYRA market will have stabilised.
- LYRA will have been able to disseminate to a broad group of users.
- The core team will have the capacity to implement the technical requirements for a fair election.

### Technical Specification
<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Lyra currently exposes or the creations of new ones.-->
There is a contract for the Lyra Council located [here](https://etherscan.io/address/0x61624e63ebf5fd046bf96bd16a98dbe522a7a19f). Each council member has been issued an NFT that affords them the right to vote on proposals on snapshot. These NFTs will be burned on January 31, 2022, at which point the Lyra Launch Council will be officially dissolved and replaced by new members. The current membership is as follows:

| Token ID        | User     | Address |
| ----------- | ----------- | ----------- |
| 1 | Dom  | 0x9Ba8c70a8Fd922e97a4e78C46583742C7D41796C |
| 2 | Nick |  0x6CB910cEDFA335D255cdb11994008469f75b7188 |
| 3 | Ksett | 0x3aF1f5E855b50D4B2D02FFa657D503349C2a0903 |
| 4 | Telonic | 0x6CA77996123D01F94Ef64B9EcB7E2d0b1D594ff0 |
| 5 | Burt Rock | 0xAC4462Dc1D8959D28D12D7882C29C5Ab832127c6  |


### Test Cases
<!--Test cases for an implementation are mandatory for LEAPs but can be included with the implementation..-->
Not applicable for this LEAP as there is no implementation.

### Configurable Values
<!--Please list all values configurable under this implementation.-->
```
Launch Council End Date = January 31, 2022
Election Date = January 28, 2022
New Council Start Date = February 1, 2022
```

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
