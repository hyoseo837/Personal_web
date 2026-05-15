---
title: "338. Counting Bits"
date: 2025-07-25
category: "leetcode"
topic: "Dynamic Programming"
area: "Algorithms"
tags: ["Easy", "Dynamic Programming", "Bit Manipulation"]
summary: "0 --> 0 (0) 1 --> 1 (1) 2 --> 10 (1) 3 --> 11 (2) 4 --> 100 (1) 5 --> 101 (2) 6 --> 110 (2) 7 --> 111 (3) 8 --> 1000 (1) 9 --> 1001 (2) 10--> 1010 (2) 11--> 101"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/counting-bits/)

> **Difficulty:** Easy  
> **Tags:** Dynamic Programming, Bit Manipulation

## Intuition

The problem was perfect. it was thinking base problem, not a coding base problem. and it was a bit challenging. there was a way to solve this problem in coding's perspective. you can solve it by using recursion, or actually count the binary digits of them.

However, I believed that there must be a pattern on the number of ones in it, and i found them mathematically. therefore, I didn't need to loop all the binary digits and find the number of ones, I did simple math to find them.

## Approach

0 --> 0        (0)
1 --> 1        (1)

2 --> 10       (1)
3 --> 11       (2)

4 --> 100      (1)
5 --> 101      (2)
6 --> 110      (2)
7 --> 111      (3)

8 --> 1000     (1)
9 --> 1001     (2)
10--> 1010     (2)
11--> 1011     (3)
12--> 1100     (2)
13--> 1101     (3)
14--> 1110     (3)
15--> 1111     (4)

16--> 10000     (1)

I made a list about it and shows some pattens in them.
when the number of digits increase, it come back to 1. and if you think without the first digit, it's just repetition of binary from 0 to $$n^2-1$$.
therefore, i made some pointer stuff to track this pattern. which is max and k approach. it works well and fast.

## Solution

```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* countBits(int n, int* returnSize) {
    *returnSize = n + 1;
    int* ans = malloc(sizeof(int)*(n+1));

    int max = 2;
    int k = 0;

    for(int i = 0; i <= n ; i++){
        if(i == 0){
            ans[i] = 0;
        }
        else if(i == 1){
            ans[i] = 1;
        }
        else{
            if(i == max){
                max = max * 2;
                k = 0;
            }
            ans[i] = ans[k] + 1;
            k++;

        }
    }
    return ans;
}
```

## Complexity

- **Time:** $$O(n)$$


- **Space:** $$O(n)$$

## Thoughts

the solution is wonderful and awesome.
