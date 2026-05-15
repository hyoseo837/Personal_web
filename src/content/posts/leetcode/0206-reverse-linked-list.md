---
title: "206. Reverse Linked List"
date: 2025-04-16
category: "leetcode"
topic: "Recursion"
area: "Data Structures"
tags: ["Easy", "Linked List", "Recursion"]
summary: "just travel trough linked list and change the next value as you move one."
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/reverse-linked-list/)

> **Difficulty:** Easy  
> **Tags:** Linked List, Recursion

## Intuition

This question would not be easy If I saw it for the first time, but I leared this algorithm in UW CS lecture, therefore I could solve this under 5 minuites.

## Approach

just travel trough linked list and change the next value as you move one.

## Solution

```c
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* reverseList(struct ListNode* head) {
    if(!head){
        return NULL;
    }
    struct ListNode* ans = head;
    struct ListNode* tmp;
    struct ListNode* prev = NULL;
    while(ans){
        tmp = ans->next;
        ans->next = prev;
        prev = ans;
        ans = tmp;
    }
    return prev;
}
```

## Complexity

- **Time:** $$O(n)$$


- **Space:** $$O(1)$$

## Thoughts

This would be one of the most common problem in Algorithm and data structure class.
