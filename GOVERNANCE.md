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

## Protected organization-default changes and emergency recovery

The organization-default repository `OXY7O/.github` uses **protected `main`**. Ordinary changes require an issue-authorized work branch, a pull request to `main`, at least one approval by an independent human, resolved review conversations, and the successful GitHub-hosted **`Community Policy Contracts`** check. Use the protected merge-commit path; green CI alone is not permission to merge. Repository-specific KAORI delivery controls are not replaced by this policy.

As of 2026-11-08, the GitHub-native source of truth is the **active** `OXY7O Community - Main branch protection` ruleset (ID `26790893`) and `OXY7O Community - Main policy checks` ruleset (ID `26791232`). The first prevents deletion/force updates and requires PR review; the second requires exactly `Community Policy Contracts` from GitHub Actions. Ruleset IDs are historical evidence, not a substitute for current GitHub Settings readback.

### When a required check or reviewer is unavailable

1. **Prefer the normal route.** Inspect the exact PR head SHA, check conclusions and failure logs; fix the issue on the PR branch, rerun the existing workflow, or wait for the independent reviewer to become available. Do not call a skipped, pending, cancelled, or failed required job a PASS. Do not merge directly to `main` to circumvent a transient outage.
2. **Escalate only a real continuity incident.** If a time-critical organization policy correction cannot use the ordinary route, create or reference a private operational incident/change authority and capture a sanitized problem statement, affected scope, risk assessment, expected recovery, independent approver, and rollback plan. Do not post secrets, vulnerabilities or internal endpoints to this public repository.
3. **Two distinct authorized humans approve any exception.** The executing administrator and an independent administrator/reviewer must explicitly approve the narrow exception and its end condition before changing any GitHub Settings. The exception is not self-approved by the PR author or by the operator who performs the setting change. If independent approval or a safe recovery path is unavailable, **STOP and escalate**; do not invent a permanent bypass actor.
4. **Keep changes minimal and temporary.** Prefer restoring GitHub Actions/reviewer availability or using another independent authorized reviewer. Only with documented explicit authorization may an administrator change the smallest applicable rule for the bounded recovery period; do not disable all branch protection, force-push, remove review history, or add an unrestricted permanent bypass. Retain a reviewed PR and immutable source identity.
5. **Restore and verify before closing the incident.** Reapply the approved rules immediately after recovery. Record the actor, approval, time window, original/temporary/restored values, PR and tested SHA, check URLs, and exact operation outcome. Read back effective branch rules and ensure deletion prevention, non-fast-forward prevention, independent PR approval/conversation resolution, and the `Community Policy Contracts` required context are active again. Close the incident only after an independent verifier accepts that evidence.

For read-only verification, authorized maintainers can use:

```bash
gh api repos/OXY7O/.github/rulesets --jq '[.[] | {id, name, enforcement}]'
gh api repos/OXY7O/.github/rules/branches/main --jq '[.[] | .type] | unique | sort'
gh api repos/OXY7O/.github/rules/branches/main --jq '[.[] | select(.type == "required_status_checks") | .parameters.required_status_checks[]?.context] | unique'
```

The same controls apply to emergency corrections: **no direct push to `main`** as a routine recovery tactic. GitHub Project status, security approvals, and application-release UAT are separate authorities, not implied by this organization-default repository's policy checks.
