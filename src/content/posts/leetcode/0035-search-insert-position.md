---
title: "35. Search Insert Position"
date: 2025-03-19
category: "leetcode"
topic: "Binary Search"
area: "Algorithms"
tags: ["Easy", "Array", "Binary Search"]
summary: "The approach to this question is binary search for sorted array. so I used idea of sub-array and offset of that array relative to the original one. and that wor"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/search-insert-position/)

> **Difficulty:** Easy  
> **Tags:** Array, Binary Search

## Intuition

This question is the first question that bring the feeling of coding. it was a bit challenging but I could solve it easily. this is great!

## Approach

The approach to this question is binary search for sorted array. so I used idea of sub-array and offset of that array relative to the original one. and that worked well.

## Solution

```c
int searchInsert(int* nums, int numsSize, int target) {
    int* tmp = nums;
    int tmpSize = numsSize;
    int offset = 0;
    while(tmpSize >= 1){
        if(tmp[tmpSize/2] == target){return offset + (tmpSize/2);}
        if(tmp[tmpSize/2] > target){
            tmpSize = tmpSize/2;
        }
        else{
            tmp = tmp + tmpSize/2 + 1;
            offset += tmpSize/2 + 1;
            tmpSize -= tmpSize/2 + 1;
        }
    }
    return offset;
}
```

## Complexity

- **Time:** $$O(\ln n)$$ where n is length of nums


- **Space:** $$O(1)$$

## Thoughts

yeah, coding genieus is coming!!
