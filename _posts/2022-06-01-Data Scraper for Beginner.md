---
title: Data Scraper for Beginners
tags: DataAnalytics
mathjax: true
author: Siyuan JIN
article_header:
  type: overlay
  theme: dark
  background_color: '#123'
  background_image: false
---

## 1. Overview
Data scraping is an efficient method for acquiring large amounts of internet data in a specific manner. This blog post provides a straightforward tutorial on how to easily scrape data.

It is important to note that simulating requests to remote servers is necessary. Typically, there are two types of data that can be obtained: 1) static website data and 2) dynamic website data.

## 2. Core Code
The core code for data scraping is as follows:
```
import requests
response = requests.request("GET", url, headers=headers)
```
As previously mentioned, it is necessary to use Python to simulate the request, which includes the **URL**, **headers**, and potentially **params**. Two examples are provided to demonstrate how to acquire the data."

## 3.  Static Data
In this scenario, the server sends entire HTML documents to users.

For instance, using GitHub as an example, the URL would simply be "github.com" and there would be no need for specific headers or parameters.
```
import requests
response = requests.request("GET", "https://github.com/")
response.text
```

We now can get the HTML code which is hard to read. So we usually use some tools to read, for example, Beautiful Soup.
```
from bs4 import BeautifulSoup
soup = BeautifulSoup(response.text)
```

Then you can use the soup's functions to find what you want.

## 4. Dynamic data
Now let's take a look at more complex cases. Suppose we want to retrieve data with dynamic parameters. For example, we want to obtain data on PHANTA Bear which comprises 1 to 10,000 different NFTs.

To achieve this, we must first interact with the website to identify the source of the data.

In this example, we will open a bear's data (https://cryptoslam.io/phantabear/mint/5672). Then, we must locate where the website data originates from. Fortunately, we were able to obtain the following information:

![Image](/assets/images/posts/DataScraper/webpage.png "Figure1")



This request helps the website to get the data we want, including the bear's features and transaction history.

We now need to analyse this link, shown in the following figure:

![Image](/assets/images/posts/DataScraper/url.png "Figure2")


We can see that the URL includes the bear's id, and by examining the headers of this request, we can confirm that there is no need to specify any additional parameters. However, it is possible to include them in the headers property, as shown in the following code.

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

Now, let's consider another more complex scenario. We want to retrieve data from OpenSea API, but the API requires a key for each request. Fortunately, while browsing the internet, we discovered a website that obtains data from OpenSea, as demonstrated in the following image.


![Image](/assets/images/posts/DataScraper/opensea.png "Figure3")

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

## 5. Conclusion
The challenge in data scraping lies in simulating the request. Therefore, it is crucial to closely interact with the website and determine the source of its data. Once we have identified it, we can proceed to acquire the data. In certain instances, we may need to use the post method to obtain data that requires parameters in the request, but this should not pose a significant difficulty.
