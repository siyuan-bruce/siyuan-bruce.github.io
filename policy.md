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

  .media-logos {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px 16px;
    margin: 10px 0 2px;
  }

  .media-logos .media-label,
  .media-head {
    font-size: 13.5px;
    color: #555;
  }

  .media-block {
    margin: 10px 0 2px;
  }

  .media-row {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-top: 8px;
  }

  .media-row > .media-label {
    flex: 0 0 52px;
    padding-top: 3px;
    font-size: 12.5px;
    color: #888;
  }

  .media-row .media-logos {
    flex: 1;
    margin: 0;
  }

  .media-logos a.media-text {
    height: 22px;
    align-items: center;
    padding: 0 6px;
    border: 1px solid #c9d3e3;
    border-radius: 3px;
    font-size: 12px;
    font-weight: 600;
  }

  @media (max-width: 520px) {
    .media-row {
      flex-direction: column;
      gap: 4px;
    }

    .media-row > .media-label {
      flex: none;
      padding-top: 0;
    }
  }

  .media-logos a {
    display: inline-flex;
  }

  .media-logos img {
    display: block;
    height: 22px;
    width: auto;
    max-width: 150px;
    object-fit: contain;
    border-radius: 3px;
    transition: opacity 0.15s;
  }

  .media-logos img.logo-wide {
    max-width: 180px;
  }

  .media-logos img.logo-sm {
    height: 17px;
  }

  .media-logos img.logo-lg {
    height: 30px;
    max-width: 200px;
  }

  .media-logos a:hover img {
    opacity: 0.75;
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
  <div class="media-block"><span class="media-head">Media coverage</span>
    <div class="media-row"><span class="media-label">English</span><div class="media-logos">
      <a href="https://bm.hkust.edu.hk/press-releases/2023/09/hkust-and-hsbc-conduct-one-week-hypothetical-e-hkd-pilot" title="HKUST Business School press release"><img src="/assets/images/media/hkustbm.webp" alt="HKUST Business School press release" width="94" height="48" loading="lazy"></a>
      <a href="https://www.scmp.com/business/banking-finance/article/3221011/hong-kong-launches-e-hkd-pilot-programme-16-companies-test-digital-currency-public-use-shops" title="South China Morning Post"><img class="logo-wide" src="/assets/images/media/scmp.webp" alt="South China Morning Post" width="602" height="48" loading="lazy"></a>
      <a href="https://www.chinadailyhk.com/article/343048" title="China Daily"><img src="/assets/images/media/chinadaily.webp" alt="China Daily" width="310" height="48" loading="lazy"></a>
      <a href="https://www.thestandard.com.hk/section-news/section/2/256143/Students,-teachers-test-digital-dollar" title="The Standard"><img src="/assets/images/media/thestandard.webp" alt="The Standard" width="116" height="48" loading="lazy"></a>
      <a href="https://www.ledgerinsights.com/hsbc-ehkd-retail-cbdc-payments-trial/" title="Ledger Insights"><img src="/assets/images/media/ledgerinsights.webp" alt="Ledger Insights" width="92" height="48" loading="lazy"></a>
      <a href="https://coingeek.com/hsbc-hkust-partner-on-e-hkd-cbdc-pilot-to-complement-banking-regulator-efforts/" title="CoinGeek"><img class="logo-sm" src="/assets/images/media/coingeek.webp" alt="CoinGeek" width="325" height="48" loading="lazy"></a>
      <a href="https://www.miragenews.com/hkust-hsbc-launch-week-long-e-hkd-pilot-test-1084440/" title="Mirage News"><img src="/assets/images/media/miragenews.webp" alt="Mirage News" width="164" height="48" loading="lazy"></a>
      <a href="https://www.nationaltribune.com.au/hkust-and-hsbc-to-conduct-one-week-hypothetical-e-hkd-pilot/" title="National Tribune"><img src="/assets/images/media/nationaltribune.webp" alt="National Tribune" width="147" height="48" loading="lazy"></a>
      <a href="http://www.aastocks.com/en/stocks/news/aafn-con/NOW.1294004/latest-news/AAFN" title="AASTOCKS"><img src="/assets/images/media/aastocks.webp" alt="AASTOCKS" width="201" height="48" loading="lazy"></a>
    </div></div>
    <div class="media-row"><span class="media-label">Chinese</span><div class="media-logos">
      <a href="https://www.881903.com/news2/finance/2502260" title="Commercial Radio 881903"><img src="/assets/images/media/cr881903.webp" alt="Commercial Radio 881903" width="228" height="48" loading="lazy"></a>
      <a href="http://www.metroradio.com.hk/news/default.aspx?NewsId=20230914165021" title="Metro Broadcast"><img src="/assets/images/media/metroradio.webp" alt="Metro Broadcast" width="221" height="48" loading="lazy"></a>
      <a href="https://finance.now.com/news/post.php?id=820055" title="Now News"><img src="/assets/images/media/nownews.webp" alt="Now News" width="142" height="48" loading="lazy"></a>
      <a href="https://www.i-cable.com/%E8%B2%A1%E7%B6%93%E8%B3%87%E8%A8%8A/131891/" title="i-CABLE News"><img src="/assets/images/media/icable.webp" alt="i-CABLE News" width="73" height="48" loading="lazy"></a>
      <a href="https://www2.hkej.com/instantnews/hongkong/article/3563685/" title="Hong Kong Economic Journal"><img src="/assets/images/media/hkej.webp" alt="Hong Kong Economic Journal" width="106" height="48" loading="lazy"></a>
      <a href="https://inews.hket.com/article/3613147/%E3%80%90%E6%95%B8%E7%A2%BC%E6%B8%AF%E5%85%83%E3%80%91%E6%BB%99%E8%B1%90%E5%92%8C%E7%A7%91%E5%A4%A7%E5%95%86%E5%AD%B8%E9%99%A2%E5%B1%95%E9%96%8B%E5%81%87%E8%A8%AD%E6%80%A7%E6%95%B8%E7%A2%BC%E6%B8%AF%E5%85%83%E6%B8%AC%E8%A9%A6" title="Hong Kong Economic Times"><img src="/assets/images/media/hket.webp" alt="Hong Kong Economic Times" width="142" height="48" loading="lazy"></a>
      <a href="https://finance.mingpao.com/fin/instantf/20230914/1694685872544/%E5%8C%AF%E8%B1%90%E4%BC%99%E7%A7%91%E5%A4%A7%E5%95%86%E5%AD%B8%E9%99%A2%E6%8E%A8%E5%81%87%E8%A8%AD%E6%80%A7%E6%95%B8%E7%A2%BC%E6%B8%AF%E5%85%83%E6%B8%AC%E8%A9%A6-%E7%82%BA%E6%9C%9F%E4%B8%80%E5%91%A8" title="Ming Pao"><img src="/assets/images/media/mingpao.webp" alt="Ming Pao" width="80" height="48" loading="lazy"></a>
      <a href="https://www.stheadline.com/blockchain/3273029/" title="Sing Tao Daily"><img src="/assets/images/media/singtao.webp" alt="Sing Tao Daily" width="140" height="48" loading="lazy"></a>
      <a href="https://hk.on.cc/hk/bkn/cnt/finance/20230914/bkn-20230914174529913-0914_00842_001.html" title="on.cc"><img src="/assets/images/media/oncc.webp" alt="on.cc" width="36" height="48" loading="lazy"></a>
      <a href="https://www.wenweipo.com/a/202309/15/AP65036752e4b0fdf8289ec86c.html" title="Wen Wei Po"><img src="/assets/images/media/wenweipo.webp" alt="Wen Wei Po" width="152" height="48" loading="lazy"></a>
      <a href="https://www.hkcd.com.hk/hkcdweb/content/2023/09/14/content_8600225.html" title="Hong Kong Commercial Daily"><img src="/assets/images/media/hkcd.webp" alt="Hong Kong Commercial Daily" width="170" height="48" loading="lazy"></a>
      <a href="https://www.hk01.com/%E8%B2%A1%E7%B6%93%E5%BF%AB%E8%A8%8A/941154/" title="HK01"><img src="/assets/images/media/hk01.webp" alt="HK01" width="90" height="48" loading="lazy"></a>
      <a href="https://www.am730.com.hk/%E8%B2%A1%E7%B6%93/%E6%BB%99%E8%B1%90%E5%A4%A5%E7%A7%91%E5%A4%A7%E5%B1%95%E9%96%8B%E4%B8%80%E9%80%B1%E6%95%B8%E7%A2%BC%E6%B8%AF%E5%85%83%E8%A9%A6%E9%A9%97-%E5%8F%AF%E6%96%BC%E6%A0%A1%E5%85%A75%E5%AE%B6%E5%95%86%E6%88%B6%E6%B6%88%E8%B2%BB/399918" title="am730"><img src="/assets/images/media/am730.webp" alt="am730" width="130" height="48" loading="lazy"></a>
      <a href="https://www.bastillepost.com/hongkong/article/12836294" title="Bastille Post"><img class="logo-sm" src="/assets/images/media/bastillepost.webp" alt="Bastille Post" width="300" height="48" loading="lazy"></a>
      <a href="https://www.etnet.com.hk/www/tc/news/categorized_news_detail.php?newsid=ETN330914537" title="etnet"><img src="/assets/images/media/etnet.webp" alt="etnet" width="157" height="48" loading="lazy"></a>
      <a href="https://www.edigest.hk/%E6%8A%95%E8%B3%87/%E5%8D%B3%E6%99%82%E6%96%B0%E8%81%9E-%E7%B6%93%E4%B8%80%E9%80%9F%E9%81%9E-aplt-132-1182283/" title="Economic Digest"><img src="/assets/images/media/edigest.webp" alt="Economic Digest" width="56" height="48" loading="lazy"></a>
      <a href="https://www.quamnet.com/post/fpFtkkmDv_c67dUTBg3zN" title="Quamnet"><img src="/assets/images/media/quamnet.webp" alt="Quamnet" width="204" height="48" loading="lazy"></a>
      <a href="https://hk.news.yahoo.com/%E6%BB%99%E8%B1%90%E8%88%87%E7%A7%91%E5%A4%A7%E5%B1%95%E9%96%8B%E7%82%BA%E6%9C%9F1%E5%91%A8%E5%81%87%E8%A8%AD%E6%80%A7%E6%95%B8%E7%A2%BC%E6%B8%AF%E5%85%83%E6%B8%AC%E8%A9%A6-101723662.html" title="Yahoo News Hong Kong"><img src="/assets/images/media/yahoo.webp" alt="Yahoo News Hong Kong" width="173" height="48" loading="lazy"></a>
      <a href="https://portal.sina.com.hk/news-hongkong/news-realtime/rthk/2023/09/14/522208/" title="Sina"><img src="/assets/images/media/sina.webp" alt="Sina" width="172" height="48" loading="lazy"></a>
      <a href="https://news.cnyes.com/news/id/5324740" title="Anue (cnyes)"><img src="/assets/images/media/cnyes.webp" alt="Anue (cnyes)" width="116" height="48" loading="lazy"></a>
      <a href="http://caifuhao.eastmoney.com/news/20230518201821167392400" title="Eastmoney"><img src="/assets/images/media/eastmoney.webp" alt="Eastmoney" width="199" height="48" loading="lazy"></a>
    </div></div>
  </div>
</div>

<div class="policy-entry">
  <span class="policy-venue">IEEE Access · 2022</span>
  <div class="p-title">CEV Framework: A CBDC Evaluation and Verification Framework for Consensus Algorithms and Operating Architectures</div>
  <div class="p-meta"><strong>Siyuan Jin</strong>, Yong Xia.</div>
  <p class="p-links"><strong>MAS Global CBDC Challenge Finalist</strong> (top 5% of 300+ submissions from 50+ countries) · <a href="https://www.mas.gov.sg/news/media-releases/2021/mas-announces-15-finalists-for-the-global-cbdc-challenge">MAS announcement</a> · <a href="https://ieeexplore.ieee.org/document/9795279">Paper</a></p>
  <div class="media-block"><span class="media-head">Media coverage</span>
    <div class="media-row"><div class="media-logos">
      <a href="https://www.mas.gov.sg/news/media-releases/2021/mas-announces-15-finalists-for-the-global-cbdc-challenge" title="Monetary Authority of Singapore"><img class="logo-lg" src="/assets/images/media/mas.webp" alt="Monetary Authority of Singapore" width="138" height="48" loading="lazy"></a>
      <a href="https://cointelegraph.com/news/singapore-central-bank-shortlists-15-companies-to-develop-retail-cbdc" title="Cointelegraph"><img src="/assets/images/media/cointelegraph.webp" alt="Cointelegraph" width="163" height="48" loading="lazy"></a>
      <a href="https://coingeek.com/singapore-shortlists-15-companies-to-help-build-retail-cbdc/" title="CoinGeek"><img class="logo-sm" src="/assets/images/media/coingeek.webp" alt="CoinGeek" width="325" height="48" loading="lazy"></a>
      <a href="https://fintechnews.sg/54885/singapore-fintech-festival-2021/meet-the-15-finalists-for-mas-global-cbdc-challenge/" title="Fintech News Singapore"><img src="/assets/images/media/fintechsg.webp" alt="Fintech News Singapore" width="131" height="48" loading="lazy"></a>
      <a href="https://forkast.news/headlines/singapore-central-bank-finalists-global-cbdc-challenge/" title="Forkast"><img src="/assets/images/media/forkast.webp" alt="Forkast" width="197" height="48" loading="lazy"></a>
      <a href="https://fintech.global/2021/08/31/mas-lists-the-15-finalists-for-its-central-bank-digital-currency-solution-challenge-fintech/" title="FinTech Global"><img src="/assets/images/media/fintechglobal.webp" alt="FinTech Global" width="127" height="48" loading="lazy"></a>
      <a href="https://www.crowdfundinsider.com/2021/08/179732-monetary-authority-of-singapore-chooses-15-finalists-for-global-cbdc-challenge/" title="Crowdfund Insider"><img src="/assets/images/media/crowdfundinsider.webp" alt="Crowdfund Insider" width="201" height="48" loading="lazy"></a>
      <a href="https://beincrypto.com/singapore-ponders-cbdc-release-with-shortlist-of-companies/" title="BeInCrypto"><img class="logo-sm" src="/assets/images/media/beincrypto.webp" alt="BeInCrypto" width="323" height="48" loading="lazy"></a>
      <a href="https://articles.marketsmedia.com/singapore-names-15-finalists-for-cbdc-challenge" title="Markets Media"><img class="logo-sm" src="/assets/images/media/marketsmedia.webp" alt="Markets Media" width="350" height="48" loading="lazy"></a>
      <a href="https://ctmfile.com/story/industry-roundup-13-september" title="CTMfile"><img src="/assets/images/media/ctmfile.webp" alt="CTMfile" width="147" height="48" loading="lazy"></a>
      <a href="https://coinjournal.net/news/citibank-and-anz-among-finalists-for-singapores-cbdc-challenge" title="CoinJournal"><img src="/assets/images/media/coinjournal.webp" alt="CoinJournal" width="271" height="48" loading="lazy"></a>
      <a href="https://forklog.com/en/?p=48540" title="ForkLog"><img src="/assets/images/media/forklog.webp" alt="ForkLog" width="176" height="48" loading="lazy"></a>
      <a href="https://bitcoinke.io/2021/09/the-global-cbdc-challenge-finalists-revealed/" title="BitKE"><img src="/assets/images/media/bitcoinke.webp" alt="BitKE" width="64" height="48" loading="lazy"></a>
      <a href="https://nocash.ro/monetary-authority-of-singapore-announces-15-finalists-for-the-global-cbdc-challenge-over-300-submissions-from-50-countries-received" title="Nocash"><img class="logo-sm" src="/assets/images/media/nocash.webp" alt="Nocash" width="252" height="48" loading="lazy"></a>
    </div></div>
  </div>
</div>

## Privacy & Post-Quantum Security

<div class="policy-entry">
  <span class="policy-venue">HKUST &amp; HKMA · 2026</span>
  <div class="p-title">PACT: PQC Accountability and Controlled Transition</div>
  <div class="p-meta"><a href="https://www.allenhuang.org/">Allen H. Huang</a>, Terrance Fung, <strong>Siyuan Jin</strong>, Dimitrios Papadopoulos.</div>
  <p class="p-desc">A reference manual published with the HKMA setting out a post-quantum cryptography transition framework for the banking industry, covering how banks inventory cryptographic assets, sequence migration to quantum-resistant standards, and hold that transition accountable.</p>
  <p class="p-links"><a href="https://bm.hkust.edu.hk/sites/default/files/html/159b11b4df3bd404a3e510d473d71ce2/PQC%20Accountability%20and%20Controlled%20Transition%20/files/assets/common/downloads/PACT_PQC%20Accountability%20and%20Controlled%20Transition.pdf">Report</a></p>
  <div class="media-block"><span class="media-head">Media coverage</span>
    <div class="media-row"><span class="media-label">English</span><div class="media-logos">
      <a href="https://www.scmp.com/opinion/comment/article/3362338/hong-kong-banks-can-no-longer-ignore-quantum-threat" title="South China Morning Post"><img class="logo-wide" src="/assets/images/media/scmp.webp" alt="South China Morning Post" width="602" height="48" loading="lazy"></a>
      <a href="https://www.chinadailyhk.com/hk/article/642123" title="China Daily"><img src="/assets/images/media/chinadaily.webp" alt="China Daily" width="310" height="48" loading="lazy"></a>
      <a href="https://thequantuminsider.com/2026/11/02/hkust-hkma-launch-pqc-toolkit-banks/" title="The Quantum Insider"><img src="/assets/images/media/quantuminsider.webp" alt="The Quantum Insider" width="169" height="48" loading="lazy"></a>
      <a href="https://www.hpcwire.com/off-the-wire/hkma-and-hkust-launch-pqc-toolkit-to-support-banks-quantum-preparedness/" title="HPCwire"><img src="/assets/images/media/hpcwire.webp" alt="HPCwire" width="206" height="48" loading="lazy"></a>
      <a href="https://quantumzeitgeist.com/quantum-threats-hkust-hong-kong-banks/" title="Quantum Zeitgeist"><img src="/assets/images/media/quantumzeitgeist.webp" alt="Quantum Zeitgeist" width="163" height="48" loading="lazy"></a>
      <a href="https://www.miragenews.com/hkust-hkma-launch-quantum-readiness-toolkit-for-1770485/" title="Mirage News"><img src="/assets/images/media/miragenews.webp" alt="Mirage News" width="164" height="48" loading="lazy"></a>
      <a href="https://blockchain.news/news/hkma-hkust-launch-pqc-toolkit-bank-quantum-preparedness" title="Blockchain.News"><img src="/assets/images/media/blockchainnews.webp" alt="Blockchain.News" width="200" height="48" loading="lazy"></a>
      <a href="https://crypto.news/hong-kong-24-7-tokenized-settlement-stablecoin-trials/" title="crypto.news"><img src="/assets/images/media/cryptonews.webp" alt="crypto.news" width="48" height="48" loading="lazy"></a>
      <a href="https://blockonomi.com/hong-kong-banks-scored-just-2-3-out-of-10-on-quantum-readiness-here-is-the-plan-to-fix-it/" title="Blockonomi"><img class="logo-sm" src="/assets/images/media/blockonomi.webp" alt="Blockonomi" width="305" height="48" loading="lazy"></a>
      <a href="https://thecurrencyanalytics.com/finance/hkma-hkust-post-quantum-cryptography-toolkit-307603" title="The Currency Analytics"><img src="/assets/images/media/currencyanalytics.webp" alt="The Currency Analytics" width="135" height="48" loading="lazy"></a>
      <a href="https://www.cryptonewsz.com/hong-kong-fintech-week-hkma-initiatives/" title="CryptoNewsZ"><img src="/assets/images/media/cryptonewsz.webp" alt="CryptoNewsZ" width="227" height="48" loading="lazy"></a>
      <a href="https://parameter.io/hkma-launches-quantum-safe-toolkit-after-banking-sector-scores-2-3-10-on-preparedness/" title="Parameter"><img src="/assets/images/media/parameter.webp" alt="Parameter" width="188" height="48" loading="lazy"></a>
      <a href="https://regreportingdesk.com/hkma-pqc-toolkit-quantum-preparedness-banks/" title="RegReportingDesk"><img src="/assets/images/media/regreporting.webp" alt="RegReportingDesk" width="245" height="48" loading="lazy"></a>
      <a href="https://www.thestandard.com.hk/finance/article/347250/HKMA-HKUST-launches-PQC-toolkit-to-help-banks-achieve-full-quantum-readiness-by-2030" title="The Standard"><img src="/assets/images/media/thestandard.webp" alt="The Standard" width="116" height="48" loading="lazy"></a>
      <a href="https://news.rthk.hk/rthk/en/component/k2/1876212-20261102.htm" title="RTHK"><img src="/assets/images/media/rthk.webp" alt="RTHK" width="67" height="48" loading="lazy"></a>
      <a href="https://www.bastillepost.com/global/article/6315797-hkma-and-hkust-launch-post-quantum-cryptography-toolkit-to-enhance-banking-sectors-cybersecurity-preparedness" title="Bastille Post"><img class="logo-sm" src="/assets/images/media/bastillepost.webp" alt="Bastille Post" width="300" height="48" loading="lazy"></a>
    </div></div>
    <div class="media-row"><span class="media-label">Chinese</span><div class="media-logos">
      <a href="https://news.tvb.com/tc/1204104-%E4%BD%99%E5%81%89%E6%96%87%E8%BD%89%E6%95%B8%E5%BF%AB%E4%BB%8A%E5%B9%B4%E5%85%A7%E6%8E%A5%E9%80%9A%E9%8A%80%E8%81%AF%E5%9C%8B%E9%9A%9B%E6%94%AF%E6%8F%B4%E5%85%A8%E7%90%83%E9%80%BE%E4%B8%80%E5%84%84%E5%80%8B%E5%95%86%E6%88%B6" title="TVB News"><img src="/assets/images/media/tvb.webp" alt="TVB News" width="257" height="48" loading="lazy"></a>
      <a href="https://finance.now.com/news/post.php?id=992140" title="Now News"><img src="/assets/images/media/nownews.webp" alt="Now News" width="142" height="48" loading="lazy"></a>
      <a href="https://www.i-cable.com/%E8%B2%A1%E7%B6%93%E8%B3%87%E8%A8%8A/518961/%E4%BD%99%E5%81%89%E6%96%87-%E4%BB%A3%E7%90%86%E5%BC%8F%E9%87%91%E8%9E%8D%E6%87%89%E7%94%A8%E6%97%A2%E8%A6%81%E5%89%B5%E6%96%B0%E4%BA%A6%E8%A6%81%E6%8A%8A%E9%97%9C" title="i-CABLE News"><img src="/assets/images/media/icable.webp" alt="i-CABLE News" width="73" height="48" loading="lazy"></a>
      <a href="https://www.881903.com/news2/finance/2657577" title="Commercial Radio 881903"><img src="/assets/images/media/cr881903.webp" alt="Commercial Radio 881903" width="228" height="48" loading="lazy"></a>
      <a href="https://www.metroradio.com.hk/news/details.aspx?CategoryName=finance&amp;NewsID=20261102113644" title="Metro Broadcast"><img src="/assets/images/media/metroradio.webp" alt="Metro Broadcast" width="221" height="48" loading="lazy"></a>
      <a href="https://www.hkej.com/instantnews/hongkong/article/4554758/" title="Hong Kong Economic Journal"><img src="/assets/images/media/hkej.webp" alt="Hong Kong Economic Journal" width="106" height="48" loading="lazy"></a>
      <a href="https://std.stheadline.com/daily-education/3632793/" title="Sing Tao Daily"><img src="/assets/images/media/singtao.webp" alt="Sing Tao Daily" width="140" height="48" loading="lazy"></a>
      <a href="https://orientaldaily.on.cc/content/%E7%94%A2%E7%B6%93/odn-20261103-1103_00202_001/%E6%B8%AF4%E6%8B%9B%E8%B0%B7%E9%87%91%E8%9E%8D%E7%A7%91%E6%8A%80%E5%AF%A6%E5%8A%9B" title="Oriental Daily News"><img src="/assets/images/media/orientaldaily.webp" alt="Oriental Daily News" width="208" height="48" loading="lazy"></a>
      <a href="https://www.wenweipo.com/a/202611/03/AP6ae8f92be4b0fa89498b9461.html" title="Wen Wei Po"><img src="/assets/images/media/wenweipo.webp" alt="Wen Wei Po" width="152" height="48" loading="lazy"></a>
      <a href="https://takungpao.com/a/202611/03/AP6ae8f0cde4b03b525f9618a0.html" title="Ta Kung Pao"><img src="/assets/images/media/takungpao.webp" alt="Ta Kung Pao" width="215" height="48" loading="lazy"></a>
      <a href="http://www.hkcd.com/hkcdweb/content/2026/11/02/content_8783080.html" title="Hong Kong Commercial Daily"><img src="/assets/images/media/hkcd.webp" alt="Hong Kong Commercial Daily" width="170" height="48" loading="lazy"></a>
      <a href="https://metrohk.com.hk/%E7%A7%91%E6%8A%80/%E9%87%91%E7%AE%A1%E5%B1%80%E8%88%87%E7%A7%91%E5%A4%A7%E6%8E%A8%E5%87%BA%E5%BE%8C%E9%87%8F%E5%AD%90%E5%AF%86%E7%A2%BC%E5%AD%B8%E5%B7%A5%E5%85%B7%E5%8C%85-c5c23e" title="Metro Daily"><img src="/assets/images/media/metrohk.webp" alt="Metro Daily" width="48" height="48" loading="lazy"></a>
      <a href="https://www.hk01.com/%E8%B2%A1%E7%B6%93%E5%BF%AB%E8%A8%8A/60406080/fintech-week-2026-%E9%87%91%E7%AE%A1%E5%B1%80-%E8%BD%89%E6%95%B8%E5%BF%AB%E5%B0%87%E6%94%AF%E6%8C%81%E9%80%BE40%E5%9C%8B%E5%AE%B6%E8%B7%A8%E5%A2%83%E9%9B%B6%E5%94%AE%E6%94%AF%E4%BB%98" title="HK01"><img src="/assets/images/media/hk01.webp" alt="HK01" width="90" height="48" loading="lazy"></a>
      <a href="https://www.etnet.com.hk/www/tc/news/categorized_news_detail.php?newsid=20261102531&amp;category=push" title="etnet"><img src="/assets/images/media/etnet.webp" alt="etnet" width="157" height="48" loading="lazy"></a>
      <a href="https://www.aastocks.com/tc/stocks/news/infocast-news/IC5024754/1" title="AASTOCKS"><img src="/assets/images/media/aastocks.webp" alt="AASTOCKS" width="201" height="48" loading="lazy"></a>
      <a href="https://hk.finance.yahoo.com/news/%E4%BD%99%E5%81%89%E6%96%87-%E9%87%91%E7%AE%A1%E5%B1%80%E5%B0%87%E6%93%B4%E5%A4%A7%E5%A4%96%E5%8C%AF%E5%9F%BA%E9%87%91%E7%A5%A8%E6%93%9A%E6%AC%A1%E7%B4%9A%E5%B8%82%E5%A0%B4%E4%BB%A3%E5%B9%A3%E5%8C%96%E8%A9%A6%E9%A9%97-032249891.html" title="Yahoo Finance Hong Kong"><img src="/assets/images/media/yahoo.webp" alt="Yahoo Finance Hong Kong" width="173" height="48" loading="lazy"></a>
      <a href="https://fortuneinsight.com/web/instant-news/8244339/" title="Fortune Insight"><img src="/assets/images/media/fortuneinsight.webp" alt="Fortune Insight" width="205" height="48" loading="lazy"></a>
      <a href="https://www.edigest.hk/news/hkma-fintech-week-4-measures-fps-unionpay-agentic-ai-tokenization-%E5%8D%B3%E6%99%82%E8%B2%A1%E7%B6%93-2048338/" title="Economic Digest"><img src="/assets/images/media/edigest.webp" alt="Economic Digest" width="56" height="48" loading="lazy"></a>
      <a href="https://apps.orangenews.hk/app/share/VZmcONg" title="Orange News"><img src="/assets/images/media/orangenews.webp" alt="Orange News" width="106" height="48" loading="lazy"></a>
      <a href="https://www.dotdotnews.com/a/202611/02/AP6ae815d3e4b02fd1c5f63e30.html" title="dotdotnews"><img src="/assets/images/media/dotdotnews.webp" alt="dotdotnews" width="106" height="48" loading="lazy"></a>
      <a href="https://www.finet.hk/newscenter/news_content/6ae831a723082974d93613ee" title="Finet"><img src="/assets/images/media/finet.webp" alt="Finet" width="106" height="48" loading="lazy"></a>
      <a href="https://bau.com.hk/web/article/1566817651435700224/web/content_1566817651435700224.html" title="Bauhinia Magazine"><img src="/assets/images/media/bauhinia.webp" alt="Bauhinia Magazine" width="219" height="48" loading="lazy"></a>
      <a href="https://www.hkcna.hk/hk/content/s6ae87b41e4b0893034d753a0.html" title="Hong Kong China News Agency"><img src="/assets/images/media/hkcna.webp" alt="Hong Kong China News Agency" width="179" height="48" loading="lazy"></a>
      <a href="https://www.stockfisher.com.hk/news/7ecba781-1f5d-4be3-9986-3060d4761dfd" title="Stockfisher"><img src="/assets/images/media/stockfisher.webp" alt="Stockfisher" width="191" height="48" loading="lazy"></a>
      <a href="https://uniquemedia.hk/?p=177272" title="UniqueMedia"><img src="/assets/images/media/uniquemedia.webp" alt="UniqueMedia" width="45" height="48" loading="lazy"></a>
      <a href="https://portal.sina.com.hk/finance/gia-info-gov-hk/2026/11/02/1974813/" title="Sina"><img src="/assets/images/media/sina.webp" alt="Sina" width="172" height="48" loading="lazy"></a>
      <a class="media-text" href="https://hk.crntt.com/doc/176_11719_107250842_1_1102215445.html" title="中評社">中評社</a>
      <a href="https://www.chinanews.com.cn/dwq/2026/11-03/10725131.shtml" title="China News Service"><img src="/assets/images/media/chinanews.webp" alt="China News Service" width="48" height="48" loading="lazy"></a>
      <a href="http://hm.people.com.cn/n1/2026/1102/c42272-40826201.html" title="People's Daily Online"><img src="/assets/images/media/people.webp" alt="People's Daily Online" width="126" height="48" loading="lazy"></a>
      <a href="https://news.qq.com/rain/a/20261102A0CAUY00" title="Tencent News"><img class="logo-sm" src="/assets/images/media/tencent.webp" alt="Tencent News" width="374" height="48" loading="lazy"></a>
      <a href="https://www.21jingji.com/article/20261102/herald/56ec24a0e47fdad6da12c6c3bdcf6b58.html" title="21st Century Business Herald"><img src="/assets/images/media/jingji21.webp" alt="21st Century Business Herald" width="216" height="48" loading="lazy"></a>
      <a href="https://www.sfccn.com/2026/11-2/yNMDE0NzNfMjI5MTAyNQ.html" title="Southern Finance"><img src="/assets/images/media/sfccn.webp" alt="Southern Finance" width="160" height="48" loading="lazy"></a>
      <a href="https://finance.eastmoney.com/a/202611023918942866.html" title="Eastmoney"><img src="/assets/images/media/eastmoney.webp" alt="Eastmoney" width="199" height="48" loading="lazy"></a>
      <a href="https://stock.jrj.com.cn/2026/11/02141958974433.shtml" title="JRJ"><img src="/assets/images/media/jrj.webp" alt="JRJ" width="117" height="48" loading="lazy"></a>
      <a href="https://cn.dataconomy.com/2026/11/05/%E9%A6%99%E6%B8%AF%E6%8E%A8%E5%87%BA%E9%9D%A2%E5%90%91%E9%93%B6%E8%A1%8C%E7%9A%84%E5%90%8E%E9%87%8F%E5%AD%90%E5%B7%A5%E5%85%B7%E5%8C%85/" title="Dataconomy"><img src="/assets/images/media/dataconomy.webp" alt="Dataconomy" width="174" height="48" loading="lazy"></a>
      <a href="https://www.odaily.news/zh-CN/newsflash/529855" title="Odaily"><img src="/assets/images/media/odaily.webp" alt="Odaily" width="174" height="48" loading="lazy"></a>
      <a href="https://blockweeks.com/news/335627" title="BlockWeeks"><img src="/assets/images/media/blockweeks.webp" alt="BlockWeeks" width="38" height="48" loading="lazy"></a>
    </div></div>
  </div>
</div>

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

<div class="media-logos"><span class="media-label">Column in:</span>
  <a href="https://service.hket.com/search/result?dis=basic&amp;keyword=%E9%87%91%E6%80%9D%E9%81%A0" title="Hong Kong Economic Times"><img src="/assets/images/media/hket.webp" alt="Hong Kong Economic Times" width="142" height="48" loading="lazy"></a>
</div>

<ul class="oped-list">
  <li>"快速通關重塑旅業 「一程多站」吸國際客" <a href="https://paper.hket.com/article/4220689/">經濟日報</a> <span class="oped-date">· November 6, 2026</span></li>
  <li>"文體旅深度協同 吸客求量更重質" <a href="https://paper.hket.com/article/4206236">經濟日報</a> <span class="oped-date">· October 9, 2026</span></li>
  <li>"會展+盛事雙引擎 港添旅遊磁吸力" <a href="https://paper.hket.com/article/4184102/">經濟日報</a> <span class="oped-date">· August 28, 2026</span></li>
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
