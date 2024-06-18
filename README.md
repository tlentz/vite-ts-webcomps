# React + TypeScript + Vite | Webcomps

This project is an example of how to build multiple web components as a single asset (including inlined css) using Vite and TypeScript.

## Project Structure

```plaintext
├── index.html // dev page entry point for testing (both production and development assets)
├── package.json // project dependencies and scripts
├── vite.config.ts // Vite configuration (parameterized through environment variables)
├── src
│   ├── webcomp-1 // web component 1
│   │   ├── App.tsx // React app for web component 1
│   │   ├── index.css // CSS for web component 1 (inlined)
│   │   └── index.ts // entry point for web component 1 (registering the custom element)
│   ├── webcomp-2 // web component 2
│   │   ├── App.tsx // React app for web component 2
│   │   ├── index.css // CSS for web component 2 (inlined)
│   │   └── index.ts // entry point for web component 2 (registering the custom element)
```

## Development

```bash
npm run dev
```

During development, the src code can be used within index.html directly for hot reloading

```html
<!-- use for dev build (comment out when using prod build) -->
<script type="module" src="/src/webcomp-1/index.tsx"></script>
```

## Building / Testing Production Assets

```bash
npm run build-all
```

The `build-all` script will build all of your webcomponent assets that have been registered with build scripts in `package.json`. The assets will be output to the `dist` directory.

An example build configuration for a single web component:

```json
{
  "build:webcomp-1": "cross-env WEBCOMPNAME=webcomp-1 npm run build"
}
```

This states that it is a build script with the `build:` prefix followed by the webcomponent name. The `cross-env` command is used to set the `WEBCOMPNAME` environment variable which is used in the `vite.config.ts` file to determine which web component to build.

If you want to just build `webcomp-1`:

```bash
npm run build:webcomp-1
```
