# Portrait background extraction

Tool: built-in `image_gen.imagegen`, edit mode, `transparent_background: true`.

Original (preserved): `src/public/assets/meenatchi-sundaram-portrait.png`.
Final transparent asset: `src/public/assets/meenatchi-sundaram-portrait-cutout.png`.

The original PNG has alpha 255 everywhere. The white fringe came from its white studio backdrop left visible inside the previous approximate SVG mask, rather than a CSS border, outline, or shadow. The old silhouette mask is removed. The replacement has alpha ranging from 0 to 255, with fully transparent backdrop pixels and the white foreground shirt retained. Both images have dimensions 1124 × 1399, so the hero keeps its previous framing and sizing. The lower-torso CSS fade remains; no blend mode, global white-pixel deletion, dark outline, or CSS blur is applied.

Inspection-only composites were generated on near-black (#090807) and off-white (#F6F3EF) backgrounds, including enlarged head/neck views. These were visually inspected at full-image and enlarged sizes. They do not modify the production cutout. Actual browser rendering on desktop/mobile could not be checked because the local preview is inaccessible in this sandbox.

## Final prompt

Use case: background-extraction. Edit target: the supplied professional portrait of Meenatchi Sundaram. Create a precise background-removed photographic cutout with actual RGBA transparency, no background. Remove ONLY the original white studio backdrop and white edge contamination around the outside of hair, ears, neck and suit shoulders. Preserve the exact person's identity, face, expression, skin tone, eye shape, hair style, natural flyaway hair detail, body proportions, black suit, white shirt, and black tie. Do not remove the white shirt or collar: they are foreground clothing. Preserve the original framing with all hair, complete head, both shoulders and visible torso, and preserve existing lighting and photographic detail. Do not beautify, redraw, restyle, relight, recolor, crop, add shadows or outlines, or generate a different person. Clean soft alpha edges without white halos, fringe, blur or dark strokes, suitable for both near-black and off-white backgrounds. Output a transparent PNG cutout, retaining composition and natural appearance as closely as possible.
