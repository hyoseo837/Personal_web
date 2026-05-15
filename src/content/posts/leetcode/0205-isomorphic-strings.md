---
title: "205. Isomorphic Strings"
date: 2025-04-16
category: "leetcode"
topic: "Hash Table"
area: "Algorithms"
tags: ["Easy", "Hash Table", "String"]
summary: "first, we convert both strings into the list of integers. the same letter will be replaced to the same number. for example, 'FOO' will be '011', and 'BAR' will"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/isomorphic-strings/)

> **Difficulty:** Easy  
> **Tags:** Hash Table, String

## Intuition

This one seemed a bit difficult at first. However, I could think of the solution.I thought I need to make an map from one to another one, but I thought it would be better if the string is converted to universal list if integer. I said it universal since every word that are isomorphic will have the same list of numbers.

## Approach

first, we convert both strings into the list of integers. the same letter will be replaced to the same number. for example, "FOO" will be "011", and "BAR" will be "012". then, "PAPER" will be "01023" and "TITLE" will be "01023".

that is what convert() function do exactly.

then, compare two converted array by one by one.

## Solution

```c
int* convert(char* str, int len){
    int* ans = malloc(sizeof(int)*len);
    for(int i = 0; i < len; i++){
        for(int j = 0; j <= i; j++){
            if(str[j] == str[i]){
                ans[i] = j;
                break;
            }
        }
    }
    return ans;
}

bool isIsomorphic(char* s, char* t) {
    int len = 0;
    while (s[len] != '\0'){
        len++;
    }
    int* tmp = convert(s,len);
    int* tmp2 = convert(t,len);

    for(int i = 0; i<len; i++){
        if(tmp[i] != tmp2[i]){
            return false;
        }
    }

    return true;
}
```

## Complexity

- **Time:** $$O(n^2)$$


- **Space:** $$O(n)$$

## Thoughts

I think this problem was ok. the difficulty was not too easy but easy enough to solve it quickly. there was a little mistake from solving the question, but I realized it quickly and fixed it.
