---
title: "1984. Minimum Difference Between Highest and Lowest of K Scores"
date: 2026-06-13
category: "leetcode"
topic: "Easy"
area: "Algorithms"
tags: ["Easy"]
summary: ""
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/)

> **Difficulty:** Easy  
> **Tags:** Mid Level, Array, Sliding Window, Sorting, Weekly Contest 256

## Intuition

The intuition was straight forward. I needed to exclude one of maximum or minimum from the set, until only k-item left.

However this method has some problems depends on the nums, so I changed into finding minimum max-min value from every possible subset. however we know that happens only when we manage minimum or maximum value, so I only think about removing from front and end of sorted array.

## Approach

1. sort the array
2. look nums[0:k], nums[1:k+1] ... until k reaches the end.
3. since the array is sorted, nums[i+k-1] is the max of the array, and nums[i] is the minimum of the array.
4. find the minimum difference between max and min of those array.
5. return the value found in 4

## Solution

```python
class Solution:
    def minimumDifference(self, nums: List[int], k: int) -> int:
        if len(nums) == k:
            return max(nums) - min(nums)
        nums.sort()
        min_val = nums[-1] - nums[0]
        for i in range(len(nums) - k+1):
            tmp = nums[i+k-1] - nums[i]
            if (tmp < min_val):
                min_val = tmp
        return min_val
```

## Complexity

- **Time:** $$O(n Log(n))$$

- **Space:** $$O(n)$$

## Thoughts

This one was easy one, and I could solve it really quickly.
