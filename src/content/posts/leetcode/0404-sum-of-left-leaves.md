---
title: "404. Sum of Left Leaves"
date: 2025-07-29
category: "leetcode"
topic: "Depth-First Search"
area: "Data Structures"
tags: ["Easy", "Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"]
summary: "as I said management should be done on the grandpa level node. lets don't think this now and build a base cases for recursion. 1. if root is null -> return 0 2."
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/sum-of-left-leaves/)

> **Difficulty:** Easy  
> **Tags:** Tree, Depth-First Search, Breadth-First Search, Binary Tree

## Intuition

this one seemed a bit complicated because, it should count only left leaves. leaves should have parents so it should be managed on grandpa level node.
but building recursion was not that hard so I could solve this really easily.

## Approach

as I said management should be done on the grandpa level node. lets don't think this now and build a base cases for recursion.

1. if root is null -> return 0
2. if root dont' have child -> idk depends on it's left leaf or not.
3. if root have right child -> apply the same function to right node. the right node itself might have left leaf.
4. if root have left child ->
            i. if left child is leaf -> add its value
            ii. if left child is not a leaf -> call the recursion.

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
int sumOfLeftLeaves(struct TreeNode* root) {
    int ans = 0;
    if(!root){
        return 0;
    }
    if(root->right){
        ans += sumOfLeftLeaves(root->right);
    }
    if(root->left){
        if(root->left->left || root->left->right){
            ans += sumOfLeftLeaves(root->left);
        }
        else{
            ans += root->left->val;
        }
    }
    return ans;
}
```

## Complexity

- **Time:** $$O(n)$$


- **Space:** $$O(n)$$

## Thoughts

this one is pretty difficult and I cannot fully explain why this code is working. I cannot prove it mathematically, but i can show it works step by step.
