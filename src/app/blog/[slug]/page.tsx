import React from 'react';
import Link from 'next/link';
import { getPost, urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const MOCK_SINGLE_POSTS: Record<string, {
  title: string;
  excerpt: string;
  publishedAt: string;
  authorName: string;
  authorImage: string;
  mainImage: string;
  htmlContent: React.ReactNode;
}> = {
  'art-of-motion-design-modern-web': {
    title: 'The Art of Motion Design in Modern Web Development',
    excerpt: 'Explore how micro-interactions, custom canvas particles, and smooth transitions elevate digital storytelling and significantly increase user conversions.',
    publishedAt: '2026-06-05T12:00:00.000Z',
    authorName: 'Marcus Chen',
    authorImage: 'https://i.pravatar.cc/100?img=11',
    mainImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    htmlContent: (
      <>
        <p>In the digital space, movement is no longer just decorative. It is functional, narrative, and conversion-focused. Premium websites today are not static brochures; they are responsive, living canvases that interact with users in real-time. By utilizing tools like GSAP and Locomotive Scroll, developers can create premium, buttery-smooth interactions that hold attention and guide the eye.</p>
        <h2>Why Motion Matters</h2>
        <p>Great motion design is invisible yet unforgettable. When a user hovers over a button, scrolls past a text block, or waits for a page to load, motion provides feedback. It confirms that the system is responding. Without this feedback, interfaces feel sluggish and dead. Subtle hover scales, custom cursor ripples, and parallax layers make an experience feel alive and premium.</p>
        <blockquote>
          "Motion design is the glue that connects user intent to interface reaction. Without it, the web is just static documents."
        </blockquote>
        <h2>Locomotive Scroll & ScrollTrigger</h2>
        <p>Traditional scrolling updates the browser viewport instantly, which can feel jarring. Smooth scroll libraries interpolate the scroll position, easing the movement. When combined with GSAP's ScrollTrigger, scroll positions are translated into animation timelines. This allows us to scrub animations backward and forward as the user scrolls, creating scroll-bound animations that feel extremely premium and tactile.</p>
        <h2>Performance Considerations</h2>
        <p>Adding motion shouldn't come at the cost of speed. To keep page load times fast, animations should target CSS transforms (like translate, scale, and rotate) and opacity, which are GPU-accelerated. Avoid animating properties that trigger layouts or paints (like width, height, margin, or top/left coordinates). Optimizing canvas elements, debouncing mouse move events, and cleaning up animation frames ensure that motion remains fluid and smooth even on low-end devices.</p>
      </>
    )
  },
  'nextjs-headless-cms-future-digital-agencies': {
    title: 'Why Next.js and Headless CMS are the Future of Digital Agencies',
    excerpt: 'A deep-dive into how combining Next.js static generation with Sanity CMS delivers sub-second page loads and seamless content workflows.',
    publishedAt: '2026-05-28T09:30:00.000Z',
    authorName: 'Sarah Jenkins',
    authorImage: 'https://i.pravatar.cc/100?img=1',
    mainImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
    htmlContent: (
      <>
        <p>Modern digital agencies face a double challenge: delivering award-winning, bespoke designs that load instantly, while giving clients an intuitive system to update their content without touching code. The answer lies in decoupling the front-end from the back-end using Next.js and a headless CMS like Sanity.</p>
        <h2>The Decoupled Architecture</h2>
        <p>Decoupled (or headless) architecture separates where content is created and stored from where it is displayed. Content is authored in a structured editor and requested via an API. The front-end renders this content using modern frameworks. This gives developers total creative freedom in styling and animations, without being restricted by monolithic templates or database queries.</p>
        <h2>Why Next.js?</h2>
        <p>Next.js is the premier React framework for production. It offers Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR). By statically rendering content-heavy pages (like blogs or portfolio items) at build time, Next.js serves pages directly from a CDN. This results in sub-second load times, excellent SEO out of the box, and zero server strain during traffic spikes.</p>
        <blockquote>
          "Decoupling the CMS from the frontend allows developers to focus on visual storytelling and performance, while authors focus on copy."
        </blockquote>
        <h2>Sanity CMS: The Content Lake</h2>
        <p>Sanity goes beyond traditional headless CMS by treating content as structured data, not rich HTML blocks. Content is queried using GROQ, an open-source query language. This structured data can be easily mapped to React components, making image optimization, text formatting, and translation incredibly easy. Features like real-time collaboration, live previews, and custom editor layouts make it a joy for content managers to use.</p>
      </>
    )
  },
  'designing-for-gen-z-attention-span': {
    title: 'Designing for the Gen-Z Attention Span',
    excerpt: 'How to utilize vibrant, harmonious color palettes, modern typography, and dynamic animations to keep users engaged in a fast-paced environment.',
    publishedAt: '2026-05-15T15:45:00.000Z',
    authorName: 'Elena Rossi',
    authorImage: 'https://i.pravatar.cc/100?img=5',
    mainImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    htmlContent: (
      <>
        <p>With an average attention span estimated at 8 seconds, Gen-Z users demand digital experiences that make an immediate visual statement. To capture and hold interest, websites must combine curated, premium aesthetics with instant feedback, interactive details, and a responsive layout that feels alive.</p>
        <h2>curating Harmonious Aesthetics</h2>
        <p>Standard templates with default colors are ignored. Modern design requires carefully selected color palettes (like charcoal, gold, and cream), customized typography (like Space Grotesk), and high-contrast dark modes. Subtle gradients, glassmorphism card layouts, and realistic noise overlays add depth and tactile quality, making the screen feel premium and polished.</p>
        <blockquote>
          "To engage Gen-Z, design must feel interactive and alive. Micro-animations and hover effects turn passive browsing into active exploration."
        </blockquote>
        <h2>Micro-Animations & Feedback</h2>
        <p>Hover triggers should be visual rewards. Incorporating magnetic buttons that follow the user’s cursor, glowing border gradients, and custom canvas trails turns simple clicks into satisfying interactions. These small animations engage users on a subconscious level, keeping them curious to explore further.</p>
        <h2>Authenticity and Speed</h2>
        <p>Gen-Z values transparent communication and authenticity. In terms of engineering, this means pages must load instantly. If a website takes longer than 2 seconds to load, users leave. High-performance, SEO-optimized frameworks like Next.js ensure that websites aren’t just beautiful, but run fast and smooth on any mobile device.</p>
      </>
    )
  }
};

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  let post = await getPost(slug);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Check if we should use mock data
  const isMock = !post || MOCK_SINGLE_POSTS[slug];
  const postData = isMock ? MOCK_SINGLE_POSTS[slug] || MOCK_SINGLE_POSTS['art-of-motion-design-modern-web'] : null;

  const title = post ? post.title : postData?.title;
  const publishedAt = post ? post.publishedAt : postData?.publishedAt;
  const authorName = post ? post.authorName : postData?.authorName;
  const excerpt = post ? post.excerpt : postData?.excerpt;

  const imageSrc = post?.mainImage
    ? urlFor(post.mainImage).width(1200).url()
    : (postData?.mainImage || MOCK_SINGLE_POSTS['art-of-motion-design-modern-web'].mainImage);

  const authorAvatar = post?.authorImage
    ? urlFor(post.authorImage).width(100).url()
    : (postData?.authorImage || MOCK_SINGLE_POSTS['art-of-motion-design-modern-web'].authorImage);

  return (
    <main>
      <header className="post-header" data-scroll-section>
        <div className="container">
          <div className="post-meta">
            {publishedAt ? formatDate(publishedAt) : ''}
          </div>
          <h1 className="post-title shimmer-text">{title}</h1>
          <div className="post-author-wrap">
            <div 
              className="post-author-img" 
              style={{ backgroundImage: `url('${authorAvatar}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="post-author-info">
              <h4>{authorName || 'WebItUp Writer'}</h4>
              <span>Contributor</span>
            </div>
          </div>
        </div>
      </header>

      <div className="post-hero-image-wrap" data-scroll-section>
        <div 
          className="post-hero-image" 
          style={{ backgroundImage: `url('${imageSrc}')` }}
          data-scroll
          data-scroll-speed="-1"
        />
      </div>

      <section className="post-body-section" data-scroll-section>
        <div className="post-body-container">
          <div className="post-content">
            {post?.body ? (
              <PortableText value={post.body} />
            ) : (
              postData?.htmlContent
            )}
          </div>
          <div style={{ marginTop: '5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '2rem' }}>
            <Link href="/blog" className="btn btn-outline magnetic-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style={{ transform: 'rotate(180deg)' }}>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
              <span>Back to Journal</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
