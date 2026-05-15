---
title: "389. Find the Difference"
date: 2025-07-29
category: "leetcode"
topic: "Bit Manipulation"
area: "Algorithms"
tags: ["Easy", "Hash Table", "String", "Bit Manipulation", "Sorting"]
summary: "we know using xor operator, this problem can be solved super easily. mathematically, there are three properties of xor operator that can show this code is the s"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/find-the-difference/)

> **Difficulty:** Easy  
> **Tags:** Hash Table, String, Bit Manipulation, Sorting

## Intuition

the idea of xor came up instictly when I saw this problem.

## Approach

we know using xor operator, this problem can be solved super easily.
mathematically, there are three properties of xor operator that can show this code is the solution.
1. $$0 \oplus A = A $$
2. $$A \oplus B = B \oplus A $$
3. $$A \oplus A = 0 $$

using these properties, you can proove, if you XOR all the element in set, will give you the unique one if there are only one unique element.

## Solution

```c
char findTheDifference(char* s, char* t) {
    int i = 0;
    char tmp = 0;
    while(s[i] != '\0'){
        tmp = tmp ^ s[i];
        i++;
    }
    i = 0;
    while(t[i] != '\0'){
        tmp = tmp ^ t[i];
        i++;
    }
    return tmp;
}
```

## Complexity

- **Time:** $$O(n+m)$$


- **Space:** $$O(1)$$

## Thoughts

using mathematical knowledge in programming question is always awesome.
