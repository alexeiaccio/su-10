require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require('path')

// SEO configuration
const siteTitle = 'SU-10'
const siteUrl = 'https://www.su-10.ru'
const siteDescription = 'SU-10'
const siteKeywords = 'Gatsby'
const siteThemeColor = '#009688'

// Accounts & API keys
const twitter = 'your-twitter-account'
const fbAppId = 'your-fb-app-id'
/* const gaId = 'your-ga-id' */

// Used internally
const utilsTitleShort = 'BundleGatsby'
const utilsIcon = 'static/images/icon.png'
const utilsBackgroundColor = '#009688'

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
    /* {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: gaId,
        head: false, // put GA in the <head> for optimal tracking
      },
    }, */
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
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'su-10',
        accessToken: process.env.PRICMIC_TOKEN,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-webpack-size',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
