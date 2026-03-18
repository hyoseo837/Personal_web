# Connection Generator Prompt

Use this prompt when you add a new **Thought**, **Project**, or **Taste** to the website and want to generate new entries for `src/data/links.ts`.

---

## The Prompt

**Context:**
I am building a personal website called "The Pattern Web." It uses a force-directed graph to show how my thoughts (philosophy/mindset), projects (code/engineering), and tastes (books/films/games/pokemon) are interconnected. 

**The Schema:**
Connections are stored in `src/data/links.ts` as:
```typescript
{ from: "source-id", to: "target-id", reason: "Short explanation of the link." }
```

**The Axioms of Connection:**
1. **No "Vibey" Links:** Do not connect items just because they "feel" similar. 
2. **Semantic Grounding:** Only connect if they share a specific logical foundation, a technical system, or a direct philosophical influence.
3. **Variable Density:** 
   - If the item is niche or unrelated to the current web, **0 connections is perfectly fine.** 
   - If the item is a **Universal Core Idea** (an axiom that underpins everything), it can and should connect to **7-8 items** or more.
4. **Pruning:** Quality over quantity. Only suggest a connection if the "Reason" is compelling and reveals something deep about the relationship.

**Input Data:**
I have added a new item. 
- **Type:** [Thought / Project / Taste]
- **ID:** "[id-of-new-item]"
- **Details:** [Paste the new item's description and metadata here]

**Existing Items to Compare Against:**
[Paste the contents of src/data/thoughts.ts, projects.ts, and tastes.ts here, or at least the relevant IDs and titles]

**Task:**
Identify high-quality connections for this new item. Output them as TypeScript objects ready to be pasted into my `links` array. If no strong connections exist, output an empty array.
