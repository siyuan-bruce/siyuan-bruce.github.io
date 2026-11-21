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
  fr      : &FR       Accueil
  fr-BE   : *FR
  fr-CA   : *FR
  fr-CH   : *FR
  fr-FR   : *FR
  fr-LU   : *FR
  # @end locale config
key: page-homepage
permalink: /
article_header: false
seo_title: "Bruce (Siyuan) Jin (金思远) | Information Systems PhD, HKUST & Wharton"
description: "Information Systems PhD candidate at HKUST Business School and visiting scholar at Wharton, studying generative AI, the IT workforce, and blockchain governance."
---

<head>
<link rel="stylesheet" href="/assets/css/site-pages.css">
<style>
  /* Homepage header on top of the shared page system (assets/css/site-pages.css) */
  .sp .home-head { display: grid; grid-template-columns: 168px minmax(0, 1fr); column-gap: 32px; align-items: center; margin: 8px 0 28px; }
  .sp .home-photo { position: relative; display: block; }
  .sp .home-photo img { display: block; width: 168px; height: auto; border-radius: 6px; transition: filter 0.2s ease; }
  .sp .home-photo:hover img, .sp .home-photo:focus-visible img { filter: brightness(0.94); }
  .photo-gallery-badge {
    position: absolute; right: 8px; bottom: 8px; width: 30px; height: 30px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    background: rgba(255, 255, 255, 0.92); color: #1e3a6e; box-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);
    opacity: 0; transform: translateY(4px); transition: opacity 0.2s ease, transform 0.2s ease; pointer-events: none;
  }
  .sp .home-photo:hover .photo-gallery-badge, .sp .home-photo:focus-visible .photo-gallery-badge { opacity: 1; transform: translateY(0); }
  .sp .home-name { font-size: 32px; font-weight: 700; line-height: 1.2; letter-spacing: -0.015em; color: var(--ink); margin: 0 0 8px; padding: 0; border: 0; }
  .sp .home-name .zh { font-weight: 400; font-size: 24px; color: var(--ink2); margin-left: 6px; }
  .sp .home-role { font-size: 15.5px; color: var(--ink2); line-height: 1.55; }
  .sp .home-market { margin-top: 10px; font-size: 15.5px; font-weight: 600; color: var(--accent); }
  .sp .home-links { margin-top: 10px; font-size: 14.5px; }
  .sp .home-links a { margin-right: 18px; white-space: nowrap; }
  .sp .home-bio p { font-size: 15.5px; line-height: 1.7; margin: 0 0 14px; }
  .sp .jmp-title { font-size: 18px; font-weight: 600; line-height: 1.4; }
  .sp .jmp-title a { font-weight: 600; }
  .sp .jmp .authors { margin-top: 4px; }
  .visit-counter { margin: 40px 0 0; opacity: 0.55; }
  @media (max-width: 600px) {
    .sp .home-head { grid-template-columns: 84px minmax(0, 1fr); column-gap: 14px; align-items: center; }
    .sp .home-head > div { display: contents; }
    .sp .home-photo { grid-row: 1; }
    .sp .home-photo img { width: 84px; }
    .sp .home-name { grid-column: 2; grid-row: 1; margin: 0; font-size: 25px; }
    .sp .home-name .zh { display: block; font-size: 18px; margin: 2px 0 0; }
    .sp .home-role, .sp .home-market, .sp .home-links { grid-column: 1 / -1; }
    .sp .home-role { margin-top: 14px; font-size: 14.5px; }
    .sp .home-market { font-size: 14.5px; }
  }
</style>
</head>

<div class="sp">

<div class="home-head">
  <!-- Hidden entrance to the photo gallery: the camera badge appears on hover -->
  <a class="home-photo" href="/gallery.html" title="More photos" aria-label="View photo gallery">
    <img src="/images/profile3-420.jpg" width="420" height="560" alt="Bruce (Siyuan) Jin" />
    <span class="photo-gallery-badge" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg></span>
  </a>
  <div>
    <h1 class="home-name">Bruce (Siyuan) Jin <span class="zh">金思远</span></h1>
    <div class="home-role">PhD Candidate in Information Systems, HKUST Business School<br>Visiting Scholar, The Wharton School, through December 2026</div>
    <div class="home-market">On the 2026&ndash;2027 academic job market</div>
    <div class="home-links">
      <a href="mailto:siyuan.jin@connect.ust.hk">siyuan.jin@connect.ust.hk</a>
      <a href="/assets/Bruce_CV.pdf" target="_blank" rel="noopener noreferrer">CV</a>
      <a href="https://www.linkedin.com/in/si-yuan-bruce-jin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/siyuan-bruce" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  </div>
</div>

<div class="home-bio">
  <!-- 2026-11-15 (Bruce): "make this part more concise". 2026-11-21: role lines moved to the header, research streams left to the Research page. -->
  <p><strong>Bruce (Siyuan) Jin</strong> studies how generative AI reshapes the organization of expertise inside firms and how blockchain creates value in digital markets. He is advised by Prof. <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/kytam">Kar Yan Tam</a> at HKUST and works with Prof. <a href="https://oid.wharton.upenn.edu/profile/wulynn/">Lynn Wu</a> at Wharton. His work appears in the <em>Journal of Management Information Systems</em> (JMIS, FT50).</p>
  <p>He has contributed to HKMA white papers on central bank digital currencies and quantum computing, and his <a href="/policy.html">policy work</a> has been covered by more than 70 news outlets, including the <em>South China Morning Post</em>, <em>China Daily</em>, RTHK, and Cointelegraph. Before HKUST, he spent two years as a full-stack blockchain engineer at the <a href="https://www.ventures.hsbc.com/en/about-us">HSBC Laboratory</a>, where his team reached the finals of the 2021 <a href="https://www.mas.gov.sg/news/media-releases/2021/mas-announces-15-finalists-for-the-global-cbdc-challenge">Global CBDC Challenge</a> of the Monetary Authority of Singapore.</p>
</div>

<h3 class="sec">Job market paper</h3>
<div class="jmp">
  <div class="jmp-title"><a href="/research.html#codified-expertise">Codified Expertise: How Generative AI Changes Temporal Coordination in Distributed Teams</a></div>
  <div class="authors">With Lynn Wu, Wei Thoo Yue, Kar Yan Tam and Eros Ye <span class="note">Under review</span></div>
</div>

{% if site.data.talks and site.data.talks.size > 0 %}
<h3 class="sec">Upcoming talks</h3>
{% for talk in site.data.talks %}
<div class="row"><span class="key">{{ talk.month }} {{ talk.year }}</span><div>
  <div class="title">{% if talk.url %}<a href="{{ talk.url }}" target="_blank" rel="noopener noreferrer">{{ talk.venue }}</a>{% else %}{{ talk.venue }}{% endif %}</div>
  <div class="meta">{% if talk.title contains "Codified Expertise" %}Job market paper{% else %}{{ talk.title }}{% endif %}{% if talk.place %} &middot; {{ talk.place }}{% endif %}{% if talk.time %} &middot; {{ talk.time }}{% endif %}{% if talk.room %} &middot; {{ talk.room }}{% endif %}{% if talk.speaker %} &middot; Presented by {{ talk.speaker }}{% endif %}</div>
</div></div>
{% endfor %}
{% endif %}

<!-- News stays hidden, as before; the entries are kept for later use. -->
<div hidden>
<h2 class="news-heading">News</h2>
<div class="news-section">
  <div class="news-year">
    <span class="news-year-label">2026</span>
    <span class="news-year-count">8 highlights</span>
  </div>

  <div class="news-item cat-paper">
    <div class="news-date">Aug 2026</div>
    <span class="news-cat">Paper</span>
    <div class="news-content">
      Paper on AI adoption and team expansion accepted at <strong>CIST 2026</strong>.
    </div>
  </div>

  <div class="news-item cat-paper">
    <div class="news-date">Aug 2026</div>
    <span class="news-cat">Paper</span>
    <div class="news-content">
      Paper on ambient information and selective entry (mobile widgets) accepted at <strong>CIST 2026</strong>.
    </div>
  </div>

  <div class="news-item cat-talk">
    <div class="news-date">Jul 2026</div>
    <span class="news-cat">Talk</span>
    <div class="news-content">
      Two papers accepted to the <strong>MISQ Virtual Paper Development Workshop</strong>.
    </div>
  </div>

  <div class="news-item cat-paper">
    <div class="news-date">2026</div>
    <span class="news-cat">Paper</span>
    <div class="news-content">
      Papers accepted at <span style="color:#1A5DCB;"><strong><em>Journal of Management Information Systems</em></strong> (JMIS, FT50)</span> and <span style="color:#1A5DCB;"><strong><em>ACM Transactions on Management Information Systems</em></strong> (TMIS)</span>.
    </div>
  </div>

  <div class="news-item cat-talk">
    <div class="news-date">Jun 2026</div>
    <span class="news-cat">Talk</span>
    <div class="news-content">
      Paper on AI adoption and time-zone frictions in global software teams selected for the <strong>HKUST IS Summer Workshop 2026</strong>.
    </div>
  </div>

  <div class="news-item cat-talk">
    <div class="news-date">May 2026</div>
    <span class="news-cat">Talk</span>
    <div class="news-content">
      Papers accepted to the <strong>INFORMS Annual Meeting 2026</strong> and <strong>CNAIS ISR Paper Development Workshop</strong>.
    </div>
  </div>

  <div class="news-item cat-award">
    <div class="news-date">May 2026</div>
    <span class="news-cat">Honor</span>
    <div class="news-content">
      Selected for the <strong>PACIS 2026 Doctoral Consortium</strong>.
    </div>
  </div>

  <div class="news-item cat-talk">
    <div class="news-date">Mar 2026</div>
    <span class="news-cat">Lecture</span>
    <div class="news-content">
      Invited as a guest lecturer on blockchain at <strong>South China University of Technology</strong>.
    </div>
  </div>
  <details class="news-older">
    <summary>Show earlier news (27 updates from 2025 and before)</summary>
    <div class="news-older-inner">
      <div class="news-year">
        <span class="news-year-label">2025</span>
        <span class="news-year-count">13 updates</span>
      </div>
      <div class="news-item cat-service">
        <div class="news-date">Dec 2025</div>
        <span class="news-cat">Service</span>
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
          Paper on seniority and AI-augmented code contributions nominated for the <strong>ICIS 2025 Best Short Paper Award</strong>.
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

      <div class="news-year">
        <span class="news-year-label">2024</span>
        <span class="news-year-count">11 updates</span>
      </div>
      <div class="news-item cat-service">
        <div class="news-date">Dec 2025</div>
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
</div>

<div class="visit-counter">
  <!-- Migration baseline: 30,000 historical visits + 653 from the previous counter (2026-09-26). -->
  <img src="https://hits.sh/siyuan-bruce.github.io/homepage.svg?label=visitors&amp;extraCount=30653&amp;color=8b919a"
       alt="Visitor count" loading="lazy" />
</div>

</div>

<meta name="viewport" content="width=device-width, initial-scale=1">
