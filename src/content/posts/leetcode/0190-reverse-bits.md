---
title: "190. Reverse Bits"
date: 2025-04-13
category: "leetcode"
topic: "Divide and Conquer"
area: "Algorithms"
tags: ["Easy", "Divide and Conquer", "Bit Manipulation"]
summary: "save each digits in hash, and re-build it."
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/reverse-bits/)

> **Difficulty:** Easy  
> **Tags:** Divide and Conquer, Bit Manipulation

## Intuition

I had no idea about "Bit Manipulation" But I guess this is a good start for learning it. from this I learned simple AND(&), OR(|), left shift(<<), and right shift(>>)

## Approach

save each digits in hash, and re-build it.

## Solution

```c
uint32_t reverseBits(uint32_t n) {
    int hash[32] = {0};
    int i = 0;
    // get the status of each digits into hash
    while(n){
        if(n&1 == 1)
            hash[i] = 1;
        i++;
        n = n >> 1;
    }
    //reform the new number inversely
    uint32_t res = 0;
    for(i=0; i<32; i++){
        res = res << 1;
        res = res|hash[i];
    }
    return res;
}
```

## Complexity

- **Time:** $$O(1)$$


- **Space:** $$O(1)$$

## Thoughts

Good start for learning bit manipulation!
