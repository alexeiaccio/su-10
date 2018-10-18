require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require('path')

// SEO configuration
const siteTitle = 'SU-10'
const siteUrl = 'https://www.su-10.ru'
const siteDescription = 'SU-10'
const siteKeywords = 'Gatsby'
const siteThemeColor = '#FFAB00'

// Accounts & API keys
const twitter = ''
const fbAppId = ''

// Used internally
const utilsTitleShort = 'SU-10'
const utilsIcon = 'static/images/icon.png'
const utilsBackgroundColor = '#FFAB00'

// Do not modify unless you know what you're doing
module.exports = {
  siteMetadata: {
    // SEO
    siteTitle,
    siteUrl,
    siteDescription,
    siteKeywords,
    siteThemeColor,
    social: {
      twitter,
      fbAppId,
    },
    // Utils
    utilsTitleShort,
    utilsIcon: path.resolve(__dirname, utilsIcon),
    utilsBackgroundColor,
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'su-10',
        accessToken: process.env.PRICMIC_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteTitle,
        short_name: utilsTitleShort,
        start_url: '/',
        theme_color: siteThemeColor,
        background_color: utilsBackgroundColor,
        display: 'minimal-ui',
        icon: utilsIcon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-webpack-size',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cache`,
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
  ],
}
