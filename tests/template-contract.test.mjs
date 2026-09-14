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

test("pull request template enforces issue-to-release traceability", () => {
  const template = read(".github/PULL_REQUEST_TEMPLATE.md");
  for (const phrase of ["Closes #", "GitHub Project", "Parent Epic", "Governance reference", "Risk dan impact", "Evidence", "Release impact"])
    assert.match(template, new RegExp(phrase, "i"));
  assert.match(template, /tidak memuat secret/i);
});

test("templates do not request confidential material", () => {
  const files = [...types.map((type) => path.join(root, `${type}.yml`)), ".github/PULL_REQUEST_TEMPLATE.md"];
  const combined = files.map(read).join("\n");
  assert.doesNotMatch(combined, /masukkan\s+(password|private key|token|credential|endpoint internal)/i);
  assert.doesNotMatch(combined, /token value|secret value/i);
});

test("chooser disables unstructured issues and routes security privately", () => {
  const chooser = parse(read(path.join(root, "config.yml")));
  assert.equal(chooser.blank_issues_enabled, false);
  assert.equal(chooser.contact_links.some(({name, url}) => /security/i.test(name) && /security\/advisories\/new$/.test(url)), true);
});
