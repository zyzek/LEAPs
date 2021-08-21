---
lip: 1
title: LIP Purpose and Guidelines
status: Proposed
author: Michael Spain (@mjs-12)
created: 2021-08-17
---

## What is an LIP?

LIP stands for Lyra Improvement Proposal, it has been adapted from the SIP (Synthetix Improvement Proposal). The purpose of this process is to ensure changes to Lyra are transparent and well governed. An LIP is a design document providing information to the Lyra community about a proposed change to the system. The author is responsible for building consensus within the community and documenting dissenting opinions.

## LIP Rationale

We intend LIPs to be the primary mechanism for proposing new features, collecting community input on an issue, and for documenting the design decisions for changes to Lyra. Because they are maintained as text files in a versioned repository, their revision history is the historical record of the feature proposal.

It is highly recommended that a single LIP contain a single key proposal or new idea. The more focused the LIP, the more successful it is likely to be.

An LIP must meet certain minimum criteria. It must be a clear and complete description of the proposed enhancement. The enhancement must represent a net improvement.

## LIP Work Flow

Parties involved in the process are the *author*, the [*LIP editors*](#lip-editors), the Lyra Council and the Lyra community.

:warning: Before you begin, vet your idea, this will save you time. Ask the Lyra community first if an idea is original to avoid wasting time on something that will be rejected based on prior research (searching the Internet does not always do the trick). It also helps to make sure the idea is applicable to the entire community and not just the author. Just because an idea sounds good to the author does not mean it will have the intend effect. The appropriate public forum to gauge interest around your LIP is [the Lyra Discord].

Your role as the champion is to write the LIP using the style and format described below, shepherd the discussions in the appropriate forums, and build community consensus around the idea. Following is the process that a successful LIP will move along.

Each status change is requested by the LIP author and reviewed by the LIP editors. Use a pull request to update the status. Please include a link to where people should continue discussing your LIP. The LIP editors will process these requests as per the conditions below.

* **Draft** -- This LIP is a work-in-progress.
* **Proposed** -- This LIP is scheduled for voting by the Lyra Council.
* **Approved** -- This LIP has passed community governance and is now being prioritised for development.
* **Rejected** -- This LIP has failed to reach community consensus.
* **Implemented** -- This LIP has been implemented and deployed to mainnet.

## What belongs in a successful LIP?

Each LIP should have the following parts:

- Preamble - RFC 822 style headers containing metadata about the LIP, including the LIP number, a short descriptive title (limited to a maximum of 44 characters), and the author details.
- Simple Summary - “If you can’t explain it simply, you don’t understand it well enough.” Provide a simplified and layman-accessible explanation of the LIP.
- Abstract - a short (~200 word) description of the technical issue being addressed.
- Motivation (*optional) - The motivation is critical for LIPs that want to change Lyra. It should clearly explain why the existing specification is inadequate to address the problem that the LIP solves. LIP submissions without sufficient motivation may be rejected outright.
- Specification - The technical specification should describe the syntax and semantics of any new feature.
- Rationale - The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.
- Test Cases - Test cases may be added during the implementation phase but are required before implementation.
- Copyright Waiver - All LIPs must be in the public domain. See the bottom of this LIP for an example copyright waiver.

## LIP Formats and Templates

LIPs should be written in [markdown] format.
Image files should be included in a subdirectory of the `assets` folder for that LIP as follows: `assets/lip-X` (for lip **X**). When linking to an image in the LIP, use relative links such as `../assets/lip-X/image.png`.

## LIP Header Preamble

Each LIP must begin with an [RFC 822](https://www.ietf.org/rfc/rfc822.txt) style header preamble, preceded and followed by three hyphens (`---`). The headers must appear in the following order. Headers marked with "*" are optional and are described below. All other headers are required.

` lip:` <LIP number> (this is determined by the LIP editor)

` title:` <LIP title>

` author:` <a list of the author's or authors' name(s) and/or username(s), or name(s) and email(s). Details are below.>

` status:` < Draft \| Proposed \| Approved \| Rejected \| Implemented >

` created:` <date created on>

` * updated:` <comma separated list of dates>

` * requires:` <LIP number(s)>

` * resolution:` \<a url pointing to the resolution of this LIP\>

Headers that permit lists must separate elements with commas.

Headers requiring dates will always do so in the format of ISO 8601 (yyyy-mm-dd).

#### `author` header

The `author` header optionally lists the names, email addresses or usernames of the authors/owners of the LIP. Those who prefer anonymity may use a username only, or a first name and a username. The format of the author header value must be:

> Random J. User &lt;address@dom.ain&gt;

or

> Random J. User (@username)

if the email address or GitHub username is included, and

> Random J. User

if the email address is not given.

#### `created` header

The `created` header records the date that the LIP was assigned a number. Both headers should be in yyyy-mm-dd format, e.g. 2001-08-14.

#### `updated` header

The `updated` header records the date(s) when the LIP was updated with "substantial" changes. This header is only valid for LIPs of Draft and Active status.

#### `requires` header

LIPs may have a `requires` header, indicating the LIP numbers that this LIP depends on.

## Auxiliary Files

LIPs may include auxiliary files such as diagrams. Such files must be named LIP-XXXX-Y.ext, where “XXXX” is the LIP number, “Y” is a serial number (starting at 1), and “ext” is replaced by the actual file extension (e.g. “png”).

## LIP Editors

The current LIP editors are

` * Michael Spain (@mjs-12)`

` * Dominic Romanowski (@DominicRomanowski)`

## LIP Editor Responsibilities

For each new LIP that comes in, an editor does the following:

- Read the LIP to check if it is ready: sound and complete. The ideas must make technical sense, even if they don't seem likely to get to final status.
- The title should accurately describe the content.
- Check the LIP for language (spelling, grammar, sentence structure, etc.), markup (Github flavored Markdown), code style

If the LIP isn't ready, the editor will send it back to the author for revision, with specific instructions.

Once the LIP is ready for the repository, the LIP editor will:

- Assign an LIP number (generally the PR number or, if preferred by the author, the Issue # if there was discussion in the Issues section of this repository about this LIP)

- Merge the corresponding pull request

- Send a message back to the LIP author with the next step.

Many LIPs are written and maintained by developers with write access to the Lyra codebase. The LIP editors monitor LIP changes, and correct any structure, grammar, spelling, or markup mistakes we see.

The editors don't pass judgment on LIPs. We merely do the administrative & editorial part.

## History

The LIP document was derived heavily from the SIP Synthetix Improvement Proposal document in many places text was simply copied and modified. Any comments about the LIP document should be directed to the LIP editors. The history of the EIP is quoted below from the EIP document  for context:

* *"This document (EIP) was derived heavily from [Bitcoin's BIP-0001] written by Amir Taaki which in turn was derived from [Python's PEP-0001]. In many places text was simply copied and modified. Although the PEP-0001 text was written by Barry Warsaw, Jeremy Hylton, and David Goodger, they are not responsible for its use..."* *

August 17, 2021: LIP 1 has been drafted and submitted as a PR.


See [the revision history for further details](https://github.com/lyra-finance/), which is also available by clicking on the History button in the top right of the LIP.

### Bibliography

[the Lyra Discord]: https://discord.gg/P49mj6UbmC
[pull request]: https://github.com/lyra-finance/LIPs/pulls
[markdown]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[Bitcoin's BIP-0001]: https://github.com/bitcoin/bips
[Python's PEP-0001]: https://www.python.org/dev/peps/
[Lyra Engineering Team]: https://github.com/orgs/lyra-finance/people

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
