---
title: "27. Remove Element"
date: 2025-03-16
category: "leetcode"
topic: "Two Pointers"
area: "Algorithms"
tags: ["Easy", "Array", "Two Pointers"]
summary: "same with 008 question but compare the value with val. not prev."
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/remove-element/)

> **Difficulty:** Easy  
> **Tags:** Array, Two Pointers

## Intuition

this one is really easy too. it's almost same with the 008 one but much easier.

## Approach

same with 008 question but compare the value with val. not prev.

## Solution

```c
int removeElement(int* nums, int numsSize, int val) {
    int counter = 0;
    for(int i = 0; i < numsSize ; i++){
        if(nums[i] != val){
            nums[counter] = nums[i];
            counter++;
        }
    }
    return counter;
}
```

## Complexity

- **Time:** $$O(n)$$


- **Space:** $$O(1)$$

## Thoughts

easy, next!
