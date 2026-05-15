---
title: "11. Container With Most Water"
date: 2025-08-01
category: "leetcode"
topic: "Two Pointers"
area: "Algorithms"
tags: ["Medium", "Array", "Two Pointers", "Greedy"]
summary: "it focus on the possibility of growing. I dont' know how to show mathematically, but it works like this. there are two pointers from left and right ends. you ca"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/container-with-most-water/)

> **Difficulty:** Medium  
> **Tags:** Array, Two Pointers, Greedy

## Intuition

I didn't get anything so I googled it and find the solution.

## Approach

it focus on the possibility of growing. I dont' know how to show mathematically, but it works like this.

there are two pointers from left and right ends. you cannot increase the area if you move the bigger one, so you always move the smaller one. then, compare the area and the new one. repeat this process until you find the maximum.

## Solution

```c
int maxArea(int* height, int heightSize) {
    int left = 0;
    int right = heightSize -1;
    int max;
    int tmp;

    if(height[left] > height[right]){
        max = (right - left) * height[right];
    }
    else{
        max = (right - left) * height[left];
    }

    while(right - left > 1){
        if (height[left] > height[right]){
            right -= 1;
        }
        else{
            left += 1;
        }
        if(height[left] > height[right]){
            tmp = (right - left) * height[right];
        }
        else{
            tmp = (right - left) * height[left];
        }

        if (tmp > max){
            max = tmp;
        }
    }
    return max;
}
```

## Complexity

- **Time:** $$O(n)$$ 


- **Space:** $$O(1)$$

## Thoughts

this one was too difficult. I should be able to solve this myself without help of google. ill try.
