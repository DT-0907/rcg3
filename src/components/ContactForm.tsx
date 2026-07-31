import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";
import { copy } from "@/data/copy";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const { labels, errors: errorText, emailBody } = copy.contactForm;

const schema = z.object({
  firstName: z.string().trim().min(1, errorText.firstName).max(80),
  lastName: z.string().trim().min(1, errorText.lastName).max(80),
  email: z.string().trim().email(errorText.email).max(255),
  organization: z.string().trim().min(1, errorText.organization).max(160),
  message: z.string().trim().min(10, errorText.message).max(2000),
});

type FormValues = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormValues, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const initial: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  organization: "",
  message: "",
};

const ContactForm = () => {
  const [values, setValues] = useState<FormValues>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  /** Honeypot: hidden from people, irresistible to bots. */
  const [honeypot, setHoneypot] = useState("");

  const update = (key: keyof FormValues, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormValues;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      setStatus("error");
      setErrorMessage(errorText.formInvalid);
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const v = parsed.data;

    /**
     * Fallback for when the send endpoint is unreachable or unconfigured:
     * hand the visitor a prefilled draft rather than losing what they wrote.
     */
    const openMailClient = () => {
      const subject = `${copy.contactForm.subjectPrefix} ${v.organization}`;
      const body =
        `${emailBody.namePrefix} ${v.firstName} ${v.lastName}\n` +
        `${emailBody.emailPrefix} ${v.email}\n` +
        `${emailBody.organizationPrefix} ${v.organization}\n\n` +
        `${v.message}\n`;
      window.location.href = `mailto:${encodeURIComponent(siteConfig.contactEmail)}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...v, website: honeypot }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        fallback?: boolean;
      };

      if (res.ok && data.ok) {
        setStatus("success");
        setValues(initial);
        return;
      }

      if (data.fallback) {
        openMailClient();
        setStatus("success");
        setValues(initial);
        return;
      }

      setStatus("error");
      setErrorMessage(data.error || errorText.formInvalid);
    } catch {
      // Network failure or the endpoint is missing entirely (e.g. a static
      // preview build). Fall back rather than dead-ending the visitor.
      openMailClient();
      setStatus("success");
      setValues(initial);
    }
  };

  const disabled = status === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">{labels.firstName}</Label>
          <Input
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            value={values.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
            disabled={disabled}
            required
          />
          {errors.firstName && (
            <p id="firstName-error" className="text-sm text-destructive">
              {errors.firstName}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">{labels.lastName}</Label>
          <Input
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            value={values.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
            disabled={disabled}
            required
          />
          {errors.lastName && (
            <p id="lastName-error" className="text-sm text-destructive">
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">{labels.email}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          disabled={disabled}
          required
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-destructive">
            {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="organization">{labels.organization}</Label>
        <Input
          id="organization"
          name="organization"
          autoComplete="organization"
          value={values.organization}
          onChange={(e) => update("organization", e.target.value)}
          aria-invalid={!!errors.organization}
          aria-describedby={errors.organization ? "organization-error" : undefined}
          disabled={disabled}
          required
        />
        {errors.organization && (
          <p id="organization-error" className="text-sm text-destructive">
            {errors.organization}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{labels.message}</Label>
        <Textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          disabled={disabled}
          required
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      {/* Off-screen rather than display:none — some bots skip hidden inputs.
          aria-hidden and tabIndex keep it away from assistive tech and tabbing. */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div aria-live="polite" className="min-h-[1.5rem]">
        {status === "success" && (
          <p className="flex items-center gap-2 text-sm text-foreground">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            {copy.contactForm.successMessage}
          </p>
        )}
        {status === "error" && errorMessage && (
          <p className="flex items-center gap-2 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            {errorMessage}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" className="min-h-12" disabled={disabled}>
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            <span>{copy.contactForm.submittingLabel}</span>
          </>
        ) : (
          <span>{copy.contactForm.submitLabel}</span>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
