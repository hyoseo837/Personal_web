---
title: "374. Guess Number Higher or Lower"
date: 2025-07-28
category: "leetcode"
topic: "Binary Search"
area: "Algorithms"
tags: ["Easy", "Binary Search", "Interactive"]
summary: "binary search algorithm works for this problem. guess the middle value and depends on the answer, you update the possible range of the picked number. if there a"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/guess-number-higher-or-lower/)

> **Difficulty:** Easy  
> **Tags:** Binary Search, Interactive

## Intuition

this is just a simple binary search question.

## Approach

binary search algorithm works for this problem.

guess the middle value and depends on the answer, you update the possible range of the picked number. if there are only one element on the possible list, that should be the number.

## Solution

```c
/** 
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * int guess(int num);
 */
int guess(int num);
int guessNumber(int n){
	int min = 1;
    int max = n;
    int mid = min/2 + max/2; 
    int hint;

    while(min < max){
        mid = min/2 + max/2; 
        hint = guess(mid);
        if(hint == -1){
            max = mid-1;
        }
        else if(hint == 1){
            min = mid +1;
        }
        else{
            return mid;
        }
    }
    return min;
}
```

## Complexity

- **Time:** $$O(\log n)$$


- **Space:** $$O(1)$$

## Thoughts

this one was pretty easy and straight forward. I want some challenging and creative question.
