---
title: "219. Contains Duplicate II"
date: 2025-04-19
category: "leetcode"
topic: "Sliding Window"
area: "Algorithms"
tags: ["Easy", "Array", "Hash Table", "Sliding Window"]
summary: "let's say the array is an array of balls that has numbers on them. and trying to find two balls that are close and has the same number. what I can do is take a"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/contains-duplicate-ii/)

> **Difficulty:** Easy  
> **Tags:** Array, Hash Table, Sliding Window

## Intuition

This requires to implement hashtable. I tried to solve this with C, but I don't know how to implement a hashtable. I need a hash function and it didn't worked well. However, Python has its hashtable datatype, which is called set. I used it and it was really easy.

## Approach

let's say the array is an array of balls that has numbers on them. and trying to find two balls that are close and has the same number. what I can do is take a little bag, and put the balls from the beginning. the bag is magical, so it compares if theres a same ball in the bag in O(1) time. then, you can just put the ball from the array, one by one, and the bag can only hold k balls. this is what my code exactly do.

## Solution

```python
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        ht = set([])
        ht.add(nums[0])
        i , j = 0, 0
        while i < len(nums):
            if j - i < k and j < len(nums)-1:
                j += 1
                if(nums[j] in ht):
                    return True
                else:
                    ht.add(nums[j])
            else:
                ht.remove(nums[i])
                i += 1
        return False

```

## Complexity

- **Time:** $$O(n)$$


- **Space:** $$O(k)$$

## Thoughts

There is a reason why python is a advanced programming language. it's slower but have a lot of useful features inside.
