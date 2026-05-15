---
title: "118. Pascal's Triangle"
date: 2025-04-05
category: "leetcode"
topic: "Dynamic Programming"
area: "Algorithms"
tags: ["Easy", "Array", "Dynamic Programming"]
summary: "Firstly, I focused more on creating the memory thing, using malloc, and then started to put numbers in that. It was building the triangle from the top, so I cou"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/pascals-triangle/)

> **Difficulty:** Easy  
> **Tags:** Array, Dynamic Programming

## Intuition

The first intuition to the problem was that, it seems really challenging. I tried to use combination function and factorials to create the generate function but using factorial was a bad idea. it get too big that integer type could hold. Therefore, I changed it to use the adding method and it worked.

## Approach

Firstly, I focused more on creating the memory thing, using malloc, and then started to put numbers in that. It was building the triangle from the top, so I could access the lower level of the triangle. so I could access the previous level and add two numbers just the gif file shows us.

## Solution

```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int getNum(int** ans, int i, int j){
    int tmp = 0;
    if(j == 0 || j == i){
        return 1;
    }
    return ans[i-1][j-1] + ans[i-1][j];
}

int** generate(int numRows, int* returnSize, int** returnColumnSizes) {
    *returnSize = numRows;
    *returnColumnSizes = malloc(sizeof(int)*numRows);
    int** ans = malloc(sizeof(int*)*numRows);
    for(int i = 0; i < numRows; i++){
        (returnColumnSizes[0])[i] = i+1;
        int* tmp = malloc(sizeof(int) *(i+1));
        for(int j = 0; j < i+1; j++){
            tmp[j] = getNum(ans, i, j);
        }
        ans[i] = tmp;
    }
    return ans;
}
```

## Complexity

- **Time:** $$O(n^2)$$


- **Space:** $$O(n^2)$$

## Thoughts

it was much harder than I think, but I made it. the creating memories for malloc was more challenging than I thought.
