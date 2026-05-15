---
title: "222. Count Complete Tree Nodes"
date: 2025-05-03
category: "leetcode"
topic: "Binary Search"
area: "Data Structures"
tags: ["Easy", "Binary Search", "Bit Manipulation", "Tree", "Binary Tree"]
summary: "the apprach is simple. it is just like counting algorithm for any tree, but it has some additional feature that returns if the tree is fully filled."
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/count-complete-tree-nodes/)

> **Difficulty:** Easy  
> **Tags:** Binary Search, Bit Manipulation, Tree, Binary Tree

## Intuition

It seemed there is beutiful way to count nodes only for complete node. but I couldn't find it. so I got little help from internet.

## Approach

the apprach is simple. it is just like counting algorithm for any tree, but it has some additional feature that returns $$2^h -1$$ if the tree is fully filled.

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


int countNodes(struct TreeNode* root) {
    if(!root){
        return 0;
    }
    struct TreeNode* tmpL = root;
    struct TreeNode* tmpR = root;

    int hL = 1;
    int hR = 1;
    while(tmpL->left){
        tmpL = tmpL->left;
        hL += 1;
    }
    while(tmpR->right){
        tmpR = tmpR->right;
        hR += 1;
    }

    if (hL == hR){
        return pow(2, hL) -1;
    }

    return 1 + countNodes(root->right) + countNodes(root->left);
}
```

## Complexity

- **Time:** $$O(\ln(n)^2)$$


- **Space:** $$O(\ln(n))$$

## Thoughts

this time I overfocused on the fact of "complete tree". I need to focus more on the solution. not the problem and restrictions.
