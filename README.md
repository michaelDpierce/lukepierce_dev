# Portfolio Website

## Customizing

- `package.json`
- `vercel.json`
- `/lib/constants.js`
- `/public/robots.txt`
- `/public/[resume].pdf`
- `/public/static/images/og.jpeg` (1280x720 px),
- `/public/static/favicons/*`,
- `/scripts/generate-sitemap.js`
- `/components/timeline.js`
- `/components/container.js`
- `pages/dashboard`
- `pages/about`
- `_app.js`
- `api/subscribe.js`
- `lib/db.js`
- `/layouts/index.js`

Note:
Remove any social service you don't want from Footer.js

## Overview

- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction)
- `pages/blog/*` - Static pre-rendered blog pages using [MDX](https://github.com/mdx-js/mdx)
- `pages/*` - All other static pages

## Running Locally

```bash
$ git clone [project git/ssh]
$ cd [project name]
$ yarn
$ yarn dev
```

Create a `.env.local` file similar to [`.env`]
