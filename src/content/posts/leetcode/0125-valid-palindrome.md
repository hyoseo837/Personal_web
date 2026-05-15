---
title: "125. Valid Palindrome"
date: 2025-04-07
category: "leetcode"
topic: "Two Pointers"
area: "Algorithms"
tags: ["Easy", "Two Pointers", "String"]
summary: "The approach to this problem is very intuitive. firstly, the string might contain unnecessary letters such as spaces, quotemark, or colon or something. therefor"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/valid-palindrome/)

> **Difficulty:** Easy  
> **Tags:** Two Pointers, String

## Intuition

it seems very intuitive and easy to solve. and it really was. I was struggled a little bit from the ASCII code thing, but I directly search up the table and figured it out. *its 0-9, not 1-0*

## Approach

The approach to this problem is very intuitive. firstly, the string might contain unnecessary letters such as spaces, quotemark, or colon or something. therefore, we "fix" the string, by fix function. it removes all the characters that is not alphabetical or numerical. then it finds the length of the new string. then, from the beginning and the end, it compares it one by one. boom! you got the answer!

## Solution

```c
int len(char* s){
    int i = 0;
    while(s[i] != '\0'){
        i++;
    }
    return i;
}

void fix(char* s){
    int i = 0;
    int j = 0;
    while (s[i] != '\0'){
        if(s[i] >= 'a' && s[i] <= 'z'){
            s[j] = s[i];
            j++;
        }
        else if(s[i] >= 'A' && s[i] <= 'Z'){
            s[j] = s[i] - 'A' + 'a';
            j++;
        }
        else if(s[i] >= '0' && s[i] <= '9'){
            s[j] = s[i];
            j++;
        }
        i++;
    }
    s[j] = '\0';
}

bool isPalindrome(char* s) {
    fix(s);
    // printf("%s", s);
    int length = len(s);
    for(int i = 0; i < length; i++){
        if(s[i] != s[length - 1 - i]){
            return false;
        }
    }
    return true;
}
```

## Complexity

- **Time:** $$O(n)$$


- **Space:** $$O(1)$$

## Thoughts

this one was pretty easy? but worth doing it. I can feel now it's been much more comfortable for coding interview questions. and das good.
