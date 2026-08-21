import { ApplicationForm } from "./ApplicationForm";

const remoteJobs = [
  { title: "產品測評專員", subtitle: "遙距工作｜彈性時段", tags: ["產品體驗", "意見回饋", "報告填寫", "細心", "無需經驗"], status: "現正招募", pay: "HK$70–120/小時", icon: "⌁" },
  { title: "線上補習老師／線上家教", subtitle: "遙距教學｜可自選時段", tags: ["網上授課", "功課輔導", "溝通能力", "中英文", "教學經驗優先"], status: "現正招募", pay: "HK$120–250/小時", icon: "◇" },
  { title: "資料輸入員／文件處理助理", subtitle: "遙距工作｜彈性安排", tags: ["資料輸入", "文件整理", "Excel", "打字", "細心"], status: "7日內活躍", pay: "HK$60–90/小時", icon: "▤" },
  { title: "線上翻譯／校對", subtitle: "遙距工作｜按項目安排", tags: ["中英翻譯", "內容校對", "文字處理", "語言能力", "彈性時間"], status: "現正招募", pay: "HK$80–180/小時", icon: "⌁" },
  { title: "虛擬助理", subtitle: "遙距工作｜彈性時段", tags: ["行政支援", "電郵處理", "行程安排", "文件整理", "溝通能力"], status: "7日內活躍", pay: "HK$70–110/小時", icon: "◇" },
  { title: "AI 數據標註兼職", subtitle: "網上任務｜提供基礎指引", tags: ["數據分類", "圖片標註", "文字標記", "簡單操作", "無需經驗"], status: "現正招募", pay: "HK$60–100/小時", icon: "▤" },
  { title: "線上客戶服務助理", subtitle: "遙距工作｜輪班或彈性時段", tags: ["客戶查詢", "文字回覆", "訂單跟進", "溝通能力", "廣東話"], status: "今日活躍", pay: "HK$65–100/小時", icon: "⌁" },
  { title: "社交媒體內容助理", subtitle: "遙距工作｜彈性安排", tags: ["內容整理", "帖文發佈", "社交媒體", "簡單文案", "基本設計"], status: "7日內活躍", pay: "HK$70–120/小時", icon: "◇" },
  { title: "電商營運助理", subtitle: "遙距工作｜可彈性安排", tags: ["商品資料", "訂單處理", "平台操作", "客戶跟進", "Excel"], status: "今日活躍", pay: "HK$70–110/小時", icon: "▤" },
];

const faqs = [
  ["我沒有相關經驗，可以申請嗎？", "可以。部分職位設有基本入職指引，我們更重視你的溝通能力、責任感及學習態度。"],
  ["可以兼職或在家工作嗎？", "可以。實際安排視乎職位需要，招聘團隊會在初步聯絡時清楚說明工作時段及模式。"],
  ["申請需要支付費用嗎？", "不需要。我們不收取登記、培訓、申請或入職費用，也不會要求你提供銀行密碼或驗證碼。"],
  ["提交申請後多久會收到回覆？", "一般會在一至兩個工作天內作初步聯絡；只有合適的申請人會獲邀進入下一步。"],
];

export default function Home() {
  return (
    <main id="top">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="返回首頁">
          <span className="brand-dot" />
          <span><b>Hire</b>Nest</span>
          <small>香港</small>
        </a>
        <nav aria-label="主要導覽">
          <a href="#opportunities">工作機會</a>
          <a href="#job">職位介紹</a>
          <a href="#process">申請流程</a>
          <a href="#faq">常見問題</a>
        </nav>
        <a className="header-cta" href="#apply">立即申請</a>
      </header>

      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="trust-label"><span>★★★★★</span> 專為香港求職者而設</div>
          <h1>高薪遙距工作，<br /><em>時間由你安排。</em></h1>
          <p>尋找具競爭力薪酬及彈性工作時間的遙距職位。只需幾分鐘完成申請，我們會為合適人選配對工作機會。</p>
          <div className="hero-actions">
            <a className="main-button" href="#apply">立即申請 <span>→</span></a>
            <a className="quiet-link" href="#opportunities">查看職位</a>
          </div>
          <div className="hero-perks">
            <span>◷ 彈性時間</span><span>⌂ 遙距職位</span><span>✓ 申請費用全免</span>
          </div>
        </div>
        <div className="hero-photo">
          <img src="/remote-work-hk.png" alt="在香港家中遙距工作的專業人士" />
          <div className="floating-card">
            <span className="online-dot" />
            <div><b>現正招聘</b><small>遙距產品推廣專員</small></div>
          </div>
          <div className="pay-chip"><small>時薪可達</small><strong>HK$120</strong></div>
        </div>
      </section>

      <section className="apply-block section-wrap" id="apply">
        <div className="apply-intro">
          <span className="section-tag">快速申請</span>
          <h2>填寫簡短資料，<br />展開下一步。</h2>
          <p>完成表格後，招聘團隊會按職位需要聯絡合適的申請人。</p>
          <div className="safety-note">
            <b>✓ 求職安全提示</b>
            <p>我們不會收取任何登記、培訓或入職費用，也不會要求你轉帳、分享密碼或提供銀行驗證碼。</p>
          </div>
        </div>
        <ApplicationForm />
      </section>

      <section className="opportunities-section section-wrap" id="opportunities">
        <div className="opportunities-heading">
          <div><span className="section-tag">遙距工作機會</span><h2>找到配合你生活的<br />彈性工作。</h2></div>
          <p>精選適合香港求職者的遙距職位。點擊任何職位，即可前往申請表格登記。</p>
        </div>
        <div className="remote-jobs-grid">
          {remoteJobs.map((job) => (
            <a className="remote-job-card" href="#apply" key={job.title} aria-label={`申請 ${job.title}`}>
              <div className="remote-job-top"><div><h3>{job.title}</h3><p>{job.subtitle}</p></div><span className="remote-job-icon">{job.icon}</span></div>
              <div className="remote-job-tags">{job.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="remote-job-bottom"><small>{job.status}</small><strong>{job.pay}</strong></div>
            </a>
          ))}
        </div>
      </section>

      <section className="job-section" id="job">
        <div className="section-wrap">
          <div className="job-heading">
            <div><span className="section-tag light">精選職位</span><h2>遙距產品推廣專員</h2></div>
            <div className="salary"><small>參考時薪</small><strong>HK$80–120</strong></div>
          </div>
          <div className="job-panel">
            <div className="job-image"><img src="/remote-work-hk.png" alt="使用電腦處理遙距工作" /></div>
            <div className="job-details">
              <div className="job-badges"><span>⌂ 遙距工作</span><span>◷ 彈性時間</span><span>◉ 兼職／全職</span></div>
              <h3>主要工作內容</h3>
              <ul><li>透過線上渠道介紹指定產品及回覆一般查詢</li><li>按照清晰指引整理及發佈產品內容</li><li>記錄工作進度並提交簡短更新</li></ul>
              <h3>基本要求</h3>
              <ul><li>良好中文溝通能力及基本電腦操作</li><li>穩定網絡及安靜工作環境</li><li>做事可靠，能按安排完成工作</li></ul>
              <a className="main-button" href="#apply">申請這個職位 <span>→</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="expect-section section-wrap">
        <div className="expect-copy"><span className="section-tag">工作體驗</span><h2>你可以期待甚麼？</h2><p>清晰流程、透明指引，以及在需要時獲得支援。</p></div>
        <div className="expect-grid">
          {[["01","簡單入職安排"],["02","彈性工作時段"],["03","團隊適時支援"],["04","簡短進度更新"]].map(([n,t]) => <div key={n}><span>{n}</span><b>{t}</b></div>)}
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="section-wrap process-inner">
          <div><span className="section-tag light">申請流程</span><h2>三個簡單步驟，<br />找到合適機會。</h2><a href="#apply" className="soft-button">立即開始 →</a></div>
          <div className="steps">
            <article><span>1</span><div><h3>填寫申請</h3><p>提供基本聯絡資料及你偏好的工作安排。</p></div></article>
            <article><span>2</span><div><h3>初步配對</h3><p>我們會按職位要求及你的可工作時間作初步評估。</p></div></article>
            <article><span>3</span><div><h3>聯絡及開始</h3><p>合適人選會獲得進一步資料及入職安排。</p></div></article>
          </div>
        </div>
      </section>

      <section className="stories-section section-wrap">
        <span className="section-tag">求職者分享</span><h2>靈活工作的真實體驗</h2>
        <div className="stories">
          <blockquote><p>「整個流程很清楚，招聘人員先解釋工作安排，我可以了解清楚後再決定。」</p><footer><span>CY</span><div><b>陳小姐</b><small>兼職推廣專員</small></div></footer></blockquote>
          <blockquote className="featured"><p>「彈性時間最適合我。溝通直接，有問題也很快得到回覆。」</p><footer><span>KW</span><div><b>黃先生</b><small>遙距客戶支援</small></div></footer></blockquote>
          <blockquote><p>「申請資料不複雜，入職指引亦很容易跟隨，對新手很友善。」</p><footer><span>ML</span><div><b>林小姐</b><small>內容助理</small></div></footer></blockquote>
        </div>
      </section>

      <section className="faq-section section-wrap" id="faq">
        <div className="faq-title"><span className="section-tag">常見問題</span><h2>申請前想知道的事</h2><p>如有其他問題，可在正式聯絡資料更新後與招聘團隊聯絡。</p></div>
        <div className="faq-list">{faqs.map(([q,a]) => <details key={q}><summary>{q}<span>＋</span></summary><p>{a}</p></details>)}</div>
      </section>

      <section className="final-cta section-wrap"><div><span>準備好展開新一步？</span><h2>幾分鐘完成申請，<br />尋找適合你的工作。</h2></div><a className="main-button light-button" href="#apply">立即申請 <span>→</span></a></section>

      <footer className="footer"><div className="section-wrap footer-inner"><a className="brand footer-brand" href="#top"><span className="brand-dot" /><span><b>Hire</b>Nest</span><small>香港</small></a><p>專為香港求職者而設的遙距工作配對平台。</p><div><a href="#opportunities">工作機會</a><a href="#job">職位介紹</a><a href="#faq">常見問題</a><a href="#apply">立即申請</a></div><small>© 2026 HireNest 香港 · 保留所有權利</small></div></footer>

      <a className="whatsapp-float" href="#apply" aria-label="聯絡招聘團隊"><span>◔</span><b>有問題？</b></a>
    </main>
  );
}
