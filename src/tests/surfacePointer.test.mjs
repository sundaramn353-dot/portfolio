import test from 'node:test';
import assert from 'node:assert/strict';
import { surfacePointer } from '../hooks/surfacePointer.js';
import { motion } from '../motion/settings.js';

const rect = { left: 100, top: 200, width: 600, height: 400 };

test('surface center rests neutrally and opposite corners give opposite tilts', () => {
  assert.deepEqual(surfacePointer({ x: 400, y: 400 }, rect), { x: 0, y: 0 });
  assert.deepEqual(surfacePointer({ x: 100, y: 200 }, rect), { x: -1, y: -1 });
  assert.deepEqual(surfacePointer({ x: 700, y: 600 }, rect), { x: 1, y: 1 });
  assert.deepEqual(surfacePointer(null, rect), { x: 0, y: 0 });
});

test('distant pointers and resized surfaces cannot exceed the four-degree limit', () => {
  for (const width of [0, 1, 200, 600]) {
    for (const x of [-100000, 0, 400, 100000]) {
      for (const y of [-100000, 0, 400, 100000]) {
        const value = surfacePointer({ x, y }, { ...rect, width });
        assert.ok(Number.isFinite(value.x) && Number.isFinite(value.y));
        assert.ok(Math.abs(value.x * motion.tilt) <= 4);
        assert.ok(Math.abs(value.y * motion.tilt) <= 4);
      }
    }
  }
});
