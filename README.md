<p align="center">
  <image src="doc/logo.png" with="128" height="128">
</p>
<h3 align="center">Roger Twan</h3>
<p align="center">Personal website base on Next and Tailwind. Visit <a href="https://roger.ink" target="_blank">here</a></p>
<p align="center">
  <image src="https://img.shields.io/badge/dynamic/json?label=Version&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2FRoger-twan%2Flab%2Fmain%2Fpackage.json&color=cyan">
  <image src="https://img.shields.io/badge/dynamic/json?label=NODE&query=engines.node&url=https%3A%2F%2Fraw.githubusercontent.com%2FRoger-twan%2Flab%2Fmain%2Fpackage.json&color=purple">
  <image src="https://img.shields.io/badge/dynamic/json?label=NPM&query=engines.npm&url=https%3A%2F%2Fraw.githubusercontent.com%2FRoger-twan%2Flab%2Fmain%2Fpackage.json&color=purple">
  <image src="https://img.shields.io/badge/dynamic/json?label=Next&query=dependencies.next&url=https%3A%2F%2Fraw.githubusercontent.com%2FRoger-twan%2Flab%2Fmain%2Fpackage.json">
  <image src="https://img.shields.io/badge/dynamic/json?label=Tailwind&query=devDependencies.tailwindcss&url=https%3A%2F%2Fraw.githubusercontent.com%2FRoger-twan%2Flab%2Fmain%2Fpackage.json">
  <image src="https://img.shields.io/badge/dynamic/json?label=Three&query=dependencies.three&url=https%3A%2F%2Fraw.githubusercontent.com%2FRoger-twan%2Flab%2Fmain%2Fpackage.json">
  <image src="https://img.shields.io/badge/dynamic/json?label=D3&query=dependencies.d3&url=https%3A%2F%2Fraw.githubusercontent.com%2FRoger-twan%2Flab%2Fmain%2Fpackage.json">
  <image src="https://github.com/Roger-twan/lab/actions/workflows/nextjs.yml/badge.svg">
  <image src="https://coveralls.io/repos/github/Roger-twan/lab/badge.svg?branch=main">
  <image src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg">
</p>
<hr>

## 📸 Screenshot

![screenshot](doc/screenshot.jpeg)

## ⚒️ Development

Create a `.env.local` file on the root directory and add `GITHUB_TOKEN` to it.

```bash
# install dependencies
npm install

# run server
npm run dev

# run unit test
npm run test
```

Open [http://localhost:3000](http://localhost:3000) in the browser to view the result.

## 📑 GitHub Pages & Actions

Integrated with GitHub Actions, GitHub Pages will automatically deploy whenever there is a push to the main branch.

## 🚀 Test Coverage

Unit test coverage report has uploaded to Coveralls.
See [here](https://coveralls.io/github/Roger-twan/lab?branch=main).

## 📝 Change Logs

### 3.0.0 (2024-09-02)

- New UI presentation, along with innovative technology and a new architecture.

### 3.0.1 (2024-09-03)

- [Bug fix] [Menu disappear animation](https://github.com/roger-twan/website/issues/20)

### 3.0.2 (2024-09-04)

- [Improvement] Support for multiple project links.

### 3.0.3 (2024-09-11)

- [Improvement] Remove the cursor pointer on the project title to avoid causing confusion.

### 3.0.4 (2024-09-21)

- [Improvement] Add a Python project.

### 3.1.0 (2024-09-22)

- [New Feature] Add Gallery page.

### 3.1.1 (2024-09-28)

- [Improvement] [Optimize the photos quality in the Gallery page](https://github.com/roger-twan/website/issues/24)
- [Improvement] Upgrade Next version to v14.

### 3.1.2 (2024-11-29)

- [Improvement] Add a Node.js project -- Simple API.

### 3.1.3 (2024-12-22)

- [Improvement] Add a Java project -- SSO.

### 3.2.0 (2024-12-26)

- [Improvement] [Add loading to the homepage](https://github.com/roger-twan/website/issues/27)
- [Improvement] [Display menu on the homepage instead of the value](https://github.com/roger-twan/website/issues/21)
- [Bugfix] Fix len model display issue.

### 3.3.0 (2024-12-28)

- [Improvement] Redesigned Home page
- [Improvement] Add skill journey to About page
- [Improvement] Improve SVG file

### 3.4.0 (2024-12-28)

- [New Feature] Add skills screenshot feature using Playwright

### 3.4.1 (2025-01-05)

- [Improvement] Add new skill & update project tags
