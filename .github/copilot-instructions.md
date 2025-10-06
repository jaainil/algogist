# AI Coding Agent Instructions - Astro Blog CMS

## Project Overview
This is an Astro-based blog CMS with TinaCMS integration for content management. The project uses TypeScript, Tailwind CSS, and focuses on performance with 100/100 Lighthouse scores.

## Architecture & Key Components

### Core Structure
- **Astro Framework**: Static site generator with MDX support
- **Content Management**: TinaCMS for visual content editing (optional)
- **Styling**: Tailwind CSS with custom dark mode support
- **Search**: Pagefind static search library (production only)
- **Build Tools**: pnpm package manager with husky pre-commit hooks

### Critical Directories
- `src/content/blog/`: All blog posts as `.md` or `.mdx` files
- `src/components/`: Astro components (use subdirectories for organization)
- `src/data/`: Configuration files (`site.config.ts`, `categories.ts`, `links.ts`)
- `src/utils/`: Utility functions for post handling, reading time, etc.
- `tina/`: TinaCMS configuration and generated types
- `public/assets/images/`: Static image assets

### Content Schema & Validation
Posts use Zod validation in `src/content/config.ts` with required fields:
- `title` (max 80 chars), `description`, `pubDate`, `heroImage`, `category`
- Optional: `draft` (boolean), `tags` (array)
- Categories must match `src/data/categories.ts` exactly

## Development Workflow

### Package Management
- **Always use `pnpm`** - never npm or yarn
- Install: `pnpm install`
- Dev server: `pnpm dev` (includes TinaCMS: `npx tinacms dev -c "astro dev"`)
- Build: `pnpm build` (includes Pagefind indexing via postbuild hook)

### Code Quality Tools
- **Formatting**: Prettier with tabs, single quotes, 100 char width
- **Linting**: ESLint with Astro plugin
- **Pre-commit**: Husky + lint-staged auto-formats on commit
- Run `pnpm format` to format, `pnpm lint` to check

### TypeScript Configuration
- Path aliases configured: `@/components/*`, `@/utils`, `@/data/*`, etc.
- Strict mode enabled with `verbatimModuleSyntax`
- Base URL set to project root

## TinaCMS Integration

### Content Management
- TinaCMS is **optional** - can be removed without breaking functionality
- Configuration in `tina/config.ts` with schema matching Astro content collections
- Media root: `/src/assets/images`
- Build output: `admin/` directory

### Development with Tina
- Use `pnpm dev` to start with TinaCMS enabled
- Tina automatically handles frontmatter - no manual editing needed
- Generated types in `tina/__generated__/` - **DO NOT MODIFY**

## Component Patterns

### Astro Components
- Use `.astro` extension for components and pages
- Follow existing patterns in `src/components/`
- Dark mode support via `dark:` classes and ProviderTheme component
- Responsive design with mobile-first approach

### Styling Conventions
- Tailwind CSS with custom theme extensions
- Dark mode: `dark:bg-[#0a0910] dark:text-white`
- Typography plugin for content styling
- Custom grid template: `grid-template-columns: list`

### Data Flow
- Content collections via `astro:content` API
- Utility functions in `src/utils/post.ts` for filtering and sorting
- Site configuration in `src/data/site.config.ts`
- Categories managed centrally in `src/data/categories.ts`

## Build & Deployment

### Production Build
- `pnpm build` creates static site in `dist/`
- Pagefind search indexing runs automatically post-build
- TinaCMS admin built to `admin/` directory

### Environment Variables
- TinaCMS uses `HEAD` or `VERCEL_GIT_COMMIT_REF` for branch detection
- Search only works in production (check `import.meta.env.DEV`)

## Critical Gotchas

### Content Management
- **Never edit `tina/__generated__/` files** - they're auto-generated
- Categories must match exactly between `categories.ts` and content schema
- Draft posts: set `draft: true` in frontmatter
- Image paths: use relative paths from content file location

### Development
- Search functionality only works in production builds
- TinaCMS dev server wraps Astro dev command
- Use `pnpm sync` after adding new Astro modules
- Path aliases require `@/` prefix in imports

### Performance
- Site optimized for 100/100 Lighthouse scores
- ViewTransition API for smooth navigation
- Motion One for animations (lightweight)
- Image optimization via Astro built-ins

## File Naming Conventions
- Blog posts: `kebab-case.md` or `kebab-case.mdx`
- Components: `PascalCase.astro`
- Utilities: `camelCase.ts`
- Images: descriptive names in `kebab-case`

## Testing & Validation
- Zod schema validation catches content errors at build time
- ESLint prevents common Astro/TypeScript issues
- Prettier ensures consistent formatting
- Build process validates all content and assets