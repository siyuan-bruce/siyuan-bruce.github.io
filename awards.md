---
layout: article
titles:
  # @start locale config
  en      : &EN       Awards & Honors
  en-GB   : *EN
  en-US   : *EN
  en-CA   : *EN
  en-AU   : *EN
  zh-Hans : &ZH_HANS  荣誉与奖项
  zh      : *ZH_HANS
  zh-CN   : *ZH_HANS
  zh-SG   : *ZH_HANS
  fr-BE   : *FR
  fr-CA   : *FR
  fr-CH   : *FR
  fr-FR   : *FR
  fr-LU   : *FR
  # @end locale config
key: page-awards
permalink: /awards.html
---

<head>
<style>
  .awards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 10px;
    margin: 10px 0 6px;
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
  .award-tile.cat-service     { --cat-color: #5a3e8b; }
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
      margin: 8px 0;
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
</style>
</head>

<div class="awards-grid">
  <div class="award-tile cat-research">
    <span class="award-cat">Research</span>
    <div class="award-year">2026</div>
    <div class="award-title">Doctoral Consortium</div>
    <div class="award-org">PACIS — Pacific Asia Conference on Information Systems</div>
  </div>
  <div class="award-tile cat-research">
    <span class="award-cat">Research</span>
    <div class="award-year">2026</div>
    <div class="award-title">Doctoral Consortium <span style="font-weight:500;color:#555;">(Nominee)</span></div>
    <div class="award-org">ICIS — International Conference on Information Systems</div>
  </div>
  <div class="award-tile cat-research">
    <span class="award-cat">Research</span>
    <div class="award-year">2026</div>
    <div class="award-title">Doctoral Consortium <span style="font-weight:500;color:#555;">(Nominee)</span></div>
    <div class="award-org">CIST — Conference on Information Systems and Technology</div>
  </div>
  <div class="award-tile cat-grant">
    <span class="award-cat">Grant</span>
    <div class="award-year">2025</div>
    <div class="award-title">NSFC Young Student Basic Research Program <span style="font-weight:500;color:#555;">(300K RMB)</span></div>
    <div class="award-org">National Natural Science Foundation of China</div>
  </div>
  <div class="award-tile cat-service">
    <span class="award-cat">Service</span>
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
  <div class="award-tile cat-research">
    <span class="award-cat">Research</span>
    <div class="award-year">2025</div>
    <div class="award-title">Best Paper Award</div>
    <div class="award-org">GLOSITH — Global Congress of Special Interest Tourism &amp; Hospitality</div>
  </div>
  <div class="award-tile cat-service">
    <span class="award-cat">Service</span>
    <div class="award-year">2025</div>
    <div class="award-title">Reviewer Development Workshop</div>
    <div class="award-org">MIS Quarterly (MISQ)</div>
  </div>
  <div class="award-tile cat-fellowship">
    <span class="award-cat">Fellowship</span>
    <div class="award-year">2025</div>
    <div class="award-title">Young Scientist PhD Program (FinTech)</div>
    <div class="award-org">HKUST</div>
  </div>
  <div class="award-tile cat-fellowship">
    <span class="award-cat">Fellowship</span>
    <div class="award-year">2024 – 2027</div>
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
