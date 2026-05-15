---
title: "101. Symmetric Tree"
date: 2025-03-04
category: "leetcode"
topic: "Depth-First Search"
area: "Data Structures"
tags: ["Easy", "Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"]
summary: "As I said, I decided to break down the prooblem into two different parts. First was fliping one side of the tree, and another part is comparing two trees. if a"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/symmetric-tree/)

> **Difficulty:** Easy  
> **Tags:** Tree, Depth-First Search, Breadth-First Search, Binary Tree

## Intuition

The first intuition about this problem was that it looks pretty easy and there must be a solution that can do this job easily. However, as I think along the problem I couldn't think a brilliant idea to solve the problem. Therefore, I decided to break down the problem in several parts and solve it.

## Approach

As I said, I decided to break down the prooblem into two different parts. First was fliping one side of the tree, and another part is comparing two trees. if a tree is symmetrical, the flipped version of left child tree must be equal to the right child tree of the root tree.

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

struct TreeNode* flip(struct TreeNode* root) {
    if (root){
        struct TreeNode* tmp;
        tmp = root->right;
        root->right = root->left;
        root->left = tmp;
        flip(root->right);
        flip(root->left);
    }
    return root;
}

bool TreeEqual(struct TreeNode* r1,struct TreeNode* r2){
    if (!r1 && !r2){
        return true;
    }
    if (r1 && r2){
        if(r1->val == r2->val){
            return TreeEqual(r1->right, r2->right) && TreeEqual(r1->left, r2->left);
        }
    }
    return false;
}


bool isSymmetric(struct TreeNode* root) {
    struct TreeNode* tmp = flip(root->left);
    return TreeEqual(tmp, root->right);
}
```

## Complexity

I'm pretty sure that my solution is not very optimized and smart solution, so It might have horrible complexity / efficiency.
- **Time:** $$O(n)$$ where n is # of Nodes of the root tree.



- **Space:** $$O(n)$$ where n is # of Nodes of the root tree.

## Thoughts

In one side, It made me think I haven't coded so long time(abt 5months) and my programming skills got too much worse. However, On the other side, I could solve the problem and write a code correctly. I just found out what should I work on from now, and It is pretty positive.
