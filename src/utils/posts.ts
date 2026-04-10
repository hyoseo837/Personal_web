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

/**
 * Get related posts for a given post.
 */
export async function getRelatedPosts(
  relatedSlugs: string[] | undefined, 
  allPosts: CollectionEntry<'posts'>[]
): Promise<CollectionEntry<'posts'>[]> {
  if (!relatedSlugs || relatedSlugs.length === 0) return [];
  
  return allPosts.filter(p => {
    const slug = getSlugFromId(p.id);
    return relatedSlugs.includes(slug);
  });
}

/**
 * Format a date consistently across the blog.
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-CA');
}
