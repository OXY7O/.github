# Contributing to OXY7O repositories

Thanks for considering a contribution. Each repository owns its issue intake, technical standards, license, security policy, review process, and release decisions. This organization-wide guide is a fallback only: **repository-local guidance takes precedence**.

## Before proposing work

1. Choose the owning repository: [KAORI application](https://github.com/OXY7O/KAORI), [KAORI website](https://github.com/OXY7O/kaori-website), or [KAORI documentation](https://github.com/OXY7O/kaori-docs).
2. Search its existing issues and pull requests before opening a duplicate. For a bug, provide the affected version or commit, expected and actual behavior, minimal reproduction, and sanitized diagnostic output. For a feature, explain the problem, affected users, and intended outcome without assuming roadmap acceptance.
3. Follow the repository's issue forms and maintainer triage. Discussions, if available, are for questions and exploration, **not** automatic authorization to implement or merge.
4. Never post credentials, tokens, internal endpoints, customer information, private logs, or vulnerability details publicly. Follow the affected repository's `SECURITY.md` and its verified private reporting channel; see [SUPPORT.md](SUPPORT.md).

## Pull requests and review

- Obtain or reference the governing issue and use the **owning repository's** existing branch naming, PR template, tests, formatting, and CI requirements. A fork PR is an untrusted proposal, not an approved release candidate.
- Keep changes narrowly scoped. Explain intent, linked issue, behavioral impact, testing actually executed, known limitations, and any migration/security implications. Mark checks **NOT RUN** when they were not executed; never equate a skipped check with PASS.
- Do not add duplicate Priority, Status, Sprint, Story Points, Issue Type, or other GitHub Project metadata tables to issue/PR bodies. Maintainers use native GitHub and Project fields.
- Do not assume a sign-off or Developer Certificate of Origin (DCO) is required across every OXY7O repository. Follow a repository's explicitly adopted contributor attestation and licensing instructions; maintainers must confirm contribution rights before accepting code or documentation.
- Contributions may be declined, deferred, or revised. Submission does not confer maintainer approval, release permission, a support SLA, or any rights to OXY7O branding.

## KAORI-specific boundary

KAORI application contributors must follow its current [delivery workflow](https://github.com/OXY7O/KAORI/blob/kaori/staging/docs/engineering/KAORI_DELIVERY_WORKFLOW.md) and [CI/CD authority](https://github.com/OXY7O/KAORI/blob/kaori/staging/docs/setup/GITHUB_ACTIONS_CI_CD.md). External fork checks, where enabled, are feedback-only and must not run untrusted code on privileged self-hosted runners. Maintainers alone adopt accepted changes into governed issue-linked branches and complete official admission, staging, UAT, and human acceptance. The temporary `kaori/review/staging-uat` workbench is **not** staging or release authority.

## Licensing and responsible maintenance

Check the current `LICENSE` in each repository before contributing. Public visibility does **not** imply an open-source grant; do not assume KAORI has been relicensed or that a hosted SaaS offering is approved. Do not submit third-party material without provenance and redistribution rights. Repository maintainers own review, security disclosure handling, version support decisions, and any future published trademark/brand rules. No organization-wide warranty or response-time commitment is implied.
