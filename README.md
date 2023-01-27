# vite-plugin-sveltekit-purgecss

[![Experimental version](https://img.shields.io/badge/-experimental-red)](#) [![Get package from npm](https://img.shields.io/npm/v/@erbelion/vite-plugin-sveltekit-purgecss?logo=npm&logoColor=white&style=flat&label=)](https://www.npmjs.com/package/@erbelion/vite-plugin-sveltekit-purgecss) [![Downloads](https://img.shields.io/npm/dt/@erbelion/vite-plugin-sveltekit-purgecss?color=blue&label=&logoColor=white&style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjZmZmZmZmIj48ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCI+PC9nPjxnIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9nPjxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPHBhdGggZD0iTTEyLjUgNFYxN00xMi41IDE3TDcgMTIuMjEwNU0xMi41IDE3TDE4IDEyLjIxMDUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4gPHBhdGggZD0iTTYgMjFIMTkiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4gPC9nPjwvc3ZnPg==)](https://www.npmjs.com/package/@erbelion/vite-plugin-sveltekit-purgecss) [![Downloads](https://img.shields.io/npm/dw/@erbelion/vite-plugin-sveltekit-purgecss?color=blue&label=&logoColor=white&style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjZmZmZmZmIj48ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCI+PC9nPjxnIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9nPjxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPHBhdGggZD0iTTEyLjUgNFYxN00xMi41IDE3TDcgMTIuMjEwNU0xMi41IDE3TDE4IDEyLjIxMDUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4gPHBhdGggZD0iTTYgMjFIMTkiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4gPC9nPjwvc3ZnPg==)](https://www.npmjs.com/package/@erbelion/vite-plugin-sveltekit-purgecss) [![views](https://views.erbek.space/api/views.svg?id=github.com%2Ferbelion%2Fvite-plugin-sveltekit-purgecss)](https://views.erbek.space/page/?id=github.com%2Ferbelion%2Fvite-plugin-sveltekit-purgecss) [![likes](https://views.erbek.space/api/likes.svg?id=github.com%2Ferbelion%2Fvite-plugin-sveltekit-purgecss)](https://views.erbek.space/api/like?id=github.com%2Ferbelion%2Fvite-plugin-sveltekit-purgecss)

A [Vite](https://github.com/vitejs/vite) plugin that integrates [PurgeCSS](https://github.com/FullHuman/purgecss) with [SvelteKit](https://github.com/sveltejs/kit) css assets.

Warning: This package is in experimental state, updates may be critical.

## Installation
**yarn**
```
yarn add -D @erbelion/vite-plugin-sveltekit-purgecss
```
**npm**
```
npm i -D @erbelion/vite-plugin-sveltekit-purgecss
```

## Usage
Use plugin in your Vite config (`vite.config.ts`).

```
import { purge } from '@erbelion/vite-plugin-sveltekit-purgecss'

const config: UserConfig = {
	plugins: [
		sveltekit(),
		purge()
	]
}
```

PurgeCSS will work in `.svelte` files if css assets are imported using  `@import` inside style tag or `import` inside script tag.

Default path that will always be processed: `src/**/*.{svelte,html}`.

Default safelist item that will always be processed: `/(svelte-)[a-zA-Z0-9]{6}/`.

## Additional Options

| Parameter | Type  | Description |
| ----------- | -----------  | ---------- |
| paths? | `string[]` | List of paths to be processed by PurgeCSS. |
| safelist? | `UserDefinedSafelist` | Check available safelist options in [PurgeCSS docs](https://purgecss.com/configuration.html#options).

## See also
[vite-plugin-laravel-purgecss](https://github.com/erbelion/vite-plugin-laravel-purgecss)
