import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyAdminSession } from "../../lib/admin-auth";
import { listApplicants } from "../../db/applicants";
import "./admin.css";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const cookieStore = await cookies();
  if (!(await verifyAdminSession(cookieStore.get("hirenest_admin")?.value))) redirect("/admin/login");
  const applicants = await listApplicants();
  return <main className="admin-shell"><header className="admin-header"><div><span>HireNest 香港</span><h1>申請人後台</h1></div><div className="admin-actions"><a href="/">返回網站</a><form action="/api/admin/logout" method="post"><button>登出</button></form></div></header><section className="admin-summary"><div><strong>{applicants.length}</strong><span>申請記錄</span></div><p>受保護的管理員頁面</p></section><section className="admin-table-wrap">{applicants.length===0?<div className="admin-empty"><h2>暫時沒有申請記錄</h2><p>有人提交申請表後，資料會顯示在這裡。</p></div>:<table><thead><tr><th>提交時間</th><th>申請人</th><th>聯絡方法</th><th>申請職位</th><th>目前工作</th><th>狀態</th></tr></thead><tbody>{applicants.map((item)=><tr key={item.id}><td>{new Date(`${item.created_at}Z`).toLocaleString("zh-HK",{timeZone:"Asia/Hong_Kong"})}</td><td><b>{item.name}</b><small>{item.age}歲 · {item.gender}</small></td><td><a href={`tel:${item.phone}`}>{item.phone}</a><a href={`mailto:${item.email}`}>{item.email}</a></td><td>{item.desired_job}</td><td>{item.current_role}</td><td><span className="status-new">新申請</span></td></tr>)}</tbody></table>}</section></main>;
}
