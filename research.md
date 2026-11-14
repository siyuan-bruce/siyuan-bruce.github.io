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

    .paper-group {
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
      gap: 6px 12px;
      margin: 4px 0 18px;
    }

    ul + .paper-group { margin-top: 34px; }

    .paper-group-tag {
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      padding: 3px 10px;
      border-radius: 3px;
    }

    .paper-group-desc {
      font-size: 15px;
      color: #555;
    }

    .paper-group-infra .paper-group-tag { color: #1f5a35; background: #e6f0e9; }
    .paper-group-app .paper-group-tag   { color: #7a4a0c; background: #f6ecdc; }
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
  </style>
</head>

_The goal of behavioral-science research is truth. The goal of design-science research is utility. (MIS Quarterly, 2004)_

<p style="font-size: 14px; color: #666; font-style: italic; margin-top: 15px; margin-bottom: 15px;">
FT50 = list of 50 journals used by the Financial Times to compile the FT Research rank, included in the Global MBA, EMBA, and Online MBA rankings.<br>
UTD24 = list of 24 journals used by UT Dallas' Naveen Jindal School of Management to provide the top 100 business school rankings.
</p>

<p style="font-size: 13px; color: #888; margin-bottom: 18px;">
  <em>* indicates presentation by coauthors.</em>
</p>


<h3 id="blockchain-digital-markets">Research Stream 1: Blockchain Governance and Digital Markets</h3>

<p class="research-stream-question">How do blockchain’s distinctive features shape value in digital markets?</p>

<div class="paper-group paper-group-infra"><span class="paper-group-tag">Infrastructure</span></div>

<ul class="papers-infra">
  <li class="paper-item" data-number="A1" id="mining-to-meaning">
    <div class="paper-title">
      From Mining to Meaning: How Do Blockchain Infrastructure Platforms Respond to Environmental Sustainability Concerns?</div>
    <div class="paper-authors">
      <strong>Siyuan Jin</strong>, <a href="https://www.allenhuang.org/">Allen H. Huang</a>, Zitong Li,   
      <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/kytam">Kar Yan Tam</a>.       Reference: <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6975218"> [Working paper] (Version: April 2026)</a> 
      <a href="/paper/Slides_Green_Token_based_Platform.pdf"> [Slides]</a>
    </div>
    <p class="status-info">Accepted at <em>Journal of Management Information Systems</em> (JMIS, FT50).</p>
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

<div class="paper-group paper-group-app"><span class="paper-group-tag">Applications</span></div>

<ul class="papers-app">
  <li class="paper-item" data-number="A2" id="kpop-dao">
    <div class="paper-title">
      When K-Pop Meets Blockchain: Consumer Engagement Through Voting in DAOs.
    </div>
    <div class="paper-authors">
      <strong>Siyuan Jin</strong>, <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/dongwon">Dongwon Lee</a>, 
      <a href="https://www.bschool.cuhk.edu.hk/staff/kim-keongtae/">Keongtae Kim</a>, 
      <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/kytam">Kar Yan Tam</a>. Reference: <a href = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5186789"> [Working paper]</a>
    </div>
    <p class="status-info">Revise &amp; Resubmit (2nd round) at <em>Information Systems Research</em> (UTD24, FT50).</p>
    <p class="conference-info">Award: ICIS 2024 Best Short Paper Nominee</p>
    <details class="paper-details paper-talks">
      <summary>Presentations (7)</summary>
      <ul class="talk-list">
        <li>ICIS 2024</li>
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
      When Supply Lowers Demand: Evidence from Invitation-Only Policy Reform in Digital Asset Marketplaces.
    </div>
    <div class="paper-authors">
      <strong>Siyuan Jin</strong>, Ying Hao, <a href="https://www.bschool.cuhk.edu.hk/staff/li-hongfei/">Hongfei Li</a>, <a href="https://www.bschool.cuhk.edu.hk/staff/kim-keongtae/">Keongtae Kim</a>, 
      <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/kytam">Kar Yan Tam</a>. Reference: <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5535298">[Working paper]</a>
    </div>
    <p class="status-info">Revise &amp; Resubmit (2nd round) at <em>Information Systems Research</em> (UTD24, FT50).</p>
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
     Treasury Trades as De Facto Disclosure: Asset-Pair Signaling and the Information Environment in DeFi.
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
    <p class="status-info"><strong>Job Market Paper</strong></p>
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
      Making Quality Contractible: How Algorithmic Quality Scoring Reshapes Software Development.
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
    <p class="conference-info">Award: ICIS 2025 Best Short Paper Nominee</p>
    <details class="paper-details paper-talks">
      <summary>Presentations (1)</summary>
      <ul class="talk-list">
        <li>ICIS 2025</li>
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
      Yuhan Huang, Qiming Shao, Yong Xia. Reference: <a href="https://doi.org/10.1145/3838724">[DOI]</a>
    </div>
    <p class="conference-info">Media Presence: HKUST IEMS Thought Leadership Brief No. 94. <a href="https://iems.ust.hk/publications/thought-leadership-briefs/extensional-knowledge-representation-for-quantum-monte-carlo-analysis-a-design-science-approach">[Brief]</a></p>
    <p class="status-info">Accepted at <em>ACM Transactions on Management Information Systems</em> (TMIS).</p>
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

### **Patent**
   
  1. B. Zhu, Yong Xia, Z. Li, **Siyuan Jin**. (2024). "Network Analysis using optical quantum computing". International Bureau, World Intellectual Property Organization. Publication No. WO2024/007565 A1.
       
  2. **Siyuan Jin**, Yong Xia. (2024). "Method for implementing network consensus algorithm". International Bureau, World Intellectual Property Organization. Publication No. WO2024/007483 A1.
   
  3. **Siyuan Jin**, Yong Xia. (2024). "Transaction security for multi-tier transaction networks". International Bureau, World Intellectual Property Organization. Publication No. WO2024/007527 A1.
    
  4. **Siyuan Jin**, Yong Xia. (2024). "Blockchain transaction sharding for improved transaction throughput." International Bureau, World Intellectual Property Organization. Publication No. WO2024/011707 A1.

  5. Bing Zhu, Ziyuan Li, Yong Xia, Mianmian Zhang, **Siyuan Jin**, Kar Yan Tam, Yuhan Huang, Qiming Shao. (2024). "Systems and Methods for Quantum Monte Carlo Processing". US Patent App. 18/404,169.

  6. Bing Zhu, Ziyuan Li, Yong Xia, Qiming Shao, Yuhan Huang, **Siyuan Jin**. (2024). "Adaptive Diversity-Based Quantum Circuit Architecture Search". US Patent App. 18/519,617.
