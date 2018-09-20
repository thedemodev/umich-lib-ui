> 🚧 This project is in development and is not recommended for production use. 🚧

# University of Michigan Library Design System

A collection of shared design styles, components, and patterns for teams to build quality consistent interfaces. A bit like a LEGO kit.

[View the documentation site](https://design-system.lib.umich.edu/)

## Getting started

This project uses:
- [Lerna](https://lernajs.io/) to manage multiple packages/libraries.
- [Storybook](https://storybook.js.org/) for a development environment.
- [Gatsby v2](https://www.gatsbyjs.org/) for a fast website.

Run these commands before doing anything else.
```
git clone https://github.com/mlibrary/umich-lib-ui.git
cd umich-lib-ui
npm install
```

## ⌨️ Development

### 1. Boostrap Lerna

All dependencies get linked for cross-component and package development
```sh
npm run bootstrap
```

### 2. Start the development environment

Starts the the storybook development environment. 
```sh
npm run develop
```
Opens up Storybook at `http://localhost:9001`

### 3. Develop components in `/packages/`.

Anytime you add a new component you will need to run `npm run bootstrap` again.

## `www` / doc site

Built with [Gatsby v2](https://www.gatsbyjs.org/) for a fast website.

See the README in `www` directory.

## Help / Questions

Open an issue.

More to be written...

## Why CSS-in-JS with [Emotion](https://emotion.sh/)?

See [A Unified Styling Language](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660)

## Contributing

[See guidelines for contributing](https://github.com/mlibrary/umich-lib-components-react/blob/master/CONTRIBUTING.md)
