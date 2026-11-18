import { useState, useEffect } from 'react';

/**
 * useScrollSpy
 * Tracks which section id is currently in the viewport.
 *
 * @param {string[]} sectionIds   - Array of section element IDs (without '#')
 * @param {number}   offset       - Pixels from the top to consider "active" (navbar height)
 * @returns {string}              - The currently active section ID
 */
export function useScrollSpy(sectionIds = [], offset = 100) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!sectionIds.length) return;

    function onScroll() {
      const scrollY = window.scrollY;
      let current = '';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (scrollY >= el.offsetTop - offset) {
          current = id;
        }
      }

      setActiveId(current);
    }

    // Set immediately on mount (handles page refresh mid-page)
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds, offset]);

  return activeId;
}
