import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import s4 from 'node-uuid'

import ProductCard from './ProductCard'
import { Col, marginBottomToMD, marginTopFromMD, Row, WrapToMD } from './Styles'

const Propducts = ({ products }) => (
  <>
    <Row className={WrapToMD}>
      {products.filter(x => x.productsize === 'sm').map(product => (
        <Col key={s4()} number={{ xs: 12, md: 4 }} className={marginBottomToMD}>
          <ProductCard key={s4()} product={product} />
        </Col>
      ))}
    </Row>
    <Row>
      {products.filter(x => x.productsize === 'lg').map(product => (
        <Col key={s4()} number={{ xs: 12 }} className={marginTopFromMD}>
          <ProductCard key={s4()} product={product} />
        </Col>
      ))}
    </Row>
  </>
)

Propducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      producttitle: PropTypes.shape({
        text: PropTypes.string.isRequired,
      }).isRequired,
      productcaption: PropTypes.shape({
        html: PropTypes.string.isRequired,
      }).isRequired,
      productprice: PropTypes.string.isRequired,
      productsize: PropTypes.string.isRequired,
      productlink: PropTypes.shape({
        uid: PropTypes.string.isRequired,
      }).isRequired,
      productimage: PropTypes.shape({
        url: PropTypes.string,
        localFile: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            fluid: PropTypes.shape({
              src: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }),
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Propducts

export const query = graphql`
  fragment ProductsFragment on PrismicHomepage {
    data {
      products {
        producttitle {
          text
        }
        productcaption {
          html
        }
        productimage {
          localFile {
            absolutePath
            childImageSharp {
              fluid(maxWidth: 400, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        productprice
        productlink {
          uid
        }
        productsize
      }
    }
  }
`
