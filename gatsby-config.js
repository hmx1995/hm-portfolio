module.exports = {
    siteMetadata: {
        title: "Jalaly",
        author: "Mansour Jalaly",
        description: "Jalaly Homepage",
        social: [
            {
                name: `LinkdIn`,
                url: `https://twitter.com/gatsby`,
            },
            {
                name: `Github`,
                url: `https://github.com/gatsby`,
            },
        ],
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'mansour-jalaly-portfolio',
                short_name: 'portfolio',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/MJ-icon.png', // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-theme-blog-test`,
            options: {
                basePath: `/blog`,
            },
        },
        'gatsby-plugin-sass',
        'gatsby-plugin-offline',
        'gatsby-plugin-material-ui'
    ],
}
