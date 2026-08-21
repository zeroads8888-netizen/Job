"use client";

import { FormEvent, useState } from "react";

export function LoginForm() {
  const [loading, setLoading] = useState(false); const [error, setError] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setLoading(true); setError("");
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    try {
      const response = await fetch("/api/admin/login", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error || "登入失敗");
      window.location.href = "/admin";
    } catch (cause) { setError(cause instanceof Error ? cause.message : "登入失敗"); setLoading(false); }
  }
  return <form className="login-form" onSubmit={submit}><label>Username<input name="username" autoComplete="username" required /></label><label>密碼<input name="password" type="password" autoComplete="current-password" required /></label><button disabled={loading}>{loading ? "登入中…" : "登入後台"}</button>{error && <p role="alert">{error}</p>}</form>;
}
