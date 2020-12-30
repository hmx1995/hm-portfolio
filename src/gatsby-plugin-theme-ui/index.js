import merge from "deepmerge"
import defaultTheme from "gatsby-theme-blog-test/src/gatsby-plugin-theme-ui/index"
export default merge(defaultTheme, {
    colors: {
        background: "#011627",
        text: "#E5E5E5",
        primary: "#4AA2E5",
    },
    fonts: {
        body:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: 'sans-serif',
        monospace: 'Menlo, monospace',
    },
    fontSizes: [
        12, 14, 16, 20, 24, 32, 48, 64
    ],
    fontWeights: {
        body: 250,
        heading: 200,
        bold: 400,
    },
    lineHeights: {
        body: 2.5,
        heading: 1.5,
    },
    letterSpacings: {
        body: 'normal',
        heading: 'normal',
        caps: '1em',
    },
    styles: {
        h1: {
            fontSize: 4,
            fontFamily: 'heading',
            fontWeight: 'heading',
            color: 'primary',
        }, h2: {
            fontSize: 3,
            fontFamily: 'heading',
            fontWeight: 'heading',
            color: 'primary',
        }, h3: {
            fontSize: 2,
            fontFamily: 'heading',
            fontWeight: 'heading',
            color: 'primary',
        }, h4: {
            fontSize: 1,
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
        code: {
            fontFamily: 'monospace',
            fontSize: 'inherit',
            color: 'white',
        },
        blockqoute: {
            fontFamily: 'body',
            fontSize: 'inherit',
            lineHeight: '2.5',
            paddingLeft: '10px',
        },
        p: {
            fontFamily: 'body',
            fontSize: '2',
        },
    },
})
