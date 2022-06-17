---
title: Data Scraper for Beginners
tags: DataAnalytics
mathjax: true
author: Si Yuan JIN
article_header:
  type: overlay
  theme: dark
  background_color: '#123'
  background_image: false
---

## 1. Overview
Data Scraper is an efficient way to get massive internet data in a certain manner. This blog introduces a simple tutorial on how we can scrape data easily.

The key thing is that we need to simulate requests to the remote server. There are usually two types of data we can get: 1. Static website data. 2. Dynamic website data.

## 2. Core 
The core code is the following:
```
import requests
response = requests.request("GET", url, headers=headers)
```
As mentioned, we just need to use python to simulate request, which includes **url**, **headers**, and potentially **params**. We then use two cases to demonstrate how we get the data.

## 2.  Static Data
The server sends whole HTML documents to users in this case. 

We can use github as an exmple, in which we just simply use the "github.com" as the url. In this case, we do not have some specific headers or params.
```
import requests
response = requests.request("GET", "https://github.com/")
response.text
```

We now can get the HTML code which is really hard to read. So we usually use some tools to read, for example, Beautiful Soup.
```
from bs4 import BeautifulSoup
soup = BeautifulSoup(response.text)
```

Then you can use soup's functions to find what you want.

## 3. Dynamic data
Now let's see some more complex case. Assume we want to get a data with a dynamic parameters. For example, we want to get PHANTA Bear data that is a series including 1 to 10,000 different NFT.

We firstly need to interact with the website to find where the data from.

Now we open a bear's data (https://cryptoslam.io/phantabear/mint/5672). We then need to find how the website data from. Luckily, we got the following figure:
<img src="https://jsybruce.github.io/Homepage/assets/images/posts/DataScraper/webpage.png" alt="drawing" width="600"/>

This request helps the website to get the data we want, including the bear's features and transaction history.

We now need to anaylse this link, shown in the following figure:
<img src="https://jsybruce.github.io/Homepage/assets/images/posts/DataScraper/url.png" alt="drawing" width="600"/>

We can find that the url contains the bear's id and we can quickly go through the headers of this request to make sure there is no need to specify for us. Of course, you can specific them in the headers property, shown in the following code.

```
for i in range(1, 1000):
    print(i)
    tx_url = "https://cryptoslam.io/api/trpc/nft.summary,nft.sales,nft.transfers,nft.csvStatistics,nft.csvValues?batch=1&input=%7B%220%22%3A%7B%22id%22%3A%22" + str(i) + "%22%2C%22collectionName%22%3A%22phantabear%22%7D%2C%221%22%3A%7B%22id%22%3A%22"+ str(i) + "%22%2C%22collectionName%22%3A%22phantabear%22%7D%2C%222%22%3A%7B%22id%22%3A%22" +  str(i) +"%22%2C%22collectionName%22%3A%22phantabear%22%7D%2C%223%22%3A%7B%22id%22%3A%22"+ str(i) + "%22%2C%22collectionName%22%3A%22phantabear%22%7D%2C%224%22%3A%7B%22id%22%3A%22"  + str(i) + "%22%2C%22collectionName%22%3A%22phantabear%22%2C%22values%22%3A%22all%22%7D%7D"
    headers = {
        "accept": "*/*",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"}
    
    try:
        response = requests.request("GET", tx_url, headers=headers)
```

Now, let's see another more complex case. We want to get data from OpenSea API. However, the API needs a key for each request. Luckily, when we are surfing on the internet, we find that a website get data from opensea, shown in the following figure.
<img src="https://jsybruce.github.io/Homepage/assets/images/posts/DataScraper/opensea.png" alt="drawing" width="600"/>

Now! we can use its API to get the data.
```
import json
for i in range(1, 10000):
    print(i)
    url = "https://api.opensea.io/api/v1/asset/0x67d9417c9c3c250f61a83c7e8658dac487b56b09/" + str(i)
    headers = {
        "Accept": "application/json",
        "origin": "https://dappradar.com",
        "x-api-key": "93121b9e11c54b0c8051b98dc8937685"}
    response = requests.request("GET", url, headers=headers)
    if response.status_code != 200:
            print('error')
            break
    data = response.json()
```

## 4. Conclusion
The diffucity in data scraper is to simluate the request. Therefore, we need to carefully interact with the website and find where its data from. And then we can get it! In some case, we may use **post** method to get data that needs params in the request. But it would not be the hard part. 
