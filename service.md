---
layout: article
titles:
  # @start locale config
  en      : &EN       Service
  en-GB   : *EN
  en-US   : *EN
  en-CA   : *EN
  en-AU   : *EN
  zh-Hans : &ZH_HANS  服务
  zh      : *ZH_HANS
  zh-CN   : *ZH_HANS
  zh-SG   : *ZH_HANS
  fr      : &FR       Service
  fr-BE   : *FR
  fr-CA   : *FR
  fr-CH   : *FR
  fr-FR   : *FR
  fr-LU   : *FR
  # @end locale config
key: page-service
---

<head>
<style>
  /* Same column as Teaching: use full .main / .article__content width (no inner max-width) */
  .article__content .service-page,
  .service-page {
    font-size: 1rem;
    line-height: 1.75;
    color: #1a1a1a;
    max-width: none;
    width: 100%;
    margin: 0;
    padding: 0 0 2.5rem;
    -webkit-font-smoothing: antialiased;
  }

  .article__content .service-page h2,
  .service-page h2 {
    font-size: clamp(1.35rem, 2.5vw, 1.65rem);
    font-weight: 700;
    color: #0f0f0f;
    margin: 2.5rem 0 1rem;
    padding-bottom: 0.55rem;
    border-bottom: 3px solid #1e3a6e;
    letter-spacing: -0.02em;
    line-height: 1.3;
  }

  .article__content .service-page h2:first-child,
  .service-page h2:first-child {
    margin-top: 0;
  }

  .article__content .service-page h3,
  .service-page h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #1e3a6e;
    margin: 1.5rem 0 0.65rem;
    line-height: 1.35;
  }

  .article__content .service-page p,
  .service-page p {
    margin: 0 0 1.1rem;
    max-width: none;
  }

  .article__content .service-page a,
  .service-page a {
    color: #1e3a6e;
    text-decoration: none;
    font-weight: 600;
  }

  .article__content .service-page a:hover,
  .service-page a:hover {
    text-decoration: underline;
  }

  .article__content .service-page ul,
  .service-page ul {
    list-style: none;
    margin: 0.5rem 0 1.5rem;
    padding: 0;
  }

  .article__content .service-page ul li,
  .service-page ul li {
    margin: 0 0 1rem;
    padding: 0.85rem 1.1rem 0.85rem 1.35rem;
    border-left: 4px solid #1e3a6e;
    background: linear-gradient(90deg, #f0f4fb 0%, rgba(247, 249, 252, 0.35) 55%, transparent 100%);
    border-radius: 0 4px 4px 0;
    font-size: 1em;
    line-height: 1.72;
  }

  .article__content .service-page ul li:last-child,
  .service-page ul li:last-child {
    margin-bottom: 0;
  }

  /* Reviewing subsections: one venue per row, slightly compact */
  .article__content .service-page h3 + ul li,
  .service-page h3 + ul li {
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin: 0 0 0.5rem;
    padding: 0.5rem 0.75rem 0.5rem 1rem;
    line-height: 1.5;
  }

  .article__content .service-page h3 + ul li:last-child,
  .service-page h3 + ul li:last-child {
    margin-bottom: 0;
  }

  .article__content .service-page h3 + ul,
  .service-page h3 + ul {
    margin-bottom: 1.25rem;
  }

  .article__content .service-highlight,
  .service-highlight {
    margin: 1.75rem 0 1.5rem;
    padding: 1.5rem 1.75rem 1.6rem;
    border: 1px solid #d4dce8;
    border-radius: 4px;
    background: #f7f9fd;
    box-shadow: 0 2px 8px rgba(30, 58, 110, 0.06);
  }

  .article__content .service-highlight h2,
  .service-highlight h2 {
    margin-top: 0;
    margin-bottom: 0.9rem;
    padding-bottom: 0.65rem;
    border-bottom-width: 2px;
    border-bottom-color: #b8c5db;
    font-size: clamp(1.25rem, 2.2vw, 1.45rem);
  }

  .article__content .service-highlight p,
  .service-highlight p {
    margin-bottom: 0;
    font-size: 1em;
    line-height: 1.78;
    color: #242424;
    max-width: none;
  }

  @media (max-width: 600px) {
    .article__content .service-highlight,
    .service-highlight {
      padding: 1.2rem 1.1rem 1.25rem;
    }

    .article__content .service-page ul li,
    .service-page ul li {
      padding: 0.7rem 0.85rem 0.7rem 1rem;
    }
  }

  .s-list { margin: 0.3rem 0 1.2rem; }
  .s-item {
    display: grid;
    grid-template-columns: 72px minmax(0, 1fr);
    column-gap: 14px;
    padding: 5px 0;
    border-bottom: 1px solid #edf0f5;
    font-size: 15px;
    line-height: 1.5;
  }
  .s-item:last-child { border-bottom: none; }
  .s-abbr { font-weight: 700; color: #1e3a6e; }
  .s-note { color: #666; font-size: 13.5px; white-space: nowrap; }
  @media (max-width: 600px) {
    .s-item { grid-template-columns: 58px minmax(0, 1fr); column-gap: 10px; font-size: 14px; }
    .s-note { white-space: normal; }
  }
</style>
</head>

<div class="service-page" markdown="1">

## Reviewing

### Conferences

<div class="s-list">
  <div class="s-item"><span class="s-abbr">ICIS</span><span>International Conference on Information Systems <span class="s-note">&middot; 2023&ndash;2026 &middot; 8 reviews</span></span></div>
  <div class="s-item"><span class="s-abbr">WITS</span><span>Workshop on Information Technologies and Systems <span class="s-note">&middot; 2024&ndash;2026 &middot; 6 reviews</span></span></div>
  <div class="s-item"><span class="s-abbr">PACIS</span><span>Pacific Asia Conference on Information Systems <span class="s-note">&middot; 2024, 2026 &middot; 3 reviews</span></span></div>
  <div class="s-item"><span class="s-abbr">CIST</span><span>Conference on Information Systems and Technology <span class="s-note">&middot; 2026</span></span></div>
  <div class="s-item"><span class="s-abbr">HICSS</span><span>Hawaii International Conference on System Sciences <span class="s-note">&middot; 2026</span></span></div>
  <div class="s-item"><span class="s-abbr">QIP</span><span>Quantum Information Processing <span class="s-note">&middot; 2023</span></span></div>
</div>

### Journals

<div class="s-list">
  <div class="s-item"><span class="s-abbr">MS</span><span>Management Science</span></div>
  <div class="s-item"><span class="s-abbr">JMIS</span><span>Journal of Management Information Systems</span></div>
  <div class="s-item"><span class="s-abbr">CAIS</span><span>Communications of the Association for Information Systems</span></div>
  <div class="s-item"><span class="s-abbr">DS</span><span>Decision Sciences</span></div>
  <div class="s-item"><span class="s-abbr">RAST</span><span>Review of Accounting Studies</span></div>
  <div class="s-item"><span class="s-abbr">TAR</span><span>The Accounting Review</span></div>
  <div class="s-item"><span class="s-abbr">ICT4D</span><span>Information Technology for Development</span></div>
  <div class="s-item"><span class="s-abbr">JECR</span><span>Journal of Electronic Commerce Research</span></div>
  <div class="s-item"><span class="s-abbr">IJEC</span><span>International Journal of Electronic Commerce</span></div>
  <div class="s-item"><span class="s-abbr">BRA</span><span>Blockchain Research and Applications</span></div>
  <div class="s-item"><span class="s-abbr">JDM</span><span>Journal of Digital Management</span></div>
  <div class="s-item"><span class="s-abbr">HSSC</span><span>Nature Humanities and Social Sciences Communications</span></div>
  <div class="s-item"><span class="s-abbr">CSUR</span><span>ACM Computing Surveys</span></div>
</div>

## Professional membership

AIS (Association for Information Systems) &middot; ACM (Association for Computing Machinery) &middot; INFORMS

<div class="service-highlight" markdown="1">

## IS Reading Group

An online paper series for IS PhD students, with 40+ seminars in 2024&ndash;2025. Faculty and practitioners are welcome. Schedules and archives are on the [IS Reading Group site](https://siyuan-bruce.github.io/reading_group/home.html); email [siyuan.jin@connect.ust.hk](mailto:siyuan.jin@connect.ust.hk) to get involved.

</div>

</div>
