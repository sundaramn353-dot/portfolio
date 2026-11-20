import { useEffect } from 'react';
import { surfacePointer } from './surfacePointer.js';

/** Event-driven writes only; CSS handles settling without an idle render loop. */
export function useSurfaceMotion(root) {
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = !window.IntersectionObserver;
    let frame = 0;
    let pointer = null;
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      pointer = null;
      node.classList.remove('surface-pointer');
      node.style.setProperty('--surface-x', '0');
      node.style.setProperty('--surface-y', '0');
    };
    const allowed = () => visible && !document.hidden && !reduced.matches;
    const state = () => {
      node.classList.toggle('motion-visible', allowed());
      if (!allowed() || !fine.matches) reset();
    };
    const move = event => {
      if (!allowed() || !fine.matches || event.pointerType === 'touch') return;
      pointer = { x: event.clientX, y: event.clientY };
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const value = surfacePointer(pointer, node.getBoundingClientRect());
        node.classList.add('surface-pointer');
        node.style.setProperty('--surface-x', value.x.toFixed(4));
        node.style.setProperty('--surface-y', value.y.toFixed(4));
      });
    };
    const observer = window.IntersectionObserver ? new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      state();
    }, { threshold: 0.08 }) : null;
    observer?.observe(node);
    state();
    node.addEventListener('pointermove', move, { passive: true });
    node.addEventListener('pointerleave', reset);
    window.addEventListener('scroll', reset, { passive: true });
    window.addEventListener('resize', reset, { passive: true });
    window.addEventListener('blur', reset);
    document.addEventListener('visibilitychange', state);
    fine.addEventListener('change', state);
    reduced.addEventListener('change', state);
    return () => {
      reset();
      observer?.disconnect();
      node.classList.remove('motion-visible');
      node.removeEventListener('pointermove', move);
      node.removeEventListener('pointerleave', reset);
      window.removeEventListener('scroll', reset);
      window.removeEventListener('resize', reset);
      window.removeEventListener('blur', reset);
      document.removeEventListener('visibilitychange', state);
      fine.removeEventListener('change', state);
      reduced.removeEventListener('change', state);
    };
  }, [root]);
}
