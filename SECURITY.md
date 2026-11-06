# OXY7O Security Reporting Guidance

This organization-level document is a **routing fallback**, not a declaration that private vulnerability reporting, secret scanning, push protection, or advisories are enabled in any repository. Repository-local `SECURITY.md` and verified repository security settings take precedence.

## Reporting a vulnerability

1. Identify the **affected repository**: [KAORI application](https://github.com/OXY7O/KAORI), [KAORI website](https://github.com/OXY7O/kaori-website), or [KAORI docs](https://github.com/OXY7O/kaori-docs).
2. Read that repository's `SECURITY.md` and check whether its **Security → Advisories → Report a vulnerability** option is actually available.
3. If verified private reporting is available, submit the report there. If not, request a confidential reporting route from authorized maintainers without publishing the vulnerability details. Do **not** open a public issue or send exploit details to public Slack or Discussions.
4. Include affected versions/commits, impact, safe reproduction steps, and minimal sanitized evidence only through the confirmed confidential route. Never include live credentials, tokens, customer data, or internal endpoints in public content.

Do not assume the organization `.github` repository's advisory channel routes reports to the correct application, website, or documentation maintainers. A compromised credential should be escalated through the affected owner's private incident-response channel, not pasted into an issue.

## Supported versions and response expectations

Supported versions, security fixes, disclosure timelines, and maintenance commitments are **repository-specific and not established by this fallback**. No security SLA, warranty, active monitoring, or disclosure deadline is promised. Coordinate any disclosure with the affected maintainers; never publish an unverified fix or imply that a release has passed security admission.

## Operational boundary

Maintainers must separately verify repository settings for Dependabot alerts and security updates, CodeQL, secret scanning, push protection, private vulnerability reporting, and organization access/runner controls. A policy document or a successful read-only CI check is not proof those settings are enabled. External fork PRs must remain isolated from privileged runners and secrets.

For ordinary support and non-security questions, see [SUPPORT.md](SUPPORT.md).
