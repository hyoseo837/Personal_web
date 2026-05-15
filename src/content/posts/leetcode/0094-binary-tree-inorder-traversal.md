---
title: "94. Binary Tree Inorder Traversal"
date: 2025-04-04
category: "leetcode"
topic: "Depth-First Search"
area: "Data Structures"
tags: ["Easy", "Stack", "Tree", "Depth-First Search", "Binary Tree"]
summary: "first, I have to find out how long will the answer be, which is number of nodes, so I made count tree function. Then, I tried to make reculsive function, but pu"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/binary-tree-inorder-traversal/)

> **Difficulty:** Easy  
> **Tags:** Stack, Tree, Depth-First Search, Binary Tree

## Intuition

This one was harder than I thought.

## Approach

first, I have to find out how long will the answer be, which is number of nodes, so I made count tree function.
Then, I tried to make reculsive function, but putting value to the array was the problem. because nobody knew where to put the value. I realized that I need one global variable to store the index to put the next value it. this is very clever idea, and can be used in different problems.

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

int countTree( struct TreeNode* root){
    if(!root){return 0;}
    return 1 + countTree(root->left) + countTree(root->right);
}

void inorderHelp ( struct TreeNode* root, int* arr, int* i){
    if(!root){
        return;
    }
    inorderHelp(root->left, arr, i);
    arr[i[0]] = root->val;
    *i = *i + 1;
    inorderHelp(root->right, arr, i);
}

int* inorderTraversal(struct TreeNode* root, int* returnSize) {
    *returnSize = countTree(root);
    int* ans = malloc(sizeof(int) * *returnSize);
    int* i = malloc(sizeof(int));
    *i = 0;
    inorderHelp(root, ans, i);
    return ans;
}
```

## Complexity

- **Time:** $$O(n)$$


- **Space:** $$O(n)$$

## Thoughts

it was really challenging, also it was really meaningful. I found a technique that can be used in different situations. level up!!
