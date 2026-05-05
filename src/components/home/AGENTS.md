## Home Components

- This directory contains homepage-only presentation components.
- Keep data out of components; shared homepage copy, links, and lists belong in `src/data/home.ts`.
- Components should accept typed props and avoid fetching collections directly unless the component exists specifically to render collection output.
- Keep layout behavior responsive inside each component, but page-level grid composition belongs in `src/pages/index.astro`.
