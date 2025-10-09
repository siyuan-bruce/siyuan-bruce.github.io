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
    font-family: 'Lora', serif;
    line-height: 1.6;
    background-color: #f8f8f8;
    margin: 0;
    padding: 10px;
  }

  .profile-image {
    width: 100%;
    max-width: 300px;
    margin: 10px 0;
  }

  .profile-image img {
    width: 100%; /* Adjust width as needed */
    max-width: 300px; /* Constrain size */
    border-radius: 15px; /* Rounded corners */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06); /* Subtle shadow */
    border: 2px solid #f0f0f0; /* Light border */
    padding: 2px; /* Space between image and border */
    background-color: white; /* Background color to enhance border */
  }
  
  

  .profile-text {
    margin: 10px;
    text-align: left;
  }

      ul {
      list-style-type: none; /* Remove the default bullets */
      padding-left: 0;
    }
    
  .paper-item {
      margin-bottom: 30px;
      padding-left: 15px;
      border-left: 4px solid #333; /* Subtle border instead of bullet */
    }

    .paper-title {
      font-size: 24px;
      font-family: 'Playfair Display', serif;
      font-weight: 700;
      margin-bottom: 12px;
      color: #333;
      line-height: 1.4;
    }

    .paper-authors {
      font-size: 18px;
      font-weight: 400;
      color: #555;
      margin-bottom: 10px;
    }

    .conference-info {
      color: grey;
      font-weight: 600;
      font-size: 15px;
      margin-top: 8px;
    }

  @media screen and (min-width: 600px) {
    .container {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }

    .profile-text {
      flex: 2 1 70%; /* Ensure text takes up more space */
      text-align: left;
      margin: 10px;
    }

    .profile-image {
      flex: 1 1 auto; /* Allow the image to take up space based on its content */
      max-width: 300px;
      margin-left: 10px;
      order: 2;
    }


    .profile-image {
      margin-left: 10px;
      max-width: 300px;
      order: 2;
    }

    .profile-text {
      margin-top: -10px;
      order: 1;
      flex: 70%;
    }

    .card {
      display: flex;
      background-color: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 10px;
      margin: 10px;
      border-radius: 8px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      position: relative;
      width: 100%;
      max-width: 1000px;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }

    .card-content {
      max-width: 70%;
    }

    .card h3 {
      font-size: 1.5em;
      margin-bottom: 0px;
      margin-top: -5px;
    }

    .card small {
      font-size: 0.9em;
      margin-top: -5px;
      margin-bottom: -5px;
      color: #555;
    }

    .card ul {
      list-style-type: none;
      padding: 0;
    }

    .card ul li {
      margin-bottom: 0px;
      padding-left: 30px;
    }

    /* Subtle Timeline Dots */
    .timeline {
      position: relative;
      margin-left: 20px;
    }

    .timeline::before {
      content: '';
      position: static;
      left: 10px;
      top: 10px;
      bottom: 0;
      width: 2px;
      background-color: #d3d3d3;
    }

    .timeline-item {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      padding-left: 40px;
      position: relative;
    }

    /* Logo Styling */
    .university-logo {
      height: 180px;
      justify-self: end;
      align-self: flex-start;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: 7px;
      top: 8px;
      width: 8px;
      height: 8px;
      background-color: #1A5DCB;
      border-radius: 50%;
    }

    header.header {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    /* News Section Styling */
    .news-section {
      font-family: 'Times New Roman', Times, serif;
      margin: 10px;
      line-height: 1.25;
    }

    .news-section h2 {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .news-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 15px;
    }

    .news-date {
      font-size: 16px;
      font-weight: bold;
      color: #555;
      width: 100px; /* Fixed width for aligned dates */
      flex-shrink: 0;
      text-align: right; /* Right-align the dates */
      padding-right: 15px; /* Add some space between date and content */
      white-space: nowrap;
    }

    .news-content {
      font-size: 16px;
      flex-grow: 1;
      color: #333;
    }

    .news-content strong {
      color:rgb(0, 0, 0); /* Highlight important text */
    }

    .news-content a {
      text-decoration: none;
      color:rgb(0, 0, 0);
    }

    .news-content a:hover {
      text-decoration: underline;
    }
  }

  /* Mobile-specific adjustments */
  @media (max-width: 600px) {
    .card {
      max-width: 100%; /* Remove the 600px limit */
      padding: 16px; /* Add more padding for space */
      margin: 10px 0; /* Adjust margin to center the card */
    }

    h3 {
      font-size: 1.2em;
    }

    p,
    ul li {
      font-size: 0.9em;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: 7px;
      top: 8px;
      width: 8px;
      height: 8px;
      background-color: #1A5DCB;
      border-radius: 50%;
    }
  }
</style>
</head>

<div class="container">
  <div class="profile-image">
    <img src="./images/profile3.png" alt="Profile Image" loading="lazy" />
    <div style="text-align: center;">
   <!-- <em></em> -->
</div>
  </div>
    <div class="profile-text">
    <!-- <em>此心光明，亦复何言 - 王阳明 </em> -->
  <p>
    <strong>Siyuan (Bruce) JIN (金思远)</strong> is a fourth-year PhD candidate in HKUST Information Systems (IS) department. He is fortunate to be advised by Prof. <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/kytam">Kar Yan Tam</a>. 
  </p>
  <p>
    He received the <span style="color:#1A5DCB;">China National Scholarship</span> in 2020, <span style="color:#1A5DCB;">Hong Kong PhD Fellowship (HKPFS)</span> award in 2024, and <span style="color:#1A5DCB;">Young Scientists Program Award</span> in 2025. His papers have been accepted by top IS conferences, including <span style="color:#8B5C2A;">International Conference on Information Systems (ICIS)</span>, <span style="color:#8B5C2A;">Conference on Information Systems and Technology (CIST)</span>, and <span style="color:#8B5C2A;">Statistical Challenges in Electronic Commerce Research (SCECR)</span>. He has contributed to policy papers for the Hong Kong Monetary Authority (HKMA) and has helped secure funding applications <strong>>20 million HKD</strong>. He has organized <strong>>40</strong> IS online PhD student <a href="https://siyuan-bruce.github.io/reading_group/home.html">seminars</a>.
  </p>
  <p>
    Prior to HKUST, he spent two years as a full-stack engineer at HSBC IT Architecture and <a href="https://www.ventures.hsbc.com/en/about-us">HSBC Laboratory</a>, developing <strong>Blockchain</strong> and CBDC projects. His work earned the <span style="color:#1A5DCB;">2021 Top Performer award</span>, <span style="color:#1A5DCB;">2021 Role Model honor</span>, and finalist status in the <a href="https://www.mas.gov.sg/news/media-releases/2021/mas-announces-15-finalists-for-the-global-cbdc-challenge">2021 Global CBDC Challenge</a> by the Monetary Authority of Singapore.
  </p>
  </div>
</div>
<!-- 
## Upcoming Talks
<ul>  
  <li class="paper-item">
    <div class="paper-title">
      Agentic IT in Information Systems Development: Insights from a Large-Scale Quasi-Experiment on Code Quality
    </div>
    <div class="paper-authors">
      <strong>Siyuan Jin</strong>, 
      <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/kytam">Kar Yan Tam</a>,
      Yong Xia.
    </div>
    <p class="conference-info">June 23, 2025, 14:45 - 15:45, SCECR 2025, Paphos, Cyprus</p>
    <p class="conference-info">Session: Short Papers B (Chair: Ioannis Kanellopoulos)</p>
  </li>

  <li class="paper-item">
    <div class="paper-title">
      Crisis, Transparency, and User Engagement
    </div>
    <div class="paper-authors">
      <strong>Siyuan Jin</strong>, 
      Yuying Cai, Luying Qiu,
      <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/kytam">Kar Yan Tam</a>,
    </div>
    <p class="conference-info">June 24, 2025, 09:00 - 10:15, SCECR 2025, Paphos, Cyprus</p>
    <p class="conference-info">Session: TRACK 2 - The User Engagement in Digital Platforms (Chair: Michail Batikas)</p>
  </li>
</ul> -->

## News
<div class="news-section">
  <div class="news-item">
    <div class="news-date">Oct, 2025</div>
    <div class="news-content">
      Paper on Stablecoin's transparency accepted by <strong>CIST 2025</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Jul, 2025</div>
    <div class="news-content">
      Paper on Copilot's effect accepted by <strong>ICIS 2025</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Jun, 2025</div>
    <div class="news-content">
      Paper on blockchain-based K-Pop community is selected by
      <strong>HKUST IS Summer Workshop 2025</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Jun, 2025</div>
    <div class="news-content">
      Our paper on consumer perception of rCBDC adoption was accepted at 
      <strong>
        <a href="https://dl.acm.org/doi/10.1145/3756329" style="text-decoration: underline;">ACM Distributed Ledger Technologies: Research and Practice</a>
      </strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Apr, 2025</div>
    <div class="news-content">
      Paper on code reviewer accepted by <strong>SCECR 2025</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Apr, 2025</div>
    <div class="news-content">
      Paper on stablecoin transparency accepted by <strong>SCECR 2025</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Apr, 2025</div>
    <div class="news-content">
      Had a presentation at the <strong>2025 HKUST PhD Student Conference</strong>.
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
      Our <strong>IS Reading Group</strong> reached 100+ members!
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Feb, 2025</div>
    <div class="news-content">
      Paper on root cause analysis accepted by <strong>AIOps'25</strong>.
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
      Received the HKUST <strong>Young Scientists Program Award (FinTech)</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Nov, 2024</div>
    <div class="news-content">
      Paper on blockchain-based K-Pop community nominated for the <strong>2024 ICIS Best Short Paper Award</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Nov, 2024</div>
    <div class="news-content">
      Paper on blockchain infrastructure governance presented at the <strong>2024 Greater Bay Area Finance Workshop</strong>.
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
      Paper on code reviewer accepted for publication in <strong>2024 CIST</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Jul, 2024</div>
    <div class="news-content">
      Paper on blockchain-based K-Pop community accepted by the <strong>2024 ICIS Fintech Track</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Jul, 2024</div>
    <div class="news-content">
      Paper on stablecoin transparency accepted by the <strong>2024 ICIS</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Jul, 2024</div>
    <div class="news-content">
      Successfully completed the <strong>PhD Qualification Exam</strong> and advanced to candidacy.
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
      Had a presentation at the <strong>HKUST PhD Student Conference</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Oct, 2023</div>
    <div class="news-content">
      joint policy paper "e-HKD Pilot Programme" published by <a href="https://www.hkma.gov.hk/media/eng/doc/key-information/press-release/2023/20231030e3a1.pdf"><strong>HKMA</strong></a>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Sep, 2023</div>
    <div class="news-content">
      Paper related to software metrics distribution accepted by <strong>QRS 2023</strong>.
    </div>
  </div>
  <div class="news-item">
    <div class="news-date">Dec, 2022</div>
    <div class="news-content">
      Selected as a mentor for the <strong>2022 HKUST Fintechstic Competition</strong>.
    </div>
  </div>
</div>

## IS Paper Sharing Group
Inspired by open talks in other subjects, we organize an **information systems** paper sharing series. Our initial targeted audience is mainly PhD students. We also welcome faculty members and industry practitioners to share more advanced topics in this area. You can email me (siyuan.jin@connect.ust.hk) if you want to join us. [[Details]](https://siyuan-bruce.github.io/reading_group/home.html)

<!-- ## **Research Interests**
- **IT Infrastructure (Blockchain)**: Token-based Platforms, Central Bank Digital Currency, Token Economy
- **Software Management**: Software Development
- **Quantum IT Governance**: Quantuam IT management, Quantum Finance, Classical Quantum-Inspired Algorithm -->

<!-- ## **Education**
- **Hong Kong University of Science and Technology** (Aug 2022 - now)
  - MPhil-PhD Student in Information Systems.
  - Supervisor: Prof. [Kar Yan Tam](https://isom.hkust.edu.hk/faculty-and-staff/directory/kytam). -->
  <!-- - Advisors: [Allen H. Huang](https://www.allenhuang.org/), [Dongwon Lee](https://isom.hkust.edu.hk/faculty-and-staff/directory/dongwon), [Kohei Kawaguchi](https://www.kohei-kawaguchi.com/), [Keongtae Kim](https://www.bschool.cuhk.edu.hk/staff/kim-keongtae/), [Marc Dordal i Carreras](https://marcdordal.github.io/), [Qiming Shao](https://sites.google.com/view/sqml/home), [Bei Zeng](https://facultyprofiles.hkust.edu.hk/profiles.php?profile=bei-zeng-zengb). -->
  <!-- - Obtained Hong Kong PhD Fellowship Scheme (2024-2028). -->

<!-- - **South China University of Technology** (Sep 2017 – Jun 2021)
  - B.Fin. in Financial Technology, Outstanding Graduates. 
  - Rank: 1 / 33.
  - Obtained 2021 University-level excellent graduation thesis
  - Obtained 2020 China National Scholarship (Top 0.1%)
  - Obtained 2019 First prize of South China University of Technology (Top 1%)
  - Obtained 2018 First prize of South China University of Technology (Top 1%) -->
<!-- 
## Education

<div class="card">
  <div class="card-content">
    <h3>PhD Candidate in Information Systems, Hong Kong University of Science and Technology</h3>
    <small>Aug 2022 - Present, Clear Water Bay, Hong Kong</small>
    <ul class="timeline">
      <li class="timeline-item">
        Supervisor:&nbsp;<strong>Prof. <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/kytam">Kar Yan Tam</a></strong>
      </li>
      <li class="timeline-item">
        Hong Kong PhD Fellowship Scheme (2024-2028)
      </li>
    </ul>
  </div>
</div>

<div class="card">
  <div class="card-content">
    <h3>Bachelor of FinTech, South China University of Technology</h3>
    <small>Sep 2017 – Jun 2021, Guangzhou, China</small>
        <ul class="timeline">
      <li class="timeline-item">
        China National Scholarship (Top 0.1%)
      </li>
    </ul>
  </div>
</div>

## Industry Experience
<div class="card">
  <div class="card-content">
    <h3>Research Consultant, HSBC Hong Kong</h3>
    <small>Sep 2022 - now, Olympian City, Hong Kong</small>
    <ul class="timeline">
      <li class="timeline-item">
      HSBC Email: bruce.s.jin@hsbc.com.hk
      </li>
    </ul>
  </div>
</div>

<div class="card">
  <div class="card-content">
    <h3>Full Stack Engineer, HSBC Laboratory</h3>
    <small>May 2021 - Aug 2022, Guangzhou, China</small>
    <ul class="timeline">
      <li class="timeline-item">
        Advisor: Yong Xia
      </li>
      <li class="timeline-item">
        Achievements: 2021 Top Performer, 2021 Role Model, 2021 Global CBDC Challenge Finalist.
      </li>
    </ul>
  </div>
</div>

<div class="card">
  <div class="card-content">
    <h3>Trainee, HSBC IT Architecture</h3>
    <small>Sep 2020 - May 2021, Guangzhou, China</small>
  </div>
</div> -->

## **Contact**
- Email: siyuan.jin@connect.ust.hk

<script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=r7AzHOCvRlal1xYrtPrhKbcA0nnj4jrEj9bMJxTlmEE&cl=ffffff&w=300"></script>


<meta name="viewport" content="width=device-width, initial-scale=1">