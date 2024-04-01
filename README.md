# Figma plugin react tailwind template

this is a fork from [figma-plugin-react-template](https://github.com/nirsky/figma-plugin-react-template)

## Quickstart

- Run `yarn` to install dependencies.
- Run `yarn watch` to start webpack in watch mode.
- Open `Figma` -> `Plugins` -> `Development` -> `Import plugin from manifest...` and choose `manifest.json` file from this repo.

⭐ To change the UI of your plugin (the react code), start editing [ui.tsx](./src/ui.tsx).  
⭐ To interact with the Figma API edit [code.ts](./src/code.ts).  
⭐ Read more on the [Figma API Overview](https://www.figma.com/plugin-docs/api/api-overview/).

## Toolings

This repo is using:

- React + Webpack
- TypeScript
- Prettier precommit hook
- Tailwindcss
- AntD
