import { useEffect } from 'react';
import { motion } from '../motion/settings.js';

/** Scroll position drives paused native animations; no React renders or idle loop. */
export function usePortfolioMotion(root) {
  useEffect(() => {
    const node = root.current;
    if (!node || !window.IntersectionObserver || !Element.prototype.animate) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const simple = window.matchMedia('(max-width: 600px), (pointer: coarse)');
    const animations = new Map();
    const visible = new Set();
    let observer;
    let frame = 0;
    const clamp = value => Math.max(0, Math.min(1, value));
    const layoutTop = element => {
      let top = 0;
      for (let current = element; current; current = current.offsetParent) top += current.offsetTop;
      return top;
    };
    const update = () => {
      frame = 0;
      if (document.hidden || reduced.matches) return;
      const height = window.innerHeight;
      const scroll = window.scrollY;
      visible.forEach(element => {
        const animation = animations.get(element);
        if (!animation) return;
        const media = element.dataset.reveal === 'media';
        const anchor = element;
        const top = layoutTop(anchor) - scroll;
        const bottom = top + anchor.offsetHeight;
        const stagger = Math.min(Number(element.dataset.delay || 0), 140) * .22;
        // Fully settled through the reading area; only visuals recede on exit.
        const incoming = clamp((height - top - stagger) / (height * .30));
        const outgoing = media ? clamp((height * .16 - bottom) / (height * .35)) : 0;
        const video = element.querySelector('video');
        const interacting = video && (!video.paused || element.matches(':hover, :focus-within'));
        animation.currentTime = interacting ? 500 : incoming < 1 ? incoming * 500 : 500 + outgoing * 500;
      });
    };
    const schedule = () => {
      if (!frame && !document.hidden && !reduced.matches) frame = requestAnimationFrame(update);
    };
    const clear = () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      frame = 0;
      visible.clear();
      animations.forEach(animation => animation.cancel());
      animations.clear();
    };
    const configure = () => {
      clear();
      if (reduced.matches) return;
      const mobile = simple.matches;
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        });
        schedule();
      }, { rootMargin: '100px 0px' });
      node.querySelectorAll('[data-reveal]').forEach(element => {
        const media = element.dataset.reveal === 'media';
        const project = element.closest('.project');
        const index = project ? [...project.parentElement.children].indexOf(project) : 0;
        const direction = index % 2 ? 1 : -1;
        const transform = (y, x, z, scale) => `perspective(${motion.perspective}px) translate3d(0, ${y}px, ${z}px) rotateX(${x}deg) rotateY(${media && !mobile ? direction * x : 0}deg) scale(${scale})`;
        const animation = element.animate([
          { offset: 0, transform: transform(mobile ? 10 : 22, mobile ? 0 : media ? 4 : 3, media && !mobile ? -16 : 0, mobile ? 1 : .98) },
          { offset: .5, transform: transform(0, 0, 0, 1) },
          { offset: 1, transform: transform(media ? -10 : 0, media && !mobile ? -3 : 0, media && !mobile ? -18 : 0, media && !mobile ? .98 : 1) },
        ], { duration: 1000, fill: 'both', easing: 'linear' });
        animation.pause();
        animation.currentTime = 500;
        animations.set(element, animation);
        observer.observe(element);
      });
      schedule();
    };
    const visibility = () => {
      if (document.hidden) { cancelAnimationFrame(frame); frame = 0; }
      else schedule();
    };
    configure();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    node.addEventListener('focusin', schedule);
    node.addEventListener('focusout', schedule);
    node.addEventListener('pointerover', schedule, { passive: true });
    node.addEventListener('pointerout', schedule, { passive: true });
    node.addEventListener('play', schedule, true);
    node.addEventListener('pause', schedule, true);
    node.addEventListener('toggle', schedule, true);
    document.addEventListener('visibilitychange', visibility);
    reduced.addEventListener('change', configure);
    simple.addEventListener('change', configure);
    return () => {
      clear();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      node.removeEventListener('focusin', schedule);
      node.removeEventListener('focusout', schedule);
      node.removeEventListener('pointerover', schedule);
      node.removeEventListener('pointerout', schedule);
      node.removeEventListener('play', schedule, true);
      node.removeEventListener('pause', schedule, true);
      node.removeEventListener('toggle', schedule, true);
      document.removeEventListener('visibilitychange', visibility);
      reduced.removeEventListener('change', configure);
      simple.removeEventListener('change', configure);
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
