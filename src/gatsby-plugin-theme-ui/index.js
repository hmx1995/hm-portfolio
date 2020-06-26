import merge from "deepmerge"
import defaultTheme from "gatsby-theme-blog-test/src/gatsby-plugin-theme-ui/index"
export default merge(defaultTheme, {
    colors: {
        background: "#011627",
        text: "#E5E5E5",
        primary: "#FCA311",
    },
    styles: {
        h1: {
            fontSize: 5,
            fontFamily: 'heading',
            fontWeight: 'heading',
            color: 'primary',
        }, h2: {
            fontSize: 4,
            fontFamily: 'heading',
            fontWeight: 'heading',
            color: 'primary',
        }, h3: {
            fontSize: 3,
            fontFamily: 'heading',
            fontWeight: 'heading',
            color: 'primary',
        }, h4: {
            fontSize: 2,
            fontFamily: 'heading',
            fontWeight: 'heading',
            color: 'primary',
        }, h5: {
            fontSize: 1,
            fontFamily: 'heading',
            fontWeight: 'heading',
            color: 'primary',
        }, h6: {
            fontSize: 0,
            fontFamily: 'heading',
            fontWeight: 'heading',
            color: 'primary',
        },
    },
    fonts: {
        body: 'Inconsolata, monospace',
        heading: 'Montserrat, sans-serif'
    },
    fontSizes: [
        12, 14, 16, 20, 24, 32, 48, 64
    ],
    fontWeights: {
        body: 200,
        heading: 500,
        bold: 600,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    letterSpacings: {
        body: 'normal',
        caps: '0.1em',
    },
})
