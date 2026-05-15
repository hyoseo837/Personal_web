---
title: "12. Integer to Roman"
date: 2025-08-01
category: "leetcode"
topic: "Math"
area: "Algorithms"
tags: ["Medium", "Hash Table", "Math", "String"]
summary: "first i found out the max length of it is 15 so i prepared for a string memory of 16 chars. 1 is for \0 char. then, I build up the roman number one by one. you"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/integer-to-roman/)

> **Difficulty:** Medium  
> **Tags:** Hash Table, Math, String

## Intuition

I could solve this pretty easily. it's like i to a but with more digits.

## Approach

first i found out the max length of it is 15 so i prepared for a string memory of 16 chars. 1 is for \0 char.

then, I build up the roman number one by one. you can build it using this conditional statement because roman number always take the biggest digit out. here, we consider 900, 90, 9, 400, 40, 4, as their own digit, so that it can add them.

## Solution

```c
char* intToRoman(int num) {
    char* ans = malloc(sizeof(char)*16);
    int i = 0;
    while (num > 0){
        if(num >= 1000){
            ans[i] = 'M';
            i++;
            num -= 1000;
        }
        else if (num >= 900){
            ans[i] = 'C';
            i++;
            ans[i] = 'M';
            i++;
            num -= 900;
        }
        else if (num >= 500){
            ans[i] = 'D';
            i++;
            num -= 500;
        }
        else if (num >= 400){
            ans[i] = 'C';
            i++;
            ans[i] = 'D';
            i++;
            num -= 400;
        }
        else if (num >= 100){
            ans[i] = 'C';
            i++;
            num -= 100;
        }
        else if (num >= 90){
            ans[i] = 'X';
            i++;
            ans[i] = 'C';
            i++;
            num -= 90;
        }
        else if (num >= 50){
            ans[i] = 'L';
            i++;
            num -= 50;
        }
        else if (num >= 40){
            ans[i] = 'X';
            i++;
            ans[i] = 'L';
            i++;
            num -= 40;
        }
        else if (num >= 10){
            ans[i] = 'X';
            i++;
            num -= 10;
        }
        else if (num >= 9){
            ans[i] = 'I';
            i++;
            ans[i] = 'X';
            i++;
            num -= 9;
        }
        else if (num >= 5){
            ans[i] = 'V';
            i++;
            num -= 5;
        }
        else if (num >= 4){
            ans[i] = 'I';
            i++;
            ans[i] = 'V';
            i++;
            num -= 4;
        }
        else{
            ans[i] = 'I';
            i++;
            num -= 1;
        }
    }
    ans[i] = '\0';
    return ans;
}
```

## Complexity

- **Time:** $$O(n)$$


- **Space:** $$O(1)$$

## Thoughts

using this much else if statement seems ugly and stupid, but it is really strong. and for this kind of problem, it is essntial.
