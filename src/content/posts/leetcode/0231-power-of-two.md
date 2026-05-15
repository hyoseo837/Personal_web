---
title: "231. Power of Two"
date: 2025-06-08
category: "leetcode"
topic: "Bit Manipulation"
area: "Algorithms"
tags: ["Easy", "Math", "Bit Manipulation", "Recursion"]
summary: "if n is power of 2, in binary it will look like 0001000...0 then, if you do n-1, it will look like 00001111...1 then, if you take & operator to them, it will al"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/power-of-two/)

> **Difficulty:** Easy  
> **Tags:** Math, Bit Manipulation, Recursion

## Intuition

i knew I have to deal with bits in this problem, but i couldn't figure out how. and the discussion give me a hint.

## Approach

if n is power of 2, in binary it will look like 0001000...0 then, if you do n-1, it will look like 00001111...1 then, if you take & operator to them, it will always get 00000...0, which is 0.

## Solution

```c
bool isPowerOfTwo(int n) {
    if (n <= 0){
        return false;
    }
    return !(n & (n-1));
}
```

## Complexity

- **Time:** $$O(1)$$ 


- **Space:** $$O(1)$$
