---
title: "112. Path Sum"
date: 2025-03-15
category: "leetcode"
topic: "Depth-First Search"
area: "Data Structures"
tags: ["Easy", "Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"]
summary: "first, it returns false if the tree is empty. no tree means no path. and if it is leaf and target is the value, it returns true. or, it calls their child for th"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/path-sum/)

> **Difficulty:** Easy  
> **Tags:** Tree, Depth-First Search, Breadth-First Search, Binary Tree

## Intuition

The intuition to this problem was pretty easy. but there was one problem. I tried to make it like first trial, but the base case should be false. I didn't understand but I changed it into better way.

## Approach

first, it returns false if the tree is empty. no tree means no path. and if it is leaf and target is the value, it returns true. or, it calls their child for the reculsion

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

// bool hasPathSum(struct TreeNode* root, int targetSum) {
//     if(targetSum == 0 && !root){return true;}
//     if(targetSum < 0 || !root){return false;}
//     return hasPathSum(root->right, targetSum - root->val) || hasPathSum(root->left, targetSum - root->val);
// }

bool hasPathSum(struct TreeNode* root, int targetSum) {
    if(!root){return false;}
    if(!root->left && !root->right){
        return root->val == targetSum;
    }
    return hasPathSum(root->right, targetSum - root->val) || hasPathSum(root->left, targetSum - root->val);
}
```

## Complexity

- **Time:** $$O(n)$$


- **Space:** $$O(n)$$

## Thoughts

more challanging problems!!
