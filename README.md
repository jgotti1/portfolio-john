# John Margotti — Portfolio

Personal portfolio site built with React 18: a single scrolling page with
Home, About, Work (project cards), Skills, and Contact sections. Two legacy
pages (About, Services) still exist at their own routes but are no longer
linked from the nav. Deployed on [Vercel](https://vercel.com).

## Tech Stack

- [React 18](https://react.dev/) with functional components and hooks
- [Create React App](https://create-react-app.dev/) (`react-scripts` 5)
- [React Router v7](https://reactrouter.com/) for client-side routing and
  scroll-to-section navigation on one page
- [React Hook Form](https://react-hook-form.com/) + [EmailJS](https://www.emailjs.com/)
  (`@emailjs/browser`) for the contact form
- [React Icons](https://react-icons.github.io/react-icons/) for iconography
- [Vercel Web Analytics](https://vercel.com/docs/analytics) (`@vercel/analytics`)
  for visitor/page-view tracking

## Getting Started

Install dependencies:

```bash
npm ci
```

Run the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page reloads automatically on changes.

## Available Scripts

- `npm start` — runs the app in development mode
- `npm run build` — builds the app for production to the `build` folder
- `npm test` — launches the test runner in interactive watch mode
- `npm run eject` — ejects the CRA configuration (one-way operation)

## Project Structure

```
src/
  App.js                    # router setup, nav, footer, analytics
  index.js                  # app entry point
  components/
    SinglePage.js            # the one-page layout: Header, Profile, Portfolio, Toolkit, Contact
    sections.js               # section ids/labels + scroll-to-section helpers shared by Nav and SinglePage
    Header.js                  # hero section
    Nav.js                      # top navigation
    Profile.js                   # about-me section
    Portfolio.js                  # work section (renders project cards from Data/Projects.js)
    Toolkit.js                     # skills section
    Contact.js                      # contact form (React Hook Form + EmailJS)
    Footer.js                       # site footer
    About.js, Services.js            # legacy standalone pages (still routable, not linked in nav)
    Data/Projects.js                  # single source of data for portfolio cards
    assets/Resume.pdf                  # downloadable resume
public/
  images/                    # images referenced by the portfolio cards
  favicon.svg                # browser tab icon
```

## Adding a New Project Card

Project cards are data-driven from `src/components/Data/Projects.js` — never
hard-code a new card directly in `Portfolio.js`. Two Claude Code skills
automate the whole flow across a project's own repo and this portfolio repo:

1. **In the project's own repo**, run:

   ```
   /portfolio-card <live-url>
   ```

   This reads the project's code, screenshots the live site, and writes a
   hidden machine-readable JSON "card" (title, tagline, description, tech,
   links) into that repo's own `README.md`, plus a preview image at
   `docs/preview.jpg`. Commit and push that project so the card and image are
   live on GitHub.

2. **In this portfolio repo**, run:

   ```
   /build-card https://github.com/<owner>/<repo>
   ```

   This fetches that project's README, parses the hidden card, downloads the
   preview image into `public/images/`, and adds a matching entry to
   `src/components/Data/Projects.js` using this site's existing card fields
   and styling.

3. Review the result (`npm start` and check the Work section), then commit
   and push this repo — Vercel redeploys automatically from `main`.

Run `/portfolio-card` again on a project any time its live URL, features, or
tech stack change, then re-run `/build-card` here to refresh its entry.

## Contributing / Development Notes

See [AGENTS.md](./AGENTS.md) for detailed conventions on styling, routing,
forms, and change discipline when working on this codebase.
