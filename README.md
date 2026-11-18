# Meenatchi Sundaram — Robotics engineering portfolio

A responsive React 18 / Vite portfolio for Meenatchi Sundaram. The current design replaces the previous Canva composition with a cinematic hero, floating pill navigation, responsive editorial statements, contrasting dark and off-white sections, and red/orange accents.

## Run locally

From this project directory:

```sh
npm --prefix src install # only when dependencies are missing
npm run dev
```

Open the address printed by Vite (normally `http://localhost:5173`).

```sh
npm run build
npm run preview
```

Production output is `src/dist`. The existing Vite configuration, React stack, and relative deployment base remain in place. No additional dependencies or hosting integrations were added. Nothing was deployed.

There are no configured lint, TypeScript, or test scripts. Build validation uses `npm run build`.

## Personal portrait

The hero uses `src/public/assets/meenatchi-sundaram-portrait-cutout.png`, a transparent background extraction produced with the built-in imagegen tool. The original supplied portrait is preserved as `src/public/assets/meenatchi-sundaram-portrait.png`.

The original had an entirely opaque white backdrop; the approximate CSS/SVG silhouette left some white pixels visible around the subject. That mask has been removed. The cutout has actual alpha transparency, with natural hair detail and foreground white shirt retained. The only remaining presentation mask is a subtle lower-torso fade. Positioning, contain sizing, desktop composition, and mobile layout are retained. See `docs/portrait-cutout.md` for the exact prompt and inspection details.

The three-line statement heading remains 56–72px on desktop and 32–40px on mobile. Larger skills, dates, and project descriptions are unchanged.

## Main files

- `src/App.jsx`: page composition.
- `src/components/editorial/Navigation.jsx`: floating navigation, active links, accessible mobile menu, focus handling.
- `src/components/editorial/Hero.jsx`: portrait stage, identity, role, and real resume download.
- `src/components/editorial/SelectedWork.jsx`: four verified projects with genuine existing assets and native expandable details.
- `src/components/editorial/Sections.jsx`: statement, about, skills, experience, education, and contact.
- `src/components/editorial/TrainingCommunity.jsx`: compact training and community activities.
- `src/data/training.js`: user-supplied teaching and community descriptions.
- `src/components/editorial/Shared.jsx`: shared links and section labels.
- `src/data/profile.js`: portrait configuration and navigation.
- `src/data/portfolio.js`: concise project and skill content.
- `src/data/meta.js`: retained contact details, social profiles, and resume path.
- `src/hooks/usePortfolioMotion.js`: optional entrance animation and pointer depth with cleanup.
- `src/index.css`: design tokens, local fonts, responsive layouts, motion preferences, and focus states.

Original project data and legacy components remain available for reference. The previous procedural 3D hero is removed from the current site and bundle.

## Accessibility and motion

Native scrolling and anchor links remain intact. Navigation accounts for the fixed header and uses keyboard-accessible links, Escape to close the mobile menu, and focus transfer to section landmarks. Original anchors (`hero`, `projects`, `skills`, `education`, and `community`) remain available.

Project engineering notes use native `details` and `summary`, accessible to touch and keyboard users. Email uses `mailto`; resume actions download the existing PDF. No contact form, fake success state, theme toggle, or intro loader is included.

Content is visible by default. Short reveals are progressive enhancements using IntersectionObserver and the Web Animations API. Reduced motion disables reveals, smooth scrolling, pointer depth, and hover movement. Pointer effects run only on fine-pointer devices and reset when the hero is offscreen or the page is hidden. All observers, listeners, pending frames, and animations are cleaned up.

## Content and verification limits

Employment dates, education, training, contact details, and project claims come from the existing resume and project content. The selected work now includes a compact ROS 2 Simulation Projects collection, highlighting the user-reported 10+ completed projects and linking to the existing GitHub profile. Public repository pages, the API, and search could not verify this user’s individual projects, so no repository-specific names or links were invented. Existing case studies remain intact. Bumpy uses the supplied two-robot image, with the map retained in its expanded engineering details. Sparky uses the user-supplied robot photograph, with the communication diagram retained in its expandable engineering details. The older Bumpy avatar is no longer rendered.

The supplied live reference was inaccessible through the web tool and direct network access. Implementation follows the detailed written visual specification. Browser inspection is unavailable in this sandbox: Vite cannot bind its local port (`EPERM`). Desktop/mobile rendering, final portrait cropping, live link availability, and browser console behavior require a browser-enabled environment.

Dedicated Bumpy/Sparky photos, demonstration videos, and project repository URLs would further strengthen the portfolio.

## Focused typography update

Display headings use shared responsive tokens in `src/index.css` for the hero name, main sections, editorial statement, contact, and supporting titles. Desktop display sizes are approximately 30–40% smaller for most sections; mobile sizes retain readable minimums. Main text wraps naturally, section spacing is reduced, and body/navigation sizes are retained. The exact display name is Meenatchi Sundaram; existing contact addresses, profile URLs, and the original resume PDF are unchanged.

The complete Engineering Approach section has been removed from the component tree, its data, and its active styles. Its exclusive `workflow` anchor is removed. Training & Community is 03; Skills, Experience, and Contact are numbered 04, 05, and 06.

## Readable detail typography

Skills, timelines, and all four project rows share scoped text-size tokens in `src/index.css`. Desktop/mobile sizes are 19/17px for skill names, 23/20px for skill categories, 18/16px for dates, 21/18px for project summaries, and 18/17px for project descriptions. Contribution text is 17/16px, expanded notes are 17/16px, tags are 15/14px, and engineering actions are at least 16px. Organization names are 17/16px; timeline descriptions are 18/17px.

Local Lato Semibold provides a true 600 weight for skills, category labels, dates, and organizations under the existing Lato license. Stronger text contrast, flexible lists, zero-minimum grid tracks, readable line heights, and content-driven row heights accommodate the larger text. Projects stack at tablet widths; skills and timelines stack on narrow screens. Anchor margins add clearance beneath the floating navigation. The reduced heading scale, original content, root font size, and navigation styling are unchanged.

## Latest validation

The production build passes. Static React rendering verifies the simulation collection copy and configured GitHub link, preserves all four existing project details, and resolves local image/font/resume assets and internal anchors. The transparent portrait was inspected on dark and light backgrounds, including enlarged head and neck edges. Remote repository contents and desktop/mobile browser rendering remain unverified because network access and local preview are unavailable.

## Company attribution and AMR imagery

Bumpy and Sparky display “Company project · Karthikesh Robotics Limited” beneath their titles. About, Experience, and retained employer metadata use the corrected company name; employment dates remain unchanged. Descriptions explain individual contributions as part of the company team.

The second attachment was saved unchanged as `src/public/assets/sparky-amr.png` (600 × 393). Its main image uses contain sizing, no filters or zoom, and no labels over the robot. A separate caption sits beneath the image. The communication diagram is available in expanded engineering details.

The reattached two-robot Bumpy image is now saved unchanged as `src/public/assets/bumpy-amr-two-robots.png` (478 × 433) and used by the stable `bumpy-amr` record in both current and retained project data. Its media container uses the source aspect ratio and contain sizing, with no filter or overlay over the robots. The occupancy grid is available only inside expandable details. Sparky’s supplied photo remains unchanged.

## About profile screenshot

The About image is the supplied LinkedIn screenshot, saved unchanged at `src/public/assets/meenatchi-sundaram-linkedin-profile.png` (784 × 437). It uses intrinsic height (`width: 100%; height: auto`) with no filter, crop, or caption overlay. The existing About copy, heading, resume action, two-column layout, and mobile stacking are retained. The hero portrait is unchanged.

## Training & Community

The About paragraphs use the shared readable-body token: 18px on desktop, 17px on mobile, with 1.7 line height and stronger contrast. The lead heading retains its balanced size, and the resume link is 16px.

`src/components/editorial/TrainingCommunity.jsx` renders a compact section directly after About, with the four user-supplied descriptions in `src/data/training.js`: the 20-day ROS 2 program, robotics masterclasses, one-to-one technical sessions, and Rookies community management. It uses two columns on desktop and one on mobile with restrained separators, no poster placeholders, and the existing LinkedIn profile URL. The repeated training paragraph was removed from the employment entry because these details now have their own section.

The configured profile `https://www.linkedin.com/in/sundaram-n/` could not be opened. Search results mention training but did not verify or provide an appropriate poster from the user's own posts. No posters or post URLs were retrieved or fabricated. To add media, supply the 20-day ROS 2 training poster and robotics masterclass poster, ideally with their original post URLs. The existing LinkedIn profile screenshot remains exclusively the About image.
