import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

const NotFoundPage = ({ data }) => (
  <Layout data={data.index.data}>
    <h1>404</h1>
    <p>
      Do not worry! Incorrect URLs will lead your users here when running in
      production mode.
    </p>
  </Layout>
)

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    index: PropTypes.shape({
      data: PropTypes.shape({
        footertel: PropTypes.shape({
          html: PropTypes.string.isRequired,
        }).isRequired,
        footertext: PropTypes.shape({
          html: PropTypes.string.isRequired,
        }).isRequired,
        map: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
        mapimage: PropTypes.shape({
          url: PropTypes.string,
          localFile: PropTypes.shape({
            childImageSharp: PropTypes.shape({
              fluid: PropTypes.shape({
                src: PropTypes.string.isRequired,
              }).isRequired,
            }).isRequired,
          }),
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default NotFoundPage

export const pageQuery = graphql`
  query NotFoundPageQuery {
    index: prismicHomepage {
      ...FooterFragment
    }
  }
`
