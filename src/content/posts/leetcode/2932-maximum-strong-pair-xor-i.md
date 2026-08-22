---
title: "2932. Maximum Strong Pair XOR I"
date: 2026-06-29
category: "leetcode"
topic: "Easy"
area: "Algorithms"
tags: ["Easy"]
summary: ""
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/maximum-strong-pair-xor-i/)

> **Difficulty:** Easy  
> **Tags:** Mid Level, Array, Hash Table, Bit Manipulation, Trie, Sliding Window, Weekly Contest 371

## Intuition

the intuition I got was doing brute-force solution, which is testing all possible combination between two element of nums, but I thought that has better solution. However, the hint says the contraint is small enough to try brute-force, so I just solved it that way.

## Approach

even it is a brute-force solution, I found some way to optimize it better, first, I sorted the nums so I can avoid unnecessary comparisons.
and then check if the pair is strong, and fix the max value if it is strong and bigger than previous max.

## Solution

```python
class Solution:
    def maximumStrongPairXor(self, nums: List[int]) -> int:
        nums.sort()
        max_val = 0
        for i in range(len(nums)):
            for j in range(i,len(nums)):
                if nums[j]-nums[i] <= nums[i]:
                    max_val = max(max_val, nums[j]^nums[i])
                else:
                    break
        return max_val
```

## Complexity

- **Time:** $$O(n^2)$$

- **Space:** $$O(1)$$

## Thoughts

This was okay. I didn't solved such problem for a while but it worked well.
