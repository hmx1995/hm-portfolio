---
title: Theming
date: 2020-06-26
excerpt: Using Theme-UI to Theme my Blog
tags: ["html","javascript","css", "Theme-ui"]
---

The old theme was bland and pretty much dead in the water, so I decided to give
it little makeover. The following is what ensued. 

### How do you theme a gatsby page?

Theming a static page seems simple enough, throw in some CSS with a little bit
of HTML div magic and you should have yourself a simple elegant static page.
But with Gatsby all the content in server-sided, this means that Gatsby makes
the page and then serves it you (the reader) this comes with it's complexity.

This is when Gatsby's Theming framework Theme-UI enters the fray. 

### Theme-UI

Theme-UI is gatsby solution to global CSS and SCSS files, they provide theming
on a modular basis inside a global file, making things much more easier to edit
on a project wide scale. 

They have a well detailed documentation that can be found
[here](https://theme-ui.com/home). I haven't gone through all the features as
they are plentiful and my blog doesn't really require it to be "over-themed" (A
little play on words).

Essentially how it works is a file name `index.js` is placed in the
`gatsby-plugin-theme-ui` source file folder, this is known as shadowing in the
Gatsby world (More details can be found
[here]()) this will overwrite the index.js file in the plugin src files. 

A simple `index.js` file would look like so

```javascript
export default {
  colors: {
    text: '#000',
    background: '#fff',
    primary: 'tomato',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
  },
}
```

### Populating the File

After this step has been completed and integrated into your site, you can go
ahead and throw in all the bit and bobs you found in the documentation that
suits your needs. 

You can checkout my theme on my GitHub
[here](https://github.com/CodeForMMA/portfolio/blob/master/src/gatsby-plugin-theme-ui/index.js)

### Appendix

#### Typography

Typography is one of the most important factors in your theme, it provides the
readability to the theme and a provides a general ethos of what the reader
should expect from the blog. 

There was a few links that I will find and add here, but you get the gist for now. 


