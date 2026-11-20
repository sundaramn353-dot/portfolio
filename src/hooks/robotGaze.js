/** Returns SVG-space movement inside a safe ellipse, even for distant pointers. */
export function eyeTarget(pointer, eyeRect, rotation = 0) {
  if (!pointer || !eyeRect.width || !eyeRect.height) return { x: 0, y: 0 };
  const dx = pointer.x - (eyeRect.left + eyeRect.width / 2);
  const dy = pointer.y - (eyeRect.top + eyeRect.height / 2);
  const distance = Math.hypot(dx, dy);
  if (!distance) return { x: 0, y: 0 };
  const reach = Math.min(distance / 220, 1);
  // Undo the head's on-screen rotation so its gaze still aims at the pointer.
  const localX = dx * Math.cos(rotation) + dy * Math.sin(rotation);
  const localY = -dx * Math.sin(rotation) + dy * Math.cos(rotation);
  return { x: localX / distance * 11 * reach, y: localY / distance * 12 * reach };
}
