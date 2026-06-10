---
title: "1652. Defuse the Bomb"
date: 2026-06-10
category: "leetcode"
topic: "Easy"
area: "Algorithms"
tags: ["Easy"]
summary: ""
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/defuse-the-bomb/)

> **Difficulty:** Easy  
> **Tags:** Mid Level, Array, Sliding Window, Biweekly Contest 39

## Intuition

This seemed pretty easy because I can just loop through array and find the new value for each.

## Approach

since k is unchanged during the function call, I can just use if statement to determine which algorithm to use.

and it is really straight forward.
i just used double for loop but I could do it in better complexity by removing code[i] from sum and adding code[i+k] to the sum for walking through code.

## Solution

```python
class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        result = []
        n = len(code)
        for i in range(n):
            sum = 0
            if k == 0:
                result.append(0)
            elif k > 0:
                for j in range(k):
                    sum += code[(i+j+1+n)%n]
                result.append(sum)
            else:
                for j in range(-1*k):
                    sum += code[(i-j-1+n)%n]
                result.append(sum)
        return result
```

## Complexity

- **Time:** $$O(n^2)$$

- **Space:** $$O(n)$$

## Thoughts

This one was pretty easy. I didn't actually used sliding window, but It worked.
