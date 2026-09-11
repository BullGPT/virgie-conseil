"use client";

import { useId, useState, type FormEvent } from "react";
import { Button } from "./Button";
import { contactForm } from "@/content/site";
import {
  EMPTY_CONTACT,
  MAX_LENGTH,
  hasErrors,
  validate,
  type ContactErrorCode,
  type ContactErrors,
  type ContactField,
  type ContactPayload,
} from "@/lib/contact";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "failed";

const fieldClasses =
  "w-full rounded-xl border bg-surface px-5 py-3 text-body text-ink transition-colors " +
  "placeholder:text-ink-soft/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal";

const errorLabel: Record<ContactErrorCode, string> = {
  required: contactForm.errorRequired,
  email: contactForm.errorEmail,
  tooLong: contactForm.errorTooLong,
};

/**
 * Formulaire de contact. Poste vers /api/contact, qui met en forme la
 * demande et l'envoie par e-mail au cabinet.
 * Le composant ne rend que le formulaire : le titre et l'encadré sont
 * portés par la section qui l'accueille.
 */
export function ContactForm({ className }: { className?: string }) {
  const id = useId();
  const [values, setValues] = useState<ContactPayload>(EMPTY_CONTACT);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  /** Champ piège : rempli par les robots, jamais par un humain. */
  const [website, setWebsite] = useState("");

  const update = (field: ContactField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
    if (status === "failed") setStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const found = validate(values);
    setErrors(found);
    if (hasErrors(found)) return;

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          website,
          source: window.location.pathname,
        }),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      setStatus("sent");
      setValues(EMPTY_CONTACT);
    } catch (error) {
      console.error("[contact] envoi impossible :", error);
      setStatus("failed");
    }
  };

  const sending = status === "sending";

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className={cn("w-full", className)}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${id}-prenom`}
          field="firstName"
          label={contactForm.firstName}
          autoComplete="given-name"
          required
          value={values.firstName}
          error={errors.firstName}
          onChange={update}
        />
        <Field
          id={`${id}-nom`}
          field="lastName"
          label={contactForm.lastName}
          autoComplete="family-name"
          required
          value={values.lastName}
          error={errors.lastName}
          onChange={update}
        />
        <Field
          id={`${id}-email`}
          field="email"
          type="email"
          label={contactForm.email}
          autoComplete="email"
          required
          value={values.email}
          error={errors.email}
          onChange={update}
        />
        <Field
          id={`${id}-tel`}
          field="phone"
          type="tel"
          label={contactForm.phone}
          autoComplete="tel"
          value={values.phone}
          error={errors.phone}
          onChange={update}
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor={`${id}-message`}
          className="block text-small font-medium text-ink"
        >
          {contactForm.message}
          <span aria-hidden="true"> *</span>
        </label>
        <p id={`${id}-message-hint`} className="mt-1 text-small text-ink-soft">
          {contactForm.messageHint}
        </p>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={6}
          maxLength={MAX_LENGTH.message}
          value={values.message}
          aria-required="true"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={
            errors.message
              ? `${id}-message-hint ${id}-message-error`
              : `${id}-message-hint`
          }
          onChange={(event) => update("message", event.target.value)}
          className={cn(
            fieldClasses,
            "mt-2 resize-y",
            errors.message
              ? "border-red-600"
              : "border-line hover:border-signal/40",
          )}
        />
        {errors.message && (
          <p id={`${id}-message-error`} className="mt-1.5 text-small text-red-700">
            {errorLabel[errors.message]}
          </p>
        )}
      </div>

      {/* Piège à robots : hors flux et hors tabulation, jamais lu à voix haute. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${id}-website`}>Ne pas remplir</label>
        <input
          id={`${id}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={sending}
        className="mt-7 w-full sm:w-auto"
      >
        {sending ? contactForm.sendingLabel : contactForm.submitLabel}
      </Button>

      <p
        role="status"
        aria-live="polite"
        className={cn(
          "mt-4 text-small",
          status === "failed" ? "text-red-700" : "text-ink-soft",
        )}
      >
        {status === "sent"
          ? contactForm.success
          : status === "failed"
            ? contactForm.errorSend
            : null}
      </p>

      <p className="mt-1 text-legal text-ink-soft">{contactForm.consent}</p>
    </form>
  );
}

function Field({
  id,
  field,
  label,
  type = "text",
  autoComplete,
  required,
  value,
  error,
  onChange,
}: {
  id: string;
  field: ContactField;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  value: string;
  error?: ContactErrorCode;
  onChange: (field: ContactField, value: string) => void;
}) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="block text-small font-medium text-ink">
        {label}
        {required ? (
          <span aria-hidden="true"> *</span>
        ) : (
          <span className="font-normal text-ink-soft">
            {" "}
            {contactForm.optionalSuffix}
          </span>
        )}
      </label>
      <input
        id={id}
        name={field}
        type={type}
        value={value}
        maxLength={MAX_LENGTH[field]}
        autoComplete={autoComplete}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(field, event.target.value)}
        className={cn(
          fieldClasses,
          "mt-2",
          error ? "border-red-600" : "border-line hover:border-signal/40",
        )}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-small text-red-700">
          {errorLabel[error]}
        </p>
      )}
    </div>
  );
}
