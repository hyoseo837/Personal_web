---
title: "263. Ugly Number"
date: 2025-07-20
category: "leetcode"
topic: "Math"
area: "Algorithms"
tags: ["Easy", "Math"]
summary: "if n = 1, return true if n is multiple of 2, run the same function on n/2 if n is multiple of 3, run the same function on n/3 if n is multiple of 5, run the sam"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/ugly-number/)

> **Difficulty:** Easy  
> **Tags:** Math

## Intuition

it looked easy with recursion but I had some hard time to handle negative numbers. but they are just false.

## Approach

if n = 1, return true
if n is multiple of 2, run the same function on n/2
if n is multiple of 3, run the same function on n/3
if n is multiple of 5, run the same function on n/5
else, smash false.

## Solution

```c
bool isUgly(int n) {
    if(n == 1){return true;}
    if(n <= 0){
        return false;
    }
    int last_digit = n % 10;
    if(last_digit == 0){
        return isUgly(n/2);
    }
    if(last_digit == 2){
        return isUgly(n/2);
    }
    if(last_digit == 4){
        return isUgly(n/2);
    }
    if(last_digit == 5){
        return isUgly(n/5);
    }
    if(last_digit == 6){
        return isUgly(n/2);
    }
    if(last_digit == 8){
        return isUgly(n/2);
    }

    int sum = 0;
    int k = n;
    while(k > 0){
        sum += k % 10;
        k /= 10;
    }

    if(sum % 3 == 0){
        return isUgly(n/3);
    }

    return false;
}
```

## Complexity

- **Time:** - Space complexity:

## Thoughts

this is stupid question. it's just for practicing recursion.
