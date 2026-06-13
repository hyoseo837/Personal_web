---
title: "2379. Minimum Recolors to Get K Consecutive Black Blocks"
date: 2026-06-13
category: "leetcode"
topic: "Easy"
area: "Algorithms"
tags: ["Easy"]
summary: ""
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/)

> **Difficulty:** Easy  
> **Tags:** Mid Level, String, Sliding Window, Biweekly Contest 85

## Intuition

This one was also too easy. this was basically the same problem with 2269. but with different words.

All i need to do is counting White blocks in consecutive k-element substring.

## Approach

go through all k-substring of blocks, and find the minimum number of W block in that sub-string.

## Solution

```python
class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        ans = k
        for i in range(len(blocks)-k+1):
            tmp = blocks[i:i+k].count("W")
            if tmp < ans:
                ans = tmp
        return ans
```

## Complexity

- **Time:** $$O(n)$$

- **Space:** $$O(1)$$

## Thoughts

This was too easy. maybe it's time to level up to Medium level
