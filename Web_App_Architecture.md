# Web App Architecture

## Technology Stack
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
    - Chosen for its robust routing, server-side rendering capabilities, and ease of deployment.
- **Language:** TypeScript
    - For type safety and better developer experience.
- **Styling:** Vanilla CSS (CSS Modules)
    - To maintain full control over the "Premium" design aesthetic without external library constraints, ensuring a unique look.
- **Markdown Parsing:** `remark` / `rehype` ecosystem
    - To transform the Markdown content into HTML/React components.

## Application Structure

### Directory Layout
```
/app
  /components    # Reusable UI components
  /lib           # Utility functions (markdown parsing, etc.)
  /styles        # Global styles and variables
  page.tsx       # Home page
  layout.tsx     # Main layout (includes Sidebar)
  /[slug]/page.tsx # Dynamic route for topics
```

### Key Components

1.  **Layout (`layout.tsx`)**
    -   Wraps the entire application.
    -   Contains the `Sidebar` and the main `ContentArea`.

2.  **Sidebar (`Sidebar.tsx`)**
    -   Parses the Table of Contents (from the README or a config).
    -   Provides links to different sections.
    -   Responsive: Becomes a hamburger menu on mobile.

3.  **MarkdownRenderer (`MarkdownRenderer.tsx`)**
    -   Takes raw markdown string as input.
    -   Uses `react-markdown` or unified pipeline to render HTML.
    -   Custom renderers for code blocks to apply syntax highlighting.

4.  **CodeBlock (`CodeBlock.tsx`)**
    -   Uses a library like `prismjs` or `shiki` (if lightweight) to highlight code.
    -   Supports tab switching if multiple languages are presented together (e.g., Java/C++/Python tabs).

## Data Flow
1.  **Build Time / Runtime:** The app reads the `README.md`.
2.  **Parsing:** The content is split into sections based on headers (e.g., `## Encapsulation`).
3.  **Routing:** Each section gets a slug (e.g., `/encapsulation`).
4.  **Rendering:** When a user visits a route, the corresponding content chunk is rendered.