---
title: "392. Is Subsequence"
date: 2025-07-29
category: "leetcode"
topic: "Dynamic Programming"
area: "Algorithms"
tags: ["Easy", "Two Pointers", "String", "Dynamic Programming"]
summary: "on the question, it explains the subsequence is just same list with some deleted characters. so I go through the string and comparing them while ignoring delete"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/is-subsequence/)

> **Difficulty:** Easy  
> **Tags:** Two Pointers, String, Dynamic Programming

## Intuition

this shares a similar vibe with the previous question, but you cannot use bit manipulation on this one. however you can think about the solution easily.

## Approach

on the question, it explains the subsequence is just same list with some deleted characters.

so I go through the string and comparing them while ignoring deleted ones. if the s string ends first, it means s is subsequence of t. however, if t string ends first, it means it fail to find the next letter of s so it means it's not subsequence.

## Solution

```c
bool isSubsequence(char* s, char* t) {
    int ptrs = 0;
    int ptrt = 0;
    while(true){
        if(s[ptrs] == '\0'){return true;}
        if(t[ptrt] == '\0'){return false;}
        if(s[ptrs] == t[ptrt]){
            ptrs++;
            ptrt++;
        }
        else{
            ptrt++;
        }
    }
}
```

## Complexity

- **Time:** $$O(m)$$


- **Space:** $$O(1)$$

## Thoughts

I guess the difficulty of the problem was good, but I solved it to fast. I need more challenging problem.
