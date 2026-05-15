---
title: "349. Intersection of Two Arrays"
date: 2025-07-27
category: "leetcode"
topic: "Binary Search"
area: "Algorithms"
tags: ["Easy", "Array", "Hash Table", "Two Pointers", "Binary Search", "Sorting"]
summary: "python has wonderful datatype 'set' that supports all the mathematical functions of set. it uses some hash map method, and it's pretty hard to build it my own o"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/intersection-of-two-arrays/)

> **Difficulty:** Easy  
> **Tags:** Array, Hash Table, Two Pointers, Binary Search, Sorting

## Intuition

yeah, same memory issue. so I just switched to python and solved this.
to do the same thing in c, you should do the same process twice, and on the first time, you findout the size of return array, and second you fill the actual array.

## Approach

python has wonderful datatype 'set' that supports all the mathematical functions of set. it uses some hash map method, and it's pretty hard to build it my own on c.

## Solution

```python
class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        return list(set(nums1).intersection(set(nums2)))
```

## Complexity

~~Who cares about time complexity in python?~~
- **Time:** - Space complexity:

## Thoughts

i feel a bit of guilty. I might had to struggle with memory stuff and solve the problem in C. whatever, that's not what I want to practice now.
