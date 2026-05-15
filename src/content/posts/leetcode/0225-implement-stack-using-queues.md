---
title: "225. Implement Stack using Queues"
date: 2025-05-03
category: "leetcode"
topic: "Stack"
area: "Data Structures"
tags: ["Easy", "Stack", "Design", "Queue"]
summary: "just created a node struct and made a stack. there's nothing to talk about this. this is so classic."
---

## Problem

[View on LeetCode →](https://leetcode.com/problems/implement-stack-using-queues/)

> **Difficulty:** Easy  
> **Tags:** Stack, Design, Queue

## Intuition

classic question. implement a stack

## Approach

just created a node struct and made a stack.
there's nothing to talk about this. this is so classic.

## Solution

```c
typedef struct node{
    int val;
    struct node* next;
} ;


typedef struct {
    struct node* top;
} MyStack;


MyStack* myStackCreate() {
    MyStack* foo = malloc(sizeof(MyStack));
    foo->top = NULL;
    return foo;
}

void myStackPush(MyStack* obj, int x) {
    struct node* newNode = malloc(sizeof(struct node));
    newNode->val = x;
    newNode->next = obj->top;
    obj->top = newNode;
}

int myStackPop(MyStack* obj) {
    struct node* tmp = obj->top;
    int ans = tmp->val;
    tmp = tmp->next;
    free(obj->top);
    obj->top = tmp;
    return ans; 
}

int myStackTop(MyStack* obj) {
    return obj->top->val;
}

bool myStackEmpty(MyStack* obj) {
    return !(obj->top);
}

void myStackFree(MyStack* obj) {
    while(!myStackEmpty(obj)){
        myStackPop(obj);
    }
}

/**
 * Your MyStack struct will be instantiated and called as such:
 * MyStack* obj = myStackCreate();
 * myStackPush(obj, x);
 
 * int param_2 = myStackPop(obj);
 
 * int param_3 = myStackTop(obj);
 
 * bool param_4 = myStackEmpty(obj);
 
 * myStackFree(obj);
*/
```
