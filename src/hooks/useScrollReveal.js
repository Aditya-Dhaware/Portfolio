import { useEffect } from 'react';

/**
 * Custom hook for smooth scroll-triggered element reveals (lazy scrolling).
 * Uses IntersectionObserver to reveal elements as they enter the viewport
 * and a MutationObserver to automatically attach to dynamically rendered items.
 */
export default function useScrollReveal() {
  useEffect(() => {
    // Keep track of observed elements to avoid re-attaching
    const observedElements = new WeakSet();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            // Unobserve once revealed to maintain state and save browser work
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        // Trigger reveal when element is 50px above the bottom of the viewport
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.08,
      }
    );

    const scanAndObserve = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)');
      const windowHeight = window.innerHeight;

      elements.forEach((el) => {
        if (!observedElements.has(el)) {
          observedElements.add(el);
          const rect = el.getBoundingClientRect();
          // If already in viewport on mount, reveal immediately
          if (rect.top < windowHeight && rect.bottom > 0) {
            el.classList.add('is-revealed');
          } else {
            observer.observe(el);
          }
        }
      });
    };

    // Initial scan on mount
    scanAndObserve();

    // Listen for DOM mutations (e.g., project category filter changes)
    const mutationObserver = new MutationObserver(() => {
      scanAndObserve();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
