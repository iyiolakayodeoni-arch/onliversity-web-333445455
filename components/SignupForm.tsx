"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function SignupForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Store username for the dashboard
    if (typeof window !== "undefined") {
      localStorage.setItem("onliversity_username", username);
      localStorage.setItem("onliversity_email", email);
    }
    setTimeout(() => {
      router.push("/dashboard");
    }, 800);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs text-muted">Email</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/40 focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="username" className="mb-1.5 block text-xs text-muted">Username</label>
        <input
          id="username"
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="your-username"
          className="w-full rounded border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/40 focus:border-primary"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="shimmer w-full rounded bg-primary py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {loading ? "Joining Pro Season Academy…" : "Join Pro Season Academy"}
      </button>

      <p className="text-center text-[10px] text-muted/50">
        Free to join · FC Mobile coaching · No payment required
      </p>
    </form>
  );
}
