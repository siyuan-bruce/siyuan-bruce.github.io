---
layout: article
titles:
  # @start locale config
  en      : &EN       Research
  en-GB   : *EN
  en-US   : *EN
  en-CA   : *EN
  en-AU   : *EN
  zh-Hans : &ZH_HANS  研究
  zh      : *ZH_HANS
  zh-CN   : *ZH_HANS
  zh-SG   : *ZH_HANS
  fr      : &FR       Recherche
  fr-BE   : *FR
  fr-CA   : *FR
  fr-CH   : *FR
  fr-FR   : *FR
  fr-LU   : *FR
  # @end locale config
key: page-research
---

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      line-height: 1.6;
      padding: 0;
    }

    ul {
      list-style-type: none;
      padding-left: 0;
    }

    .paper-item {
      margin-bottom: 28px;
      padding-left: 15px;
      border-left: 3px solid #1e3a6e;
      position: relative;
    }

    .paper-item::before {
      content: attr(data-number);
      position: absolute;
      left: -36px;
      top: 2px;
      color: #888;
      font-size: 12px;
      font-weight: 600;
      width: 28px;
      text-align: right;
    }

    .paper-title {
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 6px;
      color: #111;
      line-height: 1.4;
    }

    .paper-authors {
      font-size: 15px;
      font-weight: 400;
      color: #444;
      margin-bottom: 6px;
    }

    .conference-info {
      color: #555;
      font-weight: 400;
      font-size: 14px;
      margin-top: 5px;
    }

    .status-info {
      color: #1e3a6e;
      font-weight: 600;
      font-style: italic;
      font-size: 14px;
      margin-top: 6px;
    }

    .special-info {
      color: #1e3a6e;
      font-weight: 600;
      font-size: 14px;
      margin-top: 8px;
    }

    a {
      color: #1e3a6e;
      font-weight: 500;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    details summary {
      cursor: pointer;
      font-weight: 600;
      color: #333;
      font-size: 14px;
      user-select: none;
    }

    details p {
      margin-top: 8px;
      font-size: 15px;
      color: #444;
      line-height: 1.6;
    }

    .paper-details .paper-abstract { margin-top: 12px; }
    .paper-details .paper-abstract__text > p { margin: 0 0 12px; }
    .paper-details .paper-abstract__text > p:last-child {
      margin-bottom: 0;
      font-size: 14px;
      line-height: 1.5;
    }

    .paper-details > summary:focus-visible {
      outline: 2px solid #2b6cb0;
      outline-offset: 4px;
      border-radius: 2px;
    }

    .paper-number {
      color: #888;
      margin-right: 8px;
      font-weight: 600;
    }

    .paper-tag {
      display: inline-block;
      margin-left: 6px;
      padding: 1px 7px;
      border-radius: 3px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      vertical-align: 2px;
      white-space: nowrap;
    }
    .paper-tag-infra { color: #1f5a35; background: #e6f0e9; }
    .paper-tag-app   { color: #7a4a0c; background: #f6ecdc; }
    ul.papers-infra .paper-item { border-left-color: #2d6a3e; }
    ul.papers-app .paper-item   { border-left-color: #b07020; }

    .research-stream-question {
      color: #1e3a6e;
      font-size: 18px;
      line-height: 1.5;
      margin: 8px 0 24px;
    }
    .paper-talks { margin-top: 8px; }
    .paper-talks + .paper-details { margin-top: 4px; }
    ul.talk-list { margin: 6px 0 2px; }
    ul.talk-list li { position: relative; padding-left: 14px; margin: 2px 0; font-size: 14px; line-height: 1.5; color: #555; }
    ul.talk-list li::before { content: ""; position: absolute; left: 2px; top: 0.62em; width: 5px; height: 5px; border-radius: 50%; background: #b8c2d6; }
    .status-links { font-style: normal; font-weight: 500; margin-left: 4px; }
    .talk-award { color: #8a5a00; font-weight: 600; font-size: 13px; margin-left: 4px; white-space: nowrap; }
    /* Awards & Honors (moved from awards.html, 2026-11-21) */
  .awards-list { margin: 12px 0 28px; }
  .award-item {
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    align-items: center;
    column-gap: 12px;
    padding: 3px 0;
  }
  .award-date {
    font-size: 13.5px;
    font-weight: 700;
    color: #333;
    text-align: right;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
  }
  .award-name {
    justify-self: start;
    background: #1e3a6e;
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
    padding: 3px 12px;
    border-radius: 999px;
  }
  .award-name a { color: #fff; text-decoration: underline; text-underline-offset: 2px; }
  @media (max-width: 600px) {
    .award-item { grid-template-columns: 64px minmax(0, 1fr); column-gap: 8px; padding: 4px 0; }
    .award-date { font-size: 12.5px; white-space: normal; }
    .award-name { font-size: 12.5px; border-radius: 12px; padding: 3px 10px; }
  }
  </style>
</head>

_The goal of behavioral-science research is truth. The goal of design-science research is utility. (MIS Quarterly, 2004)_

<h3 id="blockchain-digital-markets">Research Stream 1: Blockchain Governance and Digital Markets</h3>

<p class="research-stream-question">How do blockchain’s distinctive features shape value in digital markets?</p>

<ul class="papers-infra">
  <li class="paper-item" data-number="A1" id="mining-to-meaning">
    <div class="paper-title">
      From Mining to Meaning: How Do Blockchain Infrastructure Platforms Respond to Environmental Sustainability Concerns? <span class="paper-tag paper-tag-infra">Infrastructure</span></div>
    <div class="paper-authors">
      <strong>Siyuan Jin</strong>, <a href="https://www.allenhuang.org/">Allen H. Huang</a>, Zitong Li,   
      <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/kytam">Kar Yan Tam</a>.
    </div>
    <p class="status-info">Accepted at <em>Journal of Management Information Systems</em> (JMIS, FT50). <span class="status-links"><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6975218">[Working paper] (Version: April 2026)</a> <a href="/paper/Slides_Green_Token_based_Platform.pdf">[Slides]</a></span></p>
    <details class="paper-details paper-talks">
      <summary>Presentations (5)</summary>
      <ul class="talk-list">
        <li>HKUST IS Department Seminar</li>
        <li>2024 MIS Quarterly Virtual Paper Development Workshop</li>
        <li>2024 Greater Bay Area Finance Workshop</li>
        <li>ISPSG Workshop</li>
        <li>South China University of Technology</li>
      </ul>
    </details>
    <details class="paper-details">
      <summary>Abstract</summary>
      <div class="paper-abstract">
        <div class="paper-abstract__text">
          <p>We study how environmental concerns shape the value of blockchain infrastructure. After Tesla suspended Bitcoin payments over sustainability concerns, token values fell, especially for energy-intensive proof-of-work platforms. Investors also valued environmental disclosures more positively, and platforms increased those disclosures. Consistent with nonpecuniary preference theory, the findings show how investor awareness can influence decentralized infrastructure through token markets.</p>
          <p><strong>Keywords:</strong> blockchain infrastructure, sustainability, nonpecuniary preference</p>
        </div>
      </div>
    </details>
  </li>
</ul>

<ul class="papers-app">
  <li class="paper-item" data-number="A2" id="kpop-dao">
    <div class="paper-title">
      When K-Pop Meets Blockchain: Consumer Engagement Through Voting in DAOs. <span class="paper-tag paper-tag-app">Application</span>
    </div>
    <div class="paper-authors">
      <strong>Siyuan Jin</strong>, <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/dongwon">Dongwon Lee</a>, 
      <a href="https://www.bschool.cuhk.edu.hk/staff/kim-keongtae/">Keongtae Kim</a>, 
      <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/kytam">Kar Yan Tam</a>.
    </div>
    <p class="status-info">Revise &amp; Resubmit (2nd round) at <em>Information Systems Research</em> (UTD24, FT50). <span class="status-links"><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5186789">[Working paper]</a></span></p>
    <details class="paper-details paper-talks">
      <summary>Presentations (7)</summary>
      <ul class="talk-list">
        <li>ICIS 2024 <span class="talk-award">Best Short Paper Nominee</span></li>
        <li>CIST 2024</li>
        <li>2025 HKUST PhD Student Conference</li>
        <li>2025 HKUST IS Summer Workshop</li>
        <li>Indiana University*</li>
        <li>McGill University*</li>
        <li>South China University of Technology</li>
      </ul>
    </details>
    <details class="paper-details">
      <summary>Abstract</summary>
      <div class="paper-abstract">
        <div class="paper-abstract__text">
          <p>We study continued participation in a blockchain-based K-pop platform. Smaller voters increase financial and nonfinancial contributions, while large voters whose preferred outcomes lose reduce purchases but maintain nonfinancial engagement. These patterns are consistent with expectation disconfirmation: large voters expect more influence, making losses more disappointing. The findings help explain how voting power becomes less concentrated over time and inform the design of sustainable, consumer-driven platforms.</p>
          <p><strong>Keywords:</strong> DAO governance, expectation disconfirmation, consumer engagement</p>
        </div>
      </div>
    </details>
  </li>

  <li class="paper-item" data-number="A3">
    <div class="paper-title">
      Supplier Openness and Lower Demand: Evidence from an Invitation-Only Policy Reform in Digital Asset Marketplaces. <span class="paper-tag paper-tag-app">Application</span>
    </div>
    <div class="paper-authors">
      <strong>Siyuan Jin</strong>, Ying Hao, <a href="https://www.bschool.cuhk.edu.hk/staff/li-hongfei/">Hongfei Li</a>, <a href="https://www.bschool.cuhk.edu.hk/staff/kim-keongtae/">Keongtae Kim</a>, 
      <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/kytam">Kar Yan Tam</a>.
    </div>
    <p class="status-info">Revise &amp; Resubmit (3rd round) at <em>Information Systems Research</em> (UTD24, FT50). <span class="status-links"><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5535298">[Working paper]</a></span></p>
    <details class="paper-details">
      <summary>Abstract</summary>
      <div class="paper-abstract">
        <div class="paper-abstract__text">
          <p>Can more primary-market supply reduce demand? We study Foundation’s removal of invitation-only onboarding, using SuperRare as a comparison. After entry opened, bids and listings declined, with larger bidding declines among active traders. The evidence is consistent with a resale channel: new primary listings compete with secondary listings, reducing expected resale opportunities. The study shows how primary-market entry policy can reshape secondary-market competition and demand.</p>
          <p><strong>Keywords:</strong> digital assets, primary-market policy, secondary-market competition</p>
        </div>
      </div>
    </details>
  </li>

  <li class="paper-item" data-number="A4">
    <div class="paper-title">
     Treasury Trades as De Facto Disclosure: Asset-Pair Signaling and the Information Environment in DeFi. <span class="paper-tag paper-tag-app">Application</span>
    </div>
    <div class="paper-authors">
      Janja Brendel, <a href="https://www.allenhuang.org/">Allen H. Huang</a>, <strong>Siyuan Jin</strong>, Evgeny Lyandres (Authors listed alphabetically).
    </div>
    <p class="status-info">Working paper.</p>
  </li>
</ul>

<h3 id="ai-organization-of-work">Research Stream 2: AI and the Organization of Work</h3>

<p class="research-stream-question">How does AI reshape the organization of human expertise?</p>

<ul>
  <li class="paper-item" data-number="B1" id="codified-expertise">
    <div class="paper-title">
      Codified Expertise: How Generative AI Changes Temporal Coordination in Distributed Teams.
    </div>
    <div class="paper-authors">
      <strong>Siyuan Jin</strong>, Lynn Wu, Wei Thoo Yue, <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/kytam">Kar Yan Tam</a>, Eros Ye.
    </div>
    <p class="status-info"><strong>Job Market Paper</strong>. Under Review.</p>
    <details class="paper-details paper-talks">
      <summary>Presentations (8)</summary>
      <ul class="talk-list">
        <li>WISE 2026, Lisbon</li>
        <li>ICIS 2026 Doctoral Consortium, Lisbon</li>
        <li>INFORMS Annual Meeting 2026, San Francisco</li>
        <li>CIST 2026 Doctoral Consortium, San Francisco</li>
        <li>ISPOC Job Market Paper Presentation 2026</li>
        <li>Wharton AI Conference 2026, San Francisco</li>
        <li>PACIS 2026 Doctoral Consortium</li>
        <li>2026 HKUST IS Summer Workshop</li>
      </ul>
    </details>
  </li>

  <li class="paper-item" data-number="B2">
    <div class="paper-title">
      Benchmarked Quality: How Quality Scores Reshape Technical Debt Prevention.
    </div>
    <div class="paper-authors">
      <strong>Siyuan Jin</strong>, 
      Lynn Wu, <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/kytam">Kar Yan Tam</a>, Yong Xia.
    </div>
    <p class="status-info">Under revision, rejected after a second-round major revision at <em>Information Systems Research</em>.</p>
    <details class="paper-details paper-talks">
      <summary>Presentations (4)</summary>
      <ul class="talk-list">
        <li>2024 HKUST Business PhD Student Conference</li>
        <li>CIST 2024</li>
        <li>SCECR 2025</li>
        <li>2026 MISQ Virtual PDW</li>
      </ul>
    </details>
  </li>

  <li class="paper-item" data-number="B3" id="ai-for-me">
    <div class="paper-title">
      AI for Me, Gains for Us: Complementarity in Generative AI Teams.
    </div>
    <div class="paper-authors">
      Eros Ye, <strong>Siyuan Jin</strong>, Haochen Jiang, Wei Thoo Yue,
      <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/kytam">Kar Yan Tam</a>
    </div>
    <p class="status-info">Under Review.</p>
    <details class="paper-details paper-talks">
      <summary>Presentations (1)</summary>
      <ul class="talk-list">
        <li>ICIS 2025 <span class="talk-award">Best Short Paper Nominee</span></li>
      </ul>
    </details>
  </li>

  <li class="paper-item" data-number="B4" id="scaling-before-gains">
    <div class="paper-title">
      Scaling Before Gains: AI Adoption and Team Expansion.
    </div>
    <div class="paper-authors">
      Haochen Jiang, <strong>Siyuan Jin</strong>, Eros Ye, Wei Thoo Yue.
    </div>
    <p class="status-info">In preparation for submission.</p>
    <details class="paper-details paper-talks">
      <summary>Presentations (1)</summary>
      <ul class="talk-list">
        <li>CIST 2026, San Francisco</li>
      </ul>
    </details>
  </li>

  <!-- <li class="paper-item" data-number="B4">
    <div class="paper-title">
      Human Capital Competition, and the Signaling Value of AI Adoption
    </div>
    <div class="paper-authors">
      Haochen Jiang, <strong>Siyuan Jin</strong>, Wei Thoo Yue.
    </div>
  </li> -->
</ul>

<h3 id="other-research">Other Research</h3>

<ul>
  <li class="paper-item" data-number="C1">
    <div class="paper-title">
      From Hype to Strategy: Using Extensional Representation Encoding to Evaluate Quantum Computing's Business Value.
    </div>
    <div class="paper-authors">
      <strong>Siyuan Jin</strong>,
      <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/kytam">Kar Yan Tam</a>,
      Yuhan Huang, Qiming Shao, Yong Xia.
    </div>
    <p class="status-info">Accepted at <em>ACM Transactions on Management Information Systems</em> (TMIS). <span class="status-links"><a href="https://doi.org/10.1145/3838724">[DOI]</a></span></p>
    <p class="conference-info">Media Presence: HKUST IEMS Thought Leadership Brief No. 94. <a href="https://iems.ust.hk/publications/thought-leadership-briefs/extensional-knowledge-representation-for-quantum-monte-carlo-analysis-a-design-science-approach">[Brief]</a></p>
  </li>

  <li class="paper-item" data-number="C2" id="mobile-widget-adoption">
    <div class="paper-title">
      Ambient Information and Selective Entry: Evidence from Mobile Widget Adoption.
    </div>
    <div class="paper-authors">
      <strong>Siyuan Jin</strong>, Haiting Lin, Jinglong Zhang, Jinan Lin, Zike Cao, Liangfei Qiu.
    </div>
    <p class="status-info">In preparation for submission.</p>
    <details class="paper-details paper-talks">
      <summary>Presentations (4)</summary>
      <ul class="talk-list">
        <li>CIST 2026, San Francisco</li>
        <li>2026 MISQ Virtual PDW</li>
        <li>2026 CNAIS ISR Paper Development Workshop (UNNC)</li>
        <li><a href="https://cist2026.github.io/iss-events/">2026 INFORMS ISS ISR Paper Development Workshop for Early Career Scholar</a></li>
      </ul>
    </details>
  </li>

  <!-- <li class="paper-item" data-number="C3">
    <div class="paper-title">
      Not Alone Online: The Effect of Human (Virtual) Peer on E-Learning Platforms.
    </div>
    <div class="paper-authors">
      <strong>Siyuan Jin</strong>, Xincheng Ma, Dongwon Lee,
      <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/kytam">Kar Yan Tam</a>.
    </div>
  </li> -->

</ul>

### **Patents**

<details class="paper-details paper-talks">
  <summary>6 patents on blockchain and quantum computing (2024)</summary>
  <ul class="talk-list">
    <li>B. Zhu, Yong Xia, Z. Li, <strong>Siyuan Jin</strong>. &ldquo;Network analysis using optical quantum computing.&rdquo; WIPO WO2024/007565 A1, 2024.</li>
    <li><strong>Siyuan Jin</strong>, Yong Xia. &ldquo;Method for implementing network consensus algorithm.&rdquo; WIPO WO2024/007483 A1, 2024.</li>
    <li><strong>Siyuan Jin</strong>, Yong Xia. &ldquo;Transaction security for multi-tier transaction networks.&rdquo; WIPO WO2024/007527 A1, 2024.</li>
    <li><strong>Siyuan Jin</strong>, Yong Xia. &ldquo;Blockchain transaction sharding for improved transaction throughput.&rdquo; WIPO WO2024/011707 A1, 2024.</li>
    <li>Bing Zhu, Ziyuan Li, Yong Xia, Mianmian Zhang, <strong>Siyuan Jin</strong>, Kar Yan Tam, Yuhan Huang, Qiming Shao. &ldquo;Systems and methods for quantum Monte Carlo processing.&rdquo; US Patent App. 18/404,169, 2024.</li>
    <li>Bing Zhu, Ziyuan Li, Yong Xia, Qiming Shao, Yuhan Huang, <strong>Siyuan Jin</strong>. &ldquo;Adaptive diversity-based quantum circuit architecture search.&rdquo; US Patent App. 18/519,617, 2024.</li>
  </ul>
</details>

<p style="font-size: 13.5px; color: #666; margin-top: 28px; margin-bottom: 15px;">FT50: Financial Times top 50 journals &middot; UTD24: UT Dallas top 24 journals &middot; *: presented by a coauthor</p>

<h3 id="awards"><strong>Awards &amp; Honors</strong></h3>

<div class="awards-list">
  <div class="award-item"><span class="award-date">Dec 2026</span><span class="award-name">ICIS 2026 Doctoral Consortium</span></div>
  <div class="award-item"><span class="award-date">Oct 2026</span><span class="award-name">INFORMS CIST 2026 Doctoral Consortium</span></div>
  <div class="award-item"><span class="award-date">Jul 2026</span><span class="award-name">PACIS 2026 Doctoral Consortium</span></div>
  <div class="award-item"><span class="award-date">Mar 2026</span><span class="award-name">HKUST Global Research Award (Wharton visit)</span></div>
  <div class="award-item"><span class="award-date">Dec 2025</span><span class="award-name">ICIS 2025 Best Reviewer Award</span></div>
  <div class="award-item"><span class="award-date">Dec 2025</span><span class="award-name">ICIS 2025 Best Short Paper Nominee</span></div>
  <div class="award-item"><span class="award-date">Dec 2025</span><span class="award-name">NSFC Young Student Basic Research Program (PI, RMB 300,000)</span></div>
  <div class="award-item"><span class="award-date">Dec 2025</span><span class="award-name">MISQ Reviewer Development Workshop</span></div>
  <div class="award-item"><span class="award-date">Nov 2025</span><span class="award-name">GLOSITH 2025 Best Paper Award</span></div>
  <div class="award-item"><span class="award-date">Mar 2025</span><span class="award-name">HKUST Young Scientist PhD Program Award (HKD 30,000)</span></div>
  <div class="award-item"><span class="award-date">Dec 2024</span><span class="award-name">ICIS 2024 Best Short Paper Nominee</span></div>
  <div class="award-item"><span class="award-date">Sep 2024</span><span class="award-name">Hong Kong PhD Fellowship</span></div>
  <div class="award-item"><span class="award-date">Sep 2022</span><span class="award-name">HKUST Postgraduate Studentship</span></div>
  <div class="award-item"><span class="award-date">Nov 2021</span><span class="award-name"><a href="https://www.mas.gov.sg/news/media-releases/2021/mas-announces-15-finalists-for-the-global-cbdc-challenge" target="_blank" rel="noopener noreferrer">MAS Global CBDC Challenge</a> Finalist (Top 5%)</span></div>
  <div class="award-item"><span class="award-date">2021</span><span class="award-name">HSBC Top Performer Award</span></div>
  <div class="award-item"><span class="award-date">2021</span><span class="award-name">HSBC Role Model Award</span></div>
  <div class="award-item"><span class="award-date">2020</span><span class="award-name">China National Scholarship (Top 0.1%&ndash;0.2%)</span></div>
  <div class="award-item"><span class="award-date">2018, 2019</span><span class="award-name">First-Class Scholarship, South China University of Technology</span></div>
</div>
