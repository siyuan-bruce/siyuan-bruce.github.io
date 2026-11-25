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
    margin: 10px auto;
  }

  .profile-image img {
    width: 100%;
    max-width: 260px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }

  /* Hidden gallery entrance on the profile photo */
  .profile-photo-link {
    position: relative;
    display: block;
  }

  .profile-photo-link img {
    display: block;
    transition: filter 0.2s ease;
  }

  .photo-gallery-badge {
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.92);
    color: #1e3a6e;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);
    opacity: 0;
    transform: translateY(4px);
    transition: opacity 0.2s ease, transform 0.2s ease;
    pointer-events: none;
  }

  .profile-photo-link:hover img,
  .profile-photo-link:focus-visible img {
    filter: brightness(0.94);
  }

  .profile-photo-link:hover .photo-gallery-badge,
  .profile-photo-link:focus-visible .photo-gallery-badge {
    opacity: 1;
    transform: translateY(0);
  }

  /* Touch screens have no hover, so keep the badge faintly visible there */
  @media (hover: none) {
    .photo-gallery-badge {
      opacity: 0.8;
      transform: none;
    }
  }

  .profile-text {
    margin: 10px;
    text-align: justify;
    text-justify: inter-word;
  }

  /* 2026-11-21 (Bruce): keep the banner, less wide; centered with white space around it.
     780px: the column every page and the top bar share */
  .homepage-banner {
    max-width: 780px;
    margin: 32px auto 36px;
  }

  .homepage-banner picture {
    display: block;
  }

  .homepage-banner img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 4px;
  }

  /* Hide the banner on mobile to save vertical space */
  @media (max-width: 600px) {
    .homepage-banner {
      display: none;
    }
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

  .profile-sidebar .affil-row:has(+ .contact-email) {
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

  /* CV Section */
  .cv-heading {
    margin: 26px 10px 0;
    font-size: 20px;
    font-weight: 700;
    color: #111;
    letter-spacing: -0.01em;
  }

  .cv-section {
    margin: 8px 10px 10px;
    padding-top: 8px;
    border-top: 1px solid #d8dde6;
    line-height: 1.6;
  }

  .cv-blurb {
    font-size: 14px;
    color: #444;
    margin: 0 0 10px;
  }

  .cv-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
  }

  .cv-button {
    display: inline-block;
    padding: 7px 16px;
    background-color: #1A5DCB;
    color: #fff !important;
    font-size: 14px;
    font-weight: 600;
    border-radius: 3px;
    text-decoration: none !important;
  }

  .cv-button:hover {
    background-color: #14479c;
  }

  .cv-updated {
    font-size: 12.5px;
    color: #888;
  }

  /* News Section */
  .news-heading,
  .news-section {
    display: none;
  }

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
      margin: 0 0 0 24px;
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

  /* ---- Upcoming talks ---- */
  .talks-heading {
    margin: 26px 10px 0;
    font-size: 20px;
    font-weight: 700;
    color: #111;
    letter-spacing: -0.01em;
    display: flex;
    align-items: baseline;
    gap: 10px;
  }

  .talks-count {
    font-size: 11.5px;
    font-weight: 500;
    color: #999;
    letter-spacing: 0;
    font-variant-numeric: tabular-nums;
  }

  .talks-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    margin: 12px 10px 6px;
    text-align: left;
  }

  .talk-card {
    display: flex;
    align-items: stretch;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
  }

  .talk-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(30, 58, 110, 0.12);
    border-color: #c5d0e0;
  }

  .talk-date {
    flex: 0 0 62px;
    background: linear-gradient(160deg, #26467f 0%, #1e3a6e 100%);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 4px;
    line-height: 1.15;
  }

  .talk-month {
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .talk-year {
    font-size: 11px;
    font-weight: 500;
    color: #b9c6de;
    font-variant-numeric: tabular-nums;
  }

  .talk-day {
    font-size: 21px;
    font-weight: 700;
    line-height: 1.05;
    font-variant-numeric: tabular-nums;
    margin: 1px 0 0;
  }

  .talk-session {
    font-size: 12px;
    color: #1e3a6e;
    font-weight: 600;
    margin-bottom: 3px;
  }

  .talk-meta {
    font-size: 11.5px;
    color: #8a8a8a;
    font-weight: 500;
  }

  .talk-meta span + span::before {
    content: '\00b7';
    margin: 0 6px;
    color: #c8c8c8;
  }

  .talk-card.kind-invited .talk-kind {
    color: #fff;
    background: #1e3a6e;
    border-color: #1e3a6e;
  }

  .talk-body {
    flex: 1 1 auto;
    padding: 10px 14px 11px;
    min-width: 0;
  }

  .talk-venue-row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 3px;
  }

  .talk-venue {
    font-size: 14px;
    font-weight: 700;
    color: #111;
    letter-spacing: -0.01em;
  }

  .talk-venue a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid #c5d0e0;
  }

  .talk-venue a:hover { border-bottom-color: #1e3a6e; }

  .talk-kind {
    flex: 0 0 auto;
    font-size: 9.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 2px 7px;
    border-radius: 10px;
    border: 1px solid;
    white-space: nowrap;
    line-height: 1.5;
    color: #1e3a6e;
    border-color: #c5d0e0;
    background: #f0f4fb;
  }

  .talk-card.kind-workshop .talk-kind,
  .talk-card.kind-consortium .talk-kind {
    color: #2d6a3e;
    border-color: #b9d4c2;
    background: #eef6f1;
  }

  .talk-card.kind-seminar .talk-kind {
    color: #8B5C2A;
    border-color: #d8c4ae;
    background: #faf3eb;
  }

  .talk-title {
    font-size: 12.5px;
    color: #444;
    line-height: 1.45;
    margin-bottom: 4px;
  }

  .talk-place {
    font-size: 11.5px;
    color: #8a8a8a;
    font-weight: 500;
  }

  @media (max-width: 520px) {
    .talks-grid { grid-template-columns: 1fr; margin: 12px 6px 6px; }
    .talk-date  { flex-basis: 54px; }
  }

  /* 2026-11-21 (Bruce): "the homepage text are too wider". One centered column whose text
     edges line up with the 780px banner (800px less the 10px side margins of each block) */
  .article__content { max-width: 800px; margin-left: auto; margin-right: auto; }
  @media (max-width: 600px) {
    .article__content { margin-left: -10px; margin-right: -10px; }
  }
  @media screen and (min-width: 600px) {
    .profile-image { margin-right: 10px; }
  }

  /* 2026-11-21 (Bruce): "go ahead and apply Calm". Same content and order; one emphasis,
     links in regular weight, space instead of boxes. Delete this block to undo it. */
  .profile-text { text-align: left !important; }
  .profile-text p { margin-bottom: 18px; }
  .profile-text a { font-weight: 400 !important; }
  .profile-sidebar .sidebar-name, .profile-sidebar .affil-icon { display: none; }
  .profile-sidebar .affil-row { border-bottom: 0; padding: 2px 0; font-size: 13.5px; }
  .profile-sidebar .contact-email a { font-weight: 400; }
  .profile-sidebar .link-row { gap: 4px 16px; margin-top: 12px; }
  .profile-sidebar .link-row a { border: 0; padding: 0; background: none; font-size: 13.5px; font-weight: 400; }
  /* 2026-11-21 (Bruce): homepage section headings in the shared .sec style (site-pages.css): space and a hairline above */
  .article__content .talks-heading, .article__content .cv-heading { display: block; margin: 56px 10px 14px; padding: 36px 0 0 !important; border: 0 !important; border-top: 1px solid #e7e9ed !important; font-size: 20px; font-weight: 600; line-height: 1.35; letter-spacing: -0.01em; color: #1a1a1a; }
  .talks-grid { gap: 0; margin-top: 0; }
  .talk-card, .talk-card:hover { border: 0; border-radius: 0; background: none; transform: none; box-shadow: none; padding: 12px 0; }
  .talk-date { flex: 0 0 128px; padding-right: 14px !important; background: none; color: #8b919a; flex-direction: row; flex-wrap: wrap; align-items: baseline; align-content: flex-start; justify-content: flex-start; gap: 0 4px; padding: 1px 0 0; }
  .talk-month, .talk-day, .talk-year { font-size: 13.5px; font-weight: 400; color: #8b919a; text-transform: none; letter-spacing: 0; margin: 0; line-height: 1.5; }
  .talk-kind { display: none; }
  .talk-body { padding: 0 !important; }
  .talk-venue { font-size: 15.5px; font-weight: 600; }
  .talk-title { font-size: 14.5px; color: #545b66; }
  .talk-meta { font-size: 14px; font-weight: 400; color: #8b919a; margin-top: 2px; }
  .talk-meta a { color: #1e3a6e; font-weight: 400; }
  .cv-section { border-top: 0; margin-top: 0; padding-top: 0; }
  .cv-button { background: none !important; color: #1e3a6e !important; padding: 0 !important; font-weight: 500 !important; }
  @media (max-width: 520px) {
    .talk-date { flex-basis: 96px; }
    .talks-grid { margin-left: 10px; margin-right: 10px; }
  }
  /* 2026-11-23 (Bruce): sidebar is the email and three links only, so it sits right under the photo */
  .profile-sidebar .contact-email { margin-top: 0; padding-top: 0; border-top: 0; }
  /* 2026-11-23 (Bruce): on phones the photo was full width and pushed the bio below the first screen.
     The photo shrinks to a small card beside the email and links, and the bio starts on the first screen. */
  @media (max-width: 600px) {
    .profile-image { display: flex; align-items: flex-start; gap: 16px; width: auto; max-width: none; margin: 6px 10px 22px; }
    .profile-photo-link { flex: 0 0 96px; }
    .profile-image img { max-width: 96px; }
    .profile-photo-link .photo-gallery-badge { display: none; }
    .profile-sidebar { flex: 1 1 auto; min-width: 0; margin-top: 2px; }
    .profile-sidebar .link-row { margin-top: 8px; }
  }
</style>
</head>

<div class="homepage-banner">
  <picture>
    <!-- Banner is hidden on phones: serve a 1x1 placeholder so they never download it -->
    <source media="(max-width: 600px)" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
    <img src="/assets/images/homepage-research-banner.webp" width="2172" height="543" fetchpriority="high" decoding="async" alt="HKUST Business School and Wharton research banner highlighting Information Systems, AI, Future of Work, and Blockchain" />
  </picture>
</div>

<div class="container">
  <div class="profile-image">
    <!-- Hidden entrance to the photo gallery: the camera badge appears on hover -->
    <a class="profile-photo-link" href="/gallery.html" title="More photos" aria-label="View photo gallery">
      <img src="./images/profile3.png" alt="Profile Image" loading="lazy" />
      <span class="photo-gallery-badge" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg></span>
    </a>
    <div class="profile-sidebar">
      <div class="sidebar-name">Bruce (Siyuan) Jin <span class="chinese-name">(金思远)</span></div>
      <!-- 2026-11-23 (Bruce): sidebar trimmed to email and outside profiles. The HKUST and Wharton rows repeated the bio,
           and CV, Research, Awards and Service repeated the top bar. -->
      <div class="contact-email">
        <span class="label">Email</span>
        <a href="mailto:siyuan.jin@connect.ust.hk">siyuan.jin@connect.ust.hk</a>
      </div>
      <div class="link-row">
        <a href="https://scholar.google.com/citations?user=uki4jU4AAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar</a>
        <a href="https://www.linkedin.com/in/si-yuan-bruce-jin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/siyuan-bruce" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  </div>
  <div class="profile-text">
    <!-- 2026-11-15 (Bruce): "make this part more concise". -->
    <p>
      <strong>Bruce (Siyuan) Jin (金思远)</strong> is a PhD candidate in Information Systems at HKUST Business School, advised by <a href="https://isom.hkust.edu.hk/faculty-and-staff/directory/kytam">Kar Yan Tam</a>, and a visiting scholar at the Wharton School with <a href="https://oid.wharton.upenn.edu/profile/wulynn/">Lynn Wu</a> through December 2026. <strong>He is on the 2026&ndash;2027 job market.</strong>
    </p>
    <p>
      His research asks how blockchain creates value in digital markets and how generative AI reshapes the organization of expertise inside firms. His work appears in the <em>Journal of Management Information Systems</em> (JMIS, FT50), and two papers are in revision at <em>Information Systems Research</em>.
    </p>
    <p>
      He has contributed to HKMA white papers on central bank digital currencies and quantum computing, and his <a href="/policy.html">policy work</a> has been covered by more than 70 news outlets. Before HKUST, he spent two years as a blockchain engineer at the <a href="https://www.ventures.hsbc.com/en/about-us">HSBC Laboratory</a>.
    </p>
    <!-- 2026-11-21 (Bruce): reviewing and the IS Reading Group left the bio (Service page; Best Reviewer Award under Research > Awards). The policy paragraph is two sentences; outlet names and the 2021 Global CBDC Challenge finals sit on the Policy page. -->
  </div>
</div>

<!-- 2026-11-21 (Bruce): "no need to show research streams we already introduced in the text". The streams live on the Research page. -->

{% if site.data.talks and site.data.talks.size > 0 %}
<h2 class="talks-heading">Upcoming Talks</h2>
<div class="talks-grid">
  {% for talk in site.data.talks %}
  <div class="talk-card kind-{{ talk.kind | default: 'conference' }}">
    <div class="talk-date">
      <span class="talk-month">{{ talk.month }}</span>
      {% if talk.day %}<span class="talk-day">{{ talk.day }}</span>{% endif %}
      <span class="talk-year">{{ talk.year }}</span>
    </div>
    <div class="talk-body">
      <div class="talk-venue-row">
        <span class="talk-venue">{% if talk.url %}<a href="{{ talk.url }}" target="_blank" rel="noopener noreferrer">{{ talk.venue }}</a>{% else %}{{ talk.venue }}{% endif %}</span>
      </div>
      {% if talk.session %}<div class="talk-session">{{ talk.session }}</div>{% endif %}
      <div class="talk-meta">
        {% if talk.paper %}<span><a href="/research.html#{{ talk.paper }}" title="{{ talk.title }}">{{ talk.short | default: talk.title }}</a></span>{% elsif talk.title %}<span>{{ talk.title }}</span>{% endif %}
        {% if talk.place %}<span>{{ talk.place }}</span>{% endif %}
        {% if talk.speaker %}<span>Presented by {{ talk.speaker }}</span>{% endif %}
        {% if talk.time %}<span>{{ talk.time }}</span>{% endif %}
        {% if talk.room %}<span>{{ talk.room }}</span>{% endif %}
      </div>
    </div>
  </div>
  {% endfor %}
</div>
{% endif %}

<!-- 2026-11-24 (Bruce): Curriculum Vitae section dropped; it duplicated the CV link in the top bar. -->

<h2 class="news-heading">News</h2>
<div class="news-section">
  <div class="news-year">
    <span class="news-year-label">2026</span>
    <span class="news-year-count">9 highlights</span>
  </div>

  <!-- 2026-11-25 (Bruce): JMIS paper published; link the AI-made video -->
  <div class="news-item cat-paper">
    <div class="news-date">Nov 2026</div>
    <span class="news-cat">Paper</span>
    <div class="news-content">
      My MPhil thesis paper, <a href="/research.html#mining-to-meaning">From Mining to Meaning</a>, is published in <strong><em>Journal of Management Information Systems</em></strong> 43(4). Watch the <a href="/paper/From_Mining_to_Meaning_video.mp4">short video</a> I made with AI.
    </div>
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

<!-- 2026-11-21 (Bruce): "drop the visitor count". -->


<meta name="viewport" content="width=device-width, initial-scale=1">
