---
title: "67. Add Binary"
date: 2025-03-20
category: "leetcode"
topic: "Bit Manipulation"
area: "Algorithms"
tags: ["Easy", "Math", "String", "Bit Manipulation", "Simulation"]
summary: "The second apprach is reversing the binary string. by reversing them, the problem occured from approach 1 is almost solved. because after the reversion, head of"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/add-binary/)

> **Difficulty:** Easy  
> **Tags:** Math, String, Bit Manipulation, Simulation

## Intuition

This question, it seems pretty easy when I saw it first. it was pretty straight forward to understand the question. However this was the most challenging problem in this journey. there were so many things to think about and sometimes annoying to code it.

## Approach

The second apprach is reversing the binary string. by reversing them, the problem occured from approach 1 is almost solved. because after the reversion, head of the string represent the smallest digit. Then we can solve the rest part with carrying and memories. I have some more concerns about memories, but it worked. may be I think too much.

## Solution

```c
int len(char* a){
    int i = 0;
    while(a[i] != '\0'){
        i++;
    }
    return i;
}

char* reverse(char* a){
    int length = len(a);
    char* b = malloc(sizeof(char)*(length+1));
    for(int i = 0; i<length ; i++){
        b[i] = a[length-(i+1)];
    }
    b[length] = '\0';
    return b;
}

char* rmZeros(char* a){
    int i = 0;
    while(a[i] == '0'){
        i++;
    }
    return a+i;
}

char* addBinary(char* a, char* b) {

    if(a[0] == '0'){return b;}
    if(b[0] == '0'){return a;}

    int lenA = len(a);
    int lenB = len(b);
    int lenAns = (lenA > lenB ? lenA : lenB) + 1;

    char* ans1 = malloc(sizeof(char)*(lenAns+1));

    char* ra = reverse(a);
    char* rb = reverse(b);
    bool carrying = false;
    for(int i = 0; i < lenAns; i++){
        char a1, b1, c1;
        a1 = i < lenA ? ra[i] : '0';
        b1 = i < lenB ? rb[i] : '0';

        if(a1 == '0' && b1 == '0'){
            if(carrying){
                c1 = '1';
                carrying = false;
            }
            else{
                c1 = '0';
                carrying = false;
            }
        }
        else if(a1 == '0' && b1 == '1'){
            if(carrying){
                c1 = '0';
                carrying = true;
            }
            else{
                c1 = '1';
                carrying = false;
            }
        }
        else if(a1 == '1' && b1 == '0'){
            if(carrying){
                c1 = '0';
                carrying = true;
            }
            else{
                c1 = '1';
                carrying = false;
            }
        }
        else if(a1 == '1' && b1 == '1'){
            if(carrying){
                c1 = '1';
                carrying = true;
            }
            else{
                c1 = '0';
                carrying = true;
            }
        }

        ans1[i] = c1;
    }
    ans1[lenAns] = '\0';

    return rmZeros(reverse(ans1));
}
```

## Complexity

- **Time:** $$O(n)$$


- **Space:** $$O(n)$$

## Thoughts

this was the most challenging one. I used almost 40 minuites to solve this problem. this shouldn't be easy question. However, I solved it and it gives me tons of satisfaction. nice.
