/**
 * Shared enquiry-form validation, used by both the browser form and the API route
 * so that the rules can never drift apart.
 */
import { services } from "@/data/services";

export type ContactInput = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  consent: boolean;
};

export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

export const serviceOptions = services.map((s) => ({ value: s.slug, label: s.name }));

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const LIMITS = { name: 100, email: 254, phone: 20, message: 2000 } as const;

function digitsOnly(v: string) {
  return v.replace(/\D/g, "");
}

/** Accepts Indian mobile/landline formats: 10 digits, or with 0 / 91 prefix. */
export function isValidPhone(v: string) {
  if (!/^[+\d\s()-]+$/.test(v)) return false;
  const d = digitsOnly(v);
  return d.length === 10 || (d.length === 11 && d.startsWith("0")) || (d.length === 12 && d.startsWith("91"));
}

export function validateContact(input: ContactInput): ContactErrors {
  const errors: ContactErrors = {};
  const name = input.name.trim();
  const email = input.email.trim();
  const phone = input.phone.trim();
  const message = input.message.trim();

  if (!name) errors.name = "Please enter your name.";
  else if (name.length > LIMITS.name) errors.name = `Name must be ${LIMITS.name} characters or fewer.`;

  if (!phone) errors.phone = "Please enter your phone number.";
  else if (phone.length > LIMITS.phone || !isValidPhone(phone)) errors.phone = "Please enter a valid 10-digit phone number.";

  if (!email) errors.email = "Please enter your email address.";
  else if (email.length > LIMITS.email || !EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";

  if (!serviceOptions.some((o) => o.value === input.service)) errors.service = "Please select a service category.";

  if (!message) errors.message = "Please tell us briefly about your requirement.";
  else if (message.length < 10) errors.message = "Please add a little more detail (at least 10 characters).";
  else if (message.length > LIMITS.message) errors.message = `Message must be ${LIMITS.message} characters or fewer.`;

  if (!input.consent) errors.consent = "Please confirm that you agree to the privacy notice.";

  return errors;
}
