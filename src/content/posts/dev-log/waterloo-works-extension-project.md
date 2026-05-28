---
title: "Waterloo Works Extension Project"
date: 2026-05-28
category: "dev-log"
topic: "SaaS Architecture Pivot"
area: "Full-Stack Development"
tags:
  ["chrome-extension", "gemini-api", "supabase", "digitalocean", "ai-agents", "stripe"]
summary: "The technical and strategic journey of transforming a localized, BYOK WaterlooWorks job-matching Chrome extension into a production-grade, monetized SaaS application optimized for AI agent development workflows."
---

I'm going to talk about my on going project, called "Waterloo Works Extension(ww-extension)". It is basically a chrome extension that works on Waterloo Works job search page.

## What is the project?

For some people, who are not familiar with, Waterloo Works is just a platform from University of Waterloo, that enables UoW co-op students to connect different companies looking for applicants. So basically it is just a job searching platform for UoW co-op students.

What this ww-extension do is adding ai match feature to the website. You can upload your resume, co-op history, and personal preference, then AI will compare it with each job description and returns the fit score. It also allows you to group job posts that are higher that certain threshold, So it really do work for me.

Since there are several hundreds of job posts uploaded to Waterloo Works per cycle, It is a huge work to read them all and compare them with your skills.

## What is special about it?

This was one of my small project, which means I didn't planned for deployment. I designed and created this project to use it myself, maybe my brother if he wants.

Therefore, I designed with BYOK(Bring Your Own Key) model, and put less effort on its security. It was storing those data on 'Local storage' in browser. I didn't even have log in feature for the extension.

After finish creating its first and second version. I realized that this is much useful than I thought. Also, I always thought about project that can be actually monetized, in other words, project that can bring actually money to my account. And I realized This project can be it.

Therefore, I changed the Goal and Vision of the Project. I re-structed The whole structure of the project, with several changes in development method.

## The changes

The biggest change was updating documentation architecture. Before the shift, I was using HTML base plan / implementation / history architecture. I always thought this was inefficient because plan and implementation overlap too much and sometimes they mismatch. So I did some research and applied new architecture which is decision / specs / log architecture. This was much clear structure with no overlap and many references. I'm working on this structure now, and I can feel the efficiency even I used it only few days.

In the project-wise scope, I added new backend server, that manages user account system, payment, and communication with Gemini API server. For someone who maybe curious, it works on DigitalOcean, with Supabase and Google Oauth.

Adding Whiteboard.md was also a small change, but something I like. During development with AI terminal agents, It is sometimes difficult to share ideas about random features to the agents because, most of plans are done by agents after brain dump session, and it feels some mismatch between the on-going phase and new idea that just came out later. Also, sometime the idea is really small so it feels waste of quotas. So I created this whiteboard.md just like whiteboard in the middle of office that can share any ideas or changes.

I wanted to share this, since This was the first project that I felt this might work.
