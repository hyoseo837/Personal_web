import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Extracts a clean slug from a post's ID.
 * Astro v6 IDs for the glob loader include the extension (e.g., 'TIL/post.md').
 * This extracts 'post' from 'TIL/post.md'.
 */
export function getSlugFromId(id: string): string {
  return id.split('/').pop()?.split('.').shift() || id;
}

/**
 * Get all categories from existing posts.
 */
export async function getAllCategories(): Promise<string[]> {
  const posts = await getCollection('posts');
  const categories = posts.map(post => post.data.category);
  return [...new Set(categories)];
}

/**
 * Get all blog posts, sorted by date (newest first).
 */
export async function getAllPosts(): Promise<CollectionEntry<'posts'>[]> {
  const posts = await getCollection('posts');
  return sortPostsByDate(posts);
}

/**
 * Get posts for a specific category, sorted by date (newest first).
 */
export async function getPostsByCategory(category: string): Promise<CollectionEntry<'posts'>[]> {
  const posts = await getCollection('posts', ({ data }) => {
    return data.category === category;
  });
  return sortPostsByDate(posts);
}

/**
 * Sorts an array of posts by their date (newest first).
 */
export function sortPostsByDate(posts: CollectionEntry<'posts'>[]): CollectionEntry<'posts'>[] {
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Matches [[target]] and [[target|alias]] in raw markdown. */
const WIKI_LINK = /\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g;

/**
 * Posts whose body links to the given slug via [[wiki-link]].
 * Resolution mirrors pageResolver in astro.config.mjs: spaces to hyphens,
 * compared case-insensitively.
 */
export async function getBacklinks(slug: string): Promise<CollectionEntry<'posts'>[]> {
  const target = slug.toLowerCase();
  const posts = await getCollection('posts');

  const linking = posts.filter((post) => {
    if (getSlugFromId(post.id).toLowerCase() === target) return false; // never self-link
    const body = post.body ?? '';
    for (const match of body.matchAll(WIKI_LINK)) {
      if (match[1].trim().replace(/\s+/g, '-').toLowerCase() === target) return true;
    }
    return false;
  });

  return sortPostsByDate(linking);
}

/**
 * Format a date consistently across the blog.
 */
export function formatDate(date: Date): string {
  // Frontmatter dates like `2026-06-29` parse as UTC midnight. Formatting them
  // in the build machine's local zone shifts every date back a day west of UTC,
  // so pin to UTC and keep output independent of where the site is built.
  return date.toLocaleDateString('en-CA', { timeZone: 'UTC' });
}
