---
title: "257. Binary Tree Paths"
date: 2025-07-20
category: "leetcode"
topic: "Backtracking"
area: "Data Structures"
tags: ["Easy", "String", "Backtracking", "Tree", "Depth-First Search", "Binary Tree"]
summary: "As i mentioned, I used recursion. case 1 when its empty tree, it returns empty array. case 2 when it is a leaf node, [val] is the output. case 3 else, its addit"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/binary-tree-paths/)

> **Difficulty:** Easy  
> **Tags:** String, Backtracking, Tree, Depth-First Search, Binary Tree

## Intuition

the first thought about this problem is that this should be easy if I use recursive function. However, I still don't get how to handle strings in C. therefore, i changed the language to python and solved it. to handle strings in C, i should manage the length of the string and also the memory. and to figure out the lengtho of the string, i sould calculate them by hand using depth function and max length from root to leaf. I thought this was so stupid and waste of time. that must not be a problem that interviewer want me to think about. therefore, I might use different programming language when i need to handle a string list output. if the problem is about the string (ex. pelindrome) i will solve it with C.

## Approach

As i mentioned, I used recursion. 
### case 1
when its empty tree, it returns empty array.
### case 2
when it is a leaf node, [val] is the output.
### case 3
else, its addition of two list, result for left tree, and right tree and some prefixs of root's value.

## Solution

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

def prefixs(lst: List[str], num: int) -> List[str]:
    for i in range(len(lst)):
        lst[i] = str(num) + '->' + lst[i]
    return lst

class Solution:
    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:
        if root == None:
            return []
        elif (root.left == None) and (root.right == None):
            return [str(root.val)]
        else:
            return prefixs(self.binaryTreePaths(root.left), root.val) + prefixs(self.binaryTreePaths(root.right), root.val)

```

## Complexity

- **Time:** $$O(n)$$ when $$n$$ is # of nodes


- **Space:** $$O(n)$$ when $$n$$ is # of nodes

## Thoughts

I took too much break. I did 50% of the whole military service, so I should restart this routine. I'm not sure this will help me to maintain my coding skills but I'll do it.
