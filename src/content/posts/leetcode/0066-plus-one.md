---
title: "66. Plus One"
date: 2025-03-19
category: "leetcode"
topic: "Math"
area: "Algorithms"
tags: ["Easy", "Array", "Math"]
summary: "Firstly, it was necessary to find out how much memory the answer will take. if the number is with tons of 9s, it will need new digit. Therefore, I made a functi"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/plus-one/)

> **Difficulty:** Easy  
> **Tags:** Array, Math

## Intuition

The first intuition to this problem is that it seems easy. I solved exact same question is functional programming. However it was a bit different with imparative programming.

## Approach

Firstly, it was necessary to find out how much memory the answer will take. if the number is with tons of 9s, it will need new digit. Therefore, I made a function that returns boolean value of wheather it will need more digits or not. So I defined that first and malloc the memory for the answer. and add one to the number and if each digit is greater than 10, it bring the one to the higher digit.

## Solution

```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */

bool needMoreDigits(int* digits, int digitsSize) {
    for (int i = 0; i < digitsSize; i++) {
        if (digits[i] != 9) {
            return false;
        }
    }
    return true;
}

int* plusOne(int* digits, int digitsSize, int* returnSize) {
    *returnSize = (needMoreDigits(digits, digitsSize) ? digitsSize + 1 : digitsSize);
    int* ans = malloc(sizeof(int) * *returnSize);
    int tmp = 1;
    for(int i = 1; i <= digitsSize; i++){
        printf("%d", digitsSize - i);
        ans[*returnSize - i] = digits[digitsSize - i ] + tmp;
        if(digits[digitsSize - i] + tmp >= 10){
           ans[*returnSize - i] = 0 ;
        }
        else{
            tmp = 0;
        }
    }
    if(*returnSize > digitsSize){ans[0] = 1;}
    return ans;
}
```

## Complexity

- **Time:** $$O(n)$$ where n is digitsSize


- **Space:** $$O(n)$$

## Thoughts

this was actually really chalangeing. And I guess I'm learning some techniques for solving these kind of programming questions. this is the key point I found. "Coding Interview Questions are not Beautiful. it's more like the ugliest thing in math".
