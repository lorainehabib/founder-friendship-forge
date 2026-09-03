import { FormEvent, useId, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MAILERLITE_SUBSCRIBE_URL } from "@/lib/site";

type FreebieFormProps = {
  className?: string;
  source?: string;
  subscribeUrl?: string;
  submitLabel?: string;
  successMessage?: string;
  consentLabel?: string;
  consentError?: string;
};

type SubscribeResponse = {
  success?: boolean;
  errors?: { fields?: { email?: string[] } };
};

const FreebieForm = ({
  className,
  subscribeUrl = MAILERLITE_SUBSCRIBE_URL,
  submitLabel = "Recevoir le PDF gratuitement",
  successMessage = "Merci. Vous allez recevoir le lien vers le PDF par email.",
  consentLabel = "J'accepte de recevoir le PDF et des emails de Loraine Habib.",
  consentError = "Cochez la case pour recevoir le PDF.",
}: FreebieFormProps) => {
  const inputId = useId();
  const consentId = useId();
  const errorId = useId();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setError("Indiquez une adresse email.");
      return;
    }
    if (!consent) {
      setError(consentError);
      return;
    }

    setStatus("submitting");
    setError(null);

    try {
      const body = new URLSearchParams({
        "fields[email]": trimmed,
        "ml-submit": "1",
        anticsrf: "true",
      });
      const res = await fetch(subscribeUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      const data = (await res.json()) as SubscribeResponse;
      if (!res.ok || !data.success) {
        setError(
          data.errors?.fields?.email?.length
            ? "Indiquez une adresse email valide."
            : "L'envoi n'a pas fonctionné. Réessayez dans un instant.",
        );
        setStatus("idle");
        return;
      }
      setStatus("success");
    } catch {
      setError("L'envoi n'a pas fonctionné. Réessayez dans un instant.");
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <div
        className={cn(
          "border border-accent/40 bg-accent/10 px-6 py-5 text-base text-foreground",
          className,
        )}
        role="status"
      >
        {successMessage}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col gap-4", className)}
      noValidate
    >
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 items-stretch">
        <label htmlFor={inputId} className="sr-only">
          Adresse email
        </label>
        <input
          id={inputId}
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(null);
          }}
          placeholder="votre@email.com"
          disabled={status === "submitting"}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className="flex-1 border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-accent transition-colors disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 text-sm tracking-wide hover:bg-foreground transition-colors duration-300 disabled:opacity-60 disabled:hover:bg-accent"
        >
          {status === "submitting" ? "Envoi…" : submitLabel}
          {status !== "submitting" && (
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          )}
        </button>
      </div>
      <label
        htmlFor={consentId}
        className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed cursor-pointer"
      >
        <input
          id={consentId}
          type="checkbox"
          checked={consent}
          onChange={(e) => {
            setConsent(e.target.checked);
            if (error) setError(null);
          }}
          className="mt-1 h-4 w-4 shrink-0 accent-[#B85C38]"
        />
        <span>
          {consentLabel}{" "}
          <Link
            to="/mentions-legales/"
            className="underline underline-offset-4 hover:text-accent"
          >
            Mentions légales
          </Link>
          .
        </span>
      </label>
      {error && (
        <p id={errorId} role="alert" className="text-sm text-accent">
          {error}
        </p>
      )}
    </form>
  );
};

export default FreebieForm;
