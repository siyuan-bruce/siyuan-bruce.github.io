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
      font-size: 18px;
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

    .research-stream-question {
      color: #1e3a6e;
      font-size: 18px;
      line-height: 1.5;
      margin: 8px 0 24px;
    }
  </style>
</head>

_The goal of behavioral-science research is truth. The goal of design-science research is utility. --- MIS Quarterly, 2004_

<p style="font-size: 14px; color: #666; font-style: italic; margin-top: 15px; margin-bottom: 15px;">
FT50 = list of 50 journals used by the Financial Times to compile the FT Research rank, included in the Global MBA, EMBA, and Online MBA rankings.<br>
UTD24 = list of 24 journals used by UT Dallas' Naveen Jindal School of Management to provide the top 100 business school rankings.
</p>

<p style="font-size: 13px; color: #888; margin-bottom: 18px;">
  <em>* indicates presentation by coauthors.</em>
</p>


<h3 id="blockchain-digital-markets">Research Stream 1: Blockchain Governance and Digital Markets</h3>

<p class="research-stream-question">How do blockchain’s distinctive features shape value in digital markets?</p>

<ul>
  <li class="paper-item" data-number="A1">
    <div class="paper-title">
      From Mining to Meaning: How Do Blockchain Infrastructure Platforms Respond to Environmental Sustainability Concerns?</div>
    <div class="paper-authors">
      <strong>Siyuan Jin</strong>, <a href="https://www.allenhuang.org/">Allen H. Huang</a>, Zitong Li,   
      <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/kytam">Kar Yan Tam</a>.       Reference: <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6975218"> [Working paper] (Version: April 2026)</a> 
      <a href="/paper/Slides_Green_Token_based_Platform.pdf"> [Slides]</a>
    </div>
    <p class="status-info">Accepted at <em>Journal of Management Information Systems</em> (JMIS, FT50).</p>
    <p class="conference-info">Presentations: [HKUST IS Department Seminar], [2024 MIS Quarterly Virtual Paper Development Workshop], [2024 Greater Bay Area Finance Workshop], [ISPSG Workshop], South China University of Technology</p>
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


  <li class="paper-item" data-number="A2">
    <div class="paper-title">
      When K-Pop Meets Blockchain: Consumer Engagement Through Voting in DAOs.
    </div>
    <div class="paper-authors">
      <strong>Siyuan Jin</strong>, <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/dongwon">Dongwon Lee</a>, 
      <a href="https://www.bschool.cuhk.edu.hk/staff/kim-keongtae/">Keongtae Kim</a>, 
      <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/kytam">Kar Yan Tam</a>. Reference: <a href = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5186789"> [Working paper]</a>
    </div>
    <p class="status-info">Revise &amp; Resubmit (2nd round) at <em>Information Systems Research</em> (UTD24, FT50).</p>
    <p class="conference-info">Presentations: [ICIS 2024], [CIST 2024], [2025 HKUST PhD Student Conference], [2025 HKUST IS Summer Workshop], Indiana University*, McGill University*, South China University of Technology</p>
    <p class="conference-info">Award: ICIS 2024 Best Short Paper Nominee</p>
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
  <!--
  <li class="paper-item" data-number="A4">
    <div class="paper-title">
      Crisis, Transparency, and User Engagement: An Empirical Analysis of Stablecoin Platforms.
    </div>
    <div class="paper-authors">
      <strong>Siyuan Jin</strong>, Yuying Cai, Luying Qiu, 
      <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/kytam">Kar Yan Tam</a>.
    </div>
    <p class="status-info">In preparation for submission.</p>
   <p class="conference-info">Presentations: [ICIS 2024], [SCECR 2025], [CIST 2025]</p>
    <details class="paper-details">
      <summary>Abstract</summary>
      <p>Public blockchains with smart contract functionality have revolutionized IT operations by enabling fully algorithmic processes and providing high transparency through realtime and detailed information disclosure. Yet, the impact of this IT operational model on user engagement remains largely unexplored. Leveraging the context of stablecoin platforms, particularly in light of the Terra-LUNA crisis, we construct a large-scale individual-level panel dataset from April 12 to June 1, 2022, and apply a cross-platform difference-in-differences approach. We find that, during crises, users can effectively distinguish between algorithmic and institutional IT operations, as well as their respective types of operational transparency. We also find that the presence of attackers switches user preferences for operational transparency. Higher levels of transparency, characterized by frequent and detailed information disclosures, may be perceived as catalysts for attacks in the post-crisis period, significantly impacting user engagement.</p>
    </details>
  </li> -->

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
    <p class="conference-info">Presentations: [WISE 2026, Lisbon], [ICIS 2026 Doctoral Consortium, Lisbon], [INFORMS Annual Meeting 2026, San Francisco], [CIST 2026 Doctoral Consortium, San Francisco], [ISPOC Job Market Paper Presentation 2026], [Wharton AI Conference 2026, San Francisco], [PACIS 2026 Doctoral Consortium], [2026 HKUST IS Summer Workshop]</p>
    <p class="status-info"><strong>Job Market Paper</strong></p>
  </li>

  <li class="paper-item" data-number="B2">
    <div class="paper-title">
      AI Reviewer and Standard Diffusion.
    </div>
    <div class="paper-authors">
      <strong>Siyuan Jin</strong>, 
      Lynn Wu, <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/kytam">Kar Yan Tam</a>, Yong Xia.
    </div>
    <p class="conference-info">Presentations: [2024 HKUST Business PhD Student Conference], [CIST 2024], [SCECR 2025], [2026 MISQ Virtual PDW]</p>
    <p class="status-info">In preparation for submission to <em>Management Science</em>.</p>
  </li>

  <li class="paper-item" data-number="B3">
    <div class="paper-title">
      AI for Me, Gains for Us: Complementarity in Generative AI Teams.
    </div>
    <div class="paper-authors">
      Eros Ye, <strong>Siyuan Jin</strong>, Haochen Jiang, Wei Thoo Yue,
      <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/kytam">Kar Yan Tam</a>
    </div>
    <p class="conference-info">Award: ICIS 2025 Best Short Paper Nominee</p>
    <p class="conference-info">Presentations: [ICIS 2025]</p>
    <p class="status-info">Under Review at <em>Management Science</em>.</p>
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
    <p class="conference-info">Presentations: [CIST 2026, San Francisco], [2026 MISQ Virtual PDW], [2026 CNAIS ISR Paper Development Workshop (UNNC)], <a href="https://cist2026.github.io/iss-events/">[2026 INFORMS ISS ISR Paper Development Workshop for Early Career Scholar]</a></p>
    <p class="status-info">Working paper.</p>
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

### **Policy Papers**

<p style="font-size:15px;color:#444;"><em>My policy and government-facing work now has a dedicated page: <strong><a href="/policy.html">Policy &amp; Government Impact</a></strong>, covering the HKMA white papers, e-HKD / CBDC studies, the MAS Global CBDC Challenge, and Hong Kong tourism-policy work.</em></p>


### **Refereed Conferences & Workshops**

1. **Siyuan Jin**, Lynn Wu, Wei Thoo Yue, Kar Yan Tam, Eros Ye. "Codified Expertise: How Generative AI Changes Temporal Coordination in Distributed Teams." *Workshop on Information Systems and Economics (WISE 2026)*, Lisbon, Portugal, Dec 16--18, 2026.

2. **Siyuan Jin**, Lynn Wu, Wei Thoo Yue, Kar Yan Tam, Eros Ye. "Codified Expertise: How Generative AI Changes Temporal Coordination in Distributed Teams." *International Conference on Information Systems (ICIS 2026) Doctoral Consortium*, Lisbon, Portugal, Dec 9--12, 2026.

3. **Siyuan Jin**, Lynn Wu, Wei Thoo Yue, Kar Yan Tam, Eros Ye. "Codified Expertise: How Generative AI Changes Temporal Coordination in Distributed Teams." *ISPOC Job Market Paper Presentation*, Online, Nov 5, 2026.

4. **Siyuan Jin**, Lynn Wu, Wei Thoo Yue, Kar Yan Tam, Eros Ye. "Codified Expertise: How Generative AI Changes Temporal Coordination in Distributed Teams." *INFORMS Annual Meeting 2026*, invited session "Applications of AI in Digital Economy", San Francisco, USA, Nov 2, 2026.

5. **Siyuan Jin**, Haiting Lin, Jinglong Zhang, Jinan Lin, Zike Cao, Liangfei Qiu. "Ambient Information and Selective Entry: Evidence from Mobile Widget Adoption." *Conference on Information Systems and Technology (CIST 2026)*, San Francisco, USA, Oct 31--Nov 1, 2026.

6. Haochen Jiang, **Siyuan Jin**, Eros Ye, Wei Thoo Yue. "Scaling Before Gains: AI Adoption and Team Expansion." *Conference on Information Systems and Technology (CIST 2026)*, San Francisco, USA, Oct 31--Nov 1, 2026.

7. **Siyuan Jin**, Lynn Wu, Wei Thoo Yue, Kar Yan Tam, Eros Ye. "Codified Expertise: How Generative AI Changes Temporal Coordination in Distributed Teams." *Conference on Information Systems and Technology (CIST 2026) Doctoral Consortium*, San Francisco, USA, Oct 30, 2026.

8. **Siyuan Jin**, Haiting Lin, Jinglong Zhang, Jinan Lin, Zike Cao, Liangfei Qiu. "Ambient Information and Selective Entry: Evidence from Mobile Widget Adoption." *[INFORMS ISS ISR Paper Development Workshop for Early Career Scholar](https://cist2026.github.io/iss-events/)*, San Francisco, USA, Oct 30, 2026 (afternoon). Presented by Jinan Lin (Wisconsin).

9. **Siyuan Jin**, Lynn Wu, Wei Thoo Yue, Kar Yan Tam, Eros Ye. "Codified Expertise: How Generative AI Changes Temporal Coordination in Distributed Teams." *Wharton AI Conference*, San Francisco, USA, Sep 9, 2026.

10. **Siyuan Jin**, Lynn Wu, Wei Thoo Yue, Kar Yan Tam, Eros Ye. "Codified Expertise: How Generative AI Changes Temporal Coordination in Distributed Teams." *Pacific Asia Conference on Information Systems (PACIS 2026) Doctoral Consortium*.

11. **Siyuan Jin**, Lynn Wu, Wei Thoo Yue, Kar Yan Tam, Eros Ye. "Codified Expertise: How Generative AI Changes Temporal Coordination in Distributed Teams." *HKUST Information Systems Summer Workshop*, Hong Kong, 2026.

12. Eros Ye, **Siyuan Jin**, Haochen Jiang, Wei Thoo Yue, Kar Yan Tam. "AI for Me, Gains for Us: Complementarity in Generative AI Teams." *International Conference on Information Systems (ICIS 2025)*, Nashville, USA, Dec 15, 2025. (Early version presented as "Seniority, Spillovers, and AI-Enhanced Code Contributions: Evidence from a Major Enterprise.")

13. **Siyuan Jin**, Kai-Lung Hui, Allen H. Huang, Chao He, Chun Wang. "Horizon-Dependent Tourism Forecasting with Multi-Platform Signals: Evidence from Hong Kong." *4th conference from the Global Congress of Special Interest Tourism & Hospitality (GLOSITH)*, Xiamen, Nov 7, 2025.

14. **Siyuan Jin**, Yuying Cai, Iris Qiu, Kar Yan Tam. "Crisis, Transparency and User Engagement." *Conference on Information Systems and Technology (CIST 2025)*, Atlanta, USA, Oct 26, 2025.

15. **Siyuan Jin**, Kar Yan Tam, Yong Xia. "The Effect of Agentic IT Reviewers on Code Contribution: Evidence from a Large-Scale Field Quasi-Experiment." *Statistical Challenges in Electronic Commerce Research (SCECR 2025)*, Paphos, Cyprus.

16. **Siyuan Jin**, Yuying Cai, Iris Qiu, Kar Yan Tam. "Crisis, Transparency and User Engagement." *Statistical Challenges in Electronic Commerce Research (SCECR 2025)*, Paphos, Cyprus.

17. **Siyuan Jin**, Yuying Cai, Iris Qiu, Kar Yan Tam. "Operational Transparency in the Blockchain Era: Examining the Impact of Different Types and Levels on User Engagement." *International Conference on Information Systems (ICIS 2024)*, Bangkok, Thailand.

18. **Siyuan Jin**, Dongwon Lee, Keongtae Kim, Kar Yan Tam. "When Kpop Meets Blockchain: Consumer Engagement via Voting in DAOs." *International Conference on Information Systems (ICIS 2024)*, Bangkok, Thailand. <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5186789">[Paper]</a> (Best Short Paper Nominee)

19. **Siyuan Jin**, Allen H. Huang, Zitong Li, Kar Yan Tam. "Do Users of Blockchain IT Infrastructure Value Environmental Sustainability?" *Greater Bay Area Finance Workshop (2024)*, Shenzhen, China.

20. **Siyuan Jin**, Dongwon Lee, Keongtae Kim, Kar Yan Tam. "When Kpop Meets Blockchain: The Effect of DAO Voting on Consumer Engagement." *Conference on Information Systems and Technology (CIST 2024)*, Short Paper, Seattle, USA.

21. **Siyuan Jin**, Kar Yan Tam, Bichao Chen, Yong Xia. "Scalable Agency? The Spillover Effects of Agentic IT Reviewers on Code Contribution." *Conference on Information Systems and Technology (CIST 2024)*, Short Paper, Seattle, USA.

22. **Siyuan Jin**, Zitong Li, Allen H. Huang, Kar Yan Tam. "Do Users of Blockchain IT Infrastructure Value Environmental Sustainability?" *MIS Quarterly Virtual Author Development Workshop*, Online, Jan 2025.

23. **Siyuan Jin**, Ziyuan Li, Bichao Chen, Bing Zhu, Yong Xia. "Software Code Quality Measurement: Implications from Metric Distributions." *IEEE International Conference on Software Quality, Reliability, and Security (QRS 2023)*, Chiang Mai, Thailand. <a href="https://ieeexplore.ieee.org/document/10366662">[Paper]</a>

24. **Siyuan Jin**, Zhendong Bei, Bichao Chen, Yong Xia. "Breaking the Cycle of Recurring Failures: Applying Generative AI to Root Cause Analysis in Legacy Banking Systems." *International Workshop on Cloud Intelligence (AIOps 2025)*, Ottawa, Canada. <a href="https://arxiv.org/abs/2411.13017">[Paper]</a>

25. **Siyuan Jin**, Yong Xia, Philip Intallura, Botong Xu. "A UTXO-based Sharding Method for Stablecoin." *IEEE International Conference on Blockchain Computing and Applications (BCCA 2022)*, San Antonio, USA. <a href="https://ieeexplore.ieee.org/document/9922204">[Paper]</a> <a href="https://github.com/CBDC-IoT/DigitalShell">[Code]</a>

26. Marc Dordal i Carreras, **Siyuan Jin**, Kohei Kawaguchi. "Informational Experiment on Consumer's Perception of Central Bank Digital Currency as Liquidity Assets." *International Conference on Central Bank Digital Currency and Payment Systems*.

### Letters
1. "會展+盛事雙引擎 港添旅遊磁吸力" <a href="https://paper.hket.com/article/4184102/">Hong Kong Economic Times (經濟日報)</a>, August 28, 2026.
2. "夏日盛會吸旅客 暑期消費存變數" <a href="https://paper.hket.com/article/4169713">Hong Kong Economic Times (經濟日報)</a>, August 2026.
3. "端午暑假遊興濃 港迎入境客高峰" <a href="https://paper.hket.com/article/4149054">Hong Kong Economic Times (經濟日報)</a>, June 19, 2026.
4. "「友善香港」廣傳 提升體驗吸客" <a href="https://paper.hket.com/article/4132723/">Hong Kong Economic Times (經濟日報)</a>, May 21, 2026.
5. "文體+展會添魅力 港吸遊客穩步增" <a href="https://paper.hket.com/article/4125574/">Hong Kong Economic Times (經濟日報)</a>, May 8, 2026.
6. "醫療旅遊商機巨 港拓優勢須加鞭" <a href="https://paper.hket.com/article/4109817">Hong Kong Economic Times (經濟日報)</a>, April 5, 2026.
7. "深化體驗添「黏性」 旅客增長常態化" <a href="https://paper.hket.com/article/4086667">Hong Kong Economic Times (經濟日報)</a>, February 20, 2026.
8. "個性化體驗吸客 港節慶IP添魅力" <a href="https://paper.hket.com/article/4073859">Hong Kong Economic Times (經濟日報)</a>, January 24, 2026.
9. "節慶添「情緒價值」 提升軟實力吸客" <a href="https://paper.hket.com/article/4058462">Hong Kong Economic Times (經濟日報)</a>, December 24, 2025.
10. "「高情緒價值」體驗 吸客遊港新引擎" <a href="https://paper.hket.com/article/4048872">Hong Kong Economic Times (經濟日報)</a>, December 5, 2025.
11. "文娛創新增體驗 吸旅客「多留一晚」" <a href="https://paper.hket.com/article/4034074/">Hong Kong Economic Times (經濟日報)</a>, November 7, 2025.


### **Patent**
   
  1. B. Zhu, Yong Xia, Z. Li, **Siyuan Jin**. (2024). "Network Analysis using optical quantum computing". International Bureau, World Intellectual Property Organization. Publication No. WO2024/007565 A1.
       
  2. **Siyuan Jin**, Yong Xia. (2024). "Method for implementing network consensus algorithm". International Bureau, World Intellectual Property Organization. Publication No. WO2024/007483 A1.
   
  3. **Siyuan Jin**, Yong Xia. (2024). "Transaction security for multi-tier transaction networks". International Bureau, World Intellectual Property Organization. Publication No. WO2024/007527 A1.
    
  4. **Siyuan Jin**, Yong Xia. (2024). "Blockchain transaction sharding for improved transaction throughput." International Bureau, World Intellectual Property Organization. Publication No. WO2024/011707 A1.

  5. Bin Zhu, Ziyuan Li, Yong Xia, Ming Zhang, **Siyuan Jin**, Kar Yan Tam, Yuhan Huang, Qiming Shao. (2024). "Systems and Methods for Quantum Monte Carlo Processing". US Patent App. 18/404,169.

  6. Bing Zhu, Ziyuan Li, Yong Xia, Qiming Shao, Yuhan Huang, **Siyuan Jin**. (2024). "Adaptive Diversity-Based Quantum Circuit Architecture Search". US Patent App. 18/519,617.


## **Professional Membership**
- Association for Information Systems (AIS)
- Association for Computing Machinery (ACM)
- Institute for Operations Research and Management Sciences (INFORMS)
