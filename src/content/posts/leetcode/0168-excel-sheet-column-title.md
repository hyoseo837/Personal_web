---
title: "168. Excel Sheet Column Title"
date: 2025-04-12
category: "leetcode"
topic: "Math"
area: "Algorithms"
tags: ["Easy", "Math", "String"]
summary: "this question sucks. it's not even converting base question. and it is so stupid to solve this with C"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/excel-sheet-column-title/)

> **Difficulty:** Easy  
> **Tags:** Math, String

## Intuition

this question sucks. it's not even converting base question. and it is so stupid to solve this with C


## Solution

```python
class Solution:
  def convertToTitle(self, n: int) -> str:
    return (self.convertToTitle((n - 1) // 26) + chr(ord('A') + (n - 1) % 26)
            if n
            else '')
```

## Complexity

- **Time:** - Space complexity:
