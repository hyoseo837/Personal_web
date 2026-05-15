---
title: "26. Remove Duplicates from Sorted Array"
date: 2025-03-16
category: "leetcode"
topic: "Two Pointers"
area: "Algorithms"
tags: ["Easy", "Array", "Two Pointers"]
summary: "the apprach to this problem was I wanted to use a for loop. because the job is pretty simple, so I could done it by reading through the list one by one. and it"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

> **Difficulty:** Easy  
> **Tags:** Array, Two Pointers

## Intuition

The first intuition to this problem was it looked difficult. However, when I realize i don't need to deal with memories, it makes the problem much easier. I only used two accumulators to detact the duplicated numbers and it was pretty nice job.

## Approach

the apprach to this problem was I wanted to use a for loop. because the job is pretty simple, so I could done it by reading through the list one by one. and it worked. from the first element of the array. it stores the previous number. and if current number is equal to the previous one. it is duplicated number obviously. therefore ignore that and continue. if it is different from the previous number, it's a unique one. so we can add it to our answer array. since all information needed are stored in accumulator, I can just overwrite the nums array.

## Solution

```c
int removeDuplicates(int* nums, int numsSize) {
    int nxt = 1;
    int prev = nums[0];
    for(int i = 1;i<numsSize;i++){
        if(nums[i] != prev){
            nums[nxt] = nums[i];
            nxt += 1;
        }
        prev = nums[i];
    }
    return nxt;
}
```

## Complexity

- **Time:** $$O(n)$$ where n is length of array


- **Space:** $$O(1)$$

## Thoughts

it was pretty good question I guess. but it was a bit easy for me. I need more challenging one.
