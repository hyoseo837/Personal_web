---
title: "2221. Find Triangular Sum of an Array"
date: 2025-09-30
category: "leetcode"
topic: "Math"
area: "Algorithms"
tags: ["Medium", "Array", "Math", "Simulation", "Combinatorics", "Number Theory"]
summary: "i used recursion, if the array length is 1, it returns the number. and if else, we do the calculation and reduce the size of array by one."
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/find-triangular-sum-of-an-array/)

> **Difficulty:** Medium  
> **Tags:** Array, Math, Simulation, Combinatorics, Number Theory

## Intuition

the intuition to this problem was too easy. the algorithm was written on the problem, so it was really easy. I could solve it without recursion but I thought this way is much better.

## Approach

i used recursion, if the array length is 1, it returns the number. and if else, we do the calculation and reduce the size of array by one.

## Solution

```python
class Solution:
    def triangularSum(self, nums: List[int]) -> int:
        if(len(nums) == 1):
            return nums[0]
        else:
            newNum = []
            for i in range(len(nums)-1):
                newNum.append((nums[i] + nums[i+1]) % 10)
            return self.triangularSum(newNum)
```

## Complexity

- **Time:** $$O(n^2)$$



- **Space:** $$O(n^2)$$

## Thoughts

using python really make me focus more on the problem, and it made me solve medium question really quickly.
