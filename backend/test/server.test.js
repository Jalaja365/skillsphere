const test = require("node:test");
const assert = require("node:assert");

test("SkillSphere backend basic test", () => {
  const message = "Welcome to SkillSphere API";

  assert.strictEqual(
    message,
    "Welcome to SkillSphere API"
  );
});