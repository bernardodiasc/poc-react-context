# Proof of Concepts

The goal of this project is to explore some technologies.

## How to setup?

1. Make sure to have your API running at http://localhost:1337
2. `git clone git@github.com:bernardodiasc/poc-react-context.git`
3. In the project's directory, run `yarn install`

### Gatsby

1. Go to `gatsby` directory
2. Run `yarn dev`
3. Open http://localhost:8000/

### NextJS

1. Go to `nextjs` directory
2. Run `yarn dev`
3. Open http://localhost:3000/
 
### Shared

1. Go to `shared` directory
2. Run `yarn dev`
3. Open http://localhost:6006/

#### Generator

1. In the `shared` directory
2. Run `yarn gen`
3. Chose the component type and name

## Implemented concepts

  - Site builders
    - Gatsby
    - NextJS
  - File system pattern, fundamental to the project
    - App Context
  - Develoment tools
    - Boilerplate generator
    - Automated tests
  - Documentation and styleguides
    - Storybook
    - Figma
  - State management systems
    - react-query
    - SWR

## Further Information about concepts
### Site Builders

There are configurations we should look for in the site builders that refers to abilities to add transformations. In the PoC created the site builders used are based on Webpack, so they handle pretty much well features likes CSS-Modules, path alieases, etc. 

Currently active:

- Gatsby (https://www.gatsbyjs.com/gatsby-4/)
- NextJS (https://nextjs.org/)
- Storybook (https://storybook.js.org/)

> Storybook is on this list only for comparison.
> The site builders of more interest are Gatsby and NextJS.

#### Config files

When setting up bundle pipeline, it's possible to manage webapack at config files.

- https://github.com/bernardodiasc/poc-react-context/blob/main/gatsby/gatsby-node.esm.js
- https://github.com/bernardodiasc/poc-react-context/blob/main/nextjs/next.config.js
- https://github.com/bernardodiasc/poc-react-context/blob/main/shared/.storybook/main.js

#### Static files

Mandatory feature for a site builder, but they use different naming by default:

- https://github.com/bernardodiasc/poc-react-context/tree/main/gatsby/static
- https://github.com/bernardodiasc/poc-react-context/tree/main/nextjs/public
- https://github.com/bernardodiasc/poc-react-context/tree/main/shared/static

#### Global stuff

Above pages are the app's "entry point". Whenever a user loads a page, it run the "entry point" once. Pages altought will be ran when they are accessed. There are cases where site features has to be persistent during user navigation. We add these "stuff" in this script part.

- https://github.com/bernardodiasc/poc-react-context/blob/main/gatsby/gatsby-browser.js
- https://github.com/bernardodiasc/poc-react-context/blob/main/nextjs/pages/_app.js
- https://github.com/bernardodiasc/poc-react-context/blob/main/shared/.storybook/preview.js

#### Pages

That's how browser's routes are constructed. In the Gatsby and NextJS the preferable way is to create files on a file system pattern that combines with routes. For routes that fetches dynamic data, server-side renders must have extra treatment to provide data. 

When pages are dynamicaly generated they are called "client-side" pages. If the user loads a page from a route that's uses dynamic data, the entry point can be in fact the page in the parent route. That's the easy way to do, but not the best because it lost SEO abilities. It's possible to handle better these cases and dictate what's expected to be rendered on server-side.

- https://github.com/bernardodiasc/poc-react-context/tree/main/gatsby/src/pages
- https://github.com/bernardodiasc/poc-react-context/tree/main/nextjs/pages

Storybook generates exact routes for each UI state representation. The pathnames derives from stories.mdx files that's created along with component files. 

- https://github.com/bernardodiasc/poc-react-context/blob/main/shared/.storybook/main.js#L5

##### Resources

- https://v4.gatsbyjs.com/docs/creating-and-modifying-pages/
- https://storybook.js.org/docs/react/api/mdx
- https://reach.tech/router/
- https://nextjs.org/docs/routing/dynamic-routes

#### Server-side features

The server-side features that the site builders offers offers ways to consume data before site render. The server expects data to be loaded. That will be passed down via props. The render consumes and diplays correct screen compositions and data. The static file generated will have predictable markup and SEO can be managed better, specially for client-side pages.

Gatsby and NextJS handles server-side fetching partially in the same way. But NextJS have an way extra that might worth to check further. I haven't touched that part much so far.

- https://github.com/bernardodiasc/poc-react-context/blob/main/gatsby/gatsby-node.esm.js#L32-L44
- https://github.com/bernardodiasc/poc-react-context/tree/main/nextjs/pages/api

##### Resources

- https://v4.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/
- https://v4.gatsbyjs.com/docs/programmatically-create-pages-from-data/
- https://www.gatsbyjs.com/docs/how-to/querying-data/using-gatsby-without-graphql/
- https://nextjs.org/docs/api-routes/introduction

### File system pattern

The file system structure is fundamental to the project. Predictability and consistency reduce errors and complicated scenarios. 

This is the basic shape of the app:

```
├── components
| └── ComponentName
│   ├── ComponentName.js
│   ├── ComponentName.module.css
│   ├── ComponentName.stories.mdx
│   ├── ComponentName.test.js
│   ├── README.md
│   └── index.js
├── containers
| └── ComponentName
│   ├── ComponentNameContainer.js
│   ├── README.md
│   └── index.js
├── contexts
| └── ComponentName
│   ├── ComponentNameContext.js
│   ├── ComponentNameProvider.js
│   ├── README.md
│   ├── index.js
│   └── useComponentNameContext.js
└── hooks
  └── useComponentName
    ├── useComponentName.js
    ├── README.md
    └── index.js
```

- Components are the UI pieces, they have browser logic. All the HTML and CSS goes here. A component can only import other components.
- Containers composes screens using components. Dynamic data and business logic goes here. A container can import anything.
- Context is how React will allow data to be stored and shared. Context are expected to be user with the provider and the hook, so most likely a container will import a context rather than the oposite. Also it's not expected for a context to import any component.
- Hooks offers easy ways to consume functionalities, if its based on React, it can be used. 

Example of the "App" combination:

- https://github.com/bernardodiasc/poc-react-context/blob/main/shared/src/contexts/App/AppProvider.js
- https://github.com/bernardodiasc/poc-react-context/blob/main/shared/src/containers/App/AppContainer.js
- https://github.com/bernardodiasc/poc-react-context/blob/main/shared/src/components/AppLayout/AppLayout.js

For the hook the https://github.com/bernardodiasc/poc-react-context/blob/main/shared/src/hooks/useFeatureFlags/useFeatureFlags.js is a good example.

#### Resources

- https://basarat.gitbook.io/typescript/main-1/barrel

### Develoment tools

Developer tools are helpful and the main goal to have it is to boost productivity and add confidence.

#### Boilerplate generator

This helps developing new part of the site while enforcing consitency and existing patterns. For this PoC I used something I already have done and added some adjustments.

- https://github.com/bernardodiasc/poc-react-context/tree/main/shared/dev/generator

Something importand to enforce is also the deepness of nested components. The generator keeps on a maximum of 2 levels of nesting. This keeps files accessible with ability to isolate scoped components from the rest.

##### Resources

There are alternative options available:

- https://plopjs.com/
  
#### Automated tests

The boilerplate generator adds a very basic smoke test that checks for undefined errors when no props are passed. This exists because on frontend it's no a good approach to consider that the data provided will be always uncorrupted. It's common that errors with invalid props happens, doing this check helps also for the developer to add appropriate checks and default values. The reason to do this test is that ui components should handle things smooth for the user experience, therefore an undefined bug shoudn't break the entire app.

- https://github.com/bernardodiasc/poc-react-context/blob/main/shared/src/components/AppLayout/AppLayout.test.js#L6-L9

The same approach is not exactly recommended for containers or context providers, but automated tests wasn't really part of the scope of this PoC.

### Documentation and styleguides

Documentation is good to have in order to keep the development progress sane. Styleguides are once again a way to reinforce consistency by adding reusable and predictable patterns.

The generator automatically creates a README file, so that a developer can read more in the GitHub page or even on own code editor.

- https://github.com/bernardodiasc/poc-react-context/blob/main/shared/src/components/AppLayout/README.md

#### UI platform

The generator also adds the .stories.mdx file, that's used for Storybook. It could be another UI platform but Storybook offers very simple way to do things, despite the possibility to make things in a very complicated way too. The best benefit is the isolation of components using iframes. This helps the developer to create UI components that will look and behave exactly the same everywhere. Given that this tool should be used for UI components only, the QA team can test the component isolated from the app.

- https://github.com/bernardodiasc/poc-react-context/blob/main/shared/src/components/AppLayout/AppLayout.stories.mdx

##### Resources

Another options shared by the team:

- https://zeroheight.com/

#### Figma

Figma is a new world for most of devs, I guess. I took some lessons about it and found it amazing tool for prototyping. There are many that can be done with it to document UI. The design system can be havily explored and maintained inside Figma in combination with Storybook and custom code patterns for UI components styles.

### State management systems

Context aren't really a steate manager, but offers a good way to store and share data. The management of the state can be done manually but that's an error prone approach. For an app that the growth is known, the best is to have a system settled.

From recomendations I could learn more about SWR. SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data. The name “SWR” is derived from stale-while-revalidate, a cache invalidation strategy popularized by HTTP RFC 5861. With SWR, components will get a stream of data updates constantly and automatically. And the UI will be always fast and reactive.

The tools I could test was:

- react-query (https://react-query.tanstack.com/). Very good and I would go for it. But I ran into some issues with max mem stack, so I had to drop it.
- SWR (https://swr.vercel.app/). Very good as well and the one currently in use. Have pretty much the same features as the react-query.
#### Resources 

- https://blog.isquaredsoftware.com/2021/01/context-redux-differences/
- https://kentcdodds.com/blog/how-to-use-react-context-effectively

## Pending stuff to do:

- Add Correct values for routes and screens, seek information for completeness
- SSR version of pages, seek information for completeness
- SEO of pages, seek information for completeness

