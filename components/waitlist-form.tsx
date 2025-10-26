"use client";

import { useState, FormEvent } from "react";
import { SparkleButton } from "./ui/sparkle-button";
import { Mail, Sparkles } from "lucide-react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    // TODO: Integrate with your backend/email service
    // Example: await fetch('/api/waitlist', { method: 'POST', body: JSON.stringify({ email }) })

    // Simulated API call
    setTimeout(() => {
      setStatus("success");
      setMessage("You're on the list! We'll be in touch soon.");
      setEmail("");
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full pl-12 pr-4 py-4 bg-card border-2 border-primary/30 rounded-full text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all"
            disabled={status === "loading" || status === "success"}
          />
        </div>

        <SparkleButton
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={status === "loading" || status === "success"}
        >
          {status === "loading" ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Joining...
            </>
          ) : status === "success" ? (
            <>
              <Sparkles className="w-5 h-5" />
              You're In!
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Join the Waitlist
            </>
          )}
        </SparkleButton>

        {message && (
          <p
            className={`text-center text-sm ${
              status === "success" ? "text-primary/80" : "text-destructive"
            }`}
          >
            {message}
          </p>
        )}
      </form>

      <p className="text-xs text-gray-500 text-center mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}
