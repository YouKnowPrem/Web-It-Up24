import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'x1ztdk1p',
  dataset: 'production',
  apiVersion: '2024-03-06',
  useCdn: false, // Set to false for fresh data
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: any;
  publishedAt: string;
  body?: any[];
  excerpt?: string;
  authorName?: string;
  authorImage?: any;
}

export async function getPosts(): Promise<Post[]> {
  try {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      excerpt,
      "authorName": author->name,
      "authorImage": author->image
    }`;
    const posts = await client.fetch(query);
    return posts || [];
  } catch (error) {
    console.error("Error fetching posts from Sanity:", error);
    return [];
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      body,
      excerpt,
      "authorName": author->name,
      "authorImage": author->image
    }`;
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error);
    return null;
  }
}
