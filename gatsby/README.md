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

### And now what?

It's not done yet. But any feedback are highly appreciate.

### Interesting parts

- https://github.com/bernardodiasc/poc-react-context/blob/main/gatsby/gatsby-node.js
- https://github.com/bernardodiasc/poc-react-context/blob/main/gatsby/gatsby-browser.js
- https://github.com/bernardodiasc/poc-react-context/blob/main/gatsby/gatsby-ssr.js
