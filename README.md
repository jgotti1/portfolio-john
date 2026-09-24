# John Margotti — Portfolio

Personal portfolio site built with React 18, showcasing projects, services, and
a way to get in touch. Live pages: Home, About, Services, Portfolio, and
Contact.

## Tech Stack

- [React 18](https://react.dev/) with functional components and hooks
- [Create React App](https://create-react-app.dev/) (`react-scripts` 5)
- [React Router v7](https://reactrouter.com/) for client-side routing
- [React Hook Form](https://react-hook-form.com/) + [EmailJS](https://www.emailjs.com/) for the contact form
- [React Icons](https://react-icons.github.io/react-icons/) for iconography

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
  App.js                  # routes, nav, and persistent social links
  index.js                # app entry point
  components/
    Header.js              # home / landing section
    HeaderSocials.js        # social links shown on the home page
    Nav.js                  # top navigation
    About.js                # about page
    Services.js             # services page
    Portfolio.js             # portfolio page (renders project cards)
    Contact.js               # contact form (React Hook Form + EmailJS)
    Data/Projects.js          # single source of data for portfolio cards
    assets/Resume.pdf          # downloadable resume
public/
  images/                  # images referenced by the portfolio cards
```

Adding a new portfolio project means adding an entry to
`src/components/Data/Projects.js` and its screenshot to `public/images/`
rather than hard-coding a card in `Portfolio.js`.

## Contributing / Development Notes

See [AGENTS.md](./AGENTS.md) for detailed conventions on styling, routing,
forms, and change discipline when working on this codebase.
