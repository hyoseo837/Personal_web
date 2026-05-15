---
title: "145. Binary Tree Postorder Traversal"
date: 2025-04-07
category: "leetcode"
topic: "Depth-First Search"
area: "Data Structures"
tags: ["Easy", "Stack", "Tree", "Depth-First Search", "Binary Tree"]
summary: "this is the same question with previous one so I just copy and pasted it. There will be nothing to say about this. if you want more info about this, goto 026.pr"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/binary-tree-postorder-traversal/)

> **Difficulty:** Easy  
> **Tags:** Stack, Tree, Depth-First Search, Binary Tree

## Intuition

this is the same question with previous one so I just copy and pasted it. There will be nothing to say about this.

if you want more info about this, goto 026.preorder Traveral question I solved.


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
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */int treeSize(struct TreeNode* root){
    if(!root){
        return 0;
    }
    return treeSize(root->left) + treeSize(root->right) + 1;
}

void ptHelp(struct TreeNode* root,int* ans, int* i){
    if(!root){
        return;
    }
    ptHelp(root->left , ans, i);
    ptHelp(root->right, ans, i);
    ans[(*i)] = root->val;
    *i = *i + 1;
}

int* postorderTraversal(struct TreeNode* root, int* returnSize) {
    *returnSize = treeSize(root);
    int* ans = malloc(sizeof(int)* (*returnSize));
    int* i = malloc(sizeof(int));
    *i = 0;
    ptHelp(root, ans, i);
    return ans;
    
}
```

## Complexity

- **Time:** $$O(n)$$


- **Space:** $$O(n)$$
