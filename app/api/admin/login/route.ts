import { adminSessionMaxAge, createAdminSession, getAdminConfig, safeEqual } from "../../../../lib/admin-auth";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) return Response.json({ error: "Invalid origin" }, { status: 403 });
  const config = getAdminConfig();
  if (!config) return Response.json({ error: "後台帳號尚未設定。" }, { status: 503 });
  let body: { username?: string; password?: string };
  try { body = await request.json() as { username?: string; password?: string }; }
  catch { return Response.json({ error: "無效的登入請求。" }, { status: 400 }); }
  if (!safeEqual(body.username ?? "", config.username) || !safeEqual(body.password ?? "", config.password)) {
    return Response.json({ error: "Username 或密碼不正確。" }, { status: 401 });
  }
  const token = await createAdminSession(config.username);
  const secure = new URL(request.url).protocol === "https:" ? "; Secure" : "";
  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: {
    "content-type": "application/json",
    "set-cookie": `hirenest_admin=${token}; Path=/admin; HttpOnly; SameSite=Strict; Max-Age=${adminSessionMaxAge}${secure}`,
  }});
}
