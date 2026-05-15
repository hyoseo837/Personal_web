---
title: "268. Missing Number"
date: 2025-07-20
category: "leetcode"
topic: "Binary Search"
area: "Algorithms"
tags: ["Easy", "Array", "Hash Table", "Math", "Binary Search", "Bit Manipulation", "Sorting"]
summary: "if the array contains 0 to n with one missing number k, the sum of the array will be by the Gauss's method. so I calculated k by reverse."
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/missing-number/)

> **Difficulty:** Easy  
> **Tags:** Array, Hash Table, Math, Binary Search, Bit Manipulation, Sorting

## Intuition

when I first saw this question, I figured it out I should use total value to solve this problem. and it worked well.

## Approach

if the array contains 0 to n with one missing number k, 
the sum of the array will be $$\frac{n(n+1)}{2} - k$$ by the Gauss's method. 

so I calculated k by reverse.

## Solution

```c
int missingNumber(int* nums, int numsSize) {
    int total = numsSize * (numsSize+1) / 2;
    for(int i = 0; i < numsSize; i++){
        total -= nums[i];
    }
    return total;
}
```

## Complexity

- **Time:** $$O(n)$$


- **Space:** $$O(1)$$

## Thoughts

I made some creative solution now. but it was to common one and the problem was too easy. I need harder one.
