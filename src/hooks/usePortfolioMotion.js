import { useEffect } from 'react';

/** Progressive enhancement: content is visible before and without animation. */
export function usePortfolioMotion(root) {
  useEffect(() => {
    const node = root.current;
    if (!node || !window.IntersectionObserver || !Element.prototype.animate) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set();
    let observer;

    const configure = () => {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
      if (preference.matches) return;

      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          const animation = entry.target.animate(
            [{ opacity: 0.3, transform: 'translateY(20px)' }, { opacity: 1, transform: 'translateY(0)' }],
            { duration: 650, delay: Number(entry.target.dataset.delay || 0), easing: 'cubic-bezier(.22,1,.36,1)' },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
      node.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element));
    };

    configure();
    preference.addEventListener('change', configure);
    return () => {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      preference.removeEventListener('change', configure);
    };
  }, [root]);
}

/** Pointer depth is bounded, event-driven, and disabled for touch/reduced motion. */
export function usePointerDepth(root) {
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let visible = true;
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      node.style.setProperty('--pointer-x', '0px');
      node.style.setProperty('--pointer-y', '0px');
    };
    const move = event => {
      if (!fine.matches || reduced.matches || event.pointerType === 'touch' || !visible || document.hidden) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        node.style.setProperty('--pointer-x', `${((event.clientX - rect.left) / rect.width - 0.5) * 14}px`);
        node.style.setProperty('--pointer-y', `${((event.clientY - rect.top) / rect.height - 0.5) * 8}px`);
        frame = 0;
      });
    };
    const visibility = () => { if (document.hidden) reset(); };
    const observer = window.IntersectionObserver ? new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) reset();
    }) : null;
    observer?.observe(node);
    node.addEventListener('pointermove', move);
    node.addEventListener('pointerleave', reset);
    reduced.addEventListener('change', reset);
    fine.addEventListener('change', reset);
    document.addEventListener('visibilitychange', visibility);
    return () => {
      reset();
      observer?.disconnect();
      node.removeEventListener('pointermove', move);
      node.removeEventListener('pointerleave', reset);
      reduced.removeEventListener('change', reset);
      fine.removeEventListener('change', reset);
      document.removeEventListener('visibilitychange', visibility);
    };
  }, [root]);
}
