---
title: "110. Balanced Binary Tree"
date: 2025-03-10
category: "leetcode"
topic: "Depth-First Search"
area: "Data Structures"
tags: ["Easy", "Tree", "Depth-First Search", "Binary Tree"]
summary: "As I mentioned above, the definition of balanced tree contains the concept of height of a tree inside. therefore, I thought the calculating height was essential"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/balanced-binary-tree/)

> **Difficulty:** Easy  
> **Tags:** Tree, Depth-First Search, Binary Tree

## Intuition

The initial intuition about the problem was not that bad. it was the easy problem, and the question was really straight forward. I must find out the height of its subtrees, so I made a function to get height of a tree.

## Approach

As I mentioned above, the definition of balanced tree contains the concept of height of a tree inside. therefore, I thought the calculating height was essential process to solve this problem, so I made it. other parts was pretty straight forward, comparing height of two children trees. and that's it.

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

int heightOfTree(struct TreeNode* root){
    if(root){
        int lh, rh;
        lh = heightOfTree(root->left);
        rh = heightOfTree(root->right);
        return (lh > rh ? lh : rh)+1;
    }
    return 0;
}

bool isBalanced(struct TreeNode* root) {
    if (!root){return true;}
    int lh,rh;
    lh = heightOfTree(root->left);
    rh = heightOfTree(root->right);
    return (abs(lh-rh) <= 1) && isBalanced(root->left) && isBalanced(root->right);
}
```

## Complexity

- **Time:** $$O(n)$$ where n is # of nodes

- **Space:** $$O(n)$$ where n is # of nodes

## Thoughts

it was pretty easy and I didn't have enough time to solve complicated problems. I will try some medium-level question next time. it might take long time, about 40-50 minuites, but i will try.
