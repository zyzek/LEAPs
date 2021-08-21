Lyra Improvement Proposals (LIPs) describe standards for the Lyra Protocol, including core protocol specifications, client APIs, and contract standards.

# Contributing

1.  Review [LIP-1](lips/lip-1.md).
2.  Fork the repository by clicking "Fork" in the top right.
3.  Add your SIP to your fork of the repository. There is a [template LIP here](lip-x.md).
4.  Submit a Pull Request to Synthetix's [LIPs repository](https://github.com/lyra-finance/LIPs).

Your first PR should be a first draft of the final LIP. It must meet the formatting criteria enforced by the build (largely, correct metadata in the header). An editor will manually review the first PR for a new LIP and assign it a number before merging it.

If your LIP requires images, the image files should be included in a subdirectory of the `assets` folder for that LIP as follow: lips/assets/lip-X (for lip X). When linking to an image in the LIP, use relative links such as ../assets/lip-X/image.png.

When you believe your LIP is ready to progress past the `Draft` phase, you should reach out to a Lyra Council member on Discord. The Lyra Council will schedule in a call with the LIP author to go through the LIP in more detail.

Once assessed, a LIP is moved into `Proposed`. Once the Lyra Council has formally reviewed the LIP during the LIP presentation they can either move it to a vote or send it back to `Draft`. A vote is conducted within the Lyra discord. If a vote by the Lyra Council reaches a majority, the LIP is moved to `Approved`, otherwise it is `Rejected`.

Once the LIP has been implemented the LIP is assigned the `Implemented` status.

# SIP Statuses

- **Draft** - The initial state of an LIP while it is still being actively developed.
- **Proposed** - a SIP that is being assessed for feasibility with an assigned Core Contributor
- **Approved** - a SIP that is awaiting a Spartan Council Review after the Author and Core Contributor are satisfied with feasibility
- **Rejected** - a SIP that is awaiting a vote.
- **Implemented** - a SIP that has successfully reached a super majority Spartan Council vote in favour.

# Validation

LIPs must pass some validation tests.

It is possible to run the LIP validator locally:

```
npm install (if not done already)
npm run test
```
