---
title: "119. Pascal's Triangle II"
date: 2025-04-05
category: "leetcode"
topic: "Dynamic Programming"
area: "Algorithms"
tags: ["Easy", "Array", "Dynamic Programming"]
summary: "I made two array that does exactly same thing with previous question."
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/pascals-triangle-ii/)

> **Difficulty:** Easy  
> **Tags:** Array, Dynamic Programming

## Intuition

The intuition was pretty easy but it was more than challenging.

## Approach

I made two array that does exactly same thing with previous question.

## Solution

```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* getRow(int rowIndex, int* returnSize) {
    *returnSize = rowIndex+1;
    int* ans = malloc(sizeof(int)*(rowIndex+1));
    int* ans2 = malloc(sizeof(int)*(rowIndex+1));
    for(int i = 1; i <= rowIndex+1; i ++){
        for(int j = 0; j < i; j++){
            if(j == 0 || j == i-1){
                ans[j] = 1;
            }
            else{
                ans[j] = ans2[j-1] +ans2[j];
            }
            
        }
        for(int j = 0; j < i; j++){
            ans2[j] = ans[j];
        }
    }
    return ans;

    
}
```

## Complexity

- **Time:** $$O(n^2)$$


- **Space:** $$O(n^2)$$

## Thoughts

it was pretty challenging. I was tring to solve this problem with only one tmp variable, but I had to use rowIndex-amount of variables.
