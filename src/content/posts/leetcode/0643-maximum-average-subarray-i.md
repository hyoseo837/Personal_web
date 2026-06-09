---
title: "643. Maximum Average Subarray I"
date: 2026-06-09
category: "leetcode"
topic: "Easy"
area: "Algorithms"
tags: ["Easy"]
summary: ""
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/maximum-average-subarray-i/)

> **Difficulty:** Easy  
> **Tags:** Mid Level, Array, Sliding Window

## Intuition

This was more straight forward than last one. I could see what two pointers should move along the array, and I found it.

## Approach

There are two moving pointers on the array, i and j

i is the pointer to last element of k-subarray, and j is a pointer to the first element of k-subarray.

and in the loop, add new element nums[i] to the total and subtract nums[j] from the total will give you new sum for new subarray.

comparing that with the max value will give you max of total possible subarrays.

## Solution

```python
class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        max_total = float('-inf')
        total = 0
        i = 0
        j = 0
        while i < len(nums):
            total += nums[i]
            i += 1
            if(i-j) > k:
                total -= nums[j]
                j += 1
            print (i,j, total)
            if(i-j) == k:
                max_total = max(total, max_total)
        return max_total / k
```

## Complexity

- **Time:** $$O(n)$$

- **Space:** $$O(1)$$

## Thoughts

I can feel I'm getting more and more familiar with solving such Sliding Window problems.
