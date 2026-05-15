---
title: "22. Generate Parentheses"
date: 2025-10-06
category: "leetcode"
topic: "Dynamic Programming"
area: "Algorithms"
tags: ["Medium", "String", "Dynamic Programming", "Backtracking"]
summary: "if the parenthesis is correct, each parenthesis must be closed. which means, each closed parenthesis can be replaced with '()', that must be also complete. and"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/generate-parentheses/)

> **Difficulty:** Medium  
> **Tags:** String, Dynamic Programming, Backtracking

## Intuition

I was pretty sure that the solution must deal with recursive function because if it's not, the problem will be super difficult. so I found some patterns from cases where n = 1,2,3 and figure out the answer.

but the method i used is not actually a recursion, it's induction.

## Approach

if the parenthesis is correct, each parenthesis must be closed. which means, each closed parenthesis can be replaced with "()", that must be also complete. and I applied this rule opposite way. we know when n goes 1->2 the only possible option is ()() and (()). therefore, to get to n = 3, we can replaces all the () into ()() or (()) to get all possible answers.

we can apply this to much higher level using for loop. by changeing all possible () into ()() or (()).

## Solution

```python
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        k = 1
        result = ["()"]
        tmpres = set()
        def change(str):
            tmp = []
            for i in range(len(str)-1):
                if(str[i:i+2]) == "()":
                    tmp.append(str[:i] + "()()" + str[i+2:])
                    tmp.append(str[:i] + "(())" + str[i+2:])
            return tmp

        while k != n:
            for j in result:
                tmpres.update(change(j))
            k += 1
            result = list(tmpres)
            tmpres = set()
        

        return result
```

## Complexity

- **Time:** $$O(n*2^n)$$ 


- **Space:** $$O(2^n)$$

## Thoughts

it was pretty okay. I want more question similar with this.
