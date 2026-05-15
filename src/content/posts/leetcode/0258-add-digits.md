---
title: "258. Add Digits"
date: 2025-07-20
category: "leetcode"
topic: "Math"
area: "Algorithms"
tags: ["Easy", "Math", "Simulation", "Number Theory"]
summary: "if it is single digit, return it. or, do the same process."
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/add-digits/)

> **Difficulty:** Easy  
> **Tags:** Math, Simulation, Number Theory

## Intuition

this one is easy. simple recursion question.

## Approach

if it is single digit, return it.
or, do the same process.

## Solution

```c
int addDigits(int num) {
    int tmp;
    if(num < 10){
        return num;
    }
    else{
        while(num > 0){
            tmp += num % 10;
            num = num/10;
        }
        return addDigits(tmp);
    }
}
```

## Complexity

- **Time:** don't know really.


- **Space:** don't know really. proportional to time it repeated.

## Thoughts

this one was way to easy.
