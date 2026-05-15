---
title: "104. Maximum Depth of Binary Tree"
date: 2025-03-04
category: "leetcode"
topic: "Depth-First Search"
area: "Data Structures"
tags: ["Easy", "Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"]
summary: "I used the reculsive method to solve the problem. Firstly, I found the base case, where the the null tree has zero depth, and the depth of a tree is its deepest"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

> **Difficulty:** Easy  
> **Tags:** Tree, Depth-First Search, Breadth-First Search, Binary Tree

## Intuition

This one was seems much eaisier than the symmetric tree question. Also, it actually was. it was easy to think the reculsive mechanism to understand the depth of a tree.

## Approach

I used the reculsive method to solve the problem. Firstly, I found the base case, where the the null tree has zero depth, and the depth of a tree is its deepest child's depth plus one. and it was easy to use that knowledge and convert it into code.

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
int maxDepth(struct TreeNode* root) {
    if(!root){
        return 0;
    }
    else{
        int tmpleft,tmpright;
        tmpleft = maxDepth(root->left);
        tmpright = maxDepth(root->right);
        return tmpleft > tmpright ? tmpleft+1 : tmpright+1;
    }
}
```

## Complexity

it calls maxDepth() function for each node of the tree.
- **Time:** $$O(n)$$ where n is # of Nodes of the root tree.


- **Space:** $$O(n)$$ where n is # of Nodes of the root tree.

## Thoughts

It was easy and it took less than 3 minuites to solve. I probably need more challenging problem that takes like 50 minuites to solve and write about the solution about 10 minuites. it was Great!! XD
