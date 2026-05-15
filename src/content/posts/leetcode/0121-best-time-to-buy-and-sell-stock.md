---
title: "121. Best Time to Buy and Sell Stock"
date: 2025-04-06
category: "leetcode"
topic: "Dynamic Programming"
area: "Algorithms"
tags: ["Easy", "Array", "Dynamic Programming"]
summary: "the approach is pretty complex, but here me out. from scanning the prices from the beginning, it find the starting point. if you find the smaller starting point"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

> **Difficulty:** Easy  
> **Tags:** Array, Dynamic Programming

## Intuition

This one was pretty difficult. I firstly tried to find every possible combination and compare them, but it didn't work. it took so much time. Therefore, I only used one for loop because, I don't need to check all of them becasue time only flows forward.

## Approach

the approach is pretty complex, but here me out. from scanning the prices from the beginning, it find the starting point. if you find the smaller starting point, you replace it to the new one. or not, calculate the selling price and measure the profit. the max profit will be recorded. we never know which one is the answer, but we can find out the max value.

## Solution

```c
int maxProfit(int* prices, int pricesSize) {
    if(pricesSize == 0){
        return 0;
    }
    int ans = 0;
    int min = prices[0];
    for(int i = 0; i < pricesSize; i++){
        if(prices[i] < min){
            min = prices[i];
        }
        if(prices[i] - min > ans){
            ans = prices[i] - min;
        }
    }
    return ans;
}
```

## Complexity

- **Time:** $$O(n)$$ 


- **Space:** $$O(n)$$

## Thoughts

It was interesting to learn that I only need to return the value that function is for. I was tring to find (buy_date, sell_date, profit) all three information from the code. However, this solution just throw away the buy_date and sell_date info. to make it faster. I need more training for this because this seems crucial to the coding problems.

I'm still trash.
