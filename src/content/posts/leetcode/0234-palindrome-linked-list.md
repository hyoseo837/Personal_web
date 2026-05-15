---
title: "234. Palindrome Linked List"
date: 2025-06-08
category: "leetcode"
topic: "Two Pointers"
area: "Data Structures"
tags: ["Easy", "Linked List", "Two Pointers", "Stack", "Recursion"]
summary: "my apprach was like this. if we can find the midpoint of the linked list, we only need to reverse the first half and then compare it. it was a bit challenging t"
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/palindrome-linked-list/)

> **Difficulty:** Easy  
> **Tags:** Linked List, Two Pointers, Stack, Recursion

## Intuition

the initial thought to this problem was reversing the original linked list and comparing them. However, the problem says it is possible to solve this problem with $$O(1)$$ space complexity. However my idea needed $$O(n)$$ space complexity because it has to mimic the original linked list in reverse. However, I could find out the way that do not need to create new linked list.

## Approach

my apprach was like this. if we can find the midpoint of the linked list, we only need to reverse the first half and then compare it. it was a bit challenging to figure out how to find the mid point of unknown linked list, and there is a method called fast and slow pointer method. it is making two pointer traverse along the linked list in different speed. if the faster pointer has twice speed of slower one, than slower one will be on the midpoint when the faster one reaches the end. 

Now, we got the half point, and only thing we left is reversing the first half and comparing them with second half. that's what this code does.

## Solution

```c
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
bool isPalindrome(struct ListNode* head) {
    struct ListNode* fast = head;
    struct ListNode* slow = head;
    struct ListNode* prev = NULL;
    struct ListNode* tmp;
    int counter = 2;

    while(fast){
        counter--;
        fast = fast->next;
        if(counter == 0){
            counter = 2;
            tmp = slow->next;
            slow->next = prev;
            prev = slow;
            slow = tmp;
        }
    }

    if(counter == 1){
        slow = slow->next;
    }

    while(slow){
        if(slow->val != prev->val){
            return false;
        }
        slow = slow->next;
        prev = prev->next;
    }
    return true;
}
```

## Complexity

- **Time:** $$O(n)$$


- **Space:** $$O(1)$$
