import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

import {
  buildContactLeadEmailBody,
  validateContactLeadPayload,
  type ContactLeadPayload
} from "../src/lib/contactLead.ts";

const validPayload: ContactLeadPayload = {
  inquiryType: "General Inquiry",
  name: "Riley Morgan",
  email: "",
  phone: "555-0100",
  message:
    "We need help understanding a disconnected inventory and approval workflow before selecting a software path.",
  website: ""
};

test("contact validation requires name, message, and at least one contact method", () => {
  const result = validateContactLeadPayload({
    ...validPayload,
    name: "",
    phone: "",
    message: ""
  });

  assert.equal(result.ok, false);

  if (!result.ok) {
    assert.equal(result.errors.name, "Name is required.");
    assert.equal(
      result.errors.contactMethod,
      "Provide an email address or phone number."
    );
    assert.equal(result.errors.message, "Description / message is required.");
  }
});

test("contact validation accepts phone-only or email-based contact", () => {
  assert.equal(validateContactLeadPayload(validPayload).ok, true);
  assert.equal(
    validateContactLeadPayload({
      ...validPayload,
      email: "riley@example.com",
      phone: ""
    }).ok,
    true
  );
});

test("contact email body does not reference upload handling", () => {
  const result = validateContactLeadPayload(validPayload);
  assert.equal(result.ok, true);

  if (!result.ok) {
    return;
  }

  const body = buildContactLeadEmailBody(result.data, {
    sourceDomain: "https://www.epyk-systems.com",
    sourcePage: "https://www.epyk-systems.com/contact",
    timestamp: "2026-09-03T12:00:00.000Z"
  });

  assert.match(body, /Sensitive-information warning shown/);
  assert.doesNotMatch(body, /Attachment filename/i);
});

test("contact form and API use typed controls and JSON validation, not public uploads", () => {
  const formSource = readFileSync("src/components/ContactForm.tsx", "utf8");
  const routeSource = readFileSync("src/app/api/contact/route.ts", "utf8");

  assert.match(formSource, /type="email"/);
  assert.match(formSource, /type="tel"/);
  assert.match(formSource, /name="message"/);
  assert.doesNotMatch(formSource, /type="file"/);
  assert.doesNotMatch(formSource, /Upload/);
  assert.match(routeSource, /application\/json/);
  assert.match(routeSource, /validateContactLeadPayload/);
  assert.doesNotMatch(routeSource, /formData\(/);
  assert.doesNotMatch(routeSource, /attachment/i);
});
