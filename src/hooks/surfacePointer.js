/** Normalize against the stable outer wrapper, never the rotating child. */
export function surfacePointer(point, rect) {
  if (!point || rect.width <= 0 || rect.height <= 0) return { x: 0, y: 0 };
  const clamp = value => Math.max(-1, Math.min(1, value));
  return {
    x: clamp((point.x - rect.left) / rect.width * 2 - 1),
    y: clamp((point.y - rect.top) / rect.height * 2 - 1),
  };
}
