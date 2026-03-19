# DevSynthetix Lab Website

Production-grade full-stack website for **DevSynthetix Lab**.

Tagline: **Building the Future of Web & AI**

## 1. Project Overview

This project is a complete company website with:
- Premium dark-neon startup UI
- Multi-page React frontend (Home, About, Projects, Updates, Contact)
- Backend API using Node.js + Express
- Working contact form with validation and persistent storage
- Deployment-ready architecture for Vercel/Netlify + Render/Railway

## 2. Folder Structure

```text
Devsynteisix/
  frontend/
    index.html
    package.json
    vite.config.js
    .env.example
    src/
      App.jsx
      main.jsx
      index.css
      components/
        Footer.jsx
        Loader.jsx
        Navbar.jsx
        ProjectCard.jsx
        SectionTitle.jsx
      data/
        projects.js
      hooks/
        useReveal.js
      pages/
        About.jsx
        Contact.jsx
        Home.jsx
        Projects.jsx
        Updates.jsx
  backend/
    package.json
    .env.example
    data/
      contacts.json
    src/
      app.js
      server.js
      config/
        env.js
      controllers/
        contactController.js
      middleware/
        errorHandler.js
        notFound.js
      routes/
        contact.js
      services/
        contactStore.js
      utils/
        validateContact.js
  .gitignore
  README.md
```

## 3. What Each Major Part Does

### Frontend
- `frontend/src/App.jsx`: App shell, route mapping, splash loading screen.
- `frontend/src/pages/*.jsx`: Page-level UI for each section.
- `frontend/src/components/*.jsx`: Reusable UI blocks.
- `frontend/src/hooks/useReveal.js`: IntersectionObserver-based reveal animation hook.
- `frontend/src/data/projects.js`: Central project card content.
- `frontend/src/index.css`: Full design system, responsive layout, animation styles.

### Backend
- `backend/src/server.js`: Starts HTTP server.
- `backend/src/app.js`: Express app setup, CORS, JSON parser, route mounting.
- `backend/src/routes/contact.js`: Contact endpoints.
- `backend/src/controllers/contactController.js`: Request handling and responses.
- `backend/src/utils/validateContact.js`: Payload validation logic.
- `backend/src/services/contactStore.js`: Reads/writes contact entries to JSON store.
- `backend/src/middleware/*`: Centralized 404 + error response handling.

## 4. API Endpoints

### Health
- `GET /api/health`
- Response: service status and uptime

### Contact Form
- `POST /api/contact`
- Body:

```json
{
  "name": "Jane Founder",
  "email": "jane@startup.com",
  "company": "Acme Labs",
  "message": "We need a new product website and AI assistant integration."
}
```

- Validation:
  - `name`: minimum 2 chars
  - `email`: valid format
  - `message`: minimum 20 chars

- Successful submissions are saved in `backend/data/contacts.json`.

### Admin-style Data Check (basic)
- `GET /api/contact`
- Returns all stored contact entries

## 5. Data Flow and Architecture

1. User opens React app.
2. Router renders current page component.
3. On Contact page submit, frontend validates fields.
4. Frontend sends JSON to backend `POST /api/contact`.
5. Backend validates payload again (server-side safety).
6. Valid entry is stored in JSON file and success message is returned.
7. Frontend shows success/error feedback.

## 6. How Frontend Connects to Backend

Frontend reads API base from environment variable:
- `VITE_API_BASE_URL` (example in `frontend/.env.example`)

Contact submit URL:
- `${VITE_API_BASE_URL}/api/contact`

For local development:
- backend default: `http://localhost:5000`
- frontend default: `http://localhost:5173`

## 7. Local Setup

### Prerequisites
- Node.js 18+
- npm 9+

### Backend Setup

```bash
cd backend
npm install
copy .env.example .env
npm run dev
```

Backend runs on `http://localhost:5000`.

### Frontend Setup

```bash
cd frontend
npm install
copy .env.example .env
npm run dev
```

Frontend runs on `http://localhost:5173`.

## 8. Deployment Guide

### Frontend on Vercel or Netlify
1. Connect `frontend` folder as project root.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Add env var:
   - `VITE_API_BASE_URL=https://your-backend-domain.com`

### Backend on Render or Railway
1. Connect `backend` folder.
2. Start command: `npm start`
3. Add environment variables:
   - `PORT=5000` (or platform default)
   - `FRONTEND_URL=https://your-frontend-domain.com`

## 9. SEO and UX Features Included

- Semantic headings and meta tags
- Responsive design for mobile and desktop
- Neon hero with animated visuals
- Scroll reveal animation for sections
- Interactive cards and buttons
- Loading screen on app start
- Contact form validation with user feedback

## 10. How to Modify Content

- Edit projects: `frontend/src/data/projects.js`
- Edit page text: `frontend/src/pages/*.jsx`
- Edit branding and colors: `frontend/src/index.css` variables
- Change API behavior: `backend/src/controllers/contactController.js`

## 11. Best Practices for Production

- Replace JSON storage with a database (PostgreSQL, MongoDB, or Firebase)
- Add rate limiting and bot protection on contact endpoint
- Add logging, monitoring, and request tracing
- Add authentication if exposing contact list endpoint publicly
- Use CI/CD with automated linting and tests

## 12. Recommended Next Upgrades

- Integrate email delivery for contact submissions (Resend/SendGrid)
- Add CMS for updates/blog (Sanity/Contentful)
- Add analytics (Plausible/GA4)
- Add dark/light theme toggle if desired
