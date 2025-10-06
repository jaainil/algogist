# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Build Commands

- Use `npm run dev` or `npx tinacms dev -c "astro dev"` for development with Tina CMS integration (requires tina.io credentials)
- Run `npm run build` then `npm run postbuild` for production builds with Pagefind search integration

## Project-Specific Patterns

- Custom remarkReadingTime plugin in `src/utils/readTime.ts` automatically injects reading time into frontmatter
- Tina CMS configuration in `tina/config.ts` requires manual setup of clientId/token from tina.io dashboard
- Site configuration in `src/data/site.config.ts` contains placeholder values that must be customized for deployment
- Categories in `src/data/categories.ts` are placeholder values requiring customization for actual blog topics
- Media uploads through Tina CMS go to `/src/assets/images` with public folder treated as root directory
- Both MDX and markdown support draft posts (enabled in astro.config.mjs)

## Content Management

- Blog posts use MDX format in `src/content/blog/` directory
- Tina CMS provides visual editing interface at `/admin` route after setup
- Custom SButton component available in Tina rich text editor for styled buttons
- Posts require heroImage, category, description, pubDate, and tags fields as defined in Tina schema

## Utilities

- Post management utilities in `src/utils/post.ts` for filtering and retrieving content
- Custom sluglify functions in `src/utils/sluglify.ts` for URL generation
- Tailwind utility classes managed through `src/utils/cn.ts` (likely classnames utility)
