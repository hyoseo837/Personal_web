---
title: "2269. Find the K-Beauty of a Number"
date: 2026-06-13
category: "leetcode"
topic: "Easy"
area: "Algorithms"
tags: ["Easy"]
summary: ""
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/find-the-k-beauty-of-a-number/)

> **Difficulty:** Easy  
> **Tags:** Mid Level, Math, String, Sliding Window, Biweekly Contest 78

## Intuition

I also had a great intuition on this problem.

Since I have to use digits, I thought I need to think the number as string, or list.
so I make it a list, and rest were all nice.

## Approach

first, make the num a list with each one-digit elements.
then, get every consecutive k-element substring of that list and get integer value for that.
lastly, check is that number meets the condition, and increase the count.
return the total count will give you the answer

## Solution

```python
class Solution:
    def divisorSubstrings(self, num: int, k: int) -> int:
        num_list = []
        tmp = num
        while tmp:
            num_list.append(tmp%10)
            tmp = tmp//10
        num_list.reverse()

        count = 0
        for i in range(len(num_list)-k+1):
            cur = 0
            for j in range(k):
                cur *= 10
                cur += num_list[i+j]
            if cur == 0:
                pass
            else:
                if num % cur == 0:
                    count += 1
        return count

```

## Complexity

- **Time:** $$O(kn)$$

- **Space:** $$O(n)$$

## Thoughts

This one was also easy. I could see the solution right away, and solve it really quickly. I might getting used to these coding problems.
