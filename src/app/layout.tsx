import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './style.css';
import ScrollProvider from '@/components/ScrollProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Webitup24 | Crafting Websites That Move People',
  description: 'Web It Up 24 is a premium digital design studio crafting immersive, conversion-focused websites with stunning motion design and modern aesthetics.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <body>
        {/* ======= PRELOADER ======= */}
        <div id="preloader">
          <div className="preloader-inner">
            <canvas id="preloader-particles"></canvas>
            <div className="rocket-wrap">
              <svg className="rocket-svg" viewBox="0 0 80 160" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="rocketGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#f5f5f5"/>
                    <stop offset="100%" stop-color="#d4af37"/>
                  </linearGradient>
                </defs>
                {/* Rocket body */}
                <path d="M40 10 C40 10 20 50 20 100 C20 120 30 130 40 135 C50 130 60 120 60 100 C60 50 40 10 40 10Z" fill="url(#rocketGrad)" stroke="#d4af37" stroke-width="1.5"/>
                {/* Window */}
                <circle cx="40" cy="70" r="10" fill="#0b0b0b" stroke="#d4af37" stroke-width="1.5"/>
                <circle cx="40" cy="70" r="5" fill="#d4af37" opacity="0.4"/>
                {/* Fins */}
                <path d="M20 100 L8 125 L20 120Z" fill="#d4af37" opacity="0.8"/>
                <path d="M60 100 L72 125 L60 120Z" fill="#d4af37" opacity="0.8"/>
                {/* Flame */}
                <g className="rocket-flame">
                  <ellipse cx="40" cy="145" rx="12" ry="15" fill="#d4af37" opacity="0.9"/>
                  <ellipse cx="40" cy="148" rx="8" ry="12" fill="#f5f5f5" opacity="0.6"/>
                  <ellipse cx="40" cy="150" rx="4" ry="8" fill="#fff" opacity="0.8"/>
                </g>
              </svg>
            </div>
            <div className="preloader-text">
              <span className="preloader-logo">Web <em>It Up 24</em></span>
            </div>
            <div className="progress-bar-wrap">
              <div className="progress-bar" id="progress-bar"></div>
            </div>
            <p className="loading-text">Loading Experience...</p>
          </div>
        </div>

        {/* ======= CUSTOM CURSOR ======= */}
        <div className="cursor-dot" id="cursor-dot"></div>
        <canvas id="cursor-canvas"></canvas>

        {/* ======= NOISE OVERLAY ======= */}
        <div className="noise-overlay"></div>

        {/* ======= FLOATING DOODLES ======= */}
        <div className="doodles-layer" aria-hidden="true">
          {/* Arrow doodle */}
          <svg className="doodle doodle-arrow" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 80 L80 20 M60 18 L82 18 L82 40" fill="none" stroke="#d4af37" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"/>
          </svg>
          {/* Star doodle */}
          <svg className="doodle doodle-star" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35" fill="none" stroke="#d4af37" stroke-width="2" opacity="0.25"/>
          </svg>
          {/* Scribble circle */}
          <svg className="doodle doodle-circle" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="45" fill="none" stroke="#d4af37" stroke-width="2" stroke-dasharray="8 6" opacity="0.2"/>
          </svg>
          {/* Abstract squiggle */}
          <svg className="doodle doodle-squiggle" viewBox="0 0 150 60" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 30 Q30 5 50 30 Q70 55 90 30 Q110 5 130 30 Q140 45 150 30" fill="none" stroke="#d4af37" stroke-width="2.5" stroke-linecap="round" opacity="0.2"/>
          </svg>
          {/* Small star */}
          <svg className="doodle doodle-star-small" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 5 L33 23 L50 20 L37 30 L45 48 L30 38 L15 48 L23 30 L10 20 L27 23Z" fill="#d4af37" opacity="0.15"/>
          </svg>
          {/* Cross doodle */}
          <svg className="doodle doodle-cross" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <line x1="15" y1="15" x2="45" y2="45" stroke="#d4af37" stroke-width="2.5" stroke-linecap="round" opacity="0.2"/>
            <line x1="45" y1="15" x2="15" y2="45" stroke="#d4af37" stroke-width="2.5" stroke-linecap="round" opacity="0.2"/>
          </svg>
        </div>

        <ScrollProvider>
          <Navbar />
          {children}
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
