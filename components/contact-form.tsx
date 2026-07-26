"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { type FormEvent, useState } from "react";
import { WhatsAppIcon } from "@/components/brand-icons";
import { siteConfig } from "@/data/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      `Hi ${siteConfig.name}, I would like a quote.`,
      `Name: ${form.get("name")}`,
      `WhatsApp: ${form.get("phone")}`,
      `Platform: ${form.get("platform")}`,
      `Service: ${form.get("service")}`,
      `Budget / goal: ${form.get("message")}`,
    ].join("\n");
    setSubmitted(true);
    window.open(`${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  if (submitted) {
    return (
      <div className="surface-card grid min-h-[30rem] place-items-center rounded-[2rem] p-8 text-center">
        <div>
          <CheckCircle2 className="mx-auto whatsapp-text" size={44} />
          <h3 className="mt-5 text-3xl font-bold tracking-[-0.04em]">Your brief is ready.</h3>
          <p className="mx-auto mt-3 max-w-md leading-7 text-muted">
            WhatsApp has opened with your details. Send the prepared message to start the conversation.
          </p>
          <button type="button" onClick={() => setSubmitted(false)} className="button-secondary mt-7">
            Create another brief
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="surface-card rounded-[2rem] p-5 sm:p-8 lg:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name">
          <input name="name" required placeholder="e.g. Prerna Gupta" className="form-control" />
        </Field>
        <Field label="WhatsApp number">
          <input name="phone" type="tel" required placeholder="+91 98765 43210" className="form-control" />
        </Field>
        <Field label="Platform">
          <select name="platform" required className="form-control">
            <option value="">Select platform</option>
            <option>Instagram</option>
            <option>TikTok</option>
            <option>YouTube</option>
            <option>Facebook</option>
            <option>Telegram</option>
            <option>Website</option>
            <option>Branding</option>
          </select>
        </Field>
        <Field label="Service">
          <select name="service" required className="form-control">
            <option value="">Select service</option>
            <option>Followers</option>
            <option>Likes</option>
            <option>Views</option>
            <option>Subscribers</option>
            <option>Members</option>
            <option>Website project</option>
            <option>Content planning</option>
            <option>Branding</option>
            <option>Custom package</option>
          </select>
        </Field>
      </div>
      <Field label="Goals, quantity, or budget" className="mt-5">
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Tell us what you want to achieve..."
          className="form-control resize-none"
        />
      </Field>
      <button type="submit" className="button-whatsapp mt-6 w-full">
        <WhatsAppIcon size={16} /> Build my WhatsApp brief <ArrowUpRight size={16} />
      </button>
      <p className="mt-4 text-center text-xs leading-5 faint-text">
        Submitting prepares a WhatsApp message. Your information is not stored on this website.
      </p>
    </form>
  );
}

function Field({
  label,
  className = "",
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted">{label}</span>
      {children}
    </label>
  );
}
