---
title: "3100. Water Bottles II"
date: 2025-10-02
category: "leetcode"
topic: "Math"
area: "Algorithms"
tags: ["Medium", "Math", "Simulation"]
summary: "I just followed the steps i mentioned before."
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/water-bottles-ii/)

> **Difficulty:** Medium  
> **Tags:** Math, Simulation

## Intuition

this one took similar approach with previous problem. and it was pretty easier than I thought. this case, you cannot exchange every empty bottles at once so it must be splitted into several steps. so in this case we need to prioritize the exchange process to optimize the problem. because drinking can be done in one step but exchanging doesnt.

## Approach

I just followed the steps i mentioned before.

## Solution

```python
class Solution:
    def maxBottlesDrunk(self, numBottles: int, numExchange: int) -> int:
        def help(full, empty, ne):
            if(empty < ne):
                if full != 0:
                    return full + help(0, full + empty,ne)
                return 0
            else:
                return help(full + 1, empty - ne, ne+1)
                
        return help(numBottles,0,numExchange)
```

## Complexity

- **Time:** $$O(\log n)$$


- **Space:** $$O(1)$$

## Thoughts

it was pretty easier than my thought.
