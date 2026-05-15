---
title: "412. Fizz Buzz"
date: 2025-07-31
category: "leetcode"
topic: "Math"
area: "Algorithms"
tags: ["Easy", "Math", "String", "Simulation"]
summary: "easy approach. just add correct string to the list and return it. to get the correct, string use conditional statements."
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/fizz-buzz/)

> **Difficulty:** Easy  
> **Tags:** Math, String, Simulation

## Intuition

the intuition to this problem was it would be easy. bizz buzz problem is one of the most common problem to test student can use conditional statement. I tried to solve this, but then, I had to make a function that converts integer into string. I don't wanna do such thing, so I just changed into python.

## Approach

easy approach.
just add correct string to the list and return it. to get the correct, string use conditional statements.

## Solution

```python
class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        ans = []
        for i in range(1,n+1):
            if(i%15 == 0):
                ans.append("FizzBuzz")
            elif(i % 3 == 0):
                ans.append("Fizz")
            elif(i%5 == 0):
                ans.append("Buzz")
            else:
                ans.append(str(i))
        return ans
```

## Complexity

- **Time:** $$O(n)$$ 


- **Space:** $$O(n)$$

## Thoughts

I need real questinos.
