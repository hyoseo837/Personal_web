---
title: "278. First Bad Version"
date: 2025-07-21
category: "leetcode"
topic: "Binary Search"
area: "Algorithms"
tags: ["Easy", "Binary Search", "Interactive"]
summary: "as i mentioned, the binary search algorithm works well. determine the middle value is bad or good, and reduce the size of set more and more. I struggled a bit o"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/first-bad-version/)

> **Difficulty:** Easy  
> **Tags:** Binary Search, Interactive

## Intuition

the intuition to this problem was really straight forward. I should use binary search algorithm. I must find the smallest number that is bad version. and it's perfect to use the algorithm.

## Approach

as i mentioned, the binary search algorithm works well. determine the middle value is bad or good, and reduce the size of set more and more.

I struggled a bit on the memory part. when n is huge, I cannot find the middle value of max and min without adding them and get overflow. I solved this problem by divide them by 2 firstly and then adding them.

## Solution

```c
// The API isBadVersion is defined for you.
// bool isBadVersion(int version);

int firstBadVersion(int n) {
    if(n == 1){return 1;}
    int ans = n/2;
    int max, min;
    max = n;
    min = 0;
    while(max != (min + 1)){
        if(isBadVersion(ans)){
            max = ans;
        }
        else{
            min = ans;
        }
        ans = (max/2) + (min/2);
        if((max&1) && (min&1)){
            ans += 1;
        }
    }
    return max;
}
```

## Complexity

- **Time:** $$O(\ln n)$$


- **Space:** $$O(1)$$

## Thoughts

I'm really satisfied with the difficulty of this question. It would be perfect if it was a bit more challenging, but this was enough.
