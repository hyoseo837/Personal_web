---
title: "344. Reverse String"
date: 2025-07-27
category: "leetcode"
topic: "Two Pointers"
area: "Algorithms"
tags: ["Easy", "Two Pointers", "String"]
summary: "i could just switch first and last character, and second and second last character, and so on. you don't need to consider whether it has even or odd length, bec"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/reverse-string/)

> **Difficulty:** Easy  
> **Tags:** Two Pointers, String

## Intuition

the first intuition to this problem was also seemed easy.

## Approach

i could just switch first and last character, and second and second last character, and so on.

you don't need to consider whether it has even or odd length, because if it has odd number of characters, the middle one doesn't need to change.

## Solution

```c
void reverseString(char* s, int sSize) {
    char tmp;
    int idx;
    for(int i = 0; i < (sSize/2) ; i++){
        idx = sSize - (i+1);
        tmp = s[i];
        s[i] = s[idx];
        s[idx] = tmp;
    }
    return;
}
```

## Complexity

- **Time:** $$O(n)$$


- **Space:** $$O(1)$$

## Thoughts

I like the problems with contraints. it makes me feel challenge and makes me to try to find more optimal solutino.
