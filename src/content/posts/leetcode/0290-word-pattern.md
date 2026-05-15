---
title: "290. Word Pattern"
date: 2025-07-21
category: "leetcode"
topic: "Hash Table"
area: "Algorithms"
tags: ["Easy", "Hash Table", "String"]
summary: "the first part shows the string has unique pair to pattern and second part shows the pattern has uniqe pair to the string. it works well."
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/word-pattern/)

> **Difficulty:** Easy  
> **Tags:** Hash Table, String

## Intuition

the first intuition looked diffucult but after I changed it into python3, it became way more easier.

## Approach

the first part shows the string has unique pair to pattern and second part shows the pattern has uniqe pair to the string.

it works well.

## Solution

```python
class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        slst = s.split()
        if(len(slst) != len(pattern)):
            return False
        for i in range(len(pattern)):
            if slst[pattern.index(pattern[i])] == slst[i]:
                pass
            else:
                return False;

        for i in range(len(pattern)):
            if pattern[slst.index(slst[i])] == pattern[i]:
                pass
            else:
                return False;

        return True;
```

## Complexity

- **Time:** - Space complexity:

## Thoughts

chaning language into python really makes the problem easier. its difficulty changes like from 8 to 3. I'm not sure is this the right way to study algorithm. should I do them with C? or move to python. to focus on the solving problem part instead of coding part.
