---
title: "171. Excel Sheet Column Number"
date: 2025-04-13
category: "leetcode"
topic: "Math"
area: "Algorithms"
tags: ["Easy", "Math", "String"]
summary: "it calls the help function. I created the help function to send the length of string as an argument of function. Otherwise, it would increase the complexity by"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/excel-sheet-column-number/)

> **Difficulty:** Easy  
> **Tags:** Math, String

## Intuition

RECURSION!!!

The first intuition to this problem was using recursion. It seemed I can use similar method with factorial function and it worked.

## Approach

it calls the help function. I created the help function to send the length of string as an argument of function. Otherwise, it would increase the complexity by calling O(n) function every loop.

rest are pretty straight forward.

## Solution

```c
int ttmHelp(char* ct, int len){
    printf("%d\n", len);
    if(len == 1){
        return ct[0] - 'A' + 1;
    }
    else{
        return ((ct[0]-'A'+1)* pow(26,len-1)) + ttmHelp(ct + 1 , len -1);
    }
}

int titleToNumber(char* columnTitle) {
    int length = 0;
    while (columnTitle[length] != '\0'){
        length++;
    }
    return ttmHelp(columnTitle, length);
}
```

## Complexity

- **Time:** $$O(n)$$ 


- **Space:** $$O(n)$$

## Thoughts

it was a bit easy to me. I need more harder ones.
