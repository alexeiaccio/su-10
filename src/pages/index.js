import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
/* import Seo from '../components/Seo'

const seo = {
  pageTitle: 'Welcome',
} */

const IndexPage = ({ data }) => (
  <Layout>
    {/* <Seo {...seo} pathname={location.pathname} /> */}
    <h1>{data.index.data.title.text}</h1>
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.shape({
    index: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }).isRequired,
        description: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    index: prismicHomepage {
      data {
        title {
          text
        }
        description {
          text
        }
      }
    }
    seo: prismicHomepage {
      data {
        seotitle
        seodescription
        seokeywords
        seoimage {
          url
        }
      }
    }
  }
`
