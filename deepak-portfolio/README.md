# Deepak Hari V — React Portfolio

A simple, responsive dark-theme portfolio built with React, Vite, and Lucide icons. It uses no animation libraries and has no animated transitions.

## Run locally

1. Install Node.js (LTS) if it is not already installed.
2. Extract this project folder.
3. Open the folder in VS Code.
4. Open the VS Code terminal and run:

```bash
npm install
npm run dev
```

5. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Customize

- Update text and project information in `src/components/`.
- Update colors and layout in `src/styles.css`.
- Add a profile photo to `public/` and update the hero component if you want to use one.
- Replace the GitHub profile links in `Projects.jsx` with direct repository URLs when you have them.
- Add your LinkedIn URL in `Contact.jsx` when available.
- Add your resume as `public/resume.pdf` and add a download link in `Hero.jsx` if you want a CV button.

## Build for deployment

```bash
npm run build
```

The production-ready site is generated in the `dist` folder.
