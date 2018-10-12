import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
/* import Seo from '../components/Seo'

const seo = {
  pageTitle: 'Welcome',
} */

const ProductPage = ({ data }) => (
  <Layout>
    {/* <Seo {...seo} pathname={location.pathname} /> */}
    <h1>{data.product.data.title.text}</h1>
  </Layout>
)

ProductPage.propTypes = {
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

export default ProductPage

export const pageQuery = graphql`
  query ProductQuery($uid: String!) {
    product: prismicProduct(uid: { eq: $uid }) {
      data {
        title {
          text
        }
        description {
          text
        }
      }
    }
    seo: prismicProduct(uid: { eq: $uid }) {
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
