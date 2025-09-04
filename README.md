# 🧪 Vue Advanced – 1-Day Workshop

Welcome to the **Vue Workshop**! 🎉
This hands-on 1-day course is designed for **web developers new to Vue**. Together, we’ll learn the **core concepts** of Vue 3 with the Composition API (`<script setup>`) – by building real components, writing clean code, and having fun!

---

## 📅 Workshop Overview

**Target Audience:** Web developers new to Vue (some basic HTML, JS experience recommended)
**Duration:** 1 day (6–7 exercises per day)
**Tech:** Vue 3, Vite, TypeScript, Composition API (`<script setup>`)

By the end of this course, you’ll:

- Understand advanced reactivity, components, props, emits, and lifecycle hooks
- Build and structure a Vue app from scratch
- Be able to read and write idiomatic Vue code confidently

---

## 🚀 Getting Started

> 📦 This repo is a monorepo using [`pnpm`](https://pnpm.io) for managing all exercises and solutions.

### ✅ 1. Clone the repository

```bash
git clone https://github.com/inovexAcademy/vue-training-basic.git
cd vue-training
```

### ✅ 2. Install dependencies (all at once)

```bash
pnpm install
```

> This installs all exercises and solutions in one go via `pnpm-workspace.yaml`.

### ✅ 3. Start an exercise

Go into the desired exercise folder and run the dev server:

```bash
cd _exercises/01-setup
pnpm dev
```

> You can work on exercises one-by-one. They’re isolated and ready-to-run.

---

## 🧩 Structure of the Repository

```text
vue-training/
├── _exercises/        → Your playground - each step builds on the last.
│   ├── 01-setup/
│   ├── 02-reactivity/
│   └── ...
├── _solutions/        → Complete solutions for each exercise
│   ├── 01-setup/
│   └── ...
├── shared/           → Utilities shared across exercises
├── scripts/          → Helper scripts (e.g., copy solution)
├── vite.config.ts    → Shared Vite config
├── tsconfig.json     → Shared TypeScript config
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
