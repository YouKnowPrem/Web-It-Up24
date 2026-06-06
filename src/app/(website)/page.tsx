'use client';

import React from 'react';
import Link from 'next/link';
import { getLocoScroll } from '@/animations/scroll';

export default function Home() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const loco = getLocoScroll();
    const target = document.querySelector(targetId);
    if (loco && target) {
      loco.scrollTo(target, { offset: -80 });
    } else if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      {/* ====== 1. HERO SECTION ====== */}
      <section className="hero" id="hero" data-scroll-section>
        <canvas id="hero-gradient-canvas"></canvas>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="line"><span className="reveal-word">Crafting</span></span>
            <span className="line"><span className="reveal-word">Websites That</span></span>
            <span className="line accent-line"><span className="reveal-word">Move People.</span></span>
          </h1>
          <p className="hero-sub reveal-up">We design immersive digital experiences that captivate audiences and drive real results.</p>
          <div className="hero-buttons reveal-up">
            <Link href="/contact" className="btn btn-primary magnetic-btn">
              <span>Start a Project</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link 
              href="#services" 
              className="btn btn-outline magnetic-btn" 
              onClick={(e) => handleScrollTo(e, '#services')}
              data-scroll-to
            >
              <span>Our Services</span>
            </Link>
          </div>
        </div>
        <div className="hero-scroll-indicator" data-scroll data-scroll-speed="-1">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ====== 2. ABOUT STUDIO ====== */}
      <section className="about" id="about" data-scroll-section>
        <div className="container">
          <div className="about-grid">
            <div className="about-label">
              <span className="section-label reveal-up" data-scroll data-scroll-speed="1">/ About Us</span>
            </div>
            <div className="about-content">
              <h2 className="about-heading shimmer-text" data-scroll data-scroll-speed="0.5">
                We're a collective of designers, developers, and dreamers obsessed with crafting digital experiences that don't just look stunning — they <em>perform</em>.
              </h2>
              <p className="about-body reveal-up">
                Founded on the belief that great design is invisible yet unforgettable, Web It Up 24 merges Gen-Z creative energy with meticulous engineering. Every pixel we place, every animation we sequence, every interaction we craft — it all serves a purpose: to move people.
              </p>
              <div className="about-stats reveal-up">
                <div className="stat">
                  <span className="stat-number counter" data-target="50">0</span><span className="stat-plus">+</span>
                  <span className="stat-label">Projects Delivered</span>
                </div>
                <div className="stat">
                  <span className="stat-number counter" data-target="30">0</span><span className="stat-plus">+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
                <div className="stat">
                  <span className="stat-number counter" data-target="5">0</span>
                  <span className="stat-label">Years of Craft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 3. SERVICES ====== */}
      <section className="services" id="services" data-scroll-section>
        <div className="container">
          <div className="section-header">
            <span className="section-label reveal-up">/ What We Do</span>
            <h2 className="section-title reveal-up">Services built for the<br /><em>modern web.</em></h2>
          </div>
          <div className="services-grid">
            <div className="service-card" data-scroll data-scroll-speed="0.3">
              <div className="service-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="#d4af37" stroke-width="2">
                  <rect x="6" y="6" width="36" height="28" rx="3" />
                  <line x1="6" y1="38" x2="42" y2="38" />
                  <line x1="18" y1="38" x2="18" y2="44" />
                  <line x1="30" y1="38" x2="30" y2="44" />
                  <line x1="14" y1="44" x2="34" y2="44" />
                </svg>
              </div>
              <h3>Web Design</h3>
              <p>Award-worthy interfaces that blend aesthetics with usability. Every design is a statement.</p>
              <span className="service-num">01</span>
            </div>

            <div className="service-card" data-scroll data-scroll-speed="0.5">
              <div className="service-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="#d4af37" stroke-width="2">
                  <polyline points="16 14 8 24 16 34" />
                  <polyline points="32 14 40 24 32 34" />
                  <line x1="28" y1="10" x2="20" y2="38" />
                </svg>
              </div>
              <h3>Development</h3>
              <p>Clean, performant code that scales. Built with modern frameworks and best practices.</p>
              <span className="service-num">02</span>
            </div>

            <div className="service-card" data-scroll data-scroll-speed="0.3">
              <div className="service-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="#d4af37" stroke-width="2">
                  <circle cx="20" cy="20" r="14" />
                  <line x1="30" y1="30" x2="42" y2="42" />
                  <line x1="14" y1="20" x2="26" y2="20" />
                  <line x1="20" y1="14" x2="20" y2="26" />
                </svg>
              </div>
              <h3>SEO Optimization</h3>
              <p>Visibility is everything. We architect your site to rank, engage, and convert organically.</p>
              <span className="service-num">03</span>
            </div>

            <div className="service-card" data-scroll data-scroll-speed="0.5">
              <div className="service-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="#d4af37" stroke-width="2">
                  <path d="M24 4 L24 8 M4 24 L8 24 M40 24 L44 24 M24 40 L24 44" />
                  <circle cx="24" cy="24" r="12" />
                  <circle cx="24" cy="24" r="5" />
                </svg>
              </div>
              <h3>Brand Identity</h3>
              <p>From logo to language, we craft cohesive brand systems that resonate and endure.</p>
              <span className="service-num">04</span>
            </div>

            <div className="service-card" data-scroll data-scroll-speed="0.3">
              <div className="service-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="#d4af37" stroke-width="2">
                  <path d="M24 6 L24 2 M24 46 L24 42 M6 24 L2 24 M46 24 L42 24" />
                  <path d="M24 14 L30 24 L24 28 L18 24Z" />
                  <circle cx="24" cy="24" r="18" />
                </svg>
              </div>
              <h3>Performance</h3>
              <p>Speed is non-negotiable. We optimize every byte for sub-second load times globally.</p>
              <span className="service-num">05</span>
            </div>

            <div className="service-card" data-scroll data-scroll-speed="0.5">
              <div className="service-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="#d4af37" stroke-width="2">
                  <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4z" />
                  <path d="M16 20c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H18c-1.1 0-2-.9-2-2v-8z" />
                  <path d="M20 18v-2c0-2.21 1.79-4 4-4s4 1.79 4 4v2" />
                  <circle cx="24" cy="24" r="1.5" />
                  <line x1="24" y1="25.5" x2="24" y2="28" />
                </svg>
              </div>
              <h3>AI Automation</h3>
              <p>Smart WhatsApp bots, AI chatbot integrations, and automated workflows that supercharge your business efficiency.</p>
              <span className="service-num">06</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 5. PROCESS ====== */}
      <section className="process" id="process" data-scroll-section>
        <div className="container">
          <div className="section-header">
            <span className="section-label reveal-up">/ How We Work</span>
            <h2 className="section-title reveal-up">From concept to launch,<br /><em>seamlessly.</em></h2>
          </div>
          <div className="process-timeline">
            <div className="process-line"></div>
            <div className="process-step" data-scroll data-scroll-speed="0.2">
              <div className="step-marker">
                <span className="step-num">01</span>
              </div>
              <div className="step-content">
                <h3>Discover</h3>
                <p>Deep-dive into your brand, goals, and audience to define the perfect strategy.</p>
              </div>
            </div>
            <div className="process-step" data-scroll data-scroll-speed="0.3">
              <div className="step-marker">
                <span className="step-num">02</span>
              </div>
              <div className="step-content">
                <h3>Design</h3>
                <p>Pixel-perfect wireframes and high-fidelity prototypes that bring your vision to life.</p>
              </div>
            </div>
            <div className="process-step" data-scroll data-scroll-speed="0.2">
              <div className="step-marker">
                <span className="step-num">03</span>
              </div>
              <div className="step-content">
                <h3>Develop</h3>
                <p>Clean, blazing-fast code with smooth animations and responsive architecture.</p>
              </div>
            </div>
            <div className="process-step" data-scroll data-scroll-speed="0.3">
              <div className="step-marker">
                <span className="step-num">04</span>
              </div>
              <div className="step-content">
                <h3>Launch</h3>
                <p>Deploy, optimize, and continuously improve for maximum performance and growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 6. TESTIMONIALS ====== */}
      <section className="testimonials" id="testimonials" data-scroll-section>
        <div className="container">
          <div className="section-header">
            <span className="section-label reveal-up">/ Client Love</span>
            <h2 className="section-title reveal-up">Words from people<br /><em>we've worked with.</em></h2>
          </div>
          <div className="testimonial-track">
            <div className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">Web It Up 24 completely transformed our online presence. Our conversion rate doubled within the first month of launching. The attention to detail in every micro-interaction is extraordinary.</p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{ backgroundImage: "url('https://i.pravatar.cc/100?img=1')" }}></div>
                <div>
                  <h4>Sarah Jenkins</h4>
                  <span>CEO, Lumina Finance</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">The level of polish and motion design put our studio lightyears ahead of competitors. They don't just build websites — they craft digital experiences that leave lasting impressions.</p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{ backgroundImage: "url('https://i.pravatar.cc/100?img=11')" }}></div>
                <div>
                  <h4>Marcus Chen</h4>
                  <span>Founder, Atlas Ventures</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">Professional, creative, and blazing fast. The mobile experience they delivered is nothing short of exceptional. Our users constantly compliment the design.</p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{ backgroundImage: "url('https://i.pravatar.cc/100?img=5')" }}></div>
                <div>
                  <h4>Elena Rossi</h4>
                  <span>Director, Zenith Health</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">Working with Web It Up 24 was a game-changer. They understood our vision instantly and delivered something far beyond our expectations. Truly world-class work.</p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{ backgroundImage: "url('https://i.pravatar.cc/100?img=32')" }}></div>
                <div>
                  <h4>David Park</h4>
                  <span>CTO, Nexus AI</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">The website they built for us isn't just beautiful — it's our most powerful sales tool. We saw a 3x increase in qualified leads within the first quarter.</p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{ backgroundImage: "url('https://i.pravatar.cc/100?img=23')" }}></div>
                <div>
                  <h4>Amanda Torres</h4>
                  <span>CMO, Velvet & Rose</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">Every interaction, every scroll, every transition feels intentional and premium. This is what happens when you hire people who genuinely care about craft.</p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{ backgroundImage: "url('https://i.pravatar.cc/100?img=47')" }}></div>
                <div>
                  <h4>James Harper</h4>
                  <span>Founder, Obsidian Studio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 7. CTA SECTION ====== */}
      <section className="cta-section" data-scroll-section>
        <div className="container">
          <div className="cta-content" data-scroll data-scroll-speed="0.5">
            <h2 className="cta-title shimmer-text">
              Let's Build Something<br /><em>Extraordinary.</em>
            </h2>
            <Link href="/contact" className="btn btn-primary btn-large magnetic-btn">
              <span>Start a Project</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
