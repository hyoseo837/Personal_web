---
title: "387. First Unique Character in a String"
date: 2025-07-29
category: "leetcode"
topic: "Hash Table"
area: "Data Structures"
tags: ["Easy", "Hash Table", "String", "Queue", "Counting"]
summary: "I used the easier way to solve this. it uses two while loops to findout it has pair or not. so for each index, it goes trough whole string and find its pair. if"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/first-unique-character-in-a-string/)

> **Difficulty:** Easy  
> **Tags:** Hash Table, String, Queue, Counting

## Intuition

the first intuition to this problem was a bit seemed difficult. I even thought should i solve this in python?. however it wasn't that complicated and I could find a solution.

## Approach

I used the easier way to solve this. it uses two while loops to findout it has pair or not. so for each index, it goes trough whole string and find its pair. if it cannot find it's pair, it's the unique one.

## Solution

```c
int firstUniqChar(char* s) {
    int i = 0;
    int j = 0;

    while(s[i] != '\0'){
        j = 0;
            if(i == j){
                j++;
            }
        while(s[j] != '\0' && s[j] != s[i]){
            j++;
            if(i == j){
                j++;
            }
        }
        if(s[j] == '\0'){
            return i;
        }
        i++;
    }
    return -1;
}
```

## Complexity

- **Time:** $$O(n^2)$$ 


- **Space:** $$O(1)$$

## Thoughts

it was a bit difficult, and I was a bit worried when I submit the solution. I thought i'm gonna get timeover since, I could find the better solution. which is using hashmap, hashtable algorithm. however the answer checker was generous and let me solve this with this shitty code.
