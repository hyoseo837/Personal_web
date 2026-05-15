---
title: "169. Majority Element"
date: 2025-04-13
category: "leetcode"
topic: "Divide and Conquer"
area: "Algorithms"
tags: ["Easy", "Array", "Hash Table", "Divide and Conquer", "Sorting", "Counting"]
summary: "there is nothing to say about the apprach. just read this wikipedia page. https://en.wikipedia.org/wiki/Boyer%E2%80%93Mooremajorityvotealgorithm"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/majority-element/)

> **Difficulty:** Easy  
> **Tags:** Array, Hash Table, Divide and Conquer, Sorting, Counting

## Intuition

The first intuition to this problem was "How can I solve this?". well, I could count the number of each element from the array, and find the one that is greater than n/2. But that wasn't the problem. The follow up question was do it in O(n) time complexity and O(1) space complexity. the first method must use O(n) space complexity because it must store the number of element in the array for each elements. 

I kept thinking and I saw the discussion board. it said "Boyer-Moore Majority Vote Algorithm is the key". I never heard of it, so I just searched it up. it was interesting and the proof was really straight forward. yep, and the follow up question was all about that.

## Approach

there is nothing to say about the apprach. just read this wikipedia page.
https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm

## Solution

```c
int majorityElement(int* nums, int numsSize) {
    int major;
    int max = 0;
    for(int i = 0; i < numsSize; i++){
        if(max == 0){
            major = nums[i];
            max = 1;
        }
        else if(nums[i] == major){
            max++;
        }
        else{
            max--;
        }
    }
    return major;
}
```

## Complexity

- **Time:** $$O(n)$$


- **Space:** $$O(1)$$

## Thoughts

I usually don't like problems like this. because I will never be able to solve this kind of problem if I don't know the algorithm. However, this one was pretty interesting and I liked it. ^^ nice.
