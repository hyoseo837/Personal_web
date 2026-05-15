---
title: "292. Nim Game"
date: 2025-07-25
category: "leetcode"
topic: "Math"
area: "Algorithms"
tags: ["Easy", "Math", "Brainteaser", "Game Theory"]
summary: "you can definitely win if your friends has only 4 stones left. because if he takes 1, you can take all 3 and win. if he takes 2, you can take all 2 and win. if"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/nim-game/)

> **Difficulty:** Easy  
> **Tags:** Math, Brainteaser, Game Theory

## Intuition

this was actually a math problem. there are no challenge for coding, you just need to think about the way to get the answer mathematically and return exact formula.

## Approach

you can definitely win if your friends has only 4 stones left. because
if he takes 1, you can take all 3 and win.
if he takes 2, you can take all 2 and win.
if he takes 3, you can take the last one and win.
he cannot take neither none or 4, so if you can make your opponent only 4 stones left, you win.

same logic applies on 8 stones.
if he takes 1, you can take all 3 and give him 4 stones.
if he takes 2, you can take all 2 and give him 4 stones.
if he takes 3, you can take the last one and give him 4 stones.

you can use this rule inductivly, and you can find out that you can always win if n = 4k where k is an integer. however in other cases, your opponent will take 1-3 stones and give you 4k stones, and use the same logic.

therefore, the only way to win the game is only when there are 4n stones.

## Solution

```c
bool canWinNim(int n) {
    return n%4;
}
```

## Complexity

- **Time:** $$O(1)$$


- **Space:** $$O(1)$$

## Thoughts

clear approach and clear code.
I liked that thinking process took more time than coding problem, but I hope to get much challenging question.
