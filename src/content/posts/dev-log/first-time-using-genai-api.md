---
title: "First time using GenAI api"
date: 2026-04-09
category: "dev-log"
topic: "Automating PDF Data Extraction with GenAI API"
area: "side-project"
tags: ["GenAI", "API", "PDF", "Python", "automation", "Gemini"]
summary: "A first experience using GenAI API to extract questions from TOPIK exam PDFs. Built an extraction program with an LLM coding agent and automated the process with a bash script."
related: []
---

## Context

I was working on my new semi-project called "simple TOPIK test". Which is litterally simple TOPIK test, that enables others to test their Korean language skills based on TOPIK exam.

This was kind of requested project. My mom studies for Korean language education for foreign students at University. And told me there are so limited opportunity to test their skills. Therefore, she asked me to make something that people can test their Korean skills easily.

Anyway, I made a plan for it. Using LLM seems nice at first, so I asked Gemini to create TOPIK like questions. However the quality of the Problem was aweful. it might be because of the shitty prompt, but I can see the limitation of the Language Model. So I changed my plan.

The new plan was using the old exams. There was some materials you can download from the official TOPIK website. So I just downloaded them all.

## Journey

However, it didn't work well. All the files were PDF, and I couldn't drag the text, since they where image format. Actually I'm not familiar with PDF, so there might be a easier way. Anyway, I decided to use LLM to extract the questions from the exam file.

Well, I could have use other technology such as OCR(optical character recognition), or something related with pdf. However, I wasn't familiar with them and I wanted to try GenAI api. There wasn't specific reason why I choose this method.

After the decision, Programming part was really easy. Because I didn't do it. I'm really into using Gemini CLI while coding these days, so I just let it build the program. It is a great engineer for this kind of job.

I always try to read every code that code agent created if possible. And I found it was really interesting to see the usage of GenAI api. it is litterally just using LLM with extra steps.

here is part of the code it created.

```
    prompt = """
    이 문서는 한국어능력시험(TOPIK) 기출문제 스캔본입니다.
    [조건]
    1. 문서의 표지나 헤더를 분석해서 이 시험의 회차와 TOPIK 급수(I 또는 II)를 파악하여 'exam_info'에 기록할 것.
    ...
    [출력 형식 예시]
    {
        "exam_info": {
            "round_or_year": "제96회",
            "level": "TOPIK I",
            "type": "Reading"
        },
        "questions": [
            {
                "id": 31,
                "direction": "※ [31~33] 무엇에 대한 내용입니까? <보기>와 같이 알맞은 것을 고르십시오.",
                "question_number": "31",
                ...
            },
        ]
    }
    """
```

The most interesting part of the code was converting the response into .json file.

```
data = json.loads(raw_text)
```

It means if AI gives little wrong response, The whole programm won't work. It was kind of funny, but only thing I can do is just praying for not to happen.

Since the LLM coding wasn't that good, I got fmailiar with the code more by editing it by hand.

After that, I created a bash script so I can leave the room while processing, not drag and drop those pdf files for hours.

And It worked pretty well

## What I learned

API sounds really awesome but they are actually same service with some extra steps. However the power of it can be infinite. If I didn't use the API and just use the website, I must stay in front of the computer for 10 hours.

However, it enables me to change it into code, and automatize it. That is really strong point. This time it is just a stupid looking pdf extractor, but it can do more.

_p.s. this is my first dev log so it sucks. I'll get better so wait for me._
