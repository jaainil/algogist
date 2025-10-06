## Brief overview

This document outlines guidelines for developing an Astro-based blog CMS with TinaCMS. It covers project-specific conventions and preferences observed during the initial setup and development phases.

## Communication style

- Be concise and direct in responses.
- Focus on technical details and actionable steps.
- Avoid conversational filler.

## Development workflow

- Use `pnpm` as the package manager.
- Adhere to the existing project structure, particularly within the `src/` directory for Astro components and pages.
- When making changes, prefer targeted edits using `replace_in_file` for existing files and `write_to_file` for new files or complete overhauls.
- After file modifications, be mindful of potential auto-formatting by the user's editor and use the final state of the file for any subsequent operations.

## Coding best practices

- Follow the established TypeScript and React conventions already present in the project.
- Utilize Astro component files (`.astro`) for page layouts and components.
- For content, use MDX (`.mdx`) files located in `src/content/blog/`.
- Maintain consistency with existing Tailwind CSS styling as seen in `src/styles/global.css`.
- Ensure new components are placed in the `src/components/` directory, with subdirectories for logical groupings (e.g., `src/components/icons/`).

## Project context

- The project is an Astro-based blog CMS.
- TinaCMS is integrated for content management, with its configuration in `tina/config.ts`.
- The site uses Netlify for deployment (`netlify.toml`).
- Key configurations include `astro.config.mjs`, `tailwind.config.cjs`, and `tsconfig.json`.
- Site-wide settings are managed in `src/data/site.config.ts`.

## Other guidelines

- When working with images, place them in the `public/assets/images/` directory.
- For new utility functions, use the `src/utils/` directory.
- Data configurations, such as categories and links, should be managed in their respective files within `src/data/`.
- Be aware of the `.kilocode/rules/astro-blog-cms.md` file, which may contain specific project-related instructions.
