---
title: "1039. Minimum Score Triangulation of Polygon"
date: 2025-09-30
category: "leetcode"
topic: "Dynamic Programming"
area: "Algorithms"
tags: ["Medium", "Array", "Dynamic Programming"]
summary: "the apprach was correct. you must divide the big problem into sub problems, and solve them. so if you choose one triangle from a polygon, the rest part will be"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/)

> **Difficulty:** Medium  
> **Tags:** Array, Dynamic Programming

## Intuition

the intuition was pretty straight forward but the problem was optimizing it. most of the key information was written on the hint but it was really difficult to find the best k that makes it faster. I choosed the way that testing every possible k and find the best one but it took so much time. and I got some help from internet and it gave me some lesson.

## Approach

the apprach was correct. you must divide the big problem into sub problems, and solve them. so if you choose one triangle from a polygon, the rest part will be smaller polygon. you can repeat this process until all polygons are triangle. this is the basic idea of the program. to make the recursion easier, create a help function that opperates the same thing with indexes. and then try all possible k and find the best thing.

## Solution

```python
class Solution:
    def minScoreTriangulation(self, values: List[int]) -> int:
        @lru_cache(None)
        def help(i,j):
            if i + 2 > j:
                return 0
                
            res = float('inf')
            for k in range(i+1, j):
                res = min(res, values[i]*values[j]*values[k] + help(i,k) + help(k,j))
            
            return res
        
        return help(0, len(values)-1)
```

## Complexity

Thanks to cache functools
- **Time:** $$O(n^3)$$


- **Space:** $$O(n^2)$$

## Thoughts

this problem teached me something. wich is something called functools. The functools module in Python's standard library provides tools for working with higher-order functions and callable objects. that's what google says but the thing i learned is the @cache and @lru_cache

Those make the fucntion do some memoization so it remembers some common input on the memory. so it doesn't need to do the whole process again. and also the list is not hashable so you need to create a helpfunction with indeces.

I guess I will use those functools a lot to optimize my solution.
