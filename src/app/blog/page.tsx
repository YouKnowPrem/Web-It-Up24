'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getPosts, Post, urlFor } from '@/lib/sanity';

const MOCK_POSTS: Post[] = [
  {
    _id: 'mock-1',
    title: 'The Art of Motion Design in Modern Web Development',
    slug: { current: 'art-of-motion-design-modern-web' },
    excerpt: 'Explore how micro-interactions, custom canvas particles, and smooth transitions elevate digital storytelling and significantly increase user conversions.',
    publishedAt: '2026-06-05T12:00:00.000Z',
    authorName: 'Marcus Chen',
  },
  {
    _id: 'mock-2',
    title: 'Why Next.js and Headless CMS are the Future of Digital Agencies',
    slug: { current: 'nextjs-headless-cms-future-digital-agencies' },
    excerpt: 'A deep-dive into how combining Next.js static generation with Sanity CMS delivers sub-second page loads and seamless content workflows.',
    publishedAt: '2026-05-28T09:30:00.000Z',
    authorName: 'Sarah Jenkins',
  },
  {
    _id: 'mock-3',
    title: 'Designing for the Gen-Z Attention Span',
    slug: { current: 'designing-for-gen-z-attention-span' },
    excerpt: 'How to utilize vibrant, harmonious color palettes, modern typography, and dynamic animations to keep users engaged in a fast-paced environment.',
    publishedAt: '2026-05-15T15:45:00.000Z',
    authorName: 'Elena Rossi',
  }
];

const MOCK_IMAGES = [
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop'
];

const MOCK_AVATARS = [
  'https://i.pravatar.cc/100?img=11',
  'https://i.pravatar.cc/100?img=1',
  'https://i.pravatar.cc/100?img=5'
];

export default function BlogList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const fetchedPosts = await getPosts();
        if (fetchedPosts && fetchedPosts.length > 0) {
          setPosts(fetchedPosts);
        } else {
          // Fallback if Sanity has no posts
          setPosts(MOCK_POSTS);
        }
      } catch (error) {
        console.error("Failed to load posts, using fallbacks:", error);
        setPosts(MOCK_POSTS);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section className="blog-section" data-scroll-section>
      <div className="container">
        <div className="section-header">
          <span className="section-label reveal-up">/ Our Journal</span>
          <h2 className="section-title reveal-up">Insights on Design,<br /><em>Code, & Innovation.</em></h2>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--text-muted)' }}>
            <p className="loading-text" style={{ fontSize: '1.2rem' }}>Fetching thoughts...</p>
          </div>
        ) : (
          <div className="blog-grid">
            {posts.map((post, index) => {
              const imageSrc = post.mainImage 
                ? urlFor(post.mainImage).width(800).url() 
                : MOCK_IMAGES[index % MOCK_IMAGES.length];
              
              const avatarSrc = post.authorImage
                ? urlFor(post.authorImage).width(100).url()
                : MOCK_AVATARS[index % MOCK_AVATARS.length];

              const author = post.authorName || 'WebItUp Writer';

              return (
                <article key={post._id} className="blog-card" data-scroll data-scroll-speed={(index % 2 === 0 ? 0.3 : 0.5).toString()}>
                  <Link href={`/blog/${post.slug.current}`} className="blog-card-img-wrap">
                    <div 
                      className="blog-card-img" 
                      style={{ backgroundImage: `url('${imageSrc}')` }}
                    />
                  </Link>
                  <div className="blog-card-content">
                    <span className="blog-card-meta">{formatDate(post.publishedAt)}</span>
                    <Link href={`/blog/${post.slug.current}`}>
                      <h3>{post.title}</h3>
                    </Link>
                    <p className="blog-card-excerpt">{post.excerpt || 'Read the full article to discover insights.'}</p>
                    <div className="blog-card-footer">
                      <div 
                        className="blog-author-avatar" 
                        style={{ backgroundImage: `url('${avatarSrc}')` }}
                      />
                      <span className="blog-author-name">{author}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
