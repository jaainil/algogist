## Brief overview

This project is an Astro-based blog with Tina CMS integration. It includes features like reading time calculation, search functionality, and responsive design. The project uses TypeScript, Tailwind CSS, and supports both MDX and markdown content.

## Communication style

- Be direct and technical in responses
- Focus on implementation details rather than conversational elements
- Provide clear explanations of code changes without unnecessary pleasantries

## Development workflow

- Use `npm run dev` or `npx tinacms dev -c "astro dev"` for development with Tina CMS
- Run `npm run build` then `npm run postbuild` for production builds
- Test files must be in the same directory as source files for vitest to work
- Always use safeWriteJson() from src/utils/ instead of JSON.stringify for file writes

## Coding best practices

- Follow the existing TypeScript and Astro patterns in the project
- Use the query builder in packages/evals/src/db/queries/ for database queries
- Implement API retry mechanisms from src/api/providers/utils/ as mandatory
- Use Tailwind utility classes managed through src/utils/cn.ts
- Apply the project's existing naming conventions for components and utilities

## Content management

- Blog posts use MDX format in src/content/blog/ directory
- Posts require heroImage, category, description, pubDate, and tags fields
- Media uploads through Tina CMS go to /src/assets/images
- Both MDX and markdown support draft posts

## Project-specific patterns

- Custom remarkReadingTime plugin in src/utils/readTime.ts automatically injects reading time
- Tina CMS configuration in tina/config.ts requires manual setup of credentials
- Site configuration in src/data/site.config.ts contains placeholder values
- Categories in src/data/categories.ts are placeholder values requiring customization

## Other guidelines

- The provider interface in packages/types/src/ has undocumented required methods
- Use the custom sluglify functions in src/utils/sluglify.ts for URL generation
- Utilize post management utilities in src/utils/post.ts for filtering and retrieving content
- The public folder is treated as the root directory for media assets
