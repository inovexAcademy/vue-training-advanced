# 🧪 Vue Advanced – 1-Day Workshop

Welcome to the **Vue Workshop**! 🎉
This hands-on 1-day course is designed for **web developers already knowing about Vue**. Together, we’ll learn **advanced concepts** of Vue 3 with the Composition API (`<script setup>`) – by building real components, writing clean code, and having fun!

---

## 📅 Workshop Overview

**Target Audience:** Web developers already knowing Vue (Vue 3, HTML, JS/TS experience recommended)
**Duration:** 1 day (3-4 exercises)
**Tech:** Vue 3, Playwright, TypeScript, Composition API (`<script setup>`)

By the end of this course, you’ll:

- Understand advanced reactivity, lifecycle hooks, watchers, composables, global store with pinia and api generators.
- Build and structure a Vue app step by step
- Be able to read and write idiomatic Vue code confidently

---

## 🚀 Getting Started

> 📦 This repo is a monorepo using [`pnpm`](https://pnpm.io) for managing all exercises and solutions.

### ✅ Prerequisites

Ensure pnpm and node are installed and in the correct version

```bash
node -v // v26
pnpm -v // v10 or higher
```

### ✅ 1. Clone the repository

```bash
git clone https://github.com/inovexAcademy/vue-training-advanced.git
cd vue-training-advanced
```

### ✅ 2. Bootstrap toolchain and install dependencies

For first-time setup, run the bootstrap script from the repository root:

```bash
./scripts/bootstrap.sh
```

This enables Corepack, installs the pinned package manager version from `package.json`, and installs dependencies.

Alternative one-liner:

```bash
corepack enable && corepack install && pnpm install
```

### ✅ 3. Install dependencies (all at once)

```bash
pnpm install
```

> This installs all exercises and solutions in one go via `pnpm-workspace.yaml`.

### ✅ 4. Start an exercise

Go into the desired exercise folder and run the dev server:

```bash
cd _exercises/01-Advanced-Reactivity
pnpm dev
```

or use the more convenient shortcut from the root of the repo with

```bash
pnpm start:1
```

> You can work on exercises one-by-one. They’re isolated and ready-to-run.

---

## 🧩 Structure of the Repository

```text
vue-training-advanced/
├── _exercises/        → Your playground - each step builds on the last
│   ├── 01-Advanced-Reactivity/
│   ├── 02-Advanced-Routing/
│   └── ...
├── _solutions/        → Complete solutions for each exercise
│   ├── 01-Advanced-Reactivity/
│   └── ...
├── README.md.        → Docs about this repo
├── tsconfig.json     → Shared TypeScript config
├── package.json      → Global project definition with available scripts
└── pnpm-workspace.yaml
```

---

## ⏩ Skipping Ahead / Catching Up

If you fall behind or want to peek at the next step:

1. Find the corresponding folder in `_solutions/`
2. Copy the contents into your `_exercises/XX-*` folder
   _(or use a helper script if provided)_

---

## 🤝 Code Together, Learn Together

Feel free to experiment, break things, and ask questions.
Vue is a friendly framework — and so are we! 😄

Happy learning,
— The Workshop Team 💚
