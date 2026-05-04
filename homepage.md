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

  /* Awards Section */
  .awards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 10px;
    margin: 10px 10px 6px;
  }

  .award-tile {
    position: relative;
    padding: 12px 14px 12px 16px;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
    overflow: hidden;
  }

  .award-tile::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--cat-color, #1e3a6e);
  }

  .award-tile:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(30, 58, 110, 0.1);
    border-color: #c5d0e0;
  }

  .award-tile.cat-research    { --cat-color: #1e3a6e; }
  .award-tile.cat-grant       { --cat-color: #8B5C2A; }
  .award-tile.cat-fellowship  { --cat-color: #2d6a3e; }
  .award-tile.cat-industry    { --cat-color: #6e2a3e; }

  .award-cat {
    display: inline-block;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--cat-color, #1e3a6e);
    margin-bottom: 4px;
  }

  .award-year {
    position: absolute;
    top: 11px;
    right: 12px;
    font-size: 11.5px;
    font-weight: 600;
    color: #888;
    font-variant-numeric: tabular-nums;
  }

  .award-title {
    font-size: 14px;
    font-weight: 700;
    color: #111;
    line-height: 1.35;
    margin-bottom: 3px;
    padding-right: 56px;
  }

  .award-org {
    font-size: 12.5px;
    color: #555;
    line-height: 1.4;
  }

  .award-org a {
    color: #1e3a6e;
    text-decoration: none;
  }

  .award-org a:hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    .awards-grid {
      grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
      gap: 8px;
      margin: 8px;
    }

    .award-tile {
      padding: 10px 12px 10px 14px;
    }

    .award-title {
      font-size: 13px;
      padding-right: 48px;
    }

    .award-org {
      font-size: 12px;
    }
  }

  /* News Section */
  .news-section {
    margin: 10px;
    line-height: 1.5;
  }

  .news-year {
    display: flex;
    align-items: baseline;
    gap: 10px;
    margin: 18px 0 4px;
    padding-bottom: 6px;
    border-bottom: 1px solid #d8dde6;
  }

  .news-year:first-child {
    margin-top: 2px;
  }

  .news-year-label {
    font-size: 18px;
    font-weight: 700;
    color: #111;
    letter-spacing: -0.01em;
  }

  .news-year-count {
    font-size: 11.5px;
    color: #999;
    font-weight: 500;
    font-variant-numeric: tabular-nums;
  }

  .news-item {
    display: grid;
    grid-template-columns: 80px 82px 1fr;
    column-gap: 14px;
    align-items: baseline;
    padding: 8px 0;
    border-bottom: 1px solid #f3f3f3;
  }

  .news-item:last-child {
    border-bottom: none;
  }

  .news-date {
    font-size: 13px;
    font-weight: 600;
    color: #666;
    text-align: right;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  .news-cat {
    display: inline-block;
    font-size: 10.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 2px 8px;
    border-radius: 10px;
    border: 1px solid;
    text-align: center;
    white-space: nowrap;
    line-height: 1.45;
    justify-self: start;
  }

  .news-item.cat-paper .news-cat {
    color: #1e3a6e;
    border-color: #c5d0e0;
    background: #f0f4fb;
  }

  .news-item.cat-award .news-cat {
    color: #8B5C2A;
    border-color: #d8c4ae;
    background: #faf3eb;
  }

  .news-item.cat-talk .news-cat {
    color: #2d6a3e;
    border-color: #b9d4c2;
    background: #eef6f1;
  }

  .news-item.cat-service .news-cat {
    color: #6e2a3e;
    border-color: #d8b6c2;
    background: #fbf0f4;
  }

  .news-item.cat-milestone .news-cat {
    color: #4a4a4a;
    border-color: #d0d0d0;
    background: #f3f3f3;
  }

  .news-content {
    font-size: 14.5px;
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

  .news-older {
    margin-top: 14px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    background: #fafbfd;
  }

  .news-older > summary {
    padding: 10px 14px;
    font-size: 13.5px;
    font-weight: 600;
    color: #1e3a6e;
    cursor: pointer;
    list-style: none;
    user-select: none;
    transition: background 0.15s;
  }

  .news-older > summary::-webkit-details-marker {
    display: none;
  }

  .news-older > summary::before {
    content: '▸';
    display: inline-block;
    margin-right: 8px;
    color: #888;
    transition: transform 0.18s ease;
  }

  .news-older[open] > summary::before {
    transform: rotate(90deg);
  }

  .news-older > summary:hover {
    background: #f0f4fb;
  }

  .news-older[open] > summary {
    border-bottom: 1px solid #e0e0e0;
  }

  .news-older-inner {
    padding: 4px 14px 10px;
  }

  @media (max-width: 600px) {
    .news-item {
      grid-template-columns: 64px 1fr;
      grid-template-rows: auto auto;
      column-gap: 10px;
      row-gap: 4px;
      padding: 9px 0;
    }

    .news-date {
      grid-column: 1;
      grid-row: 1 / span 2;
      font-size: 12px;
      align-self: center;
    }

    .news-cat {
      grid-column: 2;
      grid-row: 1;
      font-size: 9.5px;
      padding: 1px 7px;
    }

    .news-content {
      grid-column: 2;
      grid-row: 2;
      font-size: 14px;
    }

    .news-year-label {
      font-size: 16px;
    }
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
  <p>
    He serves as an ad hoc reviewer for leading journals and conferences, and received the <span style="color:#1A5DCB;">Best Reviewer Award at ICIS 2025</span>. In teaching, he was a guest lecturer on blockchain at South China University of Technology and has served as a teaching assistant for multiple courses at HKUST, including undergraduate-level, and DBA-level courses</em>.
  </p>
  </div>
</div>

## Awards & Honors
<div class="awards-grid">
  <div class="award-tile cat-research">
    <span class="award-cat">Research</span>
    <div class="award-year">2026</div>
    <div class="award-title">Doctoral Consortium</div>
    <div class="award-org">PACIS — Pacific Asia Conference on Information Systems</div>
  </div>
  <div class="award-tile cat-grant">
    <span class="award-cat">Grant</span>
    <div class="award-year">2025</div>
    <div class="award-title">NSFC Young Student Basic Research Program <span style="font-weight:500;color:#555;">(300K RMB)</span></div>
    <div class="award-org">National Natural Science Foundation of China</div>
  </div>
  <div class="award-tile cat-research">
    <span class="award-cat">Research</span>
    <div class="award-year">2025</div>
    <div class="award-title">Best Reviewer Award</div>
    <div class="award-org">ICIS — International Conference on Information Systems</div>
  </div>
  <div class="award-tile cat-research">
    <span class="award-cat">Research</span>
    <div class="award-year">2025</div>
    <div class="award-title">Best Short Paper Nominee</div>
    <div class="award-org">ICIS — International Conference on Information Systems</div>
  </div>
  <div class="award-tile cat-fellowship">
    <span class="award-cat">Fellowship</span>
    <div class="award-year">2025</div>
    <div class="award-title">Young Scientist PhD Program (FinTech)</div>
    <div class="award-org">HKUST</div>
  </div>
  <div class="award-tile cat-fellowship">
    <span class="award-cat">Fellowship</span>
    <div class="award-year">2024 – 2028</div>
    <div class="award-title">Hong Kong PhD Fellowship</div>
    <div class="award-org">Research Grants Council, Hong Kong</div>
  </div>
  <div class="award-tile cat-research">
    <span class="award-cat">Research</span>
    <div class="award-year">2024</div>
    <div class="award-title">Best Short Paper Nominee</div>
    <div class="award-org">ICIS — International Conference on Information Systems</div>
  </div>
  <div class="award-tile cat-fellowship">
    <span class="award-cat">Fellowship</span>
    <div class="award-year">2022 – 2024</div>
    <div class="award-title">PhD Postgraduate Studentship</div>
    <div class="award-org">HKUST</div>
  </div>
  <div class="award-tile cat-industry">
    <span class="award-cat">Industry</span>
    <div class="award-year">2021</div>
    <div class="award-title"><a href="https://www.mas.gov.sg/news/media-releases/2021/mas-announces-15-finalists-for-the-global-cbdc-challenge" target="_blank" rel="noopener noreferrer" style="color:#111;">Global CBDC Challenge Finalist</a> <span style="font-weight:500;color:#555;">(Top 5%)</span></div>
    <div class="award-org">Monetary Authority of Singapore</div>
  </div>
  <div class="award-tile cat-industry">
    <span class="award-cat">Industry</span>
    <div class="award-year">2021</div>
    <div class="award-title">Top Performer Award</div>
    <div class="award-org">HSBC</div>
  </div>
  <div class="award-tile cat-industry">
    <span class="award-cat">Industry</span>
    <div class="award-year">2021</div>
    <div class="award-title">Role Model Award</div>
    <div class="award-org">HSBC</div>
  </div>
  <div class="award-tile cat-fellowship">
    <span class="award-cat">Fellowship</span>
    <div class="award-year">2020</div>
    <div class="award-title">China National Scholarship <span style="font-weight:500;color:#555;">(Top 0.1–0.2%)</span></div>
    <div class="award-org">Ministry of Education, China</div>
  </div>
</div>

## News
<div class="news-section">
  <div class="news-year">
    <span class="news-year-label">2025</span>
    <span class="news-year-count">13 updates</span>
  </div>
  <div class="news-item cat-award">
    <div class="news-date">Dec 2025</div>
    <span class="news-cat">Award</span>
    <div class="news-content">
      Received the Best Reviewer Award at <strong>ICIS 2025</strong>.
    </div>
  </div>
  <div class="news-item cat-award">
    <div class="news-date">Dec 2025</div>
    <span class="news-cat">Grant</span>
    <div class="news-content">
      Awarded the <strong>NSFC Young Student Basic Research Program</strong> grant (PhD Student, 2026–2027, 300K RMB).
    </div>
  </div>
  <div class="news-item cat-award">
    <div class="news-date">Dec 2025</div>
    <span class="news-cat">Honor</span>
    <div class="news-content">
      Paper on seniority and AI-augmented code contributions nominated for the <strong>ICIS 2025 Best Paper Award</strong>.
    </div>
  </div>
  <div class="news-item cat-paper">
    <div class="news-date">Oct 2025</div>
    <span class="news-cat">Paper</span>
    <div class="news-content">
      Paper on stablecoin transparency accepted at <strong>CIST 2025</strong>.
    </div>
  </div>
  <div class="news-item cat-paper">
    <div class="news-date">Jul 2025</div>
    <span class="news-cat">Paper</span>
    <div class="news-content">
      Paper on Copilot's impact accepted at <strong>ICIS 2025</strong>.
    </div>
  </div>
  <div class="news-item cat-talk">
    <div class="news-date">Jun 2025</div>
    <span class="news-cat">Talk</span>
    <div class="news-content">
      Paper on blockchain-based K-Pop community selected for the <strong>HKUST IS Summer Workshop 2025</strong>.
    </div>
  </div>
  <div class="news-item cat-paper">
    <div class="news-date">Jun 2025</div>
    <span class="news-cat">Paper</span>
    <div class="news-content">
      Paper on consumer perception of rCBDC adoption accepted at
      <strong><a href="https://dl.acm.org/doi/10.1145/3756329">ACM Distributed Ledger Technologies: Research and Practice</a></strong>.
    </div>
  </div>
  <div class="news-item cat-paper">
    <div class="news-date">Apr 2025</div>
    <span class="news-cat">Paper</span>
    <div class="news-content">
      Paper on code review accepted at <strong>SCECR 2025</strong>.
    </div>
  </div>
  <div class="news-item cat-paper">
    <div class="news-date">Apr 2025</div>
    <span class="news-cat">Paper</span>
    <div class="news-content">
      Paper on stablecoin transparency accepted at <strong>SCECR 2025</strong>.
    </div>
  </div>
  <div class="news-item cat-talk">
    <div class="news-date">Apr 2025</div>
    <span class="news-cat">Talk</span>
    <div class="news-content">
      Presented at the <strong>2025 HKUST PhD Student Conference</strong>.
    </div>
  </div>
  <div class="news-item cat-service">
    <div class="news-date">Mar 2025</div>
    <span class="news-cat">Service</span>
    <div class="news-content">
      Selected as a mentor for the <strong>2025 HKUST Web3 Ideathon Competition</strong>.
    </div>
  </div>
  <div class="news-item cat-service">
    <div class="news-date">Mar 2025</div>
    <span class="news-cat">Service</span>
    <div class="news-content">
      <strong>IS Reading Group</strong> reached over 100 members.
    </div>
  </div>
  <div class="news-item cat-paper">
    <div class="news-date">Feb 2025</div>
    <span class="news-cat">Paper</span>
    <div class="news-content">
      Paper on root cause analysis accepted at <strong>AIOps 2025</strong>.
    </div>
  </div>

  <details class="news-older">
    <summary>Show earlier news (14 updates from 2024 and before)</summary>
    <div class="news-older-inner">
      <div class="news-year">
        <span class="news-year-label">2024</span>
        <span class="news-year-count">11 updates</span>
      </div>
      <div class="news-item cat-service">
        <div class="news-date">Dec 2024</div>
        <span class="news-cat">Service</span>
        <div class="news-content">
          Selected to participate in the <strong>MISQ Reviewer Workshop</strong>.
        </div>
      </div>
      <div class="news-item cat-award">
        <div class="news-date">Dec 2024</div>
        <span class="news-cat">Award</span>
        <div class="news-content">
          Received the <strong>HKUST Young Scientists Program Award (FinTech)</strong>.
        </div>
      </div>
      <div class="news-item cat-award">
        <div class="news-date">Nov 2024</div>
        <span class="news-cat">Honor</span>
        <div class="news-content">
          Paper on blockchain-based K-Pop community nominated for the <strong>ICIS 2024 Best Short Paper Award</strong>.
        </div>
      </div>
      <div class="news-item cat-talk">
        <div class="news-date">Nov 2024</div>
        <span class="news-cat">Talk</span>
        <div class="news-content">
          Presented research on blockchain infrastructure governance at the <strong>2024 Greater Bay Area Finance Workshop</strong>.
        </div>
      </div>
      <div class="news-item cat-paper">
        <div class="news-date">Aug 2024</div>
        <span class="news-cat">Paper</span>
        <div class="news-content">
          Paper on blockchain-based K-Pop community accepted at <strong>CIST 2024</strong>.
        </div>
      </div>
      <div class="news-item cat-paper">
        <div class="news-date">Aug 2024</div>
        <span class="news-cat">Paper</span>
        <div class="news-content">
          Paper on code review accepted at <strong>CIST 2024</strong>.
        </div>
      </div>
      <div class="news-item cat-paper">
        <div class="news-date">Jul 2024</div>
        <span class="news-cat">Paper</span>
        <div class="news-content">
          Paper on blockchain-based K-Pop community accepted at the <strong>ICIS 2024 Fintech Track</strong>.
        </div>
      </div>
      <div class="news-item cat-paper">
        <div class="news-date">Jul 2024</div>
        <span class="news-cat">Paper</span>
        <div class="news-content">
          Paper on stablecoin transparency accepted at <strong>ICIS 2024</strong>.
        </div>
      </div>
      <div class="news-item cat-milestone">
        <div class="news-date">Jul 2024</div>
        <span class="news-cat">Milestone</span>
        <div class="news-content">
          Successfully passed the <strong>PhD Qualification Exam</strong> and advanced to candidacy.
        </div>
      </div>
      <div class="news-item cat-service">
        <div class="news-date">Jun 2024</div>
        <span class="news-cat">Service</span>
        <div class="news-content">
          Paper accepted for the <strong>MIS Quarterly Virtual Paper Development Workshop</strong>.
        </div>
      </div>
      <div class="news-item cat-talk">
        <div class="news-date">May 2024</div>
        <span class="news-cat">Talk</span>
        <div class="news-content">
          Presented at the <strong>HKUST PhD Student Conference</strong>.
        </div>
      </div>

      <div class="news-year">
        <span class="news-year-label">2023</span>
        <span class="news-year-count">2 updates</span>
      </div>
      <div class="news-item cat-paper">
        <div class="news-date">Oct 2023</div>
        <span class="news-cat">Paper</span>
        <div class="news-content">
          Joint policy paper "e-HKD Pilot Programme" published by the <a href="https://www.hkma.gov.hk/media/eng/doc/key-information/press-release/2023/20231030e3a1.pdf"><strong>HKMA</strong></a>.
        </div>
      </div>
      <div class="news-item cat-paper">
        <div class="news-date">Sep 2023</div>
        <span class="news-cat">Paper</span>
        <div class="news-content">
          Paper on software metrics distributions accepted at <strong>QRS 2023</strong>.
        </div>
      </div>

      <div class="news-year">
        <span class="news-year-label">2022</span>
        <span class="news-year-count">1 update</span>
      </div>
      <div class="news-item cat-service">
        <div class="news-date">Dec 2022</div>
        <span class="news-cat">Service</span>
        <div class="news-content">
          Selected as a mentor for the <strong>2022 HKUST Fintechstic Competition</strong>.
        </div>
      </div>
    </div>
  </details>
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