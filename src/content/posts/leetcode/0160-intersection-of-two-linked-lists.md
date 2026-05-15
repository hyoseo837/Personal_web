---
title: "160. Intersection of Two Linked Lists"
date: 2025-04-07
category: "leetcode"
topic: "Two Pointers"
area: "Data Structures"
tags: ["Easy", "Hash Table", "Linked List", "Two Pointers"]
summary: "https://velog.io/@jw9603/LeetCode-160.-Intersection-of-Two-Linked-Lists"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/intersection-of-two-linked-lists/)

> **Difficulty:** Easy  
> **Tags:** Hash Table, Linked List, Two Pointers

## Intuition

I can definitely say this is the hardest question I've solved. I didn't figure it out how to solve it until I search the problem on google. I had to simplify the problem mathematicaly and combine the two array together. 
I don't even understand why it works. need more work for this.

## Approach

https://velog.io/@jw9603/LeetCode-160.-Intersection-of-Two-Linked-Lists

## Solution

```c
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode *getIntersectionNode(struct ListNode *headA, struct ListNode *headB) {
    struct ListNode* a = headA;
    struct ListNode* b = headB;

    while(a != b){
        if(a){
            a = a->next;
        }
        else{
            a = headB;
        }
        if(b){
            b = b->next;
        }
        else{
            b = headA;
        }
    }
    return a;
}
```

## Complexity

- **Time:** - Space complexity:
