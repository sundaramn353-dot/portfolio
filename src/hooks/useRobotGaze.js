import { useEffect } from 'react';
import { eyeTarget } from './robotGaze.js';
import { motion } from '../motion/settings.js';

export function useRobotGaze(root) {
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const eyes = [...node.querySelectorAll('[data-eye]')];
    const pupils = [...node.querySelectorAll('[data-pupil]')];
    const head = node.querySelector('[data-robot-head]');
    const eyelids = [...node.querySelectorAll('[data-blink]')];
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = !window.IntersectionObserver;
    let pointer = null;
    let frame = 0;
    let previousTime = 0;
    let needsMeasure = true;
    let bounds = [];
    let blinkTimer = 0;
    const blinks = new Set();
    const current = eyes.map(() => ({ x: 0, y: 0 }));
    const allowed = () => visible && !document.hidden && fine.matches && !reduced.matches;
    const stopBlinking = () => {
      clearTimeout(blinkTimer);
      blinkTimer = 0;
      blinks.forEach(animation => animation.cancel());
      blinks.clear();
      node.classList.remove('robot-awake');
    };
    const awake = () => {
      if (!visible || document.hidden || reduced.matches) { stopBlinking(); return; }
      node.classList.add('robot-awake');
      if (blinkTimer || !Element.prototype.animate) return;
      blinkTimer = window.setTimeout(() => {
        blinkTimer = 0;
        eyelids.forEach(eye => {
          const animation = eye.animate(
            [{ transform: 'scaleY(1)' }, { transform: 'scaleY(.06)', offset: .48 }, { transform: 'scaleY(1)' }],
            { duration: 170, easing: 'ease-in-out' },
          );
          blinks.add(animation);
          animation.onfinish = () => blinks.delete(animation);
        });
        awake();
      }, 4700 + Math.random() * 3100);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      previousTime = 0;
    };
    const neutral = () => {
      stop();
      current.forEach((position, index) => {
        position.x = position.y = 0;
        pupils[index].setAttribute('transform', 'translate(0 0)');
      });
      head?.setAttribute('transform', 'rotate(0 240 205)');
    };
    const animate = time => {
      frame = 0;
      if (!allowed()) return;
      if (needsMeasure || head) {
        bounds = eyes.map(eye => eye.getBoundingClientRect());
        needsMeasure = false;
      }
      const dt = previousTime ? Math.min(time - previousTime, 64) : 16;
      previousTime = time;
      const amount = 1 - Math.exp(-dt / motion.gazeSmoothing);
      const headMatrix = head?.getScreenCTM?.();
      const rotation = headMatrix ? Math.atan2(headMatrix.b, headMatrix.a) : 0;
      let unsettled = false;
      current.forEach((position, index) => {
        const target = eyeTarget(pointer, bounds[index], rotation);
        position.x += (target.x - position.x) * amount;
        position.y += (target.y - position.y) * amount;
        if (Math.hypot(target.x - position.x, target.y - position.y) > 0.015) unsettled = true;
        else Object.assign(position, target);
        pupils[index].setAttribute('transform', `translate(${position.x.toFixed(3)} ${position.y.toFixed(3)})`);
      });
      const turn = current.reduce((sum, position) => sum + position.x, 0) / Math.max(current.length, 1) / 11 * 2.5;
      head?.setAttribute('transform', `rotate(${turn.toFixed(3)} 240 205)`);
      if (unsettled) frame = requestAnimationFrame(animate);
      else previousTime = 0;
    };
    const request = () => {
      if (allowed() && !frame) frame = requestAnimationFrame(animate);
    };
    const move = event => {
      if (event.pointerType === 'touch' || !fine.matches || reduced.matches || document.hidden) return;
      pointer = { x: event.clientX, y: event.clientY };
      needsMeasure = true;
      request();
    };
    const leave = () => { pointer = null; request(); };
    const measure = () => {
      needsMeasure = true;
      // Scroll updates the same pointer's geometry; it never creates a pointer.
      if (pointer) request();
    };
    const preference = () => {
      pointer = null;
      neutral();
      needsMeasure = true;
      awake();
    };
    const visibility = () => {
      if (document.hidden) { pointer = null; neutral(); }
      else { needsMeasure = true; request(); }
      awake();
    };
    const observer = window.IntersectionObserver ? new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      needsMeasure = true;
      if (visible) request();
      else stop();
      awake();
    }) : null;
    const sizeObserver = window.ResizeObserver ? new ResizeObserver(measure) : null;
    observer?.observe(node);
    sizeObserver?.observe(node);
    awake();
    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', leave);
    window.addEventListener('blur', leave);
    window.addEventListener('scroll', measure, { passive: true, capture: true });
    window.addEventListener('resize', measure, { passive: true });
    fine.addEventListener('change', preference);
    reduced.addEventListener('change', preference);
    document.addEventListener('visibilitychange', visibility);
    return () => {
      stop();
      stopBlinking();
      observer?.disconnect();
      sizeObserver?.disconnect();
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', leave);
      window.removeEventListener('blur', leave);
      window.removeEventListener('scroll', measure, true);
      window.removeEventListener('resize', measure);
      fine.removeEventListener('change', preference);
      reduced.removeEventListener('change', preference);
      document.removeEventListener('visibilitychange', visibility);
    };
  }, [root]);
}
