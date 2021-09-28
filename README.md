## PoC

https://x-team-internal.atlassian.net/browse/XA-1545

### What is this?

There are some relevant characteristics this PoC attempts to accomplish:

- [x] This is a Gatsby setup that uses "AppContainer" serving global context to the entire app.
- [x] Defines basic code structure to add certain types of code, it tries to use most of React core functionality.
- [x] The display variations are based on state data. In the example it uses Gatsby's Link's to dispatch state payload and location to consume the payload, but it could be anything else.
- [ ] It showcases with screenshots the navigation to all possible routes.
- [ ] Demonstrate loading states of sync and async data.
- [ ] The SSR and SEO are all covered up.

### How to use?

1. `git clone git@github.com:bernardodiasc/poc-react-context.git`
2. `yarn install`
3. `yarn develop`
4. Open http://localhost:8000/

### And now what?

It's not done yet. But any feedback are highly appreciate.

#### TO DO:

- bypass loading screen on SSR and fix SEO
- implement sitemap and block access to all pages
- add auth sample preventing public access to all pages
- add all desktop and mobile screens in the debug navigation

### Interesting parts

- https://github.com/bernardodiasc/poc-react-context/blob/main/src/containers/AppContainer.js
- https://github.com/bernardodiasc/poc-react-context/blob/main/gatsby-node.js
- https://github.com/bernardodiasc/poc-react-context/blob/main/gatsby-browser.js
- https://github.com/bernardodiasc/poc-react-context/blob/main/gatsby-ssr.js

#### Read-me's

> So far, it's all "TBD". To be made if become relevant.

- https://github.com/bernardodiasc/poc-react-context/blob/main/src/components/README.md
- https://github.com/bernardodiasc/poc-react-context/blob/main/src/containers/README.md
- https://github.com/bernardodiasc/poc-react-context/blob/main/src/hooks/README.md
- https://github.com/bernardodiasc/poc-react-context/blob/main/src/pages/README.md
- https://github.com/bernardodiasc/poc-react-context/blob/main/src/utils/README.md
