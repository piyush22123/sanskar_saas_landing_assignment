# Flowdesk - SaaS Landing Page

A responsive SaaS landing page built for the Sankar Group Front-End Development Internship Assignment.

## About

Flowdesk is a sample project and task management product. It helps teams manage projects, tasks and progress from one place.

## Technologies

- React.js
- Vite
- Tailwind CSS
- Lucide React

## Folder structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Features.jsx
│   ├── HowItWorks.jsx
│   ├── Pricing.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── pages/
│   └── Home.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Run locally

1. Install Node.js (LTS).
2. Open this project folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL shown in the terminal, usually http://localhost:5173.

## Production build

Run `npm run build`. The output will be created in the `dist` folder.

## Features

- Responsive navigation and mobile menu
- Hero section with dashboard preview
- Feature cards and how-it-works section
- Two pricing plans
- Demo request form with basic validation and success message
- Navigation links that scroll to page sections

## Design explanation

1. I chose Flowdesk as a simple project and task management SaaS product.
2. I used a clean green and white colour palette to keep the page readable.
3. The hero section includes a dashboard preview to show what the product does.
4. I split the page into small components to keep the code easy to read and update.
5. The pricing section has two simple plans for visitors to compare.
6. The demo form checks the required fields and email format before showing a success message.
7. Tailwind CSS responsive classes make the layout work on mobile, tablet and desktop.

## Note

This is a front-end-only project. The demo form displays a local success message and does not send or store data.
