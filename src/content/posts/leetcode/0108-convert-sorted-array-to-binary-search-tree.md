---
title: "108. Convert Sorted Array to Binary Search Tree"
date: 2025-03-06
category: "leetcode"
topic: "Divide and Conquer"
area: "Data Structures"
tags: ["Easy", "Array", "Divide and Conquer", "Tree", "Binary Search Tree", "Binary Tree"]
summary: "As i mentioned from the intuition part, the apprach was pretty simple. I first found out I need to deal with the middle value of the sorted array since It shoul"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)

> **Difficulty:** Easy  
> **Tags:** Array, Divide and Conquer, Tree, Binary Search Tree, Binary Tree

## Intuition

The first thought about the Problem was that 'it might be harder than it seems so'. because when I saw the question first time, I didn't know how to approach the question. since it's binary search tree, and the array is sorted, so I thought I should pick the middle value of the array. But what exact method to do that? was the problem. However, I approaced the problem with simple diagram, and it worked well.

## Approach

As i mentioned from the intuition part, the apprach was pretty simple. I first found out I need to deal with the middle value of the sorted array since It should be height balanced. Than I tried to make the algorithm to use reculsive method to make it more easy. the base case for the reculsion was very strait forward, which is when NumSize is zero, returns null pointer. And the inductive part was much easier. I have struggled for slicing the array, but I've done it pretty well.

## Solution

```c
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
struct TreeNode* sortedArrayToBST(int* nums, int numsSize) {
    if(numsSize <= 0){
        return NULL;
    }
    struct TreeNode* tmp = malloc(sizeof(struct TreeNode));
    tmp->val = nums[(numsSize/2)];
    tmp->left = sortedArrayToBST(nums, numsSize/2);
    tmp->right = sortedArrayToBST(nums+(numsSize/2 + 1), ((numsSize-1)/2));
    return tmp;
}
```

## Complexity

- **Time:** $$O(n)$$ where n is length of array 'nums'


- **Space:** $$O(n)$$ where n is length of array 'nums'

## Thoughts

this problem was little bit different from the first two questions I solved pastly. Unlike those, I needed to think about the solution and required me to draw some diagram to solve it. I liked the question, and I wish I can solve hard questions like this. Nice! XD
