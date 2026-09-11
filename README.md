# lomzem.github.io

Personal site built with SvelteKit and deployed to GitHub Pages.

## Development

Use the Bun version specified in `package.json`.

```sh
bun install --frozen-lockfile
bun run dev
```

## Checks

```sh
bun run lint
bun run check
bunx playwright install --with-deps chromium
bun run test
```

The browser tests build the site and start a preview server. In CI, the workflow
builds the site before running the tests.

## Build and deploy

```sh
bun run build
bun run preview
```

The static build goes into `build/`. Routes are prerendered with trailing slashes
so GitHub Pages can serve each route from its own `index.html`.

The [CI workflow](.github/workflows/ci.yml) runs formatting, lint, type checks,
a production build, and browser tests on pull requests and pushes to `main`.
Successful runs on `main` deploy to <https://lomzem.github.io/>. You can also run
the workflow manually from the Actions tab. Only runs on `main` can deploy.

The workflow uses GitHub's Pages actions and the `github-pages` environment.
The repository's Pages source must be set to **GitHub Actions**. No deployment
secret is needed.
