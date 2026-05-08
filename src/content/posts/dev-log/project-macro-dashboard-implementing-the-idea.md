---
title: "Project-Macro dashboard - Implementing the Idea"
date: 2026-05-07
category: "dev-log"
topic: "AI-Assisted Development"
area: "Software Engineering"
tags: ["claude-code", "fastapi", "docker", "deployment", "monetization"]
summary: "Reflecting on the successful deployment of the macro dashboard, the specific phase-based workflow used to guide Claude Code through the implementation, and the upcoming challenges of operations and monetization."
related:
  [
    "After using some cursor.ai",
    "New Project Alert - Highly customizable finance dashboard",
  ]
---

# How the project is going

There are many things I want to talk about but let's start with the current state of the project.

To say the conclusion, the implemenatation is done. Its frontend, backend, database was completed, has all features I want it to have, and they are completely deployed on pubic though my own domain.

You can try it on 'macro.hyoseo.dev'. You need a invite code to create your account, you can use 'BETA2026'.

Next phase of this project will be monetizing I guess but it is not easy part i guess.

there are so many things to talk about monetizing so I will bring this to the end of the page.

before, that I need to explain about the implementation process.

# The implementation.

Honestly, It is hard to say I build this software, becuase of this wonderful technology.

Claude code really did most of the jobs. All I did was just explaining what I want and what need to be fixed from its output.

I really think this will be the whole thing of programmers job, and currently it is.

I'm a bit worried about the case that I don't have access to coding agent, but the fear of falling behind in technology by not using it is greater.

Anyway, even I didn't do any coding in this project, I could find some ways to use the agent well.

Before talking about the tips I found, I need to clarify some points about my situation. I'm I use Claude pro plan so my limit is really tight. Therefore, I couldn't try many methods and compare them. Also, I use VS code and run claude code on the terminal, not using extension. I just found that is more compact, minimal and comfortable for me. Lastly, I found something few days ago that there is some guidelines about agent harness and .md structure. However, I didn't knew them while I was working on this project, so I didn't included any of those tips except /graphify skill.

# How I use claude code

It is really difficult to explain how I use it, so I'll just write this down how I actually work with it.

At the really beginning phase, no codebase, I start with brain-dump session, which is basically chatting with an agent about every aspects of the project.

I like talking about the vision, value and goal of the project with agent, just like explaining my teammate why you should join my project.

The point of my claude code is basically documentizing everything and give them to agent and let them use it if they need it. so documentize the brain dump.

Then move on to the product. explain the product I want, and build a plan.md for each version and feature. At first, my plan.md was only one file, but for context issue, I made them seperate based on the version.

After planning, I always ask the agent to give me an survey about any vauge, missing or unclear points in the plans. I didn't use the word 'survey' to the agent but It gives me a list of questions I need to decide.

After answering the survey, I make the ai to build more specific plans. based on phases. for example, if I'm building a log-in system on my website, it will has something like this

- **phase 1** : create user database
- **phase 2** : create auth endpoints on the api
- **phase 3** : create log-in, sign-in page on the frontend
- **phase 4** : clarify the connection between frontend, backend, and database
- **phase 5** : polish and documentize the changes

**phase run plan** : phase 1 -> phase 2, phase 3(parellel) -> phase 4 -> phase 5

those list was written by me so it is really vague and incorrect. however I know you got the vibe about it. also it creates the run plan for phases, so understanding which phases can be done simultaneously.

I decided to use this phase archietecture because of the usage limit. I can continue the chat session, but I didn't thought that is perfect. so I build a system that can be stoped, continued in any point of the project. and it worked totally well.

Then, the coding phase starts. Since the plan is really specific, I don't need to do anything. what I only do is just watching the agent, and execute some pip or npm command to download new library or packages.

after implementing some feature, I also ask ai to create proper message for git commit.

and repeating this process will bring you the product.

The brain dump session is done only once for a whole project, but it's document remains. and I think that prevents some unnecessary questinos of ai about the project.

# What is next?

This is the hardest part now. My original plan for this project was monetizing it. But there is some questions and problems about it.

Firstly, I'm new to this. If I am correct, to monetize this service, three things has to be done.

1. Marketing, Advertising
2. Making payable service
3. Operations and Compliance

And, I never even tried them before. Especially Marketting is the most complex one. The first reason I like programming and studying is that if I put some effort in, the similar amount of results comes out. However, Marketing is kind of different.
it is possible to spend a lot of money and effort and nobody knows about my product, and also possible to posting a simple video on instagram go viral and everyone knows it. I don't sure that is true but that is what I feel when I talk about marketing.

I might need more consideration about this project about monetizing.
