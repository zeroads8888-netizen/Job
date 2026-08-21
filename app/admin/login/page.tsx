import { LoginForm } from "./LoginForm";
import "../admin.css";

export default function AdminLoginPage() {
  return <main className="admin-login-shell"><section className="login-card"><a className="login-brand" href="/">HireNest <b>香港</b></a><span>管理員專區</span><h1>登入申請人後台</h1><p>請輸入管理員 Username 和密碼。</p><LoginForm /><a className="login-back" href="/">← 返回招聘網站</a></section></main>;
}
