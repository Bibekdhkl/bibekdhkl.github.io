import { useState, useEffect } from 'react';

/**
 * Custom hook that uses IntersectionObserver to track which section
 * is currently in view (scrollspy).
 *
 * @param {string[]} sectionIds - Array of section element IDs to observe.
 * @param {object}   [options]  - IntersectionObserver options override.
 * @returns {string} The ID of the currently active (most visible) section.
 */
export function useScrollSpy(sectionIds, options = {}) {
  const [activeId, setActiveId] = useState(sectionIds[0] || '');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60% 0px',
      threshold: 0,
      ...options
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [sectionIds, options]);

  return activeId;
}
