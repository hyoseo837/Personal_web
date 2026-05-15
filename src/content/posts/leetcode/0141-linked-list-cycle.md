---
title: "141. Linked List Cycle"
date: 2025-03-15
category: "leetcode"
topic: "Two Pointers"
area: "Data Structures"
tags: ["Easy", "Hash Table", "Linked List", "Two Pointers"]
summary: "for every node on the linked list, it loop through the whole linked list and comparing with the next node of the node I'm looking at.which has horrible time com"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/linked-list-cycle/)

> **Difficulty:** Easy  
> **Tags:** Hash Table, Linked List, Two Pointers

## Intuition

this was pretty challanging problem but it was doable. I solved the problem in the most horrible way possible. but whatever. it worked and I solved it.

## Approach

for every node on the linked list, it loop through the whole linked list and comparing with the next node of the node I'm looking at.which has horrible time complexity.but it does save some memory. that's good.

## Solution

```c
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
bool hasCycle(struct ListNode *head) {
    struct ListNode* tmp = head;
    struct ListNode* foo;

    while(tmp){
        foo = head;
        while(foo != tmp){
            if(tmp->next == foo){return true;}
            foo = foo->next;
        }
        if(tmp->next == foo){return true;}
        tmp = tmp->next;
    }
    return false;
}
```

## Complexity

- **Time:** $$O(n^2)$$


- **Space:** $$O(1)$$

## Thoughts

I don't know this is right way to study programming. should I focus more on the quality of the code? I have no idea.
