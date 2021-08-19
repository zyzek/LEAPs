# Lyra Improvement Proposals (LIPs)

Lyra Improvement Proposals (LIPs) describe standards for the Lyra protocol, including core protocol specifications, client APIs, and contract standards.

**Before you initiate a pull request**, please read the [LIP-1](https://lips.lyra.finance/lips/LIP-1) process document. Ideas should be thoroughly discussed prior to opening a pull request.

This repository tracks the ongoing status of LIPs. It contains:

- [Draft](https://LIPs.Lyra.org/all#draft) proposals where the author(s) are still making changes and is not ready for review.
- [Review ](https://LIPs.Lyra.org/all#review) for proposals ready for LIP review process and the author(s) are ready for improvement suggestions.
- [Last Call](https://LIPs.Lyra.org/all#last-call) for proposals that may become final (see also [RSS feed](https://LIPs.Lyra.org/last-call.xml)).
- [Accepted](https://LIPs.Lyra.org/all#accepted) proposals which are awaiting implementation or deployment by Lyra client developers.
- [Final](https://LIPs.Lyra.org/all#final) and [Living](https://LIPs.Lyra.org/all#living) proposals that have solidified into a standard.
- The [LIP process](./LIPS/LIP-1.md#LIP-work-flow) that governs the LIP repository.

Achieving "Final" status in this repository only represents that a proposal has been reviewed for technical accuracy. It is solely the responsibility of the reader to decide whether a proposal will be useful to them.

Browse all current and draft LIPs on [the official LIP site](https://LIPs.Lyra.org/).

Once your first PR is merged, we have a bot that helps out by automatically merging PRs to draft LIPs. For this to work, it has to be able to tell that you own the draft being edited. Make sure that the 'author' line of your LIP contains either your GitHub username or your email address inside \<triangular brackets>. If you use your email address, that address must be the one publicly shown on [your GitHub profile](https://github.com/settings/profile).

## Project Goal

The Lyra Improvement Proposals repository exists as a place to share concrete proposals with potential users of the proposal and the Lyra community at large.

## Preferred Citation Format

The canonical URL for a LIP that has achieved draft status at any point is at https://LIPs.Lyra.org/. For example, the canonical URL for LIP-1 is https://LIPs.Lyra.org/LIPS/LIP-1.

Please consider anything which is not published on https://LIPs.Lyra.org/ as a working paper.

And please consider anything published at https://LIPs.Lyra.org/ with a status of "draft" as an incomplete draft.

# Validation

LIPs must pass some validation tests.  The LIP repository ensures this by running tests using [html-proofer](https://rubygems.org/gems/html-proofer) and [LIP_validator](https://rubygems.org/gems/LIP_validator).

It is possible to run the LIP validator locally:
```sh
gem install LIP_validator
LIP_validator <INPUT_FILES>
```

# Automerger

The LIP repository contains an "auto merge" feature to ease the workload for LIP editors.  If a change is made via a PR to a draft LIP, then the authors of the LIP can GitHub approve the change to have it auto-merged by the [LIP-automerger](https://github.com/LIP-automerger/automerger) bot.

# Local development

## Prerequisites

1. Open Terminal.

2. Check whether you have Ruby 2.1.0 or higher installed:

```sh
$ ruby --version
```

3. If you don't have Ruby installed, install Ruby 2.1.0 or higher.

4. Install Bundler:

```sh
$ gem install bundler
```

5. Install dependencies:

```sh
$ bundle install
```

## Build your local Jekyll site

1. Bundle assets and start the server:

```sh
$ bundle exec jekyll serve
```

2. Preview your local Jekyll site in your web browser at `http://localhost:4000`.

More information on Jekyll and GitHub pages [here](https://help.github.com/en/enterprise/2.14/user/articles/setting-up-your-github-pages-site-locally-with-jekyll).
