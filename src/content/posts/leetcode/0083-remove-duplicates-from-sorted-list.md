---
title: "83. Remove Duplicates from Sorted List"
date: 2025-04-04
category: "leetcode"
topic: "Linked List"
area: "Data Structures"
tags: ["Easy", "Linked List"]
summary: "from the beginning, It look at the next node, and it have the same value with current one, it removes the second one. that's all."
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

> **Difficulty:** Easy  
> **Tags:** Linked List

## Intuition

The initial thought to this problem is that it seems easy. and it was.

## Approach

from the beginning, It look at the next node, and it have the same value with current one, it removes the second one. that's all.

## Solution

```c
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* deleteDuplicates(struct ListNode* head) {
    if(!head){return NULL;}
    int now = head->val;
    struct ListNode* tmpNode = head;
    while (tmpNode->next){
        if(tmpNode->next->val == now){
            tmpNode->next = tmpNode->next->next;
        }
        else{
            tmpNode = tmpNode->next;
            now = tmpNode->val;
        }
    }
    return head;
}
```

## Complexity

- **Time:** $$O(n)$$


- **Space:** $$O(1)$$

## Thoughts

I could complete this chalenge without any note, deepthoughts and anything. I'm genious.
