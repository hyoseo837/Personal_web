---
title: "69. Sqrt(x)"
date: 2025-04-04
category: "leetcode"
topic: "Binary Search"
area: "Algorithms"
tags: ["Easy", "Math", "Binary Search"]
summary: "the apprach is very stupid, but works. it itterate from 1 to the number itself, until the number is greater than target num devided by the number. it works!"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/sqrtx/)

> **Difficulty:** Easy  
> **Tags:** Math, Binary Search

## Intuition

The intuition to this problem was pretty ok. it seems not that hard and it was. I don't think my problem is not optimal, but it still works.

## Approach

the apprach is very stupid, but works. it itterate from 1 to the number itself, until the number is greater than target num devided by the number. it works!

## Solution

```c
int mySqrt(int x) {
    if(x == 0){
        return 0;
    }
    if(x == 1){
        return 1;
    }
    int i = 2;
    while (true){
        if(x/i >= i){
            i++;
        }
        else{
            return i-1;
        }
    }
}
```

## Complexity

- **Time:** $$O(\sqrt n)$$
**AI says it's O(1) but i don't get it **


- **Space:** $$O(1)$$

## Thoughts

it was pretty easy.
