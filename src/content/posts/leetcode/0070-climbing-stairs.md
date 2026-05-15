---
title: "70. Climbing Stairs"
date: 2025-04-04
category: "leetcode"
topic: "Dynamic Programming"
area: "Algorithms"
tags: ["Easy", "Math", "Dynamic Programming", "Memoization"]
summary: "I could find out two apprachs. one is using recursion, the other is using loop. I thought second one looks more efficient, so I did with that. it's like fibonac"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/climbing-stairs/)

> **Difficulty:** Easy  
> **Tags:** Math, Dynamic Programming, Memoization

## Intuition

the intuition was good, but I'm stupid as dumb.

## Approach

I could find out two apprachs. one is using recursion, the other is using loop. I thought second one looks more efficient, so I did with that. it's like fibonacci. the way to get n-th floor, it's sum of way to get n-1-th floor and n-2-th floor, because you can get to the n-th floor from both floors.

## Solution

```c
int climbStairs(int n) {
    int prev = 0;
    int prev2 = 0;
    int i = 0;
    int ans = 1;
    int tmp;
    while (i < n){
        i++;
        prev2 = prev;
        prev = ans;
        ans = prev + prev2;
    }
    return ans;
    
}
```

## Complexity

- **Time:** $$O(n)$$


- **Space:** $$O(1)$$

## Thoughts

I'm so stupid lol
