# AGENTS.md

## Project overview

This repository is John Margotti's personal portfolio site. It is a small,
client-side React 18 application created with Create React App (`react-scripts`
5). Keep changes focused and proportional to that architecture; do not add a
new framework, state library, styling system, or build tool unless the user
explicitly asks for one.

Work now happens directly on `main` (the `development` branch was merged into
it). Do not create commits or push changes unless the user explicitly requests
it. The site is hosted on Vercel (project `portfolio-john`, team `john-74e3`),
connected to the GitHub repo: pushes to `main` deploy to production and serve
`johnmargotti.com` and `margotticode.com`; other branches get preview
deployments. The previous multi-page design lives on the `legacy` branch; do
not merge it back into `main`.

## Repository map

- `src/index.js` mounts the React application.
- `src/App.js` owns the `BrowserRouter`, top navigation, page routes, and the
  persistent social links.
- `src/components/` contains one component and a colocated CSS file for most
  pages or UI sections.
- `src/components/SinglePage.js` renders the whole site as one page, in order:
  `Header.js` (hero, `#home`), `Profile.js` (`#about`), `Portfolio.js`
  (`#portfolio`), `Toolkit.js` (`#skills`), and `Contact.js` (`#contact`). Each
  has a colocated lowercase CSS file (`header.css`, `profile.css`, etc.).
- `src/components/sections.js` lists the sections (id, nav label, optional
  route path) and the scroll helper. `SectionLink.js` is the link to use for
  any in-page jump; it scrolls smoothly and updates the URL.
- `src/components/Nav.js` is the fixed top bar with a phone drop-down menu;
  `Footer.js` is the shared footer. `Reveal.js` fades content in on scroll.
- `HeroTerminal.js` (styles in `heroTerminal.css`) is the typing terminal card
  that floats over the hero portrait.
- `src/components/Data/Projects.js` is the single data source for portfolio
  cards. Add or edit entries there rather than hard-coding cards in
  `Portfolio.js`.
- `src/components/assets/Resume.pdf` is the downloadable resume and the source
  of truth for the skills shown in the Skills section (`Toolkit.js`).
- `public/images/` contains images referenced by string paths such as
  `../images/john1.jpg`.
- `public/index.html` contains the page title and document metadata.

`src/components/contactUs.js` is not part of the rendered application and
references a CSS file that does not exist. Do not wire it into the application
without first resolving whether it should replace or be consolidated with
`Contact.js`.

## Commands

Run commands from the repository root.

- Install exact locked dependencies: `npm ci`
- Start the development server: `npm start`
- Create a production build: `npm run build`
- Run tests non-interactively, once tests exist:
  `CI=true npm test -- --watchAll=false`

There is currently no dedicated `lint` script and no test suite. At minimum,
run `npm run build` after code changes. Create React App is unmaintained, so
dependency audits can report transitive build-tool advisories. Do not run
`npm audit fix --force`; address incompatible dependency fixes through a
deliberate build-tool migration.

## Implementation conventions

- Use functional React components and hooks, matching the existing code.
- Keep each component's styles in its existing CSS file. Shared theme tokens
  and broad element rules belong in `src/index.css`.
- Reuse the CSS custom properties in `:root` (colors, container widths, and
  transitions) instead of introducing near-duplicate literal values.
- Preserve existing responsive behavior unless a design change calls for a
  coordinated update. Check desktop, tablet, and phone layouts when changing
  sizing or positioning.
- Use semantic HTML and accessible labels/alternative text. Interactive
  elements must remain keyboard usable, and links that open a new tab must use
  `rel="noreferrer"` or an equivalent safe value.
- Use stable data keys. Portfolio cards prefer `project.id`, then `title` or
  `weblink`; do not revert them to array-index keys.
- Keep changes in plain JavaScript and CSS unless the user requests a broader
  migration.

## Design system

The site is a single-page redesign that keeps the original palette (indigo
`#1f1f38`/`#2c2c6c` and sky blue `#4db5ff`). The previous multi-page design
is preserved on the `legacy` branch.

- Colors, fonts, spacing, and radii are tokens on `:root` in `src/index.css`
  (`--bg`, `--surface`, `--border`, `--accent`, `--text-2`, and so on). Use
  them instead of literal values. The legacy `--color-*` names remain only for
  the hidden About and Services pages.
- Fonts: Plus Jakarta Sans for text and JetBrains Mono for eyebrows, labels,
  and the terminal.
- Shared primitives in `index.css`: `.container`, `.page-section` (add
  `--tinted` for the alternating band), `.section-head`, `.eyebrow`,
  `.text-gradient`, `.btn` with `--primary`/`--secondary`/`--sm`, and `.chip`.
- Motion (reveals, card entrance, status pulse, terminal) must stay covered by
  the `prefers-reduced-motion` block in `index.css`.

## Single-page sections

- Hero: headline, lede, two actions, and three stats on the left; the
  `jcover.png` portrait on the right with the terminal card hanging off its
  top-right corner (above the frame at `960px` and below so it never covers
  the faces). The projects stat is `Projects.length`.
- Hand pop-out: `.hero__frame` clips the photo, and `.hero__pop` is an
  unclipped copy whose L-shaped `clip-path` shows only what breaks past the
  frame (the cap above, the hand to the right). Both copies must share
  `--pop-scale`, `transform-origin: left bottom`, and object-fit, or the seam
  shows. The portrait (98% wide, pulled 8% left into the column gap on desktop)
  leaves room on the right for the hand; the terminal is anchored to
  `.hero__visual`, so resizing the portrait does not move it. The source photo is cropped at its right edge, so the hand ends in a
  straight cut; an uncropped photo would look better.
- About (`Profile.js`): the bio plus three focus-area cards. The bio and hero
  lede name no employers, schools, or companies; keep them generic ("a major
  national media organization", "a full-stack developer boot camp"), do not
  repeat a phrase, and omit contact details. Focus-card text must stay true to
  the bio and resume.
- Work (`Portfolio.js`): filter buttons (All, Web apps, Games, Mobile) derived
  from the free-text `type` field by `categoryOf` (contains "game" = game,
  "mobile" = mobile, otherwise web; empty filters are hidden), then a 3/2/1
  column card grid (breakpoints `1080px` and `680px`). Cards in a row stretch
  to equal height and the action buttons sit on a shared bottom edge via
  `margin-top: auto`; do not give cards a fixed height.
- Keep the Work empty state: an empty `Projects` array must look intentional.
- Portfolio entries support `id`, `title`, `type`, `overview`, `description`,
  `language`, `mobile`, `image`, `imagealt`, `weblink`, `git`, `availability`,
  `availabilityUrl`, `imagefit`, and `imagebg`. New fields should be optional
  or supplied for every entry. For projects with no public web link, set
  `weblink: null` and `availability` (e.g. "On the App Store"); add
  `availabilityUrl` to make it a link (never guess this URL). For portrait
  phone screenshots, set `imagefit: "contain"` and a matching light `imagebg`.
- `language` renders as technology chips; list every technology and avoid
  prose. RedactMe leads; new entries go after it unless told otherwise. Keep
  `overview` to one sentence and `description` to three or four, and never
  invent details.
- Skills (`Toolkit.js`): four resume-backed groups. Update them when the
  technical-skills section of `Resume.pdf` changes.
- Let's Talk: intro, email/phone cards, and a small photo with the reply-time
  note on the left; the form card on the right. Its copy says "I respond to
  every message within 24 hours".
- Verify UI work at about `1440x900`, `820x1180`, and `390x844`: horizontal
  overflow, nav highlighting, the phone menu, and console errors. Full-page
  headless screenshots show the fixed nav only at the top of the capture; that
  is an artifact.

## Routing and assets

- `/`, `/Portfolio`, and `/Contact` share one parent route in `App.js` that
  renders `SinglePage`, so the page stays mounted and the path (or a hash such
  as `/#about`) only picks which section to scroll to. `SinglePage` scrolls on
  direct visits and Back/Forward (`POP` navigation); `SectionLink` scrolls on
  clicks. Old `/Portfolio` and `/Contact` links keep working.
- Nav highlighting follows the section crossing the middle of the viewport.
  When adding a section, update `sections.js`, `SinglePage.js`, and give the
  section an `id` plus the `page-section` class (which sets `scroll-margin-top`
  for the fixed nav).
- Page routes are declared in `src/App.js` and navigation destinations in
  `src/components/Nav.js`; update both when adding, removing, or renaming a
  route.
- The About and Services tabs are intentionally hidden for now: they carry
  `hidden: true` in the `navItems` list in `Nav.js`. Their routes and
  components remain, so set `hidden: false` to bring a tab back; do not delete
  those pages.
- Existing route paths use capitalized names (`/About`, `/Contact`,
  `/Services`, and `/Portfolio`). Treat route and filename casing carefully so
  production behavior matches local development.
- Put publicly addressed images in `public/images/`. Verify the path and add
  meaningful `imagealt` text for every new portfolio item.
- Import bundled files, such as the resume, from within `src` rather than
  constructing filesystem paths at runtime.

## Forms and external services

- `Contact.js` uses React Hook Form and EmailJS. Preserve validation and both
  success and failure feedback when changing submission behavior.
- Do not change EmailJS service IDs, template IDs, or public keys without an
  explicit request. Do not add private credentials or `.env` files to source
  control.
- The form currently uses the reconnected EmailJS Gmail service
  (`service_15m4fp5`, template `template_mmq1uul`). If submissions start
  failing with "Gmail_API: Invalid grant", the Gmail connection in the EmailJS
  dashboard has expired: reconnect it under Email Services (no code change).
  The template variables must stay `name`, `email`, `phone`, `subject`, and
  `message`. Never put the EmailJS private key in the repository or the
  browser bundle; only the public key belongs in `Contact.js`.
- Avoid direct DOM manipulation in new React code. If the submit-button state
  is changed, prefer React state over `document.getElementById`.
- A `contact-form` branch (already pushed) replaces EmailJS with a Vercel
  serverless function (`api/contact.js`) that emails
  `johnmargotti@gmail.com` through Resend and sends an ntfy phone alert. It
  must not be merged into `main` until `RESEND_API_KEY` is set in Vercel
  (`NTFY_TOPIC` is already set); otherwise the form would report success
  without delivering. That branch also carries a rewritten forms section for
  this file.

## CSS cautions

CSS is global in this project. The single-page sections use prefixed class
names (`hero__`, `profile__`, `work-`, `toolkit__`, `contact__`, `site-nav`,
`site-footer`) and avoid bare element selectors; keep it that way. The hidden
About and Services pages still use their older stylesheets; their former
global `section` and `li` rules are scoped to `#Services`. Those pages were not
restyled for this design, so restyle them before unhiding either tab.

## Change discipline

- Preserve user changes already present in the worktree and inspect `git diff`
  before editing a modified file.
- Do not edit generated output in `build/`, dependencies in `node_modules/`, or
  `package-lock.json` unless dependency changes are part of the task.
- Avoid unrelated spelling, copy, formatting, or dependency cleanup in a
  focused change.
- For visual work, verify the affected route in a browser at relevant viewport
  sizes in addition to running the production build.
- In the handoff, state what changed, what verification ran, and any remaining
  warnings or unverified behavior.
