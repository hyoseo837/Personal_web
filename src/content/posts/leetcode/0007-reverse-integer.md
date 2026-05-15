---
title: "7. Reverse Integer"
date: 2025-08-01
category: "leetcode"
topic: "Math"
area: "Algorithms"
tags: ["Medium", "Math"]
summary: "first, I extract its negative sign, and make a reversing function. and then, it manage the errors that can occur becuase of overflow."
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/reverse-integer/)

> **Difficulty:** Medium  
> **Tags:** Math

## Intuition

this one seemed easy but it was more complicated than I thought. and this question. it seemed it would be easier to solve if I use C so i solved it with C.

## Approach

first, I extract its negative sign, and make a reversing function. and then, it manage the errors that can occur becuase of overflow.

## Solution

```c
int reverse(int x){
    if(x == -2147483648){return 0;}
    bool neg = x < 0;
    if(neg){x *= -1;}
    int ans = 0;
    while(x>0){
        if(ans > 214748364){
            printf("%d , %d\n", ans, x);
            return 0;
        }
        else if(ans == 214748364){
            if(x > 7){
                return 0;
            }
        }
        ans *= 10;
        ans += x % 10;
        x = x/10;
    }
    if(neg){ans *= -1;}
    return ans;
}
```

## Complexity

- **Time:** $$O(\log n)$$


- **Space:** $$O(1)$$

## Thoughts

this might should be easy level problem i guess.
