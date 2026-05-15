---
title: "1518. Water Bottles"
date: 2025-10-02
category: "leetcode"
topic: "Math"
area: "Algorithms"
tags: ["Easy", "Math", "Simulation"]
summary: "i focused on the step of the process. in the problem, there are two big steps. which are drink and exchange.the order of those steps doen't really matter so I p"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/water-bottles/)

> **Difficulty:** Easy  
> **Tags:** Math, Simulation

## Intuition

it was pretty simple and I used recursion to solve this.

## Approach

i focused on the step of the process. in the problem, there are two big steps. which are drink and exchange.the order of those steps doen't really matter so I prioritized the drinking step. so if you have full bottle, you drink it. and if you don't, exchange as much empty bottles you can. this is what my algorithm do and it gives the correct answer. there is a small issue that the recursion is not a tail recursion so it might bring some stack overflow, but it's small.

## Solution

```python
class Solution:
    def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
        def help(full, empty):
            if full != 0:
                return full + help(0, full + empty)
            else:
                if(empty < numExchange):
                    return 0
                else:
                    return help(empty // numExchange, empty % numExchange)
        
        return help(numBottles,0)
```

## Complexity

- **Time:** - Space complexity:

## Thoughts

there is second version of the same problem.
