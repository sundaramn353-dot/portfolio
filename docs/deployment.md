# Portfolio deployment

## GitHub Pages

Repository: https://github.com/sundaramn353-dot/portfolio

Pages URL: https://sundaramn353-dot.github.io/portfolio/

The repository uses GitHub Actions as its Pages source. `.github/workflows/deploy.yml`
runs on pushes to the actual default branch, `main`, and supports manual runs.
It installs the existing lockfile with `npm ci --prefix src`, runs the interaction
checks, builds with `npm run build:pages`, and uploads `src/dist` using the official
Pages actions. Deployment status is available in the repository's Actions tab;
configuration alone does not establish that a deployment succeeded.

Vite's `github-pages` mode sets the base to `/portfolio/`. Vite rewrites bundled
scripts, styles, and font URLs; public images, video, and resume links are relative
to the page. Navigation uses section fragments, so there are no client-side routes
requiring a Pages 404 fallback. The current app is static with no backend or
server-only functionality. GitHub and LinkedIn links remain external, and contact
uses `mailto:`.

## Existing ChatGPT Sites hosting

The portfolio is a static React/Vite site hosted through the connected Sites service. No custom domain or paid add-on was enabled.

Public URL: https://meenatchi-sundaram-robotics.heroicpetunia16.chatgpt.site

The existing Site identity is saved in `.openai/hosting.json`. Reuse that identity for updates; do not create another Site.

## Updating the public site

1. Make changes in this project folder.
2. Run `npm run build`. This builds `src/dist` and mirrors it to `dist` for Sites.
3. Ask Codex: “Deploy the current portfolio to its existing public Site using .openai/hosting.json.” Codex can publish through the connected Sites tools without a GitHub login.
4. Verify the resulting public page, media, navigation, and resume link.

For the Sites deployment, a sanitized source snapshot was published separately from the existing GitHub repository. The GitHub Pages workflow uploads `src/dist`; pushing to GitHub alone does not update the Sites deployment. The Pages-specific build does not mirror to the Sites output; `npm run build` retains that existing behavior.

Deploy only the production output and hosting manifest. Do not include `.git`, dependency folders, `.env` files, private keys, or `docs/media-source`. Keep hosting credentials out of project files.
