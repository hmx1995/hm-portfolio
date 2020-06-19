import merge from "deepmerge"
import defaultTheme from "gatsby-theme-blog-test/src/gatsby-plugin-theme-ui/index"
export default merge(defaultTheme, {
    colors: {
        background: "#1d2425",
        text: "white",
        primary: "#d6bdad",
    },
})
