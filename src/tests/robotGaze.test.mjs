import test from 'node:test';
import assert from 'node:assert/strict';
import { eyeTarget } from '../hooks/robotGaze.js';

const eye = { left: 100, top: 200, width: 54, height: 64 };

test('neutral pose is stable before pointer input and for an unmeasurable eye', () => {
  assert.deepEqual(eyeTarget(null, eye), { x: 0, y: 0 });
  assert.deepEqual(eyeTarget({ x: 127, y: 232 }, eye), { x: 0, y: 0 });
  assert.deepEqual(eyeTarget({ x: 800, y: 400 }, { ...eye, width: 0 }), { x: 0, y: 0 });
});

test('pupils stay inside their safe ellipse for viewport-edge and distant pointers', () => {
  for (let x = -10000; x <= 10000; x += 317) {
    for (let y = -10000; y <= 10000; y += 431) {
      const target = eyeTarget({ x, y }, eye);
      assert.ok(Number.isFinite(target.x) && Number.isFinite(target.y));
      assert.ok((target.x / 11) ** 2 + (target.y / 12) ** 2 <= 1 + Number.EPSILON * 4);
    }
  }
});

test('each eye uses its own center and updates direction after scrolling', () => {
  const pointer = { x: 160, y: 232 };
  const left = eyeTarget(pointer, eye);
  const right = eyeTarget(pointer, { ...eye, left: 180 });
  assert.ok(left.x > 0 && right.x < 0);
  assert.equal(left.y, 0);
  const scrolled = eyeTarget(pointer, { ...eye, top: 100 });
  assert.ok(scrolled.y > 0);
  assert.deepEqual(eyeTarget(null, { ...eye, top: 100 }), { x: 0, y: 0 });
});

test('gaze compensates for a head turn without escaping the eye', () => {
  const target = eyeTarget({ x: 1000, y: 232 }, eye, Math.PI / 2);
  assert.ok(Math.abs(target.x) < 1e-10);
  assert.ok(Math.abs(target.y + 12) < 1e-10);
});
