'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLocoScroll } from '@/animations/scroll';

export default function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === '/') {
      e.preventDefault();
      const loco = getLocoScroll();
      const target = document.querySelector(targetId);
      if (loco && target) {
        loco.scrollTo(target, { offset: -80 });
      } else if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer" id="footer" data-scroll-section>
      <div className="container">
        <div className="footer-top">
          <div className="footer-info">
            <Link href="/" className="logo footer-logo">
              Web<span>ItUp24</span>
            </Link>
            <p className="footer-tagline">
              Crafting digital experiences that move people. Based everywhere creativity lives.
            </p>
            <a href="mailto:info@webitup24.com" className="footer-email magnetic-btn">
              info@webitup24.com
            </a>
          </div>
          <div className="footer-nav">
            <div className="footer-col">
              <h4>Navigate</h4>
              <ul>
                <li>
                  <Link 
                    href="/#about" 
                    className="footer-link"
                    onClick={(e) => handleScrollTo(e, '#about')}
                    data-scroll-to={pathname === '/' ? '' : undefined}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/#services" 
                    className="footer-link"
                    onClick={(e) => handleScrollTo(e, '#services')}
                    data-scroll-to={pathname === '/' ? '' : undefined}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/#process" 
                    className="footer-link"
                    onClick={(e) => handleScrollTo(e, '#process')}
                    data-scroll-to={pathname === '/' ? '' : undefined}
                  >
                    Process
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="footer-link">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="#" className="footer-link" target="_blank" rel="noopener noreferrer">
                    Twitter / X
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link" target="_blank" rel="noopener noreferrer">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {year} WebItUp24. All rights reserved.</p>
          <p className="footer-credit">Designed with 💖.</p>
        </div>
      </div>
    </footer>
  );
}
