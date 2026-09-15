---
layout: article
titles:
  # @start locale config
  en      : &EN       Policy & Government Impact
  en-GB   : *EN
  en-US   : *EN
  en-CA   : *EN
  en-AU   : *EN
  zh-Hans : &ZH_HANS  政策与政府贡献
  zh      : *ZH_HANS
  zh-CN   : *ZH_HANS
  zh-SG   : *ZH_HANS
  fr      : &FR       Politiques publiques
  fr-BE   : *FR
  fr-CA   : *FR
  fr-CH   : *FR
  fr-FR   : *FR
  fr-LU   : *FR
  # @end locale config
key: page-policy
permalink: /policy.html
---

<head>
<style>
  .policy-page {
    max-width: none;
    line-height: 1.7;
    color: #1a1a1a;
    padding: 0 0 2.5rem;
  }

  .policy-intro {
    font-size: 15px;
    color: #333;
    margin: 0 0 1.75rem;
    padding: 14px 16px;
    background: #f7f9fd;
    border: 1px solid #d4dce8;
    border-radius: 4px;
    line-height: 1.65;
  }

  .policy-page h2 {
    font-size: clamp(1.3rem, 2.4vw, 1.6rem);
    font-weight: 700;
    color: #0f0f0f;
    margin: 2.2rem 0 0.9rem;
    padding-bottom: 0.5rem;
    border-bottom: 3px solid #1e3a6e;
    letter-spacing: -0.02em;
    line-height: 1.3;
  }

  .policy-page h2:first-of-type {
    margin-top: 0.4rem;
  }

  .policy-entry {
    margin: 0 0 1rem;
    padding: 0.9rem 1.15rem 0.95rem 1.2rem;
    background: #fff;
    border: 1px solid #e0e4ec;
    border-left: 3px solid #1e3a6e;
    border-radius: 0 4px 4px 0;
    box-shadow: 0 1px 3px rgba(30, 58, 110, 0.05);
  }

  .policy-venue {
    display: inline-block;
    font-size: 10.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #1e3a6e;
    background: #f0f4fb;
    border: 1px solid #c5d0e0;
    border-radius: 10px;
    padding: 2px 9px;
    margin-bottom: 7px;
  }

  .policy-entry .p-title {
    font-size: 16px;
    font-weight: 700;
    color: #111;
    line-height: 1.4;
    margin-bottom: 5px;
  }

  .policy-entry .p-meta {
    font-size: 13.5px;
    color: #555;
    margin: 0 0 6px;
  }

  .policy-entry .p-desc {
    font-size: 13.5px;
    color: #444;
    line-height: 1.55;
    margin: 4px 0 0;
  }

  .policy-entry .p-links {
    font-size: 13.5px;
    margin: 0;
  }

  .policy-entry a,
  .policy-intro a {
    color: #1e3a6e;
    text-decoration: none;
    font-weight: 600;
  }

  .policy-entry a:hover,
  .policy-intro a:hover {
    text-decoration: underline;
  }

  .oped-note {
    font-size: 14px;
    color: #444;
    margin: 0 0 0.75rem;
  }

  .oped-list {
    list-style: none;
    padding: 0;
    margin: 0.25rem 0 0;
  }

  .oped-list li {
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
    font-size: 14px;
    line-height: 1.5;
  }

  .oped-list li:last-child {
    border-bottom: none;
  }

  .oped-list .oped-date {
    color: #888;
    font-size: 12.5px;
    white-space: nowrap;
  }

  .oped-list a {
    color: #1e3a6e;
    text-decoration: none;
    font-weight: 600;
  }

  .oped-list a:hover {
    text-decoration: underline;
  }
</style>
</head>

<div class="policy-page" markdown="1">

<p class="policy-intro">
My research connects directly to public policy. I have contributed to <strong>Hong Kong Monetary Authority (HKMA)</strong> CBDC Expert Group white papers on tokenised money, ledger infrastructure, and privacy and post-quantum security, studied the <strong>e-HKD</strong> central bank digital currency (CBDC) pilot, informed Hong Kong tourism strategy through applied forecasting and a recurring newspaper column, and reached the finals of the <strong>Monetary Authority of Singapore (MAS)</strong> Global CBDC Challenge. This page summarizes that work by theme.
</p>

## Digital Money & Central Bank Digital Currency

<div class="policy-entry">
  <span class="policy-venue">HKMA CBDC Expert Group</span>
  <div class="p-title">Tokenised Forms of Money</div>
  <div class="p-meta">Kar Yan Tam (lead), <a href="https://www.allenhuang.org/">Allen H. Huang</a>, Douglas Arner, Dong Lou, <strong>Siyuan Jin</strong>.</div>
  <p class="p-desc">Contributed to this CBDC Expert Group paper comparing tokenised forms of money (retail CBDCs, reserve-backed tokens, tokenised deposits, and stablecoins), assessing their risks and business case within Hong Kong's proposed digital-money framework.</p>
</div>

<div class="policy-entry">
  <span class="policy-venue">HKMA CBDC Research</span>
  <div class="p-title">CBDC Unified Ledger</div>
  <p class="p-desc">Contributed to a whitepaper on CBDC infrastructure interoperability, following the BIS "unified ledger" concept: enabling a wholesale CBDC, tokenised deposits, and tokenised assets across different blockchains to interoperate for atomic delivery-versus-payment, with design principles and a phased proof-of-concept roadmap.</p>
</div>

<div class="policy-entry">
  <span class="policy-venue">ACM DLT: Research & Practice</span>
  <div class="p-title">Consumer Perceptions and Willingness to Adopt rCBDCs Before and After the e-HKD Pilot</div>
  <div class="p-meta"><a href="https://marcdordal.github.io/">Marc Dordal i Carreras</a>, <a href="https://www.kohei-kawaguchi.com/">Kohei Kawaguchi</a>, <strong>Siyuan Jin</strong>, Haicheng Guo.</div>
  <p class="p-links">Government coverage: <a href="https://www.hkma.gov.hk/media/eng/doc/key-information/press-release/2023/20231030e3a1.pdf">HKMA e-HKD Pilot Programme</a> · <a href="https://www.about.hsbc.com.hk/-/media/hong-kong/en/news-and-media/hypothetical-e-hkd-phase-1-pilot-factsheet-en.pdf">HSBC Summary</a> · <a href="https://dl.acm.org/doi/10.1145/3756329">Paper</a></p>
</div>

<div class="policy-entry">
  <span class="policy-venue">IEEE Access · 2022</span>
  <div class="p-title">CEV Framework: A CBDC Evaluation and Verification Framework for Consensus Algorithms and Operating Architectures</div>
  <div class="p-meta"><strong>Siyuan Jin</strong>, Yong Xia.</div>
  <p class="p-links"><strong>MAS Global CBDC Challenge Finalist</strong> (top 5% of 300+ submissions from 50+ countries) · <a href="https://www.mas.gov.sg/news/media-releases/2021/mas-announces-15-finalists-for-the-global-cbdc-challenge">MAS announcement</a> · <a href="https://ieeexplore.ieee.org/document/9795279">Paper</a></p>
</div>

## CBDC Privacy & Security

<div class="policy-entry">
  <span class="policy-venue">HKMA CBDC Expert Group</span>
  <div class="p-title">Privacy on CBDC: A Technical Overview</div>
  <p class="p-desc">Contributed to this CBDC Expert Group paper surveying privacy-enhancing technologies for a central bank digital currency, including pseudonymisation, homomorphic commitments, ring and blind signatures, and zero-knowledge proofs. Its post-quantum section examines the threat quantum computing poses to the cryptography underpinning CBDCs and a modular migration path toward NIST-standardised, quantum-resistant (lattice-based) schemes, informed by the BIS Project Leap.</p>
</div>

## Hong Kong Tourism & Economic Policy

<div class="policy-entry">
  <span class="policy-venue">GLOSITH 2025 · Best Paper Award</span>
  <div class="p-title">Horizon-Dependent Tourism Forecasting with Multi-Platform Signals: Evidence from Hong Kong</div>
  <div class="p-meta"><strong>Siyuan Jin</strong>, Kai-Lung Hui, <a href="https://www.allenhuang.org/">Allen H. Huang</a>, Chao He, Chun Wang.</div>
  <p class="p-links">Applied forecasting to inform Hong Kong's post-pandemic tourism and visitor-experience strategy.</p>
</div>

<p class="oped-note">
As part of this work, I write a recurring public-policy column in the <strong>Hong Kong Economic Times (經濟日報)</strong> on Hong Kong's tourism strategy, visitor experience, and competitiveness:
</p>

<ul class="oped-list">
  <li>"夏日盛會吸旅客 暑期消費存變數" <a href="https://paper.hket.com/article/4169713">經濟日報</a> <span class="oped-date">· August 2026</span></li>
  <li>"端午暑假遊興濃 港迎入境客高峰" <a href="https://paper.hket.com/article/4149054">經濟日報</a> <span class="oped-date">· June 19, 2026</span></li>
  <li>"「友善香港」廣傳 提升體驗吸客" <a href="https://paper.hket.com/article/4132723/">經濟日報</a> <span class="oped-date">· May 21, 2026</span></li>
  <li>"文體+展會添魅力 港吸遊客穩步增" <a href="https://paper.hket.com/article/4125574/">經濟日報</a> <span class="oped-date">· May 8, 2026</span></li>
  <li>"醫療旅遊商機巨 港拓優勢須加鞭" <a href="https://paper.hket.com/article/4109817">經濟日報</a> <span class="oped-date">· April 5, 2026</span></li>
  <li>"深化體驗添「黏性」 旅客增長常態化" <a href="https://paper.hket.com/article/4086667">經濟日報</a> <span class="oped-date">· February 20, 2026</span></li>
  <li>"個性化體驗吸客 港節慶IP添魅力" <a href="https://paper.hket.com/article/4073859">經濟日報</a> <span class="oped-date">· January 24, 2026</span></li>
  <li>"節慶添「情緒價值」 提升軟實力吸客" <a href="https://paper.hket.com/article/4058462">經濟日報</a> <span class="oped-date">· December 24, 2025</span></li>
  <li>"「高情緒價值」體驗 吸客遊港新引擎" <a href="https://paper.hket.com/article/4048872">經濟日報</a> <span class="oped-date">· December 5, 2025</span></li>
  <li>"文娛創新增體驗 吸旅客「多留一晚」" <a href="https://paper.hket.com/article/4034074/">經濟日報</a> <span class="oped-date">· November 7, 2025</span></li>
</ul>

</div>
