---
layout: article
titles:
  # @start locale config
  en      : &EN       Gallery
  en-GB   : *EN
  en-US   : *EN
  en-CA   : *EN
  en-AU   : *EN
  fr      : &FR       Galerie
  fr-BE   : *FR
  fr-CA   : *FR
  fr-CH   : *FR
  fr-FR   : *FR
  fr-LU   : *FR
  # @end locale config
key: page-gallery
permalink: /gallery.html
---

<head>
  <link rel="stylesheet" href="/assets/css/site-pages.css">
</head>

<style>
  /* 2026-11-21 (Bruce): "please improve the design of the page"; "donot allow people to click
     pictures for a larger view". The page joins the shared system: the 780px column, year
     headings like the other pages' sections, photos without boxes or shadows, no lightbox.
     Events with one photo sit two to a row; events with two to five photos span the column. */
  .g-lead { margin-bottom: 4px; }
  .g-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); grid-auto-flow: row dense; gap: 40px 28px; align-items: start; }
  .g-event.g-span { grid-column: 1 / -1; }
  .g-media { display: grid; gap: 4px; aspect-ratio: 3 / 2; border-radius: 3px; overflow: hidden; background: #f2f3f5; }
  .g-span .g-media { aspect-ratio: 12 / 5; }
  .g-v2 { grid-template-columns: 1fr 1fr; }
  .g-v3 { grid-template-columns: 2fr 1fr; grid-template-rows: 1fr 1fr; }
  .g-v3 .g-photo:first-child { grid-row: span 2; }
  .g-v4 { grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; }
  .g-v5 { grid-template-columns: 2fr 1fr 1fr; grid-template-rows: 1fr 1fr; }
  .g-v5 .g-photo:first-child { grid-row: span 2; }
  .g-photo { min-height: 0; overflow: hidden; }
  .g-photo img { display: block; width: 100%; height: 100%; object-fit: cover; }
  .g-date { margin-top: 14px; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink3); }
  .g-title { margin-top: 12px; font-size: 16px; font-weight: 600; line-height: 1.45; color: var(--ink); }
  .g-date + .g-title { margin-top: 2px; }
  .g-text { margin: 4px 0 0; font-size: 14px; line-height: 1.6; color: var(--ink2); }
  @media (max-width: 600px) {
    .g-grid { grid-template-columns: minmax(0, 1fr); gap: 32px; }
    .g-span .g-media, .g-media { aspect-ratio: auto; grid-template-rows: none; }
    .g-v3, .g-v4, .g-v5 { grid-template-columns: 1fr 1fr; }
    .g-media .g-photo { aspect-ratio: 3 / 2; }
    .g-v1 .g-photo, .g-v3 .g-photo:first-child, .g-v5 .g-photo:first-child { grid-column: 1 / -1; grid-row: auto; }
  }
</style>

<div class="sp">

<p class="lead g-lead">Conferences, workshops and time with colleagues since 2018.</p>
{% for sec in site.data.gallery %}
<h3 class="sec{% if forloop.first %} first{% endif %}">{{ sec.heading }}</h3>
<div class="g-grid">
{% for ev in sec.events %}
{% assign shown = ev.photos | slice: 0, 5 %}
{% assign v = shown | size %}
<article class="g-event{% if v > 1 %} g-span{% endif %}">
<div class="g-media g-v{{ v }}">
{% for p in shown %}
{% assign cap = p.caption | default: ev.text %}
<div class="g-photo"><img src="/assets/images/gallery/thumbs/{{ p.id }}.webp" alt="{{ cap | escape }}" loading="lazy" decoding="async"{% if p.pos %} style="object-position: {{ p.pos }}"{% endif %}></div>
{% endfor %}
</div>
{% if ev.date != sec.heading %}<div class="g-date">{{ ev.date }}</div>{% endif %}
<div class="g-title">{{ ev.title }}</div>
<p class="g-text">{{ ev.text }}</p>
</article>
{% endfor %}
</div>
{% endfor %}

</div>
