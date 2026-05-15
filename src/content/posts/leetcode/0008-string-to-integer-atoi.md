---
title: "8. String to Integer (atoi)"
date: 2025-08-01
category: "leetcode"
topic: "String"
area: "Algorithms"
tags: ["Medium", "String"]
summary: "I followed the instruction from the question. it removes the leading spaces, and find the sign symbol. then, read the number one by one. if wrong letter appears"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/string-to-integer-atoi/)

> **Difficulty:** Medium  
> **Tags:** String

## Intuition

this one was also easy solving with C. only part that I struggled was the edge cases. where you controll the overflows.

## Approach

I followed the instruction from the question. it removes the leading spaces, and find the sign symbol.

then, read the number one by one. if wrong letter appears, it stops reading.
and it manages the edge cases with some if statements.

## Solution

```c
int myAtoi(char* s) {
    while(s[0] == ' '){s = s+1;}
    int sign = 1;
    if(s[0] == '-'){sign = -1;}
    else if(s[0] == '+'){sign = 1;}
    else{s -= 1;}
    s += 1;
    int ans = 0;
    int tmp;
    while(s[0] != '\0'){

        if(s[0] == '1'){tmp = 1;}
        else if(s[0] == '2'){tmp = 2;}
        else if(s[0] == '3'){tmp = 3;}
        else if(s[0] == '4'){tmp = 4;}
        else if(s[0] == '5'){tmp = 5;}
        else if(s[0] == '6'){tmp = 6;}
        else if(s[0] == '7'){tmp = 7;}
        else if(s[0] == '8'){tmp = 8;}
        else if(s[0] == '9'){tmp = 9;}
        else if(s[0] == '0'){tmp = 0;}
        else{
            break;
        }

        if (ans > 214748364){
            return 2147483647;
        }
        if ( ans == 214748364 && tmp > 7){
            return 2147483647;
        }

        if (ans < -214748364){
            return -2147483648;
        }
        if (ans == -214748364 && tmp > 8){
            return -2147483648;
        }

        ans *= 10;
        ans += tmp * sign;
        s += 1;
    }
    return ans;
}
```

## Complexity

- **Time:** $$O(n)$$


- **Space:** $$O(1)$$

## Thoughts

it was pretty easy. I think this one can go to easy level question too.
