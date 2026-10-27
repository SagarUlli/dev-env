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

### Deploying to Vercel

The absolute easiest way to deploy this application is using the [Vercel Platform](https://vercel.com). Simply import your cloned GitHub repository to deploy with zero manual setup.
