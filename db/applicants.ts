import { env } from "cloudflare:workers";

export type ApplicantRecord = {
  id: number; name: string; age: number; gender: string; phone: string;
  email: string; current_role: string; desired_job: string;
  status: string; created_at: string;
};

function database(): D1Database {
  const db = (env as unknown as { DB?: D1Database }).DB;
  if (!db) throw new Error("Database binding is unavailable");
  return db;
}

export async function ensureApplicantsTable() {
  const db = database();
  await db.batch([
    db.prepare(`CREATE TABLE IF NOT EXISTS applicants (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      age INTEGER NOT NULL,
      gender TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT NOT NULL,
      current_role TEXT NOT NULL,
      desired_job TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'new',
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )`),
    db.prepare("CREATE INDEX IF NOT EXISTS idx_applicants_created_at ON applicants(created_at DESC)"),
  ]);
}

export async function listApplicants(): Promise<ApplicantRecord[]> {
  await ensureApplicantsTable();
  const result = await database().prepare(`SELECT id, name, age, gender, phone, email,
      current_role, desired_job, status, created_at
      FROM applicants ORDER BY created_at DESC LIMIT 500`).all<ApplicantRecord>();
  return result.results;
}

export async function createApplicant(input: Omit<ApplicantRecord, "id" | "status" | "created_at">) {
  await ensureApplicantsTable();
  return database().prepare(`INSERT INTO applicants
      (name, age, gender, phone, email, current_role, desired_job)
      VALUES (?, ?, ?, ?, ?, ?, ?)`)
    .bind(input.name, input.age, input.gender, input.phone, input.email, input.current_role, input.desired_job)
    .run();
}
