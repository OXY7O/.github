# OXY7O Community Governance

This document is an organization-level fallback for community participation. Each repository's maintainers, contribution policy, delivery workflow, security policy, and accepted governance documents take precedence. It does not authorize publication, licensing changes, releases, or product commitments.

## Ownership and decisions

- Maintainers of the **owning repository** triage issues, review changes, assign reviewers, and decide whether a contribution is accepted.
- The [KAORI application](https://github.com/OXY7O/KAORI), [website](https://github.com/OXY7O/kaori-website), and [documentation](https://github.com/OXY7O/kaori-docs) maintain separate issue authorities and delivery lanes. Cross-repository dependencies must be linked, not silently implemented in another repository.
- Contributors may propose changes; a proposal, Draft PR, green focused check, or discussion does not imply acceptance. Security-sensitive changes require the repository's explicit review and applicable admission evidence.
- GitHub-native Issue Type, Project Status, Priority, Sprint, Story Points, relationships, assignees, and labels are managed on their native surfaces. Do not duplicate those fields in templates or PR bodies.

## Contribution and release boundaries

Follow [CONTRIBUTING.md](CONTRIBUTING.md) and the repository-local PR template. Use the governing issue, scoped changes, and evidence for tests actually run. External fork proposals are untrusted and must not receive privileged self-hosted runners or deployment credentials. Repository maintainers adopt approved work through their own controlled branches and gates.

KAORI's temporary `kaori/review/staging-uat` is an exploratory aggregation workbench, not official staging, production, or release authority. Only the application repository's admitted workflow controls promotion.

## Rights, branding, and support

Public repository visibility does not establish permission to reuse or redistribute code. Confirm applicable licenses and contributor rights with repository maintainers. OXY7O names and marks are not licensed by this document; refer to an explicitly approved trademark policy if one is published. Do not infer permission from a missing policy.

No SaaS availability, support SLA, warranty, guaranteed maintenance, or security-response timeline is promised. Refer to [SUPPORT.md](SUPPORT.md) for safe routing and [SECURITY.md](SECURITY.md) for vulnerability disclosure. Governance amendments require review and acceptance in this repository.
