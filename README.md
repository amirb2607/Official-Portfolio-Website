# My Personal Portfolio Website

A modern, responsive portfolio website built with Next.js and Once UI, deployed using Pangolin Reverse Proxy on my VPS and my Homelab Server which builds and hosts the website.

## Overview

This repository contains the source code for my personal portfolio site. It will showcase my projects, skills, and background as a junior software engineer. The site is built using:

- **Next.js** for server-side rendering and routing
- **Once UI** for a lightweight, customizable component library
- **Tailwind CSS** (via Once UI tokens) for consistent styling
- **Coolify via Homelab Server** for continuous, no downtime deployment
- **Pangolin via VPS** for Reverse Proxy

*Subject To Change*

---

## Features

- **Responsive Layout**: Mobile-first design that adapts to all screen sizes.
- **Reusable Components**: Built with Once UI’s component library for rapid development.
- **Theme Support**: Light and dark mode toggles (configurable via Once UI).
- **SEO-Optimized**: Meta tags and Open Graph support for better search visibility.
- **Easy Deployment**: One-click deploy with automatic builds on push via webhook.

---

## Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/amirb2607/Official-Portfolio-Website.git

   cd Official-Portfolio-Website
2. **Install Dependencies**
    ```bash
    npm install
3. **Run Local Dev Client using Next.js**
    ```bash
    npm run dev
4. **Build App**
    ```bash
    npm install && npm run build && npm run start
