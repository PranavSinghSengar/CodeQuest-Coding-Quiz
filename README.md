# CodeQuest — Coding Quiz

A responsive coding quiz website with 100 multiple-choice questions: 40 Beginner, 40 Intermediate and 20 Advanced.

## Features
- Local profile create/login demo
- Randomized question order by difficulty
- Four options per question, instant answer feedback and explanations
- Score, accuracy, grade and attempt history
- Saves completed progress using browser `localStorage`
- Responsive dark theme; no build tools required

## Run
Open `index.html` in a modern browser. Create a local profile and select a difficulty.

## Important security note
This is a front-end learning project, not production authentication. The demo passcode and profile are stored in browser localStorage in readable form. Do not use a real or reused password. Data is local to this browser/device and does not sync. For real accounts, use a backend, secure password hashing, server-side sessions, HTTPS and a database.

## Files
- `index.html` — page structure
- `style.css` — theme and responsive layout
- `app.js` — profile demo, quiz flow, scoring and local storage
- `questions.js` — question bank

## Topics to study
HTML forms and semantic elements; CSS Grid/Flexbox/media queries; JavaScript arrays, objects, DOM, events, functions, JSON, localStorage, randomization and validation; Git commits and GitHub repositories.
