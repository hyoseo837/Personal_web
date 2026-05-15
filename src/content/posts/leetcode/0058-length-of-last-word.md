---
title: "58. Length of Last Word"
date: 2025-03-19
category: "leetcode"
topic: "String"
area: "Algorithms"
tags: ["Easy", "String"]
summary: "As I described on the intuition part, i made a variable called 'prev', which stores previous character. the initial value of it should be a space, so that s sta"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/length-of-last-word/)

> **Difficulty:** Easy  
> **Tags:** String

## Intuition

the first intuition to this problem is that I should use variable that stores previous character. because new word starts not with a non-space letter, but a non-space letter after a space. with this idea, I could solve this very easily.

## Approach

As I described on the intuition part, i made a variable called 'prev', which stores previous character. the initial value of it should be a space, so that s starting with non-space letter should be recognized as a word. other parts are very straight forward so esay.

## Solution

```c
int lengthOfLastWord(char* s) {
    char prev = ' ';
    int i = 0;
    int ans = 0;
    while(s[i] != '\0'){
        if(s[i] != ' '){
            if(prev == ' '){
                ans = 0;
            }
            ans++;
        }
        prev = s[i];
        i++;
    }
    return ans;
}
```

## Complexity

- **Time:** $$O(n)$$ where n is length of s


- **Space:** $$O(1)$$

## Thoughts

yup. this was easier than 011, but worth problem I think.
