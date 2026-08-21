import { createApplicant } from "../../../db/applicants";

const clean = (value: unknown, max: number) => typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return Response.json({ error: "Invalid origin" }, { status: 403 });
  }
  let body: Record<string, unknown>;
  try { body = await request.json() as Record<string, unknown>; }
  catch { return Response.json({ error: "Invalid request" }, { status: 400 }); }
  if (clean(body.website, 100)) return Response.json({ ok: true });

  const age = Number(body.age);
  const applicant = {
    name: clean(body.name, 80), age, gender: clean(body.gender, 30),
    phone: clean(body.phone, 30), email: clean(body.email, 120).toLowerCase(),
    current_role: clean(body.role, 120), desired_job: clean(body.desiredJob, 120),
  };
  if (!applicant.name || !Number.isInteger(age) || age < 18 || age > 100 || !applicant.gender ||
      !applicant.phone || !applicant.email.includes("@") || !applicant.current_role || !applicant.desired_job) {
    return Response.json({ error: "請檢查所有必填資料。" }, { status: 400 });
  }
  try { await createApplicant(applicant); return Response.json({ ok: true }); }
  catch { return Response.json({ error: "暫時無法儲存資料，請稍後再試。" }, { status: 500 }); }
}
