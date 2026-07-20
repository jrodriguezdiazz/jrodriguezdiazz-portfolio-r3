# Portfolio

A personal portfolio website built with Next.js, React, Tailwind CSS, and pnpm.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/jrodriguezdiazzs-projects/v0-portfolio)

## Overview

This repository contains a modern portfolio site implemented with:
- Next.js 15.2.8
- React 19
- Tailwind CSS
- TypeScript
- pnpm package management

The app includes improved navigation UX, sticky section offset handling, and content updates for experience and profile sections.

## Getting Started

### Requirements
- Node.js `24`
- `pnpm`

### Install dependencies
```bash
pnpm install
```

### Run locally
```bash
pnpm dev
```

### Build for production
```bash
pnpm build
```

### Lint and format
```bash
pnpm lint
pnpm format
```

## Project Notes

- `package.json` specifies Node engine `24`.
- `pnpm-workspace.yaml` is included to support workspace-aware builds for dependencies like `sharp` and `unrs-resolver`.
- The lockfile is managed by `pnpm` in `pnpm-lock.yaml`.

## Scripts

- `pnpm dev` — start development server
- `pnpm build` — production build
- `pnpm lint` — run ESLint
- `pnpm lint:fix` — fix lint issues
- `pnpm format` — run linter and Prettier
- `pnpm check` — run lint and format checks

## Contribution

Please use the repository PR template at `.github/pull_request_template.md` for new pull requests.
