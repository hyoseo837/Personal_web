---
title: "345. Reverse Vowels of a String"
date: 2025-07-27
category: "leetcode"
topic: "Two Pointers"
area: "Algorithms"
tags: ["Easy", "Two Pointers", "String"]
summary: "to solve this problem, i used two pointer approach. there are two pointers on the string, one starts from the front and the other starts from the back. they bot"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/reverse-vowels-of-a-string/)

> **Difficulty:** Easy  
> **Tags:** Two Pointers, String

## Intuition

this one was similar problem with previous one but with extra steps. first it doesn't tells you how long is the string, and second, you should find only vowels and switch them.

## Approach

to solve this problem, i used two pointer approach. there are two pointers on the string, one starts from the front and the other starts from the back. they both move towards center, and when they find vowel, they swich them. when one finds vowel, other one wait for the other one to find a vowel, so we can garuntee, that first vowel will be switched to the first last vowel, and second vowel will be switched to the second last vowel and so on.

other parts works exactly same with previous question. and you can understand it instictively.

that's all.

## Solution

```c
bool isVowel(char a){
    if(a<96){a = a|32;}
    return a == 'a' ||  a == 'e' ||  a == 'i' ||  a == 'o' ||  a == 'u';
}


char* reverseVowels(char* s) {
    int len = 0;
    char tmp;
    while(s[len] != '\0'){
        len++;
    }
    int ptr1 = 0;
    int ptr2 = len-1;

    while(ptr1 < ptr2){
        if (isVowel(s[ptr1])){
        }
        else{
            ptr1++;
            continue;
        }

        if(isVowel(s[ptr2])){
            
        }
        else{
            ptr2--;
            continue;
        }

        tmp = s[ptr1];
        s[ptr1] = s[ptr2];
        s[ptr2] = tmp;
        ptr1++;
        ptr2--;
    } 
    return s;
}
```

## Complexity

- **Time:** $$O(n)$$


- **Space:** $$O(1)$$

## Thoughts

I guess this one has the most perfect difficulty to me now. maybe not. i want to solve more difficult one. but it was pretty challenging and make me use about 5 minuites to solve this.
