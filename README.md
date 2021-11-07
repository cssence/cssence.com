# cssence.com

“Personal #indieweb hub of Matthias Zöchling”

- Raw data, i.e. blog posts and images
- Static Site Generator (SSG) based on nodejs¹

## Instructions

The chapters below assume you are on a system with [nodejs](https://nodejs.org/) version 16 or later.

In addition, every `start:*` script found in `package.json` requires you to have [http-server](https://www.npmjs.com/package/http-server)² already installed.

### Development (serve raw files)

```console
npm run start:dev
```

### Build (create static website)

```console
npm run build
```

Once the build has finished, the generated website is found in the `public` folder.

## Footnotes

1. The self-written parses raw HTML files, without using any [https://www.npmjs.com/package/htmlparser2](HTML parser) (yet). Do not try this at home.
2. The http-server dependency is not included in the `package.json` file, as there are other ways to serve the `public` folder. In contrast, when it comes to serving the `src` folder for development purposes (which `npm run start:dev` takes care of), the http-server dependency will be removed entirely in an upcoming version.
