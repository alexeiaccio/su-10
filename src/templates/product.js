import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Breadcrumbs from '../components/Breadcrumbs'
import Layout from '../components/Layout'
import PriceList from '../components/PriceList'
import { Container, H1 } from '../components/Styles'
/* import Seo from '../components/Seo'

const seo = {
  pageTitle: 'Welcome',
} */

const ProductPage = ({ data, location }) => (
  <Layout>
    {/* <Seo {...seo} pathname={location.pathname} /> */}
    <Breadcrumbs {...{ location }} />
    <Container>
      <H1>{data.product.data.title.text}</H1>
      <PriceList data={data.product.data} {...{ location }} />
    </Container>
  </Layout>
)

ProductPage.propTypes = {
  data: PropTypes.shape({
    product: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }).isRequired,
        description: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }).isRequired,
        pricetitle: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
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
        pricetitle {
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
