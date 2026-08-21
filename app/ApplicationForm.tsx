"use client";

import { FormEvent, useState } from "react";

export function ApplicationForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true); setError(""); setSent(false);
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/applications", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error || "提交失敗");
      setSent(true); form.reset();
    } catch (cause) { setError(cause instanceof Error ? cause.message : "提交失敗，請稍後再試。"); }
    finally { setLoading(false); }
  }

  return (
    <form className="application-form" onSubmit={submit}>
      <div className="form-head"><span>申請表格</span><small>預計 2 分鐘完成</small></div>
      <label>姓名<input required name="name" autoComplete="name" placeholder="請輸入姓名" /></label>
      <div className="form-row"><label>年齡<input required name="age" type="number" min="18" max="100" placeholder="例如：28" /></label><label>性別<select required name="gender" defaultValue=""><option value="" disabled>請選擇</option><option>男</option><option>女</option><option>其他／不透露</option></select></label></div>
      <label>電話號碼<div className="phone-field"><span>+852</span><input required name="phone" inputMode="tel" autoComplete="tel" placeholder="1234 5678" /></div></label>
      <label>電郵地址<input required name="email" type="email" autoComplete="email" placeholder="name@example.com" /></label>
      <label>目前工作／行業<input required name="role" placeholder="例如：客戶服務" /></label>
      <label>申請職位<select required name="desiredJob" defaultValue=""><option value="" disabled>請選擇職位</option><option>產品測評專員</option><option>線上補習老師／線上家教</option><option>資料輸入員／文件處理助理</option><option>線上翻譯／校對</option><option>虛擬助理</option><option>AI 數據標註兼職</option><option>線上客戶服務助理</option><option>社交媒體內容助理</option><option>電商營運助理</option></select></label>
      <input className="website-field" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label className="consent"><input required type="checkbox" /> <span>我確認以上資料正確，並同意招聘團隊就職位申請與我聯絡。</span></label>
      <button className="submit-button" type="submit" disabled={loading}>{loading ? "正在提交…" : "提交申請"} <span>→</span></button>
      {sent && <p className="preview-message" role="status">✓ 申請已成功提交，我們會盡快聯絡合適人選。</p>}
      {error && <p className="form-error" role="alert">{error}</p>}
    </form>
  );
}
