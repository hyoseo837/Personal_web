---
title: "1763. Longest Nice Substring"
date: 2026-06-10
category: "leetcode"
topic: "Easy"
area: "Algorithms"
tags: ["Easy"]
summary: ""
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/longest-nice-substring/)

> **Difficulty:** Easy  
> **Tags:** Mid Level, Hash Table, String, Divide and Conquer, Bit Manipulation, Sliding Window, Biweekly Contest 46

## Intuition

This one was much complex than I thought. It seemed simple, but it was really difficult to find the two pointer method to solve this. I figured out actually it is not the way to solve this, so Took a different approach.

## Approach

One thing I realized that is there is a character don't have it's pair (upper or lower case of itself), it cannot be in the sub string. which means possible substring shoudl be on its left or right.

we can use recursion to approach this method base on this fact.

and if every letter in the string has pair, that is nice and we can return it.

## Solution

```python
class Solution:
    def longestNiceSubstring(self, s: str) -> str:
        if len(s) < 2:
            return ""

        char = set(s)

        for i in range(len(s)):
            if s[i].swapcase() not in char:

                left = self.longestNiceSubstring(s[:i])
                right = self.longestNiceSubstring(s[i+1:])

                if len(left) >= len(right):
                    return left
                else:
                    return right

        return s
```

## Complexity

- **Time:** $$O(n^2)$$

- **Space:** $$O(n)$$

## Thoughts

Divide and conquer method is really important in solving these kind of questions. I'll learn more about them.
