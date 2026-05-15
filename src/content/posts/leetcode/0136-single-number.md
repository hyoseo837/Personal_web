---
title: "136. Single Number"
date: 2025-04-07
category: "leetcode"
topic: "Bit Manipulation"
area: "Algorithms"
tags: ["Easy", "Array", "Bit Manipulation"]
summary: "The approach to this problem is more Mathematical. There are four key property of XOR operator to solve this problem. 1. identity of XOR is 0 : 2. XOR is Commut"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/single-number/)

> **Difficulty:** Easy  
> **Tags:** Array, Bit Manipulation

## Intuition

This is fascinating. I had no idea about how to solve this program. the constraint was very strict, which was use constant memory and use linear time. so I saw the hint and search about XOR operator's property.

## Approach

The approach to this problem is more Mathematical. There are four key property of XOR operator to solve this problem.
1. identity of XOR is 0 : $$A \oplus 0 = A$$
2. XOR is Commutative : $$A \oplus B = B \oplus A$$
3. XOR is Associative : $$(A \oplus B) \oplus C = A \oplus (B \oplus C)$$
4. XOR is self-inversive : $$A \oplus A = 0$$

from these property, we can figure it out if you XOR all the element of nums, you can get the unique one.
ex) 
    nums = [3, 7, 3]
    $$3 \oplus 7 \oplus 3$$ (Commutativity)
$$ = 3 \oplus 3 \oplus 7$$ (self-inverse)
$$= 0 \oplus 7 $$ (identity \space of XOR)
$$= 7$$

## Solution

```c
int singleNumber(int* nums, int numsSize) {
    int ans = 0;
    for(int i = 0; i < numsSize; i++){
        ans = ans ^ nums[i];
    }
    return ans;
}
```

## Complexity

- **Time:** - Space complexity:

## Thoughts

I like this question, but I don't like it at the same time. it made me do some mathematical thinking about the XOR operator, and I loved it. However, If i don't know the property of XOR operator, I will never find the solution to this question. And that is pretty annoying.
