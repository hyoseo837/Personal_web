---
title: "594. Longest Harmonious Subsequence"
date: 2026-06-09
category: "leetcode"
topic: "Easy"
area: "Algorithms"
tags: ["Easy"]
summary: ""
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/longest-harmonious-subsequence/)

> **Difficulty:** Easy  
> **Tags:** Mid Level, Array, Hash Table, Sliding Window, Sorting, Counting

## Intuition

This was a bit more complicated than it's difficulty. Since it was Sliding window problem, so I was thinking about two pointers of the string.

## Approach

here is the approach.

First, sort the array.
Second, bring two pointers i, j. i is fast pointer and j is slow pointer.
i will move forward until num[i] - num[j] gets greater than 1. if this happens move j forward.
update max when num[i] - num[j] is exactly 1.
repeat this until j reaches to the end.

## Solution

```python
class Solution:
    def findLHS(self, nums: List[int]) -> int:
        max_len = 0
        nums.sort()
        i = 0
        j = 0
        while j < len(nums):

            if (nums[i] - nums[j]) == 1:
                max_len = max(max_len, i-j+1)

            if (nums[i] - nums[j]) > 1 or i == len(nums)-1:
                j += 1
            else:
                i += 1

        return max_len

```

## Complexity

- **Time:** $$O(n log(n))$$

- **Space:** $$O(n)$$

## Thoughts

It was much harder than I thought. It was easy question but I wasn't familiar with sliding windows. I'm still not familiar, but I'll try to find a way to get used to it quickly.
