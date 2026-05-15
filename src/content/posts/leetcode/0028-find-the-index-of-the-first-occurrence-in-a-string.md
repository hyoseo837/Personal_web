---
title: "28. Find the Index of the First Occurrence in a String"
date: 2025-03-19
category: "leetcode"
topic: "Two Pointers"
area: "Algorithms"
tags: ["Easy", "Two Pointers", "String", "String Matching"]
summary: "The problem was that if you pass the starting point of needle by comparing it with it's tails, the program will never find the needle. therefore, there should b"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)

> **Difficulty:** Easy  
> **Tags:** Two Pointers, String, String Matching

## Intuition

This question was a bit difficult when I saw it for the first time to find a optimal solution. I didn't want it to be O(n^2) complexity. and I thought I could do it by better way. so I tried to make it O(n) complexity but there was a problem. it didn't worked for the first time, and I couldn't find out why. I make a small memory diagram and debug the problem. and then I find out what the problem is.

## Approach

The problem was that if you pass the starting point of needle by comparing it with it's tails, the program will never find the needle. therefore, there should be a method to go back and re-search the starting point. I added that and it worked well.

## Solution

```c
int strStr(char* haystack, char* needle) {
    int ans = -999;
    int i = 0;
    int j = 0;
    while(needle[j] != '\0'){

        if(haystack[i] == '\0'){
            return -1;
        }

        if(haystack[i] == needle[j]){
            if(j == 0){ans = i;}
            j++;
        }
        else{
            i -= j;
            j = 0;
        }
        i++;
    }
    return ans;
}
```

## Complexity

- **Time:** $$O(n*m)$$ where n is length of *Haystack*, m is length of *Needle*


- **Space:** $$O(1)$$

## Thoughts

I believe that this one is pretty good problem. it was hard enough to not solve it quickly, but little thinking gives me the solution. this is good start ^^
