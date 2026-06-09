---
title: "3689. Maximum Total Subarray Value I"
date: 2026-06-09
category: "leetcode"
topic: "Medium"
area: "Algorithms"
tags: ["Medium", "Array", "Greedy", "Weekly-Contest-468"]
summary: ""
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/maximum-total-subarray-value-i/)

> **Difficulty:** Medium  
> **Tags:** Array, Greedy, Weekly-Contest-468

## Intuition

This seems little bit complicated, but very simple if you read this problem carefully.

## Approach

The point of this problem is that for each subarray, the possible value is value of the whole array. because it happens when max of subarray = max of array, and min of subarry = min of array.

Therefore, we just need to use that value and multiply by k since there are k subarrays.

## Solution

```Python
class Solution:
    def maxTotalValue(self, nums: List[int], k: int) -> int:
        return (max(nums) - min(nums)) * k

```

## Complexity

- **Time:** $$O(n)$$

- **Space:** $$O(1)$$

## Thoughts

I started this leet code routine for my coding interview preperation. and critical thinking too.
