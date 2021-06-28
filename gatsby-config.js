module.exports = {
    siteMetadata: {
        title: "Hassan",
        author: "Hassan",
        description: "Hassan Mustafa Homepage",
        social: [
            {
                name: `Twitter`,
                url: `https://twitter.com/gatsbyjs`,
            },
            {
                name: `GitHub`,
                url: `https://github.com/gatsbyjs`,
            },
        ],
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'hassan-mustafa-portfolio',
                short_name: 'portfolio',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/hm.jpg', // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-theme-blog-test`,
            options: {
                basePath: `/blog/new-content/new-content`,
            },
        },
        'gatsby-plugin-sass',
        'gatsby-plugin-offline',
        'gatsby-plugin-material-ui'
    ],
}
