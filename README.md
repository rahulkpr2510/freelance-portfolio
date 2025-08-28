<div align="center">
  <h2 align="center">✨ ByteWave – Freelance Full-Stack Developer Portfolio</h2>
  <p align="center">
    A modern and vibrant portfolio website for a freelance development team specializing in full-stack web and mobile applications built with React, Next.js, TailwindCSS, and DevOps.
  </p>
  <br />
  <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/-TailwindCSS-black?style=for-the-badge&logo=tailwind-css&logoColor=06B6D4" alt="Tailwind" />
  <img src="https://img.shields.io/badge/-React_Native-black?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native" />
  <img src="https://img.shields.io/badge/-Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/-Node.js-black?style=for-the-badge&logo=node.js&logoColor=339933" alt="Node.js" />
  <img src="https://img.shields.io/badge/-Postgres-black?style=for-the-badge&logo=postgresql&logoColor=4169E1" alt="Postgres" />
  <img src="https://img.shields.io/badge/-Docker-black?style=for-the-badge&logo=docker&logoColor=2496ED" alt="Docker" />
  <img src="https://img.shields.io/badge/-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</div>

---

## 📋 Table of Contents

- [✨ Introduction](#introduction)
- [⚙️ Tech Stack](#tech-stack)
- [📂 Project Structure](#project-structure)
- [🤸 Quick Start](#quick-start)
- [📜 License](#license)

---

<a name="introduction"></a>

## ✨ Introduction

**ByteWave** is a portfolio website for a freelance full-stack web and mobile development team. It showcases services, projects, workflows, tech stack, and client testimonials with a modern UI built using React and Next.js enhanced with smooth animations and performance optimizations.

The site targets potential clients interested in robust, scalable apps with modern technologies and seamless UX across devices.

---

<a name="tech-stack"></a>

## ⚙️ Tech Stack

- **Framework:** React, Next.js (App Router)
- **Styling:** Tailwind CSS, Shadcn UI
- **Animation:** Framer Motion
- **Mobile:** React Native, Expo
- **Backend:** Node.js, Express, Prisma, PostgreSQL
- **DevOps:** Docker, AWS, Vercel, CI/CD pipelines

---

<a name="project-structure"></a>

## 📂 Project Structure

```
/app                      # Next.js app directory and routes
/components               # Reusable UI components (Hero, Work, Services, etc.)
/hooks                    # Custom React hooks
/pages/api                # API routes (e.g., contact)
/public                   # Static assets and images
/prisma                   # Prisma schema and migrations
/styles                   # Tailwind config and global styles
/utils                    # Helpers and utilities
```

---

<a name="quick-start"></a>

## 🤸 Quick Start

### Prerequisites

Ensure you have:

- Node.js (v16+ recommended)
- Yarn / npm / pnpm
- PostgreSQL (for backend database)
- Docker (optional, for containerization)

### Environment Setup

Create a `.env` file with your configuration keys:

```
DATABASE_URL="postgresql://user:password@localhost:5432/yourdb"
NEXT_PUBLIC_VERCEL_ANALYTICS_ID="your-vercel-analytics-key"
# Add more keys as needed for auth, APIs, etc.
```

### Install Dependencies

```
yarn install
# or
npm install
# or
pnpm install
```

### Database Setup (Prisma)

```
npx prisma generate
npx prisma migrate dev
```

### Run the Development Server

```
yarn dev
# or
npm run dev
# or
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio in action.

---

<a name="license"></a>

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by the ByteWave team, delivering fast, scalable web & mobile apps that move metrics.
