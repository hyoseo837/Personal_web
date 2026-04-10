---
title: "Example Post: Testing the UI"
date: 2026-03-21
category: "dev-log"
topic: "UI Testing"
area: "Web Development"
tags: ["Astro", "Tailwind", "Markdown"]
summary: "A comprehensive test of the blog's UI, showcasing various Markdown features including tables, code blocks, and typography."
related: []
---

# UI Testing: Exploring Markdown Features

This post is designed to test how different Markdown elements are rendered in our new Astro blog. We'll look at everything from basic text formatting to complex elements like tables and code blocks.

## 1. Typography and Lists

It's _important_ to have clear, readable text. Here’s an example of an unordered list:

- **Bold text** for emphasis.
- _Italicized text_ for subtle hints.
- Combined **_bold and italic_** for maximum impact.
- ~~Strikethrough~~ to show what's changed.

And an ordered list to show hierarchy:

1.  Research the problem.
2.  Develop a strategy.
3.  Execute the plan.
4.  Validate the results.

## 2. Blockquotes

> "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle."
>
> — _Steve Jobs_

## 3. Code Blocks

We use Prism or Shiki (default in Astro) for syntax highlighting. Here's a TypeScript example:

```typescript
interface Post {
  title: string;
  date: Date;
  category: string;
}

function getSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

console.log(getSlug("Example Post")); // "example-post"
```

## 4. Tables

Tables are useful for presenting structured data.

| Feature  | Support | Notes           |
| :------- | :-----: | :-------------- |
| Markdown |   Yes   | Native support  |
| Math     |  Maybe  | Needs plugin    |
| Tables   |   Yes   | GFM enabled     |
| Images   |   Yes   | Markdown syntax |

## 5. Images

Images should have rounded corners and subtle shadows as per our `PostLayout`.

![Placeholder Image](https://picsum.photos/seed/blog/1200/600)

## 6. Math (LaTeX)

For now, this is how plain math notation looks without a plugin:

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0\left(\mathbf{J} + \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}\right)
\end{aligned}
$$

In-line math: $a^2 + b^2 = c^2$.

---

### Conclusion

The blog seems to be handling these elements well. The typography is balanced, and the spacing between elements feels natural.
