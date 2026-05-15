---
title: "5. Longest Palindromic Substring"
date: 2025-10-03
category: "leetcode"
topic: "Dynamic Programming"
area: "Algorithms"
tags: ["Medium", "Two Pointers", "String", "Dynamic Programming"]
summary: "the approach was simple. I wanted to make it time complexity so I tried to check possible pelindrome that has center on i-th element. as it written on the hint,"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/longest-palindromic-substring/)

> **Difficulty:** Medium  
> **Tags:** Two Pointers, String, Dynamic Programming

## Intuition

this one was a little complex. I needed some time to find the blind point of the question. there is always a hole in the problem that makes it difficult. it's like a trap that makes solver to make mistakes and make the problem difficult. for this question, it was the pelindrome with length of even number.

## Approach

the approach was simple. I wanted to make it $$O(n)$$ time complexity so I tried to check possible pelindrome that has center on i-th element. as it written on the hint, you can determine the pelindrome by checking the same letter was added to start and end of previous pelindrome. so it uses that methods.

however, it is possible to have even length pelindrome, so the loop has to be go though twice. and do the same thing with replacement of i into i and i+1

## Solution

```python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        maxlen = -1
        maxStr = "nope"
        for i in range(len(s)):
            j = 1
            while(i-j >=0) and (i+j < len(s)) and s[i-j] == s[i+j]:
                j += 1
            j -= 1
            if (2*j + 1) > maxlen:
                maxlen = 2*j+1
                maxStr = s[i-j : i+j+1]
        for i in range(len(s)-1):
            ii = i+1
            if s[i] == s[ii]:
                j = 1
                while(i-j >=0) and (ii+j < len(s)) and s[i-j] == s[ii+j]:
                    j += 1
                j -= 1
                if (2*j + 2) > maxlen:
                    maxlen = 2*j+2
                    maxStr = s[i-j : ii+j+1]

        return maxStr
```

## Complexity

- **Time:** $$O(n^2)$$


- **Space:** $$O(1)$$

## Thoughts

it was a bit challenging but I solved it without any solutions and direct hints. i couldn't solve this before, but now i can.
