---
title: "88. Merge Sorted Array"
date: 2025-04-04
category: "leetcode"
topic: "Two Pointers"
area: "Algorithms"
tags: ["Easy", "Array", "Two Pointers", "Sorting"]
summary: "Therefore, I decided to build the merged array from the behind. the answer will be build from the biggest number with non-increasing order. this worked well. th"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/merge-sorted-array/)

> **Difficulty:** Easy  
> **Tags:** Array, Two Pointers, Sorting

## Intuition

This one was pretty tricky. I couldn't thought about the solution at the first time. because the condition was interesting. the first array have the space for the merged one. which means when i'm building the merged array, the element can be damaged.

## Approach

Therefore, I decided to build the merged array from the behind. the answer will be build from the biggest number with non-increasing order. this worked well. there are three index holders which hold, where to put, where to bring from nums1 and nums2. Then compare the biggest numbers of those, and put them in to the array's tail.

## Solution

```c
void merge(int* nums1, int nums1Size, int m, int* nums2, int nums2Size, int n) {
    if(n == 0){return;}
    int i = m+n-1;
    int j = m-1;
    int k = n-1;
    while(i >= 0){
        printf("%d",j);
        if(j < 0 || nums1[j] < nums2[k]){
            nums1[i] = nums2[k];
            k--;
        }
        else{
            nums1[i] = nums1[j];
            j--;
        }
        i--;
        if(k < 0){
            return;
        }
    }
}
```

## Complexity

- **Time:** $$O(n+m)$$


- **Space:** $$O(1)$$

## Thoughts

I didn't expected It will work on the first trial. I thought there should be a error that I havn't think about. but it worked really well. I'm genious ^^
