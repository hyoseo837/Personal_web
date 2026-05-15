---
title: "6. Zigzag Conversion"
date: 2025-07-31
category: "leetcode"
topic: "String"
area: "Algorithms"
tags: ["Medium", "String"]
summary: "I apprached this question by thinking i'm actually writing the string with zigzag patterns. so I made a list for each rows, and add one charanter one by one on"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/zigzag-conversion/)

> **Difficulty:** Medium  
> **Tags:** String

## Intuition

this one was definitly much more challenging than easy questions. to focus more on the question itself, I will use python to solve this medium questions.

## Approach

I apprached this question by thinking i'm actually writing the string with zigzag patterns. so I made a list for each rows, and add one charanter one by one on the correct side. and then, I joined them to one sentence. that's all.

## Solution

```python
def nexti(now, prev, nr):
    if(now == 0):
        return 1
    elif(now == (nr-1)):
        return nr-2
    elif(prev > now):
        return now-1
    else:
        return now+1


class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if(numRows == 1):
            return s
        lst = []
        for i in range(numRows):
            lst.append("")
        
        lst[0] = s[0]
        now = 1
        prev = 0

        for k in s[1:]:
            lst[now] += k
            tmp = prev
            prev = now
            now = nexti(now,tmp,numRows)

        return "".join(lst)

```

## Complexity

- **Time:** $$O(n)$$


- **Space:** $$O(n)$$

## Thoughts

this is what i wanted to solve. I'll move on to medium questions using python.
