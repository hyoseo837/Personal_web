---
title: "202. Happy Number"
date: 2025-04-15
category: "leetcode"
topic: "Two Pointers"
area: "Algorithms"
tags: ["Easy", "Hash Table", "Math", "Two Pointers"]
summary: "according to the wikipedia, only one and seven are happy number. And I don't know how but, every cycle will contain at least one single digit number. so I loope"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/happy-number/)

> **Difficulty:** Easy  
> **Tags:** Hash Table, Math, Two Pointers

## Intuition

I thought it could be hard problem. to prove some number is un-happy, I have to show that there is an loop in the happy-cycle. which means I have to store all the numbers of the happy cycle. but it is wrong to expect every n will have short happy-cycle.

## Approach

according to the wikipedia, only one and seven are happy number. And I don't know how but, every cycle will contain at least one single digit number. so I looped the function until n is less than 10, and return true only if n is 1 or 7.

## Solution

```c
bool isHappy(int n) {
    if(n<10){
        if (n == 1 || n == 7){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        int foo = n;
        int tmp = 0;
        while (foo > 0){
            tmp += (foo % 10) * (foo % 10);
            foo /= 10;
        }
        return isHappy(tmp);
    }
}
```

## Complexity

- **Time:** The AI says the time complexity is $$O(\log n)$$ but I don't know how to prove.


- **Space:** $$O(\log n)$$ *same with above.*

## Thoughts

I don't know anything about this. I might need more algebra lectures to understand this thingy.
