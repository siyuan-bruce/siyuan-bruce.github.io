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

<style>
  body { background-color: #f8f8f8; }

  .gallery-page { margin-top: 10px; }

  /* Scoped so it does not change the site page title (Gallery) */
  .gallery-page > h1 {
    font-size: 26px;
    font-weight: 700;
    color: #333;
    text-align: center;
    margin: 0 0 8px;
  }

  .g-year { margin-top: 34px; }

  .g-year > h3 {
    font-size: 22px;
    font-weight: 700;
    color: #1e3a6e;
    border-bottom: 2px solid #1e3a6e;
    padding-bottom: 6px;
    margin: 0 0 16px;
  }

  .g-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 16px;
    align-items: start;
  }

  .g-card {
    background: #fff;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.05);
  }

  .g-card.g-wide { grid-column: span 2; }

  .g-media {
    display: grid;
    gap: 2px;
    aspect-ratio: 4 / 3;
    background: #e9e9e9;
  }

  .g-wide .g-media { aspect-ratio: 12 / 5; }

  .g-v2 { grid-template-columns: 1fr 1fr; }
  .g-v3 { grid-template-columns: 2fr 1fr; grid-template-rows: 1fr 1fr; }
  .g-v3 .g-photo:first-child { grid-row: span 2; }
  .g-v4 { grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; }
  .g-v5 { grid-template-columns: 2fr 1fr 1fr; grid-template-rows: 1fr 1fr; }
  .g-v5 .g-photo:first-child { grid-row: span 2; }

  .g-photo {
    position: relative;
    display: block;
    overflow: hidden;
    min-height: 0;
    cursor: zoom-in;
  }

  .g-photo.g-hidden { display: none; }

  .g-photo img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.25s ease;
  }

  .g-photo:hover img,
  .g-photo:focus-visible img { transform: scale(1.04); }

  .g-photo:focus-visible { outline: 3px solid #1e3a6e; outline-offset: -3px; }

  .g-more {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.45);
    color: #fff;
    font-size: 20px;
    font-weight: 700;
  }

  .g-body { padding: 10px 13px 13px; }

  .g-date {
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: 0.06em;
    color: #888;
  }

  .g-body h4 {
    font-size: 15px;
    font-weight: 700;
    color: #222;
    line-height: 1.35;
    margin: 3px 0 5px;
  }

  .g-body p {
    font-size: 13.5px;
    line-height: 1.5;
    color: #555;
    margin: 0;
  }

  @media (max-width: 560px) {
    .g-card.g-wide { grid-column: auto; }
    .g-wide .g-media { aspect-ratio: 4 / 3; }
  }

  /* Lightbox */
  .g-lightbox {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(12, 14, 18, 0.92);
  }

  .g-lightbox[hidden] { display: none; }

  .g-lightbox figure {
    margin: 0;
    max-width: min(92vw, 1400px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .g-lightbox img {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
    border-radius: 4px;
    background: #222;
  }

  .g-lightbox figcaption {
    margin-top: 10px;
    max-width: 760px;
    color: #ddd;
    font-size: 14px;
    line-height: 1.5;
    text-align: center;
  }

  .g-lb-title { display: block; color: #fff; font-weight: 700; }
  .g-lb-count { display: block; margin-top: 2px; color: #999; font-size: 12px; }

  .g-lightbox button {
    position: absolute;
    border: 0;
    background: rgba(255, 255, 255, 0.12);
    color: #fff;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    font-size: 26px;
    line-height: 44px;
    text-align: center;
    cursor: pointer;
  }

  .g-lightbox button:hover,
  .g-lightbox button:focus-visible { background: rgba(255, 255, 255, 0.28); }

  .g-lb-close { top: 16px; right: 16px; }
  .g-lb-prev { left: 16px; top: 50%; transform: translateY(-50%); }
  .g-lb-next { right: 16px; top: 50%; transform: translateY(-50%); }
  .g-lightbox button[hidden] { display: none; }
</style>

<div class="gallery-page">
<h1>The story continues to unfold with each new adventure...</h1>
{% for sec in site.data.gallery %}
<section class="g-year">
<h3>{{ sec.heading }}</h3>
<div class="g-grid">
{% for ev in sec.events %}
{% assign n = ev.photos | size %}
{% if ev.wide %}{% assign maxshow = 5 %}{% else %}{% assign maxshow = 4 %}{% endif %}
{% if n > maxshow %}{% assign v = maxshow %}{% else %}{% assign v = n %}{% endif %}
<article class="g-card{% if ev.wide %} g-wide{% endif %}">
<div class="g-media g-v{{ v }}">
{% for p in ev.photos %}
{% assign cap = p.caption | default: ev.text %}
<a class="g-photo{% if forloop.index > maxshow %} g-hidden{% endif %}" href="/assets/images/gallery/large/{{ p.id }}.webp" data-title="{{ ev.title | escape }}" data-caption="{{ cap | escape }}"><img src="/assets/images/gallery/thumbs/{{ p.id }}.webp" alt="{{ cap | escape }}" loading="lazy" decoding="async"{% if p.pos %} style="object-position: {{ p.pos }}"{% endif %}>{% if forloop.index == maxshow and n > maxshow %}<span class="g-more">+{{ n | minus: maxshow }}</span>{% endif %}</a>
{% endfor %}
</div>
<div class="g-body">
<div class="g-date">{{ ev.date }}</div>
<h4>{{ ev.title }}</h4>
<p>{{ ev.text }}</p>
</div>
</article>
{% endfor %}
</div>
</section>
{% endfor %}
</div>

<div class="g-lightbox" hidden role="dialog" aria-modal="true" aria-label="Photo viewer">
  <button type="button" class="g-lb-close" aria-label="Close">&times;</button>
  <button type="button" class="g-lb-prev" aria-label="Previous photo">&#8249;</button>
  <figure>
    <img alt="">
    <figcaption><span class="g-lb-title"></span><span class="g-lb-cap"></span><span class="g-lb-count"></span></figcaption>
  </figure>
  <button type="button" class="g-lb-next" aria-label="Next photo">&#8250;</button>
</div>

<script>
(function () {
  var box = document.querySelector('.g-lightbox');
  if (!box) return;
  var img = box.querySelector('img');
  var title = box.querySelector('.g-lb-title');
  var cap = box.querySelector('.g-lb-cap');
  var count = box.querySelector('.g-lb-count');
  var prev = box.querySelector('.g-lb-prev');
  var next = box.querySelector('.g-lb-next');
  var closeBtn = box.querySelector('.g-lb-close');
  var list = [], idx = 0, opener = null;

  function show(i) {
    idx = (i + list.length) % list.length;
    var a = list[idx];
    img.src = a.getAttribute('href');
    img.alt = a.getAttribute('data-caption') || '';
    title.textContent = a.getAttribute('data-title') || '';
    var c = a.getAttribute('data-caption') || '';
    cap.textContent = c === (a.closest('.g-card').querySelector('.g-body p') || {}).textContent ? '' : c;
    count.textContent = list.length > 1 ? (idx + 1) + ' / ' + list.length : '';
    prev.hidden = next.hidden = list.length < 2;
  }

  function open(links, i, from) {
    list = links; opener = from;
    show(i);
    box.hidden = false;
    document.documentElement.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function close() {
    box.hidden = true;
    img.removeAttribute('src');
    document.documentElement.style.overflow = '';
    if (opener) opener.focus();
  }

  document.querySelectorAll('.g-card').forEach(function (card) {
    var links = Array.prototype.slice.call(card.querySelectorAll('.g-photo'));
    links.forEach(function (a, i) {
      a.addEventListener('click', function (e) { e.preventDefault(); open(links, i, a); });
    });
  });

  prev.addEventListener('click', function () { show(idx - 1); });
  next.addEventListener('click', function () { show(idx + 1); });
  closeBtn.addEventListener('click', close);
  box.addEventListener('click', function (e) { if (e.target === box) close(); });
  document.addEventListener('keydown', function (e) {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft' && list.length > 1) show(idx - 1);
    else if (e.key === 'ArrowRight' && list.length > 1) show(idx + 1);
  });
})();
</script>
