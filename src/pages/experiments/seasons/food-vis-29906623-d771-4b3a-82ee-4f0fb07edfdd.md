---
title: 'Charting Veggies'

subtitle: 'Looking at import, export, and seasonality data for fruits & veggies for a museum exhibit.'

date: '2018-12-08'

tags: ['D3', 'Data Vis']

label: 'Info'

list: ['1 Week', 'Team of 3', 'D3 Visualization', 'Python Cleaning']

path: '/seasons'

cover: 'exhibit_data_viz-1-86e4d9d1-2394-4db0-a6b0-9fda6f351fc0.png'
---

![](exhibit_data_viz-1-86e4d9d1-2394-4db0-a6b0-9fda6f351fc0.png)

![](exhibit_data_viz-2-c8cd62a9-cee9-417a-b639-34dbfaa0270e.png)

# The Process

For a museum exhibit on fruits and vegetable, I was tasked with comparing the seasonality data of each vegetable/fruit featured in the exhibit. I created a stacked histogram plot to compare the import and export data of each vegetable on a year time-scale.

You can view the D3 code here: [Source Code on Observable.](https://beta.observablehq.com/@garrettvercoe/imports/2)

# Reading the graph

![](exhibit_data_viz-2.png)
This is a boxed histogram, and the histogram is stacked when it overflows its container. Thus, a darker color is created where imports/exports are higher, as the histogram is at a higher density.

Here's an earlier iteration of the chart:
![](early.png)

And here's a graph showing the months each fruit/vegetable is in season in Virginia (as that is where the exhibit was on display).

![](exhibit_data_viz-3.png)
