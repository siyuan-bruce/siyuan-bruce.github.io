---
layout: article
titles:
  # @start locale config
  en      : &EN       Homepage
  en-GB   : *EN
  en-US   : *EN
  en-CA   : *EN
  en-AU   : *EN
  zh-Hans : &ZH_HANS  主页
  zh      : *ZH_HANS
  zh-CN   : *ZH_HANS
  zh-SG   : *ZH_HANS
  fr-BE   : *FR
  fr-CA   : *FR
  fr-CH   : *FR
  fr-FR   : *FR
  fr-LU   : *FR
  # @end locale config
key: page-homepage
---

<head>
<style>
  /* Base styles */
  .container {
    width: 100%;
    text-align: center;
  }

  body {
    line-height: 1.6;
    background-color: #ffffff;
    color: #222;
    margin: 0;
    padding: 0;
  }

  .profile-image {
    width: 100%;
    max-width: 260px;
    margin: 10px 0;
  }

  .profile-image img {
    width: 100%;
    max-width: 260px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }

  .profile-text {
    margin: 10px;
    text-align: left;
  }

  .profile-sidebar {
    margin-top: 14px;
    font-size: 13px;
    color: #444;
    line-height: 1.6;
    text-align: left;
  }

  .profile-sidebar .affil-row {
    display: flex;
    align-items: flex-start;
    gap: 6px;
    padding: 5px 0;
    border-bottom: 1px solid #f0f0f0;
    color: #333;
    font-size: 13px;
  }

  .profile-sidebar .affil-row:last-of-type {
    border-bottom: none;
    margin-bottom: 8px;
  }

  .profile-sidebar .affil-icon {
    flex-shrink: 0;
    width: 16px;
    text-align: center;
    color: #1e3a6e;
    font-size: 12px;
    margin-top: 2px;
  }

  .profile-sidebar .link-row {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 10px;
  }

  .profile-sidebar .link-row a {
    color: #1e3a6e;
    text-decoration: none;
    font-size: 12.5px;
    padding: 3px 9px;
    border: 1px solid #c5d0e0;
    border-radius: 3px;
    background: #fff;
    transition: background 0.15s;
  }

  .profile-sidebar .link-row a:hover {
    background: #f0f4fb;
    text-decoration: none;
  }

  .profile-sidebar .sidebar-name {
    font-size: 15px;
    font-weight: 700;
    color: #111;
    margin-bottom: 10px;
    line-height: 1.35;
  }

  .profile-sidebar .sidebar-name .chinese-name {
    font-weight: 600;
    color: #444;
  }

  .profile-sidebar .contact-email {
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #f0f0f0;
    font-size: 12.5px;
    line-height: 1.5;
  }

  .profile-sidebar .contact-email a {
    color: #1e3a6e;
    text-decoration: none;
    word-break: break-all;
  }

  .profile-sidebar .contact-email a:hover {
    text-decoration: underline;
  }

  .profile-sidebar .contact-email .label {
    display: block;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: #888;
    margin-bottom: 4px;
  }

  .contact-footer {
    margin: 10px;
    padding: 16px 18px;
    border: 1px solid #e0e0e0;
    border-radius: 2px;
    background: #fafbfd;
    line-height: 1.55;
    color: #333;
    text-align: left;
  }

  .contact-footer .contact-lead {
    font-size: 1.05em;
    font-weight: 700;
    color: #111;
    margin-bottom: 6px;
  }

  .contact-footer .contact-affil {
    font-size: 14px;
    color: #555;
    margin-bottom: 14px;
  }

  .contact-footer ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .contact-footer ul li {
    margin-bottom: 10px;
    padding-left: 0;
    font-size: 14px;
  }

  .contact-footer ul li:last-child {
    margin-bottom: 0;
  }

  .contact-footer a {
    color: #1e3a6e;
    text-decoration: none;
  }

  .contact-footer a:hover {
    text-decoration: underline;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  .paper-item {
    margin-bottom: 25px;
    padding-left: 15px;
    border-left: 3px solid #1e3a6e;
  }

  .paper-title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #111;
    line-height: 1.4;
  }

  .paper-authors {
    font-size: 15px;
    font-weight: 400;
    color: #555;
    margin-bottom: 8px;
  }

  .conference-info {
    color: #555;
    font-weight: 600;
    font-size: 14px;
    margin-top: 6px;
  }

  /* News Section */
  .news-section {
    margin: 10px;
    line-height: 1.5;
  }

  .news-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 0;
    padding: 7px 0;
    border-bottom: 1px solid #f0f0f0;
  }

  .news-item:last-child {
    border-bottom: none;
  }

  .news-date {
    font-size: 14px;
    font-weight: 600;
    font-style: italic;
    color: #666;
    width: 100px;
    flex-shrink: 0;
    text-align: right;
    padding-right: 16px;
    white-space: nowrap;
  }

  .news-content {
    font-size: 15px;
    flex-grow: 1;
    color: #333;
  }

  .news-content strong {
    color: #111;
    font-weight: 600;
  }

  .news-content a {
    text-decoration: none;
    color: #1e3a6e;
  }

  .news-content a:hover {
    text-decoration: underline;
  }

  /* Desktop layout */
  @media screen and (min-width: 600px) {
    .container {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }

    .profile-image {
      flex: 1 1 auto;
      max-width: 260px;
      margin-left: 24px;
      order: 2;
    }

    .profile-text {
      margin-top: 0;
      order: 1;
      flex: 70%;
    }

    .card {
      display: flex;
      background-color: #fff;
      border: 1px solid #e0e0e0;
      padding: 16px;
      margin: 8px 0;
      border-radius: 2px;
      position: relative;
      width: 100%;
      max-width: 1000px;
    }

    .card-content {
      max-width: 70%;
    }

    .card h3 {
      font-size: 1.35em;
      margin-bottom: 2px;
      margin-top: 0;
      color: #111;
    }

    .card small {
      font-size: 0.875em;
      color: #666;
      display: block;
      margin-bottom: 8px;
    }

    .card ul {
      list-style-type: none;
      padding: 0;
    }

    .card ul li {
      margin-bottom: 0;
      padding-left: 20px;
    }

    /* Timeline */
    .timeline {
      position: relative;
      margin-left: 20px;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 10px;
      top: 10px;
      bottom: 0;
      width: 1px;
      background-color: #ccc;
    }

    .timeline-item {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      padding-left: 40px;
      position: relative;
    }

    .university-logo {
      height: 160px;
      justify-self: end;
      align-self: flex-start;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: 7px;
      top: 8px;
      width: 7px;
      height: 7px;
      background-color: #1e3a6e;
      border-radius: 50%;
    }

    header.header {
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    }
  }

  /* Mobile adjustments */
  @media (max-width: 600px) {
    .card {
      max-width: 100%;
      padding: 14px;
      margin: 8px 0;
    }

    h3 {
      font-size: 1.1em;
    }

    p,
    ul li {
      font-size: 0.95em;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: 7px;
      top: 8px;
      width: 7px;
      height: 7px;
      background-color: #1e3a6e;
      border-radius: 50%;
    }
  }
</style>
</head>

<div class="container">
  <div class="profile-image">
    <img src="./images/profile3.png" alt="Profile Image" loading="lazy" />
    <div class="profile-sidebar">
      <div class="sidebar-name">Siyuan (Bruce) Jin <span class="chinese-name">(金思远)</span></div>
      <div class="affil-row">
        <span class="affil-icon">&#127979;</span>
        <span><strong>HKUST</strong> &middot; PhD Candidate, Information Systems</span>
      </div>
      <div class="affil-row">
        <span class="affil-icon">&#127963;</span>
        <span><strong>Wharton</strong> &middot; Visiting Scholar (through Dec 2026)</span>
      </div>
      <div class="contact-email">
        <span class="label">Email</span>
        <a href="mailto:siyuan.jin@connect.ust.hk">siyuan.jin@connect.ust.hk</a>
      </div>
      <div class="link-row">
        <a href="https://github.com/siyuan-bruce" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/si-yuan-bruce-jin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://siyuan-bruce.github.io/research.html">Research</a>
        <a href="/service.html">Service</a>
      </div>
    </div>
  </div>
    <div class="profile-text">
     <p>
    <strong>Siyuan (Bruce) JIN (金思远)</strong> is a PhD candidate in Information Systems at HKUST Business School, advised by Prof. <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/kytam">Kar Yan Tam</a>. He is currently a visiting scholar at the Wharton School, University of Pennsylvania, working with Prof. Lynn Wu until December 2026.
  </p>
  <p>
    His research interests center on 1) blockchain infrastructure and application governance and 2) AI use in enterprise IT management. His methods include data analytics, econometrics, and experimental methods. 
    His papers have been accepted by top IS conferences, including <span style="color:#8B5C2A;">ICIS</span>, <span style="color:#8B5C2A;">CIST</span>, and <span style="color:#8B5C2A;">SCECR</span>. His papers are nominated as <span style="color:#1A5DCB;">best paper of ICIS 2024</span> and <span style="color:#1A5DCB;">ICIS 2025</span>. He has contributed to policy papers for the Hong Kong Monetary Authority (HKMA) and HKET (經濟日報), and has industrial collaboration with HSBC, NetEase, Shanbei, and other companies.
</p>

<p>
    He received the <span style="color:#1A5DCB;">China National Scholarship</span> (2020), <span style="color:#1A5DCB;">Hong Kong PhD Fellowship (HKPFS)</span> (2024), and <span style="color:#1A5DCB;">Young Scientists Program Award</span> (2025). He was also awarded the <span style="color:#1A5DCB;">2025 NSFC Young Student Basic Research Program Grant</span> (300,000 RMB). Through the <a href="/service.html">IS Reading Group</a>, he has organized 40+ online IS PhD student seminars. 
    
  </p>
  <p>
    Before HKUST, he worked for two years at HSBC as a trainee and full-stack engineer, focusing on blockchain projects in IT Architecture and the <a href="https://www.ventures.hsbc.com/en/about-us">HSBC Laboratory</a>. He received the <span style="color:#1A5DCB;">2021 Top Performer</span> and <span style="color:#1A5DCB;">Role Model</span> awards, and was a finalist in the <a href="https://www.mas.gov.sg/news/media-releases/2021/mas-announces-15-finalists-for-the-global-cbdc-challenge">2021 Global CBDC Challenge</a> organized by the Monetary Authority of Singapore.
  </p>
  </div>
</div>

## News
<div class="news-section">
  <div class="news-item">
    <div class="news-date">Dec, 2025</div>
    <div class="news-content">
      Received the Best Reviewer Award at <strong>2025 ICIS</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Dec, 2025</div>
    <div class="news-content">
      Received the 2025 NSFC Young Student Basic Research Program (PhD Student) Grant (2026-2027, 300K RMB).
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Dec, 2025</div>
    <div class="news-content">
      Paper on seniority and AI-augmented code contributions nominated for the <strong>ICIS 2025 Best Paper Award</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Oct, 2025</div>
    <div class="news-content">
      Paper on stablecoin transparency accepted at <strong>CIST 2025</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Jul, 2025</div>
    <div class="news-content">
      Paper on Copilot's impact accepted at <strong>ICIS 2025</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Jun, 2025</div>
    <div class="news-content">
      Paper on blockchain-based K-Pop community selected for the <strong>HKUST IS Summer Workshop 2025</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Jun, 2025</div>
    <div class="news-content">
      Paper on consumer perception of rCBDC adoption accepted at 
      <strong>
        <a href="https://dl.acm.org/doi/10.1145/3756329" style="text-decoration: underline;">ACM Distributed Ledger Technologies: Research and Practice</a>
      </strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Apr, 2025</div>
    <div class="news-content">
      Paper on code review accepted at <strong>SCECR 2025</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Apr, 2025</div>
    <div class="news-content">
      Paper on stablecoin transparency accepted at <strong>SCECR 2025</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Apr, 2025</div>
    <div class="news-content">
      Presented at the <strong>2025 HKUST PhD Student Conference</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Mar, 2025</div>
    <div class="news-content">
      Selected as a mentor for the <strong>2025 HKUST Web3 Ideathon Competition</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Mar, 2025</div>
    <div class="news-content">
      <strong>IS Reading Group</strong> reached over 100 members.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Feb, 2025</div>
    <div class="news-content">
      Paper on root cause analysis accepted at <strong>AIOps 2025</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Dec, 2024</div>
    <div class="news-content">
      Selected to participate in the <strong>MISQ Reviewer Workshop</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Dec, 2024</div>
    <div class="news-content">
      Received the <strong>HKUST Young Scientists Program Award (FinTech)</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Nov, 2024</div>
    <div class="news-content">
      Paper on blockchain-based K-Pop community nominated for the <strong>ICIS 2024 Best Short Paper Award</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Nov, 2024</div>
    <div class="news-content">
      Presented research on blockchain infrastructure governance at the <strong>2024 Greater Bay Area Finance Workshop</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Aug, 2024</div>
    <div class="news-content">
      Paper on blockchain-based K-Pop community accepted for publication in <strong>2024 CIST</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Aug, 2024</div>
    <div class="news-content">
      Paper on code review accepted for publication in <strong>2024 CIST</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Jul, 2024</div>
    <div class="news-content">
      Paper on blockchain-based K-Pop community accepted at the <strong>2024 ICIS Fintech Track</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Jul, 2024</div>
    <div class="news-content">
      Paper on stablecoin transparency accepted at <strong>2024 ICIS</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Jul, 2024</div>
    <div class="news-content">
      Successfully passed the <strong>PhD Qualification Exam</strong> and advanced to candidacy.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Jun, 2024</div>
    <div class="news-content">
      Paper accepted for the <strong>MIS Quarterly Virtual Paper Development Workshop</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">May, 2024</div>
    <div class="news-content">
      Presented at the <strong>HKUST PhD Student Conference</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Oct, 2023</div>
    <div class="news-content">
      Joint policy paper "e-HKD Pilot Programme" published by the <a href="https://www.hkma.gov.hk/media/eng/doc/key-information/press-release/2023/20231030e3a1.pdf"><strong>HKMA</strong></a>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Sep, 2023</div>
    <div class="news-content">
      Paper on software metrics distributions accepted at <strong>QRS 2023</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Dec, 2022</div>
    <div class="news-content">
      Selected as a mentor for the <strong>2022 HKUST Fintechstic Competition</strong>.
    </div>
  </div>
</div>

## Contact

<div class="contact-footer">
  <div class="contact-lead">Siyuan (Bruce) Jin (金思远)</div>
  <div class="contact-affil">PhD candidate in Information Systems, HKUST Business School · Visiting scholar, Wharton School, University of Pennsylvania (through December 2026)</div>
  <ul>
    <li><strong>Email:</strong> <a href="mailto:siyuan.jin@connect.ust.hk">siyuan.jin@connect.ust.hk</a> — research collaboration, reading group, RA applications, and general inquiries</li>
    <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/si-yuan-bruce-jin" target="_blank" rel="noopener noreferrer">linkedin.com/in/si-yuan-bruce-jin</a></li>
  </ul>
</div>

<script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=r7AzHOCvRlal1xYrtPrhKbcA0nnj4jrEj9bMJxTlmEE&cl=ffffff&w=300"></script>


<meta name="viewport" content="width=device-width, initial-scale=1">