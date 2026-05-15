---
title: "191. Number of 1 Bits"
date: 2025-04-13
category: "leetcode"
topic: "Divide and Conquer"
area: "Algorithms"
tags: ["Easy", "Divide and Conquer", "Bit Manipulation"]
summary: "from moving on each bits, count the number of ones."
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/number-of-1-bits/)

> **Difficulty:** Easy  
> **Tags:** Divide and Conquer, Bit Manipulation

## Intuition

this one seems easy and it was. Horray to BIT MANIPULATION!!!

## Approach

from moving on each bits, count the number of ones.

## Solution

```c
int hammingWeight(int n) {
    int count = 0;
    while(n){
        if(n&1 == 1){
            count++;
        }
        n = n>>1;
    }
    return count;
}
```

## Complexity

- **Time:** $$O(1)$$


- **Space:** $$O(1)$$

## Thoughts

getting more and more familiar with BIT MANIPULATION!!!
