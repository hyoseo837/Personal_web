---
title: "2760. Longest Even Odd Subarray With Threshold"
date: 2026-06-13
category: "leetcode"
topic: "Easy"
area: "Algorithms"
tags: ["Easy"]
summary: ""
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/)

> **Difficulty:** Easy  
> **Tags:** Mid Level, Array, Sliding Window, Weekly Contest 352

## Intuition

This one was much trickier than previous ones, actually on the comments, people says how this problem can be easy.

However i used recursion to make this problem easier.

## Approach

As I said on the intuition, I used recursion to approach this.

1. For the base case, empty array will give 0.
2. Since the subarray cannot contain values that is greater than threshold, if you find one, split it into half and return bigger number between longest length on the left and longest length on the right.
3. If the first value of array is odd, we cannot use it. so get rid of it by calling the same function with nums[1:]
4. Now we have our right condition. l is 0 in this array, and we are looking for biggest r that satisfies the condition. so by increasing r(i in my code) and find out how far it can go
   1. althernate it's evenness and check it has correct parity
   2. increase r by one every step
   3. if r reaches the end, that is the biggest length I can get so return the value of r (actually r-l but l=0 here)
   4. if there is a digit that don't follow the condition, we need to start new counting form that r so call the function again with nums[i:] and compare with what we already got

## Solution

```python
class Solution:
    def longestAlternatingSubarray(self, nums: List[int], threshold: int) -> int:
        if len(nums) == 0:
            return 0
        for i in range(len(nums)):
            if nums[i] > threshold:
                return max(self.longestAlternatingSubarray(nums[0:i],threshold), self.longestAlternatingSubarray(nums[i+1:],threshold))
        if nums[0] % 2 == 1:
            return self.longestAlternatingSubarray(nums[1:], threshold)

        even = 0
        i = 0
        while (nums[i] % 2 == even):
            if even == 1:
                even = 0
            else:
                even = 1
            i += 1
            if i == len(nums):
                return i
        return max(i, self.longestAlternatingSubarray(nums[i:], threshold))
```

## Complexity

- **Time:** $$O(n^2)$$

- **Space:** $$O(n)$$

## Thoughts

Actually I didn't used sliding window approach. but I thought recursion method seemd more reasonable and easier. But AI says with Two pointer approach, I can solve this by $$O(n)$$ complexity. actually I can think of it right now by moving l and r forward, and checking the rules. that will only cost $$O(n)$$ complexity.

here is two pointer code I just made

```python
class Solution:
    def longestAlternatingSubarray(self, nums: List[int], threshold: int) -> int:
        l, r = 0 , 0
        even = 0
        result = 0
        while True:
            print(l,r,result)
            if(l == len(nums)):
                return result
            if(nums[l] > threshold):
                l += 1
                r = l
                continue
            if( nums[l]%2 == 1 ):
                l += 1
                r = l
                continue

            if(r == len(nums)):
                return result
            if(nums[r] > threshold):
                l = r + 1
                r = l
                continue
            if( nums[r] % 2 == even):
                if(even == 0):
                    even = 1
                else:
                    even = 0
                r += 1
                result = max(result, r-l)
            else:
                l = r
                even = 0
```
