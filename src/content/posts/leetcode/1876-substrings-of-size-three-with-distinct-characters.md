---
title: "1876. Substrings of Size Three with Distinct Characters"
date: 2026-06-10
category: "leetcode"
topic: "Easy"
area: "Algorithms"
tags: ["Easy"]
summary: ""
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/)

> **Difficulty:** Easy  
> **Tags:** Mid Level, Hash Table, String, Sliding Window, Counting, Biweekly Contest 53

## Intuition

This question is much easier than previous question. I could do check all the possible substrings of length 3, and it wasn't that slow.

if 3 gets bigger to like 10 or 100, I might do with different method, but for this problem, checking every combination was fine.

## Approach

let i be idex of first element of substring with length 3, and check every possible substring by increasing i by 1.

## Solution

```python
class Solution:
    def countGoodSubstrings(self, s: str) -> int:
        if len(s) < 3:
            return 0

        count = 0
        i = 0
        while i+3 <= len(s):
            if not(s[i] == s[i+1] or s[i] == s[i+2] or s[i+1] == s[i+2]):
                count += 1
            i += 1

        return count
```

## Complexity

- **Time:** $$O(n)$$

- **Space:** $$O(1)$$

## Thoughts

This one was easy.
