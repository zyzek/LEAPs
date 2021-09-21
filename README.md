Lyra Enhancement Action Proposals (LEAPs) describe standards for the Lyra Protocol, including core protocol specifications, client APIs, and contract standards.

# Contributing

1.  Review [LEAP-1](content/leaps/leap-1.md).
2.  Fork the repository by clicking "Fork" in the top right.
3.  Add your LEAP to your fork of the repository. There is a [template LEAP here](leap-x.md).
4.  Submit a Pull Request to Lyra's [LEAPs repository](https://github.com/lyra-finance/LEAPs).

Your first PR should be a first draft of the final LEAP. It must meet the formatting criteria enforced by the build (largely, correct metadata in the header). An editor will manually review the first PR for a new LEAP and assign it a number before merging it.

If your LEAP requires images, the image files should be included in a subdirectory of the `assets` folder for that LEAP as follow: leaps/assets/leap-X (for leap X). When linking to an image in the LEAP, use relative links such as ../assets/leap-X/image.png.

When you believe your LEAP is ready to progress past the `Draft` phase, you should reach out to a Lyra Council member on Discord. The Lyra Council will schedule in a call with the LEAP author to go through the LEAP in more detail.

Once assessed, a LEAP is moved into `Proposed`. Once the Lyra Council has formally reviewed the LEAP during the LEAP presentation they can either move it to a vote or send it back to `Draft`. A vote is conducted within the Lyra discord. If a vote by the Lyra Council reaches a majority, the LEAP is moved to `Approved`, otherwise it is `Rejected`.

Once the LEAP has been implemented the LEAP is assigned the `Implemented` status.

# LEAP status terms

- **Draft** - The initial state of an LEAP while it is still being actively developed.
- **Proposed** - A LEAP that is awaiting a vote.
- **Approved** - A LEAP that has successfully reached a majority Lyra Council vote in favour.
- **Rejected** - A LEAP that has failed to reach a majority Lyra Council vote in favour.
- **Implemented** - A LEAP that has been released to mainnet.

# Validation

LEAPs must pass some validation tests.

It is possible to run the LEAP validator locally:

```
npm install (if not done already)
npm run test
```
