# vuejs-dockerized

Requires Node.js 24 LTS (or the supported versions in `package.json`).

```sh
npm ci
npm run serve
```

The Vite development server defaults to localhost:5173. To build and verify:

```sh
npm run lint
npm test
npm run build
npm audit
```

Production files are written to `dist/`. Vue 3 and Vite replace the unsupported Vue 2 / Vue CLI toolchain. The lockfile is committed; use `npm ci` for reproducible installs.

The Dockerfile builds with Node 24 and `npm ci`, then serves `dist/` using Nginx. Build locally with `docker build -t demo-ui .`; no deployment is performed by npm scripts.
