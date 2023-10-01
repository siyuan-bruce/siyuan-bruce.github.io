---
title: How to use RMD to write a report?
tags: Skills
mathjax: true
mermaid: true
author: Si Yuan JIN
article_header:
  type: overlay
  theme: dark
  background_color: '#123'
  background_image: false
---

Last month, I was busy in preparing a report for the Hong Kong Monetary Authority. Our team conducted a hypothetical e-HKD experiment on the HKUST campus. The pilot program concluded on September 22, with the report due by September 28. Hence, I started to write the basic structure of the RMD on early September. At the end, I have written more than 20,000 lines. I tried my best to define functions to reduce the length of the code. Even so, the RMD file is still more than 7,000 lines long in the end.

Professor Kohei tasked me with writing the report using RMD. This was a first for me, as I had never written an RMD report from scratch before. My usual practice involves coding in Java or Python and writing reports in Latex. However, once I finished the report, I recognized the merits of RMD. It can even generate a Word document, a feature Latex lacks. This is particularly valuable today, as some top-tier journals continue to require submissions in Word format, which has presented challenges for me as a Latex user.

Another aspect of this experience I found worthy of appreciation was Kohei's strict coding requirements. His "coding rules" can actually provide elegant and clear code structures. Adhering to these rules has notably improved the quality of my code. Even though it requires additional effort to comply, it is a beneficial practice for maintaining code readability.

Thanks to this experience and all research team members, I have gained a deeper understanding of a lot of things. 

Here are a few takeaways from my experience using RMD:

1. Use `bookdown` to number sections. This can be achieved with the following code:
   ````markdown
   documentclass: book
   output:
     bookdown::html_document2: default
   ```
2. Use BrBG colors to represent contrasting features.
3. Use `table01` to number an R code area. The compiler will automatically number figures and tables. Note that the '01' in the name doesn't affect the order of final report. It is just a name.
4. Commonly used packages include `dplyr`, `modelsummary`, `scales`, `kableExtra`, `ggplot2`, and `foreach`.
5. When compiling into a Word document, ensure to add `options(kableExtra.auto_format = FALSE)`.
6. `stargazer` provides a good format for multinomial probit models. However, be aware that the resulting tables may not be compatible with Word documents.
7. Defining functions is essential. However, remember to use `!!sym(variable)` when referring to column names.
8. In the main text, try to use r code to retrieve values rather than manually inputting them.
9. Current AI tools, such as ChatGPT, can greatly enhance coding efficiency. Make sure to fully utilize them.
10. When using `factor()` to assign value orders, remember to use `arrange` to sort the variable later. This process also applies when ordering labels in figures.
11. Use `bind_rows` and `bind_cols` to merge dataframes.
12. Use `case_when` to conditionally replace values.
13. Use `mutate` to create new variables.
14. Use `group_by` and `summarize` to calculate summary statistics.
15. Use `modelsummary` to generate regression tables.
16. Use `scale_fill_manual` to assign colors to bars in a bar chart.
17. Use `geom_text` to add labels to a bar chart.
18. Use `geom_col` to generate a horizontal bar chart.




The basic structure of data analysis should follow:
1. load the data
2. clean the data
    - remove missing values
    - remove outliers
    - lower case column names
3. transform the data
    - merge data
    - create new variables
4. analyze the data
5. visualize the data


Then I post some style codes for the tables and figures.

Table:
```
table_dataframe%>%
  kable(
    caption = 
      "Title",
    col.names = 
      c(
        "col_name",
        "col_name",
        "col_name"
        ),
    align = "ccc"
  ) %>%
  kable_styling() %>%
  add_footnote(
    "footnote"
    )
```

Horizontal bar chart:
```
%>%
  ggplot(
    aes(
      x = var_x,
      y = proportion,
      fill = var_fill,
      label = percent(
        ifelse(
          proportion < .04,
          NA,
          proportion)
        )
      )
    ) +
  geom_col(
    aes(
      fill = var_fill
      ),
    width = 0.7,
    position = 
      position_fill(
        reverse = TRUE
      )
  ) + 
  coord_flip() +
  theme_classic() + 
  geom_text(
    position = position_stack(
      vjust = 0.5,
      reverse = TRUE),
    size=2.5) +
  scale_fill_manual(
    values=c(
      '#01665e',
      '#35978f',
      "#80cdc1",
      "#c7eae5",
      '#f5f5f5'
      )
  ) 
```



