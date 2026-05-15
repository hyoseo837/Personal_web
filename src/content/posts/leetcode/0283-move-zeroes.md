---
title: "283. Move Zeroes"
date: 2025-07-21
category: "leetcode"
topic: "Two Pointers"
area: "Algorithms"
tags: ["Easy", "Array", "Two Pointers"]
summary: "there is a fast pointer and slow pointer. they both start from 0 and fast pointer just rush to the end and just read the values. at the same time, slow pointer"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/move-zeroes/)

> **Difficulty:** Easy  
> **Tags:** Array, Two Pointers

## Intuition

the first intuition to this problem was it should be easy. and it was.
i just used two pointer method with two different speed.

## Approach

there is a fast pointer and slow pointer. they both start from 0 and fast pointer just rush to the end and just read the values. at the same time, slow pointer just follow the fast one, when fast pointer finds non-zero number. since slow pointer is following the fast pointer, the element that slow pointer is pointing is already read by the fast pointer. which means it can modify it freely.

therefore, this code works perfectly.

## Solution

```c
void moveZeroes(int* nums, int numsSize) {
    int fast = 0;
    int slow = 0;
    while(fast < numsSize){
        if(nums[fast] != 0){
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    while(slow < numsSize){
        nums[slow] = 0;
        slow++;
    }
    return;
}
```

## Complexity

- **Time:** O(n + m) when n is numsSize and m is # of zeros.


- **Space:** O(1); since it only holds two pointers.

## Thoughts

this one was a bit easy. i need more challenging ones. I might need to upgrade to medium diffculty.
