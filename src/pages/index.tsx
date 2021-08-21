import * as React from 'react'
import { Helmet } from 'react-helmet'

import Main from '../layout/Main'

// markup
const IndexPage = () => (
  <Main>
    <Helmet title="Lyra Enhancement Action Proposals" />
    <h1 className="page-heading">
      Lyra Enhancement Action Proposals{' '}
      {/* <a
        href="https://discordapp.com/channels/413890591840272394/"
        rel="nofollow"
      >
        <img
          className="max-w-full"
          src="https://camo.githubusercontent.com/294a3116521e16f9164255dd2d386b24767e2610/68747470733a2f2f696d672e736869656c64732e696f2f646973636f72642f3431333839303539313834303237323339342e7376673f636f6c6f723d373638414434266c6162656c3d646973636f7264266c6f676f3d6874747073253341253246253246646973636f72646170702e636f6d25324661737365747325324638633937303162393861643433373262353866313366643966363566393636652e737667"
          alt="Discord"
          data-canonical-src="https://img.shields.io/discord/413890591840272394.svg?color=768AD4&amp;label=discord&amp;logo=https%3A%2F%2Fdiscordapp.com%2Fassets%2F8c9701b98ad4372b58f13fd9f65f966e.svg"
        />
      </a> */}
    </h1>
    <p>
      Lyra Enhancement Action Proposals (LEAPs) describe standards for the
      Lyra Protocol, including core protocol specifications, client APIs,
      and contract standards.
    </p>

    <h2>Contributing</h2>
    <ol>
      <li>
        Review <a href="/leaps/leap-1">LEAP-1</a>.
      </li>
      <li>
        Fork the repository by visiting the LEAPs{' '}
        <a href="https://github.com/lyra-finance/LEAPs">repo</a> and pressing
        "Fork" in the top right.
      </li>
      <li>
        Add your LEAP to your fork of the repository. There is a{' '}
        <a href="https://github.com/lyra-finance/LEAPs/blob/master/leap-x.md">
          template LEAP here
        </a>
        .
      </li>
      <li>
        Submit a Pull Request to Lyra's{' '}
        <a href="https://github.com/lyra-finance/LEAPs">LEAPs repository</a>.
      </li>
    </ol>

    <p>
      Your first PR should be a first draft of the final LEAP. It must meet the
      formatting criteria enforced by the build (largely, correct metadata in
      the header). An editor will manually review the first PR for a new LEAP and
      assign it a number before merging it.
    </p>
    <p>
      If your LEAP requires images, the image files should be included in a
      subdirectory of the `assets` folder for that LEAP as follow: <code>leaps/assets/LEAP-X</code> (for leap <b>X</b>). When linking to an
      image in the LEAP, use relative links such as{' '}
      <code>../assets/leap-X/image.png</code>.
    </p>
    <p>
      When you believe your LEAP is ready to progress past the{' '}
      <code>Draft</code> phase, you should reach out to a Lyra Council member on Discord. The Lyra Council will schedule in
      a call with the LEAP author to go through the LEAP in more detail.
    </p>

    <p>
      Once assessed, a LEAP is moved into <code>Proposed</code>. Once the
      Lyra Council has formally reviewed the LEAP during the LEAP presentation
      they can either move it to a vote or send it back to{' '}
      <code>Draft</code>. A vote is conducted within the Lyra discord. If a vote by
      the Lyra Council reaches a majority, the LEAP is moved to{' '}
      <code>Approved</code>, otherwise it is <code>Rejected</code>.
    </p>

    <p>
      Once the LEAP has been implemented the LEAP is assigned the{' '}
      <code>Implemented</code> status.
    </p>

    <h2>LEAP status terms</h2>
    <ul>
      <li>
        <strong>Draft</strong> - The initial state of a LEAP while it is still being actively developed.
      </li>
      <li>
        <strong>Proposed</strong> - The LEAP is awaiting a vote.
      </li>
      <li>
        <strong>Approved</strong> - The LEAP has successfully reached a
        majority Lyra Council vote in favour.
      </li>
      <li>
        <strong>Rejected</strong> - The LEAP has failed to reach a
        majority Lyra Council vote in favour.
      </li>
      <li>
        <strong>Implemented</strong> - The LEAP has been released to mainnet.
      </li>
    </ul>
  </Main>
)

export default IndexPage
