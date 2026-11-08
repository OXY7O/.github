import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import {parse} from "yaml";

const root = ".github/ISSUE_TEMPLATE";
const types = ["epic", "user-story", "feature", "task", "bug", "spike", "technical-debt"];
const read = (file) => fs.readFileSync(file, "utf8");

test("organization provides seven governed issue forms", () => {
  for (const type of types) {
    const file = path.join(root, `${type}.yml`);
    const form = parse(read(file));
    assert.ok(form.name.length > 3);
    assert.ok(form.description.length > 20);
    assert.equal(Array.isArray(form.body), true);
    const ids = new Set(form.body.map((item) => item.id).filter(Boolean));
    for (const id of ["summary", "acceptance-criteria", "governance-reference", "evidence-expectation", "definition-of-done"])
      assert.equal(ids.has(id), true, `${type} missing ${id}`);
    assert.equal((form.labels ?? []).some((label) => /^(status|priority|type):/.test(label)), false);
  }
});

test("type-specific forms capture the information needed for triage", () => {
  const ids = (type) => new Set(parse(read(path.join(root, `${type}.yml`))).body.map((item) => item.id).filter(Boolean));
  for (const id of ["outcome", "child-scope"]) assert.equal(ids("epic").has(id), true);
  for (const id of ["expected-behavior", "actual-behavior", "reproduction"]) assert.equal(ids("bug").has(id), true);
  for (const id of ["question", "timebox", "decision-output"]) assert.equal(ids("spike").has(id), true);
});

test("organization PR template preserves native issue metadata and real evidence", () => {
  const template = read(".github/PULL_REQUEST_TEMPLATE.md");
  for (const phrase of [
    "## Traceability", "Governing issue", "GitHub-native",
    "## Risk dan impact", "## Validasi aktual", "exact commit SHA",
    "NOT RUN", "Full Admission", "## Release impact", "## Review checklist",
  ])
    assert.ok(template.includes(phrase), "PR template missing " + phrase);

  assert.doesNotMatch(template, /^\s*-\s*(Priority|Status|Story Points|Sprint|Parent Epic|GitHub Project):/im);
  assert.match(template, /Jangan menggunakan/);
  assert.match(template, /Tidak ada secrets, internal endpoints, private evidence/i);
  assert.match(template, /template organisasi ini hanya fallback/i);
});

test("templates do not request confidential material", () => {
  const files = [...types.map((type) => path.join(root, `${type}.yml`)), ".github/PULL_REQUEST_TEMPLATE.md"];
  const combined = files.map(read).join("\n");
  assert.doesNotMatch(combined, /masukkan\s+(password|private key|token|credential|endpoint internal)/i);
  assert.doesNotMatch(combined, /token value|secret value/i);
});

test("chooser routes security to owning repository selection without false advisory endpoint", () => {
  const chooser = parse(read(path.join(root, "config.yml")));
  assert.equal(chooser.blank_issues_enabled, false);
  const security = chooser.contact_links.filter(({name}) => /security/i.test(name));
  assert.equal(security.length, 1);
  assert.equal(security[0].url, "https://github.com/OXY7O/.github/blob/main/SECURITY.md");
  assert.match(security[0].about, /kanal privat/i);
  assert.equal(chooser.contact_links.some(({url}) => /security\/advisories\/new$/.test(url)), false);
});

test("shared community fallback exists without claiming publication or security activation", () => {
  const security = read("SECURITY.md");
  const support = read("SUPPORT.md");
  const contributing = read("CONTRIBUTING.md");
  const conduct = read("CODE_OF_CONDUCT.md");
  const governance = read("GOVERNANCE.md");
  assert.ok(security.includes("affected repository"));
  assert.ok(security.includes("not a declaration that private vulnerability reporting"));
  assert.ok(security.includes("Do **not** open a public issue"));
  assert.match(support, /not a guaranteed support service/i);
  assert.match(contributing, /repository-local guidance takes precedence/i);
  assert.match(conduct, /OXY7O Community Code of Conduct/i);
  assert.match(governance, /does not authorize publication, licensing changes/i);
  assert.match(governance, /Protected organization-default changes and emergency recovery/);
  assert.match(governance, /26790893/);
  assert.match(governance, /26791232/);
  assert.match(governance, /Community Policy Contracts/);
  assert.match(governance, /Two distinct authorized humans approve any exception/);
  assert.match(governance, /no direct push to \`main\`/i);
  assert.match(governance, /read-only verification/i);
});

test("organization README references actual root-level policy routes", () => {
  const readme = read("README.md");
  for (const name of ["CONTRIBUTING", "CODE_OF_CONDUCT", "GOVERNANCE", "SECURITY", "SUPPORT"])
    assert.match(readme, new RegExp("\\[" + name + "\\.md\\]\\(" + name + "\\.md\\)"));
  assert.match(readme, /repository produk tetap menjadi authority/i);
  assert.match(readme, /Public repository visibility.*bukan/i);
  assert.match(readme, /jangan menganggap advisories\/private reporting otomatis aktif/i);
  assert.doesNotMatch(readme, /routing vulnerability menuju private security advisory\./i);
  assert.doesNotMatch(readme, /GitHub Project: `Platform Engineering Delivery`/i);
});
