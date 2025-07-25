---
layout: article
titles:
  # @start locale config
  en      : &EN       IS Reading Group
  en-GB   : *EN
  en-US   : *EN
  en-CA   : *EN
  en-AU   : *EN
  zh-Hans : &ZH_HANS  
  zh      : *ZH_HANS
  zh-CN   : *ZH_HANS
  zh-SG   : *ZH_HANS
  fr-BE   : *FR
  fr-CA   : *FR
  fr-CH   : *FR
  fr-FR   : *FR
  fr-LU   : *FR
  # @end locale config
key: page-is_reading_group
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Information Systems Reading Group</title>
    <style>
        body {
            font-family: 'Lora', serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            color: #333;
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h1, h2, h3 {
            color: #333;
            margin-bottom: 20px;
        }

        h1 {
            font-size: 2.5em;
            text-align: center;
        }

        h2, h3 {
            font-size: 1.8em;
            margin-top: 40px;
        }

        p {
            margin-bottom: 20px;
        }

        a {
            color: #ff6347;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        .cta-button {
            display: inline-block;
            padding: 12px 25px;
            color: white;
            background-color: #ff6347;
            border-radius: 4px;
            margin-top: 20px;
            text-decoration: none;
            font-size: 1em;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s ease;
        }

        .cta-button:hover {
            background-color: #ff4500;
        }

        .poster-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
            gap: 20px;
            justify-items: center;
        }

        .poster-grid img {
            width: 100%;
            max-width: 800px;
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }

        .poster-grid img:hover {
            transform: scale(1.05); /* Slight zoom effect on hover */
        }

        /* Professor grid styles */
        .professor-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive columns */
            gap: 30px;
            margin: 40px 0;
        }

        .professor-card {
            text-align: center;
            padding: 20px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            max-width: 300px; /* Maximum width for each card */
            margin: 0 auto; /* Center cards */
        }

        .professor-photo {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 15px;
            border: 3px solid #f0f0f0;
        }

        .professor-name {
            font-size: 1.2em;
            font-weight: bold;
            margin: 10px 0;
            color: #333;
        }

        .professor-institution {
            color: #666;
            font-size: 0.9em;
        }

        /* Host styles */
        .host-section {
            margin: 40px 0;
        }

        .host-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr); /* 2 hosts per row */
            gap: 30px;
            margin-top: 20px;
        }

        .host-card {
            text-align: center;
            padding: 20px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .host-name {
            font-size: 1.2em;
            font-weight: bold;
            margin: 10px 0;
            color: #333;
        }

        .host-institution {
            color: #666;
            font-size: 0.9em;
        }

        /* Participant statistics styles */
        .stats-section {
            margin: 40px 0;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 20px;
        }

        .stats-card {
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            max-width: 500px;
            margin: 0 auto;
        }

        .stats-card img {
            width: 100%;
            height: auto;
            border-radius: 8px;
        }

        .stats-title {
            font-size: 1.2em;
            font-weight: bold;
            margin: 15px 0 10px;
            color: #333;
        }

        /* Organizers list styles */
        .organizers-section {
            margin: 40px 0;
            padding: 30px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .organizers-title {
            font-size: 1.5em;
            font-weight: bold;
            margin-bottom: 30px;
            color: #333;
            text-align: center;
            border-bottom: 2px solid #f0f0f0;
            padding-bottom: 15px;
        }

        .organizers-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .organizers-list li {
            margin-bottom: 25px;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 8px;
            transition: transform 0.2s ease;
        }

        .organizers-list li:hover {
            transform: translateX(5px);
            background: #f0f7ff;
        }

        .year {
            font-weight: bold;
            color: #1A5DCB;
            font-size: 1.1em;
            margin-right: 10px;
            display: inline-block;
            min-width: 60px;
        }

        .organizer-name {
            font-weight: 500;
            color: #333;
        }

        .institution {
            color: #666;
            font-size: 0.9em;
            font-style: italic;
        }

        .organizers-list li {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
        }

        .organizer-item {
            display: inline-flex;
            align-items: center;
            margin-right: 15px;
            margin-bottom: 5px;
        }

        .organizer-item:after {
            content: ",";
            margin-right: 5px;
        }

        .organizer-item:last-child:after {
            content: "";
        }
    </style>
</head>
<body>

  <div class="container">
      <h1>Welcome to IS Reading Group</h1>
      <p>Inspired by the spirit of open academic discussion, the Information Systems Reading Group aims to foster an environment where scholars can exchange ideas and critically engage with academic papers in the field of Information Systems. We highly recommend interaction with the authors of the papers.</p>

      <p><strong>Mission: One more critique makes the paper better.</strong></p>

      <p>Our existing organizers include Jingyuan Deng, Yihan Deng, Weibo Li, Xuewen Han, and me. For suggestions or inquiries, please contact us or me at <a href="mailto:siyuan.jin@connect.ust.hk">siyuan.jin@connect.ust.hk</a>.</p>

      <h2>Acknowledgments</h2>
      <p>Our activity provides no financial incentive. Thus, we are grateful for any Professor who is willing to join us:</p>
      
      <div class="professor-grid">
        <div class="professor-card">
          <img src="poster/professors/xinli24.jpg" alt="Prof. Xin Li" class="professor-photo">
          <div class="professor-name">Prof. Xin Li</div>
          <div class="professor-institution">City University of Hong Kong</div>
        </div>
        
        <div class="professor-card">
          <img src="poster/professors/hongchang.jpg" alt="Prof. Hongchang Wang" class="professor-photo">
          <div class="professor-name">Prof. Hongchang Wang</div>
          <div class="professor-institution">UTD</div>
        </div>
        
        <div class="professor-card">
          <img src="poster/professors/xinyu.jpg" alt="Prof. Xinyu Fu" class="professor-photo">
          <div class="professor-name">Prof. Xinyu Fu</div>
          <div class="professor-institution">Georgia State University</div>
        </div>
      </div>

     <h2>Participant Statistics</h2>
      <div class="stats-section">
        <div class="stats-grid">
          <div class="stats-card">
            <div class="stats-title">Session 42 Participant Distribution</div>
            <img src="poster/participant_distribution_42.jpg" alt="PSG-42_distribution" title="PSG-42-Distribution">
          </div>
          <div class="stats-card">
            <div class="stats-title">Session 40 Participant Distribution</div>
            <img src="poster/participant_distribution_40.jpg" alt="PSG-40_distribution" title="PSG-40-Distribution">
          </div>
        </div>
      </div>

      <h2>Past Sessions</h2>
      <div class="poster-grid">
        <img src="poster/IS_PSG_45_46.jpg" alt="PSG-45-46" title="PSG-45-46" width="800">
        <img src="poster/IS_PSG_42_44.jpg" alt="PSG-42-44" title="PSG-42-44" width="800">
        <img src="poster/IS_PSG_42_43.jpg" alt="PSG-42-43" title="PSG-42-43" width="800">
        <img src="poster/IS_PSG_41.jpg" alt="PSG-41" title="PSG-41" width="800">
        <img src="poster/IS_PSG_40.jpg" alt="PSG-40" title="PSG-40" width="800">
        <img src="poster/IS_PSG_40_41.jpg" alt="PSG-40-41" title="PSG-40-41" width="800">
        <img src="poster/IS_PSG_39.jpg" alt="PSG-39" title="PSG-39" width="800">
        <img src="poster/IS_PSG_38.jpg" alt="PSG-38" title="PSG-38" width="800">
        <img src="poster/IS_PSG_37.jpg" alt="PSG-37" title="PSG-37" width="800">
        <img src="poster/IS_PSG_36.jpg" alt="PSG-36" title="PSG-36" width="800">
        <img src="poster/IS_PSG_35.jpg" alt="PSG-35" title="PSG-35" width="800">
        <img src="poster/IS_PSG_34.jpg" alt="PSG-34" title="PSG-34" width="800">
        <img src="poster/IS_PSG_33.jpg" alt="PSG-33" title="PSG-33" width="800">
        <img src="poster/IS_PSG_32.jpg" alt="PSG-32" title="PSG-32" width="800">
        <img src="poster/IS_PSG_31.jpg" alt="PSG-31" title="PSG-31" width="800">
        <img src="poster/IS_PSG_30.jpg" alt="PSG-30" title="PSG-30" width="800">
        <img src="poster/IS_PSG_29.jpg" alt="PSG-29" title="PSG-29" width="800">
        <img src="poster/IS_PSG_27.jpg" alt="PSG-27" title="PSG-27" width="800">
        <img src="poster/IS_PSG_26.jpg" alt="PSG-26" title="PSG-26" width="800">
        <img src="poster/IS_PSG_25.jpg" alt="PSG-25" title="PSG-25" width="800">
        <img src="poster/IS_PSG_24.jpg" alt="PSG-24" title="PSG-24" width="800">
        <img src="poster/IS_PSG_23.jpg" alt="PSG-23" title="PSG-23" width="800">
        <img src="poster/IS_PSG_22.jpg" alt="PSG-22" title="PSG-22" width="800">
        <img src="poster/IS_PSG_21.jpg" alt="PSG-21" title="PSG-21" width="800">
        <img src="poster/IS_PSG_20.jpg" alt="PSG-20" title="PSG-20" width="800">
        <img src="poster/IS_PSG_19.jpg" alt="PSG-19" title="PSG-19" width="800">
        <img src="poster/IS_PSG_18.jpg" alt="PSG-18" title="PSG-18" width="800">
        <img src="poster/IS_PSG_16.jpg" alt="PSG-16" title="PSG-16" width="800">
        <img src="poster/IS_PSG_15.jpg" alt="PSG-15" title="PSG-15" width="800">
        <img src="poster/IS_PSG_14.jpg" alt="PSG-14" title="PSG-14" width="800">
        <img src="poster/IS_PSG_13.jpg" alt="PSG-13" title="PSG-13" width="800">
        <img src="poster/IS_PSG_12.jpg" alt="PSG-12" title="PSG-12" width="800">
        <img src="poster/IS_PSG_11.jpg" alt="PSG-11" title="PSG-11" width="800">
        <img src="poster/IS_PSG_10.jpg" alt="PSG-10" title="PSG-10" width="800">
        <img src="poster/IS_PSG_9.jpg" alt="PSG-9" title="PSG-9" width="800">
        <img src="poster/IS_PSG_8.jpg" alt="PSG-8" title="PSG-8" width="800">
      </div>

      

      <p>Join us to expand your knowledge of Information Systems through engaging discussions and thoughtful critiques!</p>

      <div class="organizers-section">
          <h2 class="organizers-title">Organizers</h2>
          <ul class="organizers-list">
              <li>
                  <span class="year">2025</span>
                  <span class="organizer-item"><span class="organizer-name">Xuewen Han</span> <span class="institution">(THU)</span></span>
                  <span class="organizer-item"><span class="organizer-name">Jingyuan Deng</span> <span class="institution">(NUS)</span></span>
                  <span class="organizer-item"><span class="organizer-name">Yihan Deng</span> <span class="institution">(CityU)</span></span>
                  <span class="organizer-item"><span class="organizer-name">Weibo Li</span> <span class="institution">(ASU)</span></span>
                  <span class="organizer-item"><span class="organizer-name">Siyuan (Bruce) Jin</span> <span class="institution">(HKUST)</span></span>
              </li>
              <li>
                  <span class="year">2024</span>
                  <span class="organizer-item"><span class="organizer-name">Siyuan (Bruce) Jin</span> <span class="institution">(HKUST)</span></span>
                  <span class="organizer-item"><span class="organizer-name">Zhe Wang</span> <span class="institution">(PolyU)</span></span>
              </li>
          </ul>
      </div>
  </div>

</body>