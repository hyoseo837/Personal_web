---
title: "111. Minimum Depth of Binary Tree"
date: 2025-03-15
category: "leetcode"
topic: "Depth-First Search"
area: "Data Structures"
tags: ["Easy", "Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"]
summary: "I also used reculsive algorithm to this problem, just like others. I love reculsive functions. in this case, the function should return 1 when the tree is the l"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/minimum-depth-of-binary-tree/)

> **Difficulty:** Easy  
> **Tags:** Tree, Depth-First Search, Breadth-First Search, Binary Tree

## Intuition

The first intuition to this problem is pretty good. it seems easy and looked similar to the other problem I solved previously.

## Approach

I also used reculsive algorithm to this problem, just like others. I love reculsive functions. in this case, the function should return 1 when the tree is the leaf node. which means the function should look at the child of the tree unlike the height function. and it worked perfectly well.

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
int minDepth(struct TreeNode* root) {
    if(!root){
        return 0;
    }
    if(!root->right && !root->left){
        return 1;
    }
    if(!root->right){
        return 1 + minDepth(root->left);
    }
    if(!root->left){
        return 1 + minDepth(root->right);
    }
    else {
        int tmp1,tmp2;
        tmp1 =  minDepth(root->left);
        tmp2 = minDepth(root->right);
        return  (tmp1 > tmp2 ? tmp2 : tmp1)+1;
    }
}
```

## Complexity

- **Time:** $$O(n)$$ where n is # of nodes


- **Space:** $$O(n)$$ where n is # of nodes

## Thoughts

nothing. I need more challenging problems!!!
