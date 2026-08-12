"use client";

import { m, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = { name: "", email: "", subject: "", message: "" };

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (form.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Please enter a valid email.";
  if (form.subject.trim().length < 3) errors.subject = "Please add a short subject.";
  if (form.message.trim().length < 20)
    errors.message = "Your message should be at least 20 characters.";
  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setForm(initialState);
    }, 1100);
  };

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <m.div
          key="success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-xl border border-up/30 bg-up/5 p-8 text-center"
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-up/15">
            <CheckCircle2 className="size-7 text-up" />
          </span>
          <h3 className="mt-5 text-xl font-semibold">Message sent!</h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Thanks for reaching out. I'll get back to you within 24 hours. For urgent requests,
            email me directly at hello@abdirahman.dev.
          </p>
          <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
            Send another message
          </Button>
        </m.div>
      ) : (
        <m.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -8 }}
          onSubmit={onSubmit}
          noValidate
          className="space-y-5 rounded-xl border border-hairline bg-card p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={form.name}
                onChange={set("name")}
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p className="text-xs font-medium text-down">{errors.name}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={set("email")}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="text-xs font-medium text-down">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="What's this about?"
              value={form.subject}
              onChange={set("subject")}
              aria-invalid={!!errors.subject}
            />
            {errors.subject && (
              <p className="text-xs font-medium text-down">{errors.subject}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              rows={5}
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={set("message")}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <p className="text-xs font-medium text-down">{errors.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              This form is demo-only â€” no data is sent anywhere.
            </p>
            <Button type="submit" size="lg" disabled={status === "submitting"}>
              {status === "submitting" ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="size-4" /> Send message
                </>
              )}
            </Button>
          </div>
        </m.form>
      )}
    </AnimatePresence>
  );
}
