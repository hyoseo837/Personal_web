---
title: "367. Valid Perfect Square"
date: 2025-07-27
category: "leetcode"
topic: "Binary Search"
area: "Algorithms"
tags: ["Easy", "Math", "Binary Search"]
summary: "just compare the num with all the perfect squares from 1 to max."
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/valid-perfect-square/)

> **Difficulty:** Easy  
> **Tags:** Math, Binary Search

## Intuition

this one seemed easy. i can just compare the number with all the perfect squres and finds it. it will only take sqrt(n) time.

## Approach

just compare the num with all the perfect squares from 1 to max.

## Solution

```c
bool isPerfectSquare(int num) {
    int i, k;
    i = 1;
    k = 1;
    while(true){
        if(num == k){
            return true;
        }
        i++;
        if(i > 46340){
            return false;
        }
        k = i*i;
        if(k > num){
            return false;
        }
    }
}
```

## Complexity

- **Time:** $$O(\sqrt n)$$


- **Space:** $$O(1)$$

## Thoughts

this one was easy.
