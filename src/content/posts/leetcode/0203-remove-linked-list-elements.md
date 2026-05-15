---
title: "203. Remove Linked List Elements"
date: 2025-04-15
category: "leetcode"
topic: "Recursion"
area: "Data Structures"
tags: ["Easy", "Linked List", "Recursion"]
summary: "it removes the target value nodes."
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/remove-linked-list-elements/)

> **Difficulty:** Easy  
> **Tags:** Linked List, Recursion

## Intuition

The first intuition of this problem is that it looked pretty easy. it was like practice problem for "intro to computer Science 101" class.

## Approach

it removes the target value nodes.

## Solution

```c
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* removeElements(struct ListNode* head, int val) {
    if(!head){return NULL;}
    if(head->val == val){
        return removeElements(head->next, val);
    }
    if(!(head->next)){
        return head;
    }
    struct ListNode* tmp = head;
    struct ListNode* prev;
    while(tmp){
        printf("%d\n",tmp->val);
        if(tmp->val == val){
            prev->next = tmp->next;
        }
        else{
            prev = tmp;
        }
        tmp = tmp->next;
    }
    return head;
}
```

## Complexity

- **Time:** $$O(n)$$


- **Space:** $$O(n)$$

## Thoughts

good ^^
