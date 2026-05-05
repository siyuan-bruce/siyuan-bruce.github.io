---
layout: article
titles:
  # @start locale config
  en      : &EN       Teaching
  en-GB   : *EN
  en-US   : *EN
  en-CA   : *EN
  en-AU   : *EN
  zh-Hans : &ZH_HANS  教学
  zh      : *ZH_HANS
  zh-CN   : *ZH_HANS
  zh-SG   : *ZH_HANS
  fr-BE   : *FR
  fr-CA   : *FR
  fr-CH   : *FR
  fr-FR   : *FR
  fr-LU   : *FR
  # @end locale config
key: page-teaching
---

<head>
<style>
  body {
    line-height: 1.6;
    padding: 0;
  }

  .teaching-page {
    max-width: none;
    padding: 0 0 2rem;
  }

  .epigraph {
    font-style: italic;
    color: #444;
    border-left: 4px solid #1e3a6e;
    padding: 12px 18px;
    margin: 0 0 1.5rem;
    font-size: 1.05rem;
    line-height: 1.55;
    background: linear-gradient(90deg, #f4f7fc 0%, transparent 100%);
    border-radius: 0 4px 4px 0;
  }

  .epigraph .attribution {
    display: block;
    margin-top: 8px;
    font-style: normal;
    font-size: 0.85rem;
    color: #666;
  }

  .teaching-interests {
    font-size: 15px;
    color: #333;
    margin-bottom: 1.5rem;
    padding: 12px 14px;
    background: #fafbfd;
    border: 1px solid #e8ecf2;
    border-radius: 4px;
    line-height: 1.55;
  }

  .role-heading {
    font-size: 1.22rem;
    font-weight: 700;
    color: #152a52;
    margin: 2rem 0 0.7rem;
    padding: 0 0 0.4rem 2px;
    border-bottom: 2px solid #1e3a6e;
    letter-spacing: -0.02em;
  }

  .role-heading:first-of-type {
    margin-top: 0.35rem;
  }

  .role-heading + .institution-heading {
    margin-top: 0.75rem;
  }

  .course-container {
    background: #fff;
    border: 1px solid #e0e4ec;
    border-radius: 6px;
    margin: 0 0 1rem;
    padding: 1.25rem 1.35rem;
    box-shadow: 0 1px 3px rgba(30, 58, 110, 0.06);
  }

  .course-title {
    font-size: 1.05rem;
    font-weight: 700;
    margin: 0 0 0.85rem;
    color: #1e3a6e;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #e8ecf2;
    letter-spacing: -0.01em;
  }

  .course-details {
    margin-bottom: 12px;
    padding: 12px 14px;
    border-left: 3px solid #1e3a6e;
    background-color: #f7f9fc;
    border-radius: 0 4px 4px 0;
  }

  .course-details p {
    margin: 6px 0;
    color: #333;
    font-size: 14px;
    line-height: 1.5;
  }

  .course-details strong {
    color: #111;
    font-weight: 600;
  }

  .course-description {
    line-height: 1.7;
    color: #3a3a3a;
    margin: 0;
    font-size: 14px;
  }

  /* Student comments: button-style toggle (native details/summary, no JS) */
  .student-feedback-toggle {
    margin-top: 1rem;
    border: 1px solid #c5d0e0;
    border-radius: 6px;
    background: #fff;
    overflow: hidden;
  }

  .student-feedback-toggle summary {
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 12px 16px;
    font-size: 14px;
    font-weight: 600;
    color: #1e3a6e;
    background: linear-gradient(180deg, #f7f9fd 0%, #eef2f9 100%);
    border: none;
    user-select: none;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .student-feedback-toggle summary::-webkit-details-marker {
    display: none;
  }

  .student-feedback-toggle summary::after {
    content: "▸";
    font-size: 12px;
    color: #1e3a6e;
    opacity: 0.85;
    transition: transform 0.2s ease;
  }

  .student-feedback-toggle[open] summary {
    border-bottom: 1px solid #dce3ef;
    background: #f0f4fb;
  }

  .student-feedback-toggle[open] summary::after {
    transform: rotate(90deg);
  }

  .student-feedback-toggle summary:hover {
    background: #e8eef8;
    color: #152a52;
  }

  .student-feedback-panel {
    padding: 14px 16px 16px;
    background: #fafbfd;
  }

  .student-feedback-panel .feedback-label {
    font-size: 11px;
    font-weight: 700;
    color: #5a6a82;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin: 0 0 10px;
  }

  .student-feedback-panel p {
    margin: 0;
    font-style: italic;
    color: #444;
    font-size: 14px;
    line-height: 1.65;
  }

  .student-feedback-panel strong {
    color: #111;
    font-style: normal;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .course-container {
      padding: 1rem 1rem;
    }

    .course-title {
      font-size: 1rem;
    }

    .course-details {
      padding: 10px 12px;
    }

    .student-feedback-toggle summary {
      padding: 10px 14px;
      font-size: 13px;
    }
  }
</style>
</head>

<div class="teaching-page">

<div class="epigraph">
  Teaching is not a science and should not be treated as such. Teaching is an art — a performing art.
  <span class="attribution">— Mr. Dawe</span>
</div>

<p class="teaching-interests"><strong>Teaching interests:</strong> Management Information Systems, Blockchain, Digital Currency, Quantum Computing Management.</p>

<div class="role-heading">Instructor</div>

<div class="course-container">
  <div class="course-title">Blockchain: Technology and Economics</div>
  <div class="course-details">
    <p><strong>Institution:</strong> South China University of Technology</p>
    <p><strong>Teaching period:</strong> Spring 2026</p>
    <p><strong>Learning hours:</strong> ~32 hours</p>
    <p><strong>Class size:</strong> 28</p>
  </div>
  <p class="course-description">This graduate block introduces blockchain from technical and socioeconomic angles, with emphasis on current academic research. Students learn to read and evaluate peer-reviewed work, present an FT50 journal article, and complete an individual research proposal (2,000–3,000 words). Lectures cover cryptographic and economic foundations (consensus, smart contracts, tokenomics, DAOs, on-chain analytics, DeFi, sustainability, and governance), while self-study draws on curated video modules and readings. In-class research modules use instructor working papers on blockchain infrastructure and sustainability and on decentralized voting in blockchain-based communities; assessment is weighted equally between the presentation and the proposal.</p>
</div>

<div class="course-container">
  <div class="course-title">Coding for Business (ISOM 2020)</div>
  <div class="course-details">
    <p><strong>Institution:</strong> The Hong Kong University of Science and Technology</p>
    <p><strong>Teaching period:</strong> Fall 2023 (Lecture Instructor: Weiyin Hong)</p>
    <p><strong>Class size:</strong> 24</p>
  </div>
  <p class="course-description">This course intends to introduce students to basic programming concepts and skills for business data coding and business problem solving. Using Python as an illustrative programming language, this course provides students with a basic understanding of programming concepts and syntaxes, including data types, associated methods and functions, and control flow statements. Through the process of learning a programming language, students will also develop logical and critical thinking skills and be able to tackle simple business problems with coding. For SBM students only.</p>
  <details class="student-feedback-toggle">
    <summary>Student comments (Fall 2023 lab)</summary>
    <div class="student-feedback-panel">
      <div class="feedback-label">Anonymous course evaluation</div>
      <p><strong>Student 1:</strong> "The TA(s) during this lab section are really helpful. They're always willing to help and answer my questions whenever I need assistance. They also proactively reach out to me whenever I look confused. I really appreciate the amount of support and assistance I received from this lab. Thank you!"</p>
    </div>
  </details>
</div>

<div class="role-heading">Teaching assistant</div>

<div class="course-container">
  <div class="course-title">AI in Business (DBAP 5530)</div>
  <div class="course-details">
    <p><strong>Institution:</strong> The Hong Kong University of Science and Technology</p>
    <p><strong>Teaching period:</strong> Apr 2026</p>
    <p><strong>Class size:</strong> 6</p>
  </div>
  <p class="course-description">This course explores the transformative role of artificial intelligence (AI) in the business landscape. Designed for DBA students, it covers key AI concepts, technologies, and applications relevant to various industries. Students will learn how to leverage AI tools for decision-making, improve operational efficiency, enhance customer experiences, and drive innovation. The curriculum includes topics such as machine learning, natural language processing, data analytics, and ethical considerations in AI deployment. By the end of the course, students will gain an understanding of AI and identify related business issues that could become a potential topic of their thesis research.</p>
</div>

<div class="course-container">
  <div class="course-title">Coding for Business (ISOM 2020)</div>
  <div class="course-details">
    <p><strong>Institution:</strong> The Hong Kong University of Science and Technology</p>
    <p><strong>Teaching period:</strong><br>
    Spring 2023 (Instructor: Dr. Weiyin Hong)<br>
    Fall 2023 (Instructor: Dr. Weiyin Hong)<br>
    Spring 2024 (Instructor: Dr. Jianqing Chen)<br>
    Fall 2025 (Instructor: Dr. Hong Xu / Bufan Sun)</p>
    <p><strong>Class size:</strong> 60</p>
  </div>
</div>

<div class="course-container">
  <div class="course-title">Blockchain Foundation</div>
  <div class="course-details">
    <p><strong>Institution:</strong> South China University of Technology</p>
    <p><strong>Teaching period:</strong> Spring 2021</p>
    <p><strong>Class size:</strong> 40</p>
  </div>
  <p class="course-description">This course introduces the basic concepts of blockchain, offering students a clear and concrete understanding of its foundational principles. Participants will explore the essential structure of blockchain systems, learn how consensus mechanisms ensure data integrity, delve into the operation of smart contracts, and examine the key practices that contribute to robust blockchain security. Students need to run smart contracts on R3 Corda and Hyperledger Fabric and implement a blockchain project.</p>
</div>

</div>
