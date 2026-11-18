import { useEffect, useRef } from 'react';

/**
 * useCounter — animates from 0 to target when element enters viewport
 * @param {number} target
 * @param {number} duration ms
 * @returns {{ ref, value }} — attach ref to the element to observe
 */
export function useCounter(target, duration = 1400) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(easeOutQuart(p) * target);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target + '+';
      }
      requestAnimationFrame(tick);
    }, { threshold: 0.6 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return ref;
}
