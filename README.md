# SustainabilityHighway

A comprehensive knowledge hub for sustainability frameworks and compliance in Saudi Arabia (KSA).
Built with **Next.js 15 (App Router)** and **Tailwind CSS**.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 (with Typography plugin)
- **Content**: MDX (local files in `/content/guides`)
- **Icons**: Lucide React
- **Utils**: date-fns, clsx, tailwind-merge

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

## Project Structure

- `src/app`: Page routes and layouts.
- `src/components`: Reusable React components.
- `src/lib/mdx.ts`: MDX content loader and utility functions.
- `content/guides`: MDX files for individual articles.
- `content/data`: JSON files for taxonomy (frameworks, topics) and glossary.

## Content Management

### Adding a new Guide
Create a new `.mdx` file in `content/guides/`.
Required Frontmatter:
```yaml
---
title: "Guide Title"
description: "Short description"
publishedAt: "YYYY-MM-DD"
updatedAt: "YYYY-MM-DD"
tags: ["Tag1", "Tag2"]
framework: "Mostadam"
topic: "Energy"
stage: "Design"
difficulty: "Beginner"
readingTime: "5 min read"
---
```

### Updating Taxonomy
Edit `content/data/taxonomy.json` to add new frameworks, topics, or project stages.
