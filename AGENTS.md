# AGENTS.md

## Project overview

This repository is John Margotti's personal portfolio site. It is a small,
client-side React 18 application created with Create React App (`react-scripts`
5). Keep changes focused and proportional to that architecture; do not add a
new framework, state library, styling system, or build tool unless the user
explicitly asks for one.

## Repository map

- `src/index.js` mounts the React application.
- `src/App.js` owns the `BrowserRouter`, top navigation, page routes, and the
  persistent social links.
- `src/components/` contains one component and a colocated CSS file for most
  pages or UI sections.
- `src/components/Data/Projects.js` is the single data source for portfolio
  cards. Add or edit portfolio entries there rather than hard-coding cards in
  `Portfolio.js`.
- `src/components/assets/Resume.pdf` is the downloadable resume.
- `public/images/` contains images referenced by string paths such as
  `../images/john1.jpg` and `../images/taskmaster.png`.
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
run `npm run build` after code changes. The build currently succeeds without
compiler warnings. The dependency tree still contains security advisories
under the legacy, unmaintained `react-scripts` toolchain; do not run
`npm audit fix --force`, because npm proposes an invalid `react-scripts@0.0.0`
replacement. Address the remainder through a deliberate build-tool migration.

## Implementation conventions

- Use functional React components and hooks, matching the existing code.
- Keep each component's styles in its existing CSS file. Shared theme tokens
  and broad element rules belong in `src/index.css`.
- Reuse the CSS custom properties in `:root` (colors, container widths, and
  transitions) instead of introducing near-duplicate literal values.
- Preserve the existing responsive breakpoints unless a design change calls
  for a coordinated update. Check desktop, tablet, and phone layouts when
  changing sizing or positioning.
- Use semantic HTML and accessible labels/alternative text. Interactive
  elements must remain keyboard usable, and links that open a new tab must use
  `rel="noreferrer"` or an equivalent safe value.
- Prefer stable data keys when adding an identifier to project data. Do not
  introduce additional index-based list keys.
- Keep changes in plain JavaScript and CSS unless the user requests a broader
  migration.

## Routing and assets

- Page routes are declared in `src/App.js` and navigation destinations in
  `src/components/Nav.js`; update both when adding, removing, or renaming a
  route.
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
- Avoid direct DOM manipulation in new React code. If the submit-button state
  is changed, prefer React state over `document.getElementById`.

## CSS cautions

CSS is global in this project. Generic selectors such as `section`, `li`, and
`.service` can affect multiple pages, and some selectors are duplicated across
`Portfolio.css` and `services.css`. Before changing a broad selector, search
for every use and verify all affected routes. Prefer component-scoped class
names for new styles.

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
