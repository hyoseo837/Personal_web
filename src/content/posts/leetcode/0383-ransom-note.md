---
title: "383. Ransom Note"
date: 2025-07-28
category: "leetcode"
topic: "Hash Table"
area: "Algorithms"
tags: ["Easy", "Hash Table", "String", "Counting"]
summary: "i still don't know what are ransomNote and magazines are but I thought they are like ingredients and the food. so to make a food of 'aab', you need two 'a' and"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/ransom-note/)

> **Difficulty:** Easy  
> **Tags:** Hash Table, String, Counting

## Intuition

this seemed a lot difficult but I could solve it with my creative solution.

## Approach

i still don't know what are ransomNote and magazines are but I thought they are like ingredients and the food. so to make a food of "aab", you need two 'a' and one 'b' as ingredients. if magazine has those ingredients in any order, you return it true.

therefore, i created a function that checks whether we have ingredient k. and if you find it, you will use it. so we take away one of the k from the ingredient box so that we can also match the number of letters.

then, we check all the letters from ransomNote using the check function we made. if check cannot find it, it returns false.

## Solution

```c
bool check(char k, char* magazine){
    int i = 0;
    while(magazine[i] != '\0'){
        if (magazine[i] == k){
            magazine[i] = ' ';
            return true;
        }
        i++;
    }
    return false;
}

bool canConstruct(char* ransomNote, char* magazine) {
    int ptr1 = 0;
    
    while(ransomNote[ptr1] != '\0'){
        if(check(ransomNote[ptr1] , magazine)){
            ptr1++;
        }
        else{
            return false;
        }
    }
    return true;
}
```

## Complexity

- **Time:** $$O(m*n)$$


- **Space:** :$$O(m*n)$$

## Thoughts

this one was difficult and i found a creative solution, but i cannot explain my solution 100% sure. I expected this code will fail since it took too much time. but it was the solution. i was supprised and i need to work more on programming.
