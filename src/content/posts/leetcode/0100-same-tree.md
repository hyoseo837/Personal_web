---
title: "100. Same Tree"
date: 2025-04-04
category: "leetcode"
topic: "Depth-First Search"
area: "Data Structures"
tags: ["Easy", "Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"]
summary: "two trees are identical when their values and two childs are identical. we can use reculsion for that easily."
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/same-tree/)

> **Difficulty:** Easy  
> **Tags:** Tree, Depth-First Search, Breadth-First Search, Binary Tree

## Intuition

it was easy. just use recursion.

## Approach

two trees are identical when their values and two childs are identical. we can use reculsion for that easily.

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
bool isSameTree(struct TreeNode* p, struct TreeNode* q) {
    if(!p && !q){
        return true;
    }
    else if(!p || !q){
        return false;
    }
    else{
        return p->val == q->val && isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
    }
}
```

## Complexity

- **Time:** $$O(n)$$


- **Space:** $$O(n)$$

## Thoughts

Too easy for me now.
