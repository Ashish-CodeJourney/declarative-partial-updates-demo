# Declarative Partial Updates Demo 🚀

This repository contains a simple, frontend-only simulation of **Declarative Partial Updates**—an experimental web platform feature currently being tested by the Chrome team.

## 🔗 Important Links

* **Live Demo:** https://ashish-codejourney.github.io/declarative-partial-updates-demo/
* **LinkedIn Discussion:** https://www.linkedin.com/posts/ashish-codejourney_webdevelopment-html-frontend-share-7467823728421281792-5HSo/
* **Read the Docs:** [Official Chrome Developer Blog](https://developer.chrome.com/blog/declarative-partial-updates)

---

## 🤔 What is this?

Historically, HTML is parsed top-to-bottom. If your backend is waiting on a slow database query, you usually have to block the entire page load or rely on heavy JavaScript frameworks to fetch and inject the data later.

Declarative Partial Updates allow you to send HTML **out of order** natively. You can leave a processing marker placeholder (like `<?start name="placeholder">`) in your initial HTML, and stream a `<template for="placeholder">` down the wire whenever the data is ready. The browser automatically stitches it together without you writing any DOM manipulation logic!

## 🛠️ How this Demo Works

Because GitHub Pages only serves static files, true server-side HTML streaming (via Chunked Transfer Encoding) isn't possible here. To demonstrate the concept, this project uses a tiny bit of JavaScript to simulate the server delay.

* `index.html`: Contains the initial UI, the `<?start>` placeholder, and a loading spinner.
* `style.css`: Basic styling for a clean presentation.
* `script.js`: Uses a 3-second `setTimeout` to inject the `<template for="activities-section">` into the DOM, mimicking a delayed HTML stream from a backend server.

*Note: Because this feature is highly experimental (currently hidden behind a flag in Chrome 148+), this demo includes the official `template-for-polyfill` so it works instantly in any modern browser.*

## 💻 Running it Locally

You don't need any build tools, package managers, or backend servers to run this locally:

1. Clone the repository.
2. Open `index.html` in your browser (or use an extension like VS Code Live Server).
3. Watch the static HTML load instantly, followed by the dynamic template rendering 3 seconds later!
