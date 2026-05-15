---
title: "144. Binary Tree Preorder Traversal"
date: 2025-04-07
category: "leetcode"
topic: "Depth-First Search"
area: "Data Structures"
tags: ["Easy", "Stack", "Tree", "Depth-First Search", "Binary Tree"]
summary: "so, firstly I need to prepare for the memory, so I made a function that counts the of nodes of the tree. than malloc an array that can carry that amount of inte"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/binary-tree-preorder-traversal/)

> **Difficulty:** Easy  
> **Tags:** Stack, Tree, Depth-First Search, Binary Tree

## Intuition

This one was very straight forward. I know the concept of preorder treveral, so it was easy to understand the question. And I directly bring up the solution of past question, which holds the inserting index. it worked super well on this question.

## Approach

so, firstly I need to prepare for the memory, so I made a function that counts the # of nodes of the tree. than malloc an array that can carry that amount of integers. Then, I also prepared for an index holder so the code can put the integer on the "next" place. then, it follows the preorder traversal and put the value in the right place. boom!

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
 */

int treeSize(struct TreeNode* root){
    if(!root){
        return 0;
    }
    return treeSize(root->left) + treeSize(root->right) + 1;
}

void ptHelp(struct TreeNode* root,int* ans, int* i){
    if(!root){
        return;
    }
    ans[(*i)] = root->val;
    *i = *i + 1;
    ptHelp(root->left , ans, i);
    ptHelp(root->right, ans, i);
}

int* preorderTraversal(struct TreeNode* root, int* returnSize) {
    *returnSize = treeSize(root);
    int* ans = malloc(sizeof(int)* (*returnSize));
    int* i = malloc(sizeof(int));
    *i = 0;
    ptHelp(root, ans, i);
    return ans;
}
```

## Complexity

- **Time:** $$O(n)$$ where n is # of nodes of tree


- **Space:** $$O(n)$$ where n is # of nodes of tree

## Thoughts

the question was good, but too similar with inorder traversal question. the postorder treversal question will have almost same solution except the order of calling ptHelp function.
