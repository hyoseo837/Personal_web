---
title: "342. Power of Four"
date: 2025-07-27
category: "leetcode"
topic: "Bit Manipulation"
area: "Algorithms"
tags: ["Easy", "Math", "Bit Manipulation", "Recursion"]
summary: "the approach is simple, if the number is power of four, only 1 will left if you devide the number by 4 repeatedly. and i used bit manipulation to measure it's m"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/power-of-four/)

> **Difficulty:** Easy  
> **Tags:** Math, Bit Manipulation, Recursion

## Intuition

this one was really similar with the power of three question, but I tried to make a different approach with the last one. I tried to solve it with programming, using recursion.

## Approach

the approach is simple, if the number is power of four, only 1 will left if you devide the number by 4 repeatedly. and i used bit manipulation to measure it's multiple of 4 by "n & 3" becasue I thought this might be faster than "n % 4 == 0".

## Solution

```c
bool isPowerOfFour(int n) {
    if(n <= 0){return false;}
    if(n == 1){
        return true;
    }
    if( n & 3 ){
        return false;
    }
    else{
        return isPowerOfFour(n >> 2);
    }
}
```

## Complexity

- **Time:** $$O(\ln n)$$


- **Space:** $$O(1)$$

## Thoughts

it was easy and I could solve this under 5 minuites.
