---
title: "303. Range Sum Query - Immutable"
date: 2025-07-25
category: "leetcode"
topic: "Array"
area: "Algorithms"
tags: ["Easy", "Array", "Design", "Prefix Sum"]
summary: "I took the easiest apprach. the array is just an array, and the sum finds the sum using for loop."
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/range-sum-query-immutable/)

> **Difficulty:** Easy  
> **Tags:** Array, Design, Prefix Sum

## Intuition

this one is kind of stupid. I tried to solve it with C, but I couldn't. it was memory issue again. i'm having some troble with the array that has dynamic sizes. string problem is same as this problem. my question is do I need to work on this? I don't know. therefore, I just used python and solved it in 30 seconds.

## Approach

I took the easiest apprach. the array is just an array, and the sum finds the sum using for loop.

## Solution

```python
class NumArray:
    arr = []

    def __init__(self, nums: List[int]):
        self.arr = nums
        

    def sumRange(self, left: int, right: int) -> int:
        ans = 0
        for i in range(left, right+1):
            ans += self.arr[i]
        return ans
        


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)
```

## Complexity

- **Time:** - Space complexity:

## Thoughts

I don't like this question
