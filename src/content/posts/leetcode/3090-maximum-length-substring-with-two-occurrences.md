---
title: "3090. Maximum Length Substring With Two Occurrences"
date: 2026-06-29
category: "leetcode"
topic: "Easy"
area: "Algorithms"
tags: ["Easy"]
summary: ""
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/)

> **Difficulty:** Easy  
> **Tags:** Mid Level, Hash Table, String, Sliding Window, Weekly Contest 390

## Intuition

I didn't have any clear intuition of this problem, but I just use brute-force solution.

## Approach

brute-force solution.
I go through every character on the string and find longest possible substring that start with that character.
and compared the length of them

## Solution

```python
class Solution:
    def maximumLengthSubstring(self, s: str) -> int:
        max_len = 0
        for i in range(len(s)):
            sub_str = ""
            j = 0
            while i+j<len(s):
                if(sub_str.count(s[i+j]) >= 2):
                    break
                sub_str += s[i+j]
                j += 1
            max_len = max(max_len, len(sub_str))
        return max_len
```

## Complexity

- **Time:** $$O(n^3)$$

- **Space:** $$O(n)$$

## Thoughts

My solution had bad complexity. and it says it can be done in $$O(n)$$.

I do find some inefficiency here because it counts all the characters, even if they are unnecessary. for example, if max_length is already greater than k, last k characters don't need to be calculated. also, if same character appeared 3 times in a row, I only need to count longest before that string and after that string, but I do all of them.
