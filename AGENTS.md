# AGENTS.md

## Project overview

This repository is John Margotti's personal portfolio site. It is a small,
client-side React 18 application created with Create React App (`react-scripts`
5). Keep changes focused and proportional to that architecture; do not add a
new framework, state library, styling system, or build tool unless the user
explicitly asks for one.

Active feature work takes place on the `development` branch. Do not merge into
`main`, create commits, or push changes unless the user explicitly requests it.

## Repository map

- `src/index.js` mounts the React application.
- `src/App.js` owns the `BrowserRouter`, top navigation, page routes, and the
  persistent social links.
- `src/components/` contains one component and a colocated CSS file for most
  pages or UI sections.
- `src/components/Nav.js` derives its active state from `useLocation`. Keep its
  links absolute and route-aware rather than restoring click-only state.
- `src/components/Portfolio.js` renders the Portfolio introduction, a polished
  empty state when no projects exist, and responsive project cards when data is
  available.
- `src/components/Data/Projects.js` is the single data source for portfolio
  cards. Add or edit entries there rather than hard-coding cards in
  `Portfolio.js`. It is intentionally empty while the next project collection
  is being prepared.
- `src/components/assets/Resume.pdf` is the downloadable resume.
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

## Portfolio page

- Keep the empty state: an empty `Projects` array should look intentional and
  must not produce a blank page.
- Portfolio entries currently support `id`, `title`, `type`, `overview`,
  `description`, `language`, `mobile`, `image`, `imagealt`, `weblink`, and
  `git`. New fields should be optional or supplied for every entry.
- `language` is displayed as comma-separated technology tags. Avoid putting
  explanatory prose in that field.
- "Feed the Monkey" (the first entry in `Projects.js`) is the copy-length
  template: its `overview` (one sentence) and `description` (three to four
  sentences) roughly fill the card's `22rem` depth without leaving obvious
  empty space above the tech tags/buttons, and without overflowing. When
  adding or editing an entry, match that rough length — pad noticeably short
  copy with more real detail from the project (features, tech, who it's for,
  origin/backstory) and trim noticeably long copy — but never invent details
  that aren't true of the project, and keep the tone professional (no filler
  sentences just to take up space).
- Cards use a fluid grid: 4 columns on desktop (`.portfolio-page` widened to
  `1680px`), stepping down to 3 columns at `1440px`, 2 columns at `1150px`,
  and 1 column at `780px` (where card height reverts to `auto`). Do not add
  fixed card widths. Card title/overview/description font sizes and content
  padding were intentionally trimmed to stay readable at the narrower
  4-column width — do not bump the column count further without re-checking
  readability and re-tuning that type scale.
- Keep Portfolio styles scoped with `portfolio-`, `project-card`, or similarly
  specific class names. Do not restore generic selectors such as `.card` or
  `li` in `Portfolio.css`.
- `.project-card` carries a glowing border (`border-color` plus a matching
  `box-shadow`) using `--color-primary-variant`, brightening on hover. Preserve
  this glow when touching card styles; if adjusting the palette, keep the
  border color and glow color in sync.
- Cards in the same row stretch to equal height, using CSS Grid's default
  `align-items: stretch` (do not set `align-items: start`/`end` on
  `.portfolio-grid`), `.project-card { height: 100% }`, and
  `.project-card__content { flex: 1; min-height: 22rem }`. The `22rem` floor
  is the original "Feed the Monkey" card's depth from when it was the only
  card, so a lone card (or a row of similarly short cards) still renders at
  that depth; taller content grows the whole row instead. `.project-card__actions`
  uses `margin-top: auto` so the Live project/Source code buttons always land
  on the same bottom edge across a row. Keep `min-height` + `flex: 1` on
  `.project-card__content`, never a fixed `height` — `.project-card` has
  `overflow: hidden`, so a fixed height clips any card whose content runs
  longer than the floor and hides its buttons. Stretch-to-tallest only grows
  shorter cards; it should never clip a taller one.
- The Portfolio route changes the globally fixed social links into a static
  footer through a route-presence selector. Verify that behavior if the App
  shell or DOM order changes.
- For Portfolio UI work, verify at least a desktop viewport near `1280x720`
  and a narrow phone viewport near `390x844`. Check horizontal overflow, the
  active navigation item, empty-state rendering, and browser error overlays.

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

CSS is global in this project. Generic selectors such as `header`, `section`,
`li`, and `.service` can affect multiple pages, and some selectors are
duplicated across component stylesheets. Before changing a broad selector,
search for every use and verify all affected routes. Prefer component-scoped
class names for new styles. The Portfolio hero deliberately overrides the
global mobile `header` height rule; preserve that override unless the global
rule is safely refactored.

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
