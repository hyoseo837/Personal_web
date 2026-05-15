---
title: "226. Invert Binary Tree"
date: 2025-05-03
category: "leetcode"
topic: "Depth-First Search"
area: "Data Structures"
tags: ["Easy", "Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"]
summary: "using recursion to solve this. flip the left and flip the right and switch left and right. that's all."
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/invert-binary-tree/)

> **Difficulty:** Easy  
> **Tags:** Tree, Depth-First Search, Breadth-First Search, Binary Tree

## Intuition

it seemed easy, and it was easy.

## Approach

using recursion to solve this. flip the left and flip the right and switch left and right. that's all.

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
struct TreeNode* invertTree(struct TreeNode* root) {
    if(!root){return NULL;}
    invertTree(root->left);
    invertTree(root->right);
    struct TreeNode* tmp;
    tmp = root->left;
    root->left = root->right;
    root->right = tmp;
    return root;
}
```

## Complexity

- **Time:** $$O(n)$$


- **Space:** $$O(n)$$
