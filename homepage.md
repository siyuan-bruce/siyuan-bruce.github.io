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

<div class="container">
  <div class="profile-image">
    <img src="./images/profile3.png" alt="Profile Image" />
  </div>
    <div class="profile-text">
    <p>
      Si Yuan (Bruce) JIN, is currently pursuing a joint MPhil-PhD program in the Department of Information Systems at the School of Business and Management, Hong Kong University of Science and Technology (HKUST). Bruce holds a Bachelor of Finance degree in Financial Technology from South China University of Technology (SCUT), where he was distinguished with the China National Scholarship and named an Outstanding Graduate.
  </p> 
    <p>
      Bruce is supervised by Prof. Kar Yan Tam and also under the guidance of Dr. Yong Xia, Prof. Allen H. Huang, Prof. Kohei Kawaguchi, Prof. Marc Dordal Carreras, Prof. Bei Zeng, and Prof. Qiming Shao. His research spans several areas including blockchain, digital platforms, financial technology (FinTech), and the management of quantum information technology. His methodologies to research is multifaceted, employing methods such as econometrics, field experiments, surveys, and technical algorithm design.
    </p> 
    <p>
      Prior to his academic tenure at HKUST, Bruce amassed practical experience as a software engineer at HSBC IT Architecture and HSBC Laboratory. His professional excellence was recognized through several accolades including the 2021 Top Performer award, the 2021 Role Model honor, and his team was a finalist in the 2021 Global Central Bank Digital Currency (CBDC) Challenge hosted by the Monetary Authority of Singapore.
    </p>
  </div>
</div>
 

## **Research Interests**
- **Distributed Ledger Technology (DLT)**: Token-based Platforms, Central Bank Digital Currency, Token Economy
- **Quantum Computing**: Quantuam IT management, Quantum Finance, Classical Quantum-Inspired Algorithm
- Two Literature Repository:
  - [Central Bank Digital Currency](https://github.com/siyuan-bruce/CBDC-Literature)
  - [Quantum Finance](https://github.com/siyuan-bruce/Quantum-Finance)

## **Education**
- **Hong Kong University of Science and Technology** (Aug 2022 - now)
  - MPhil-PhD Student in Information Systems.
  - GPA: 4.00 in 2022 - 2023 Fall Semester
  - Supervisor: Prof. Kar Yan Tam.
  - Research Direction: Blockchain, Central Bank Digital Currency, Quantum Finance
- **South China University of Technology** (Sep 2017 – Jun 2021)
  - B.Fin. in Financial Technology, Outstanding Graduates. 
  - Rank: 1 / 33.
  - Obtained 2021 University-level excellent graduation thesis
  - Obtained 2020 China National Scholarship (Top 0.1%)
  - Obtained 2019 First prize of South China University of Technology (Top 1%)
  - Obtained 2018 First prize of South China University of Technology (Top 1%)

## Industry Consulting
- **HSBC Hong Kong** (Sep 2022 - now)
  - Research Work in CBDC, Quantum Finance, AI, and Software Engineering.
  - Seven patents are already filed.

## **Employment**
- **HSBC Laboratory** (May 2021 - Aug 2022)
  - Permanent Full Stack Engineer on Quantum Computing & CBDC Research
  - 2021 Top Performer \| 2021 Role Model \| 2021 Global CBDC Challenge Finalist \| Interviewed many PhDs for quantum scientists
  - Central Bank Digital Currency (E-CNY \| E-HKD) \| Stablecoin \| ESG \| Quantum Portfolio Optimization

- **HSBC IT Architecture** (Sep 2020 - May 2021)
  - Internship on CBDC work
  - Angle Fund Winner \| Corda Prototype Development
  
## **Awards**
- Sep 2022: HKUST PhD Postgraduate Studentship
- Nov 2021: [Global CBDC Challenge Finalist](https://www.mas.gov.sg/news/media-releases/2021/mas-announces-15-finalists-for-the-global-cbdc-challenge?fbclid=IwAR0B9v-5FBSXcnr61edLVwEch-jJ5EV8-pSJwYe00erQdS8rGreTtZIYABY) (Top 5% in over 300+ submissions from 50+ countries)
- Jun 2021: Outstanding Graduates \| University-level excellent graduation thesis (Top 1%)

### Language
- Mandarin (Native)
- English (Proficient, IELTS 7.5)
- Cantonese (Beginner)
  
## **Contact**
I am open to working on any interesting topics. Please feel free to contact me if you want to costart a project.
- Email: siyuan.jin@connect.ust.hk
- WeChat: siyuan-bruce
- [Linkedin](https://www.linkedin.com/in/si-yuan-bruce-jin/)


<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  /* Base styles */
  .container {
    width: 100%;
    text-align: center;
  }

  .profile-image {
    width: 100%;
    max-width: 1000px; /* Adjust this value to fit your needs */
    margin: 10px 0;
  }

  .profile-text {
    margin: 10px;
    text-align: left;
  }

  /* This media query applies styles for screens larger than 600px */
  @media screen and (min-width: 600px) {
    .container {
      display: flex;
      align-items: flex-start; /* Align items to the start of the flex container */
      justify-content: space-between; /* This will put space between the text and image, effectively pushing the image to the right */
    }
    
    .profile-text,
    .profile-image {
      flex: 1; /* Both children will take up equal space within the container */
      flex: 30%; /* Adjust this value to fit your needs */
    }

    .profile-image {
      margin-left: 10px;
      max-width: none; /* Reset max-width to allow the image to be as wide as its container */
      order: 2; /* This will ensure the image is placed to the right */
    }

    .profile-text {
      margin-top: -20px;
      order: 1; /* This will ensure the text is placed to the left */
      flex: 70%;
    }
  }
</style> 