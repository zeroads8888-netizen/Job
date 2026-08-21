import { env } from "cloudflare:workers";

const encoder = new TextEncoder();
const SESSION_SECONDS = 60 * 60 * 12;

type AdminEnv = { ADMIN_USERNAME?: string; ADMIN_PASSWORD?: string; ADMIN_SESSION_SECRET?: string };

export function getAdminConfig() {
  const values = env as unknown as AdminEnv;
  const username = values.ADMIN_USERNAME?.trim() ?? "";
  const password = values.ADMIN_PASSWORD ?? "";
  const secret = values.ADMIN_SESSION_SECRET ?? "";
  return username && password && secret.length >= 32 ? { username, password, secret } : null;
}

export function safeEqual(left: string, right: string) {
  const a = encoder.encode(left); const b = encoder.encode(right);
  let mismatch = a.length ^ b.length;
  const length = Math.max(a.length, b.length);
  for (let i = 0; i < length; i++) mismatch |= (a[i] ?? 0) ^ (b[i] ?? 0);
  return mismatch === 0;
}

async function signature(payload: string, secret: string) {
  const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const bytes = new Uint8Array(await crypto.subtle.sign("HMAC", key, encoder.encode(payload)));
  return base64Url(bytes);
}

function base64Url(bytes: Uint8Array) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export async function createAdminSession(username: string) {
  const config = getAdminConfig();
  if (!config) throw new Error("Admin credentials are not configured");
  const expires = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  const payload = `${expires}.${username}`;
  return `${payload}.${await signature(payload, config.secret)}`;
}

export async function verifyAdminSession(token: string | undefined) {
  const config = getAdminConfig();
  if (!config || !token) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [expires, username, supplied] = parts;
  if (!Number.isFinite(Number(expires)) || Number(expires) < Math.floor(Date.now() / 1000)) return false;
  if (!safeEqual(username, config.username)) return false;
  const expected = await signature(`${expires}.${username}`, config.secret);
  return safeEqual(supplied, expected);
}

export const adminSessionMaxAge = SESSION_SECONDS;
