# cssence.com

“Personal #indieweb hub of Matthias Zöchling”

- Raw data, i.e. blog posts and images
- Static Site Generator (SSG) based on nodejs¹

## Instructions

The chapters below assume you are on a system with [nodejs](https://nodejs.org/) version 16 or later.

### Development

To serve files from the source folder (they will be enriched on request), run:

```console
npm run start:dev
```

There is no hot reload, but changes on existing files in the `./src` folder will be picked up by refreshing the page in the browser. However, after adding/removing `index.html` pages, a restart of the DEV server is required. The same is true when changes in the actual generator are made, i.e. changes in the `./ssg` folder.

### Build

To create the static website, which will render/enhance all `index.html` files, run:

```console
npm run build
```

Once the build has finished, the generated website is found in the `./public` folder.

To build and immediately serve² the files, run:

```console
npm run start
```

This is basically a shorthand for running the build and the command `npm run start:sim`, which serves the files the build just generated, consecutively.

## Live

https://cssence.com/ shows the current state of the `main` branch.

## Footnotes

1. The included generator parses raw HTML files, without using any [HTML parser](https://www.npmjs.com/package/htmlparser2) (yet). Do not try this at home.
2. The included http server is for development/testing purposes, way too brittle to be used for actually serving the site. In reality, the generated files will be hosted and served otherwise.
