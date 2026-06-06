/**
 * scroll.ts — Locomotive Scroll + ScrollTrigger Integration
 * Smooth scrolling, parallax, and scroll-based UI changes
 */
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let locoScroll: any = null;

export async function initSmoothScroll() {
  if (typeof window === 'undefined') return null;

  const LocomotiveScroll = (await import('locomotive-scroll')).default;

  const container = document.querySelector('[data-scroll-container]');
  if (!container) return null;

  locoScroll = new LocomotiveScroll({
    el: container,
    smooth: true,
    multiplier: 1,
    lerp: 0.06, // Premium buttery scroll
    class: 'is-revealed',
    smartphone: { smooth: false },
    tablet: { smooth: true, breakpoint: 1024 },
  });

  // Sync with ScrollTrigger
  locoScroll.on('scroll', ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(container, {
    scrollTop(value) {
      if (arguments.length && value !== undefined) {
        locoScroll?.scrollTo(value, 0, 0);
        return value;
      }
      return locoScroll?.scroll?.instance?.scroll?.y || 0;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: (container as HTMLElement).style.transform ? 'transform' : 'fixed',
  });

  // Navbar scroll state
  const navbar = document.getElementById('navbar');
  if (navbar) {
    locoScroll.on('scroll', (args: any) => {
      if (args.scroll.y > 80) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Internal nav links (smooth scroll-to)
  document.querySelectorAll('a[data-scroll-to]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          locoScroll?.scrollTo(target, { offset: -80 });
        }
      }
    });
  });

  // Refresh
  ScrollTrigger.addEventListener('refresh', () => locoScroll?.update());
  setTimeout(() => ScrollTrigger.refresh(), 500);

  return locoScroll;
}

export function getLocoScroll() {
  return locoScroll;
}

export function getScrollContainer() {
  if (typeof window === 'undefined') return null;
  return document.querySelector('[data-scroll-container]');
}
