# Dev Environment Dashboard

A modern, responsive development environment dashboard built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This platform provides an intuitive interface for managing, tracking, and orchestrating localized developer configurations, AI agents, and workflows.

The application is fully optimized and deployed live at [dev-env-seven.vercel.app](https://vercel.app).

## 🚀 Features

- **Next.js App Router:** Leverages modern file-based routing and React Server Components for optimal speed.
- **AI Agent Orchestration:** Integrated support for custom AI agent configurations and guidelines via `AGENTS.md` and `CLAUDE.md`.
- **TypeScript First:** Built with strict type-safety to prevent runtime errors and ensure stable environments.
- **Tailwind CSS & PostCSS:** Beautifully designed using modern component utility styles.
- **Linting & Code Quality:** Code standards strictly enforced via ESLint configurations.

## 🛠️ Tech Stack

- **Framework:** Next.js (Latest)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, PostCSS
- **Font Optimization:** `next/font` (Geist Sans & Geist Mono)
- **Deployment:** Vercel

## 📦 Project Structure

```bash
├── app/                  # Next.js App Router core source files
├── public/               # Static assets (images, icons, fonts)
├── AGENTS.md             # AI Agent rules and workflow details
├── CLAUDE.md             # Developer commands and contextual info
├── eslint.config.mjs     # Code quality rule definitions
├── next.config.ts        # Next.js framework configuration
├── tsconfig.json         # Strict TypeScript compiler options
└── package.json          # Node dependencies and project scripts
```

## 💻 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org) (v18.x or later recommended) installed on your local machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd dev-env
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **View in browser:**
   Open [http://localhost:3000](http://localhost:3000) inside your web browser to interact with the environment dashboard.

## 🏗️ Production Build & Deployment

To generate an optimized build of the application:

```bash
npm run build
```

To run the optimized production bundle locally:

```bash
npm run start
```

## ⚡ Backend REST API & AI Architecture

The backend uses **Next.js App Router Route Handlers**, **strictly typed TypeScript**, **JWT authentication**, **PostgreSQL**, and **Prisma ORM**. Passwords are hashed with bcrypt before they are stored; plaintext passwords are never returned by the API.

### JWT authentication

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `POST` | `/api/auth/register` | Validate an email and password, hash the password, and create a PostgreSQL user. Returns `201`; duplicate email returns `409`. |
| `POST` | `/api/auth/login` | Verify the password hash and return a signed HS256 JWT with a one-hour lifetime. |

Both endpoints accept JSON with `email` and `password`. Passwords must be between 8 and 72 UTF-8 bytes. The login token is sent to protected endpoints using `Authorization: Bearer <token>`. Set `JWT_SECRET` to a random secret of at least 32 characters.

### PostgreSQL and Prisma

`prisma/schema.prisma` defines the PostgreSQL `User` model (`id`, unique `email`, bcrypt-hashed `password`, and `createdAt`). The Prisma client uses the PostgreSQL driver adapter and reads its connection string from `DATABASE_URL`. Copy `.env.example` to `.env`, configure a PostgreSQL database and secrets, and apply the initial schema with:

```bash
npx prisma migrate dev --name init
```

The development and production build scripts generate the typed Prisma client before starting Next.js.

### Protected AI summarization

`POST /api/ai/summarize` requires a valid, unexpired JWT in the `Authorization` header and accepts `{ "text": "..." }` as JSON (up to 20,000 characters). It sends educational content to the OpenAI Chat Completions API and returns `{ "summary": "..." }`. Configure `OPENAI_API_KEY` and optionally `OPENAI_MODEL` (defaults to `gpt-4o-mini`) in the server environment. Requests without a valid token are rejected before the text is sent to the AI provider.

### Deploying to Vercel

The absolute easiest way to deploy this application is using the [Vercel Platform](https://vercel.com). Simply import your cloned GitHub repository to deploy with zero manual setup.
