# React + Vite + SWC + Styled-Components + Legacy (ES6 -> ES5)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Template creation procedure

Adapted from https://github.com/styled-components/babel-plugin-styled-components/issues/350

- npm create vite@latest
  - Select "React"
  - Select "Javascript + SWC"
- remove unused files in src/ and public/
- npm install --save styled-components
- npm install --save-dev @vitejs/plugin-react-swc @swc/plugin-styled-components @swc/core @vitejs/plugin-legacy terser

## Notes
`styled-components` natively does vendor prefixing (ie. `display: -webkit-flex;`) as long as `SC_DISABLE_SPEEDY` is set. Vite doesn't have the same method of importing `process.env` into transpiled modules, I had to modify `vite.config.js` to replace `SC_DISABLE_SPEEDY` manually. `npm run dev` always adds the vendor prefixing, but it was missing from the `npm run build` version without these changes.

`@vite/plugin-legacy` is what helps convert ES6 (ie. arrow functions) to ES5 using, which uses `@babel/preset-env` to transpile to whatever targets are passed (determined by `browserlist`), and (I believe) polyfills are included via `@babel/preset-env`s `useBuiltIns: 'usage'`, which automatically imports polyfills from `core-js@3` based on usage. (After `npm run build`, you can see the arrow function definition transpiled in the assets/*-legacy.js)

Hm, I don't seem to be able to see the Promise polyfill, so this might yet be incomplete.