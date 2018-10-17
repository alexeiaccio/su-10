import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Breadcrumbs from '../components/Breadcrumbs'
import HTMLContent from '../components/Content'
import Layout from '../components/Layout'
import PriceList from '../components/PriceList'
import { Container, Description, H1 } from '../components/Styles'
/* import Seo from '../components/Seo'

const seo = {
  pageTitle: 'Welcome',
} */

const ProductPage = ({ data, location }) => (
  <Layout data={data.index.data}>
    {/* <Seo {...seo} pathname={location.pathname} /> */}
    <Breadcrumbs {...{ location }} />
    <Container>
      <H1>{data.product.data.title.text}</H1>
      <Description>
        <HTMLContent content={data.product.data.description.html} />
      </Description>
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
          html: PropTypes.string.isRequired,
        }).isRequired,
        pricetitle: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
    index: PropTypes.shape({
      data: PropTypes.shape({
        products: PropTypes.arrayOf(
          PropTypes.shape({
            producttitle: PropTypes.shape({
              text: PropTypes.string.isRequired,
            }).isRequired,
            productcaption: PropTypes.shape({
              html: PropTypes.string.isRequired,
            }).isRequired,
            productprice: PropTypes.string.isRequired,
            productlink: PropTypes.shape({
              uid: PropTypes.string.isRequired,
            }).isRequired,
            productimage: PropTypes.shape({
              localFile: PropTypes.oneOfType([
                PropTypes.shape({
                  childImageSharp: PropTypes.shape({
                    fluid: PropTypes.shape({
                      src: PropTypes.string.isRequired,
                    }).isRequired,
                  }).isRequired,
                }),
                PropTypes.shape({
                  absolutePath: PropTypes.string.isRequired,
                }),
              ]).isRequired,
            }).isRequired,
          }).isRequired
        ).isRequired,
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
          localFile: PropTypes.oneOfType([
            PropTypes.shape({
              childImageSharp: PropTypes.shape({
                fluid: PropTypes.shape({
                  src: PropTypes.string.isRequired,
                }).isRequired,
              }).isRequired,
            }),
            PropTypes.shape({
              absolutePath: PropTypes.string.isRequired,
            }),
          ]).isRequired,
        }).isRequired,
        body: PropTypes.arrayOf(
          PropTypes.shape({
            __typename: PropTypes.oneOf([
              'PrismicHomepageBodyText',
              'PrismicHomepageBodyImageGallery',
              'PrismicHomepageBodyPoints',
              'PrismicHomepageBodyForm',
            ]).isRequired,
            primary: PropTypes.shape({
              text: PropTypes.shape({
                html: PropTypes.string.isRequired,
              }),
              gallerytitle: PropTypes.shape({
                text: PropTypes.string.isRequired,
              }),
              formtext: PropTypes.shape({
                html: PropTypes.string.isRequired,
              }),
              formimage: PropTypes.shape({
                localFile: PropTypes.oneOfType([
                  PropTypes.shape({
                    childImageSharp: PropTypes.shape({
                      fluid: PropTypes.shape({
                        src: PropTypes.string.isRequired,
                      }).isRequired,
                    }).isRequired,
                  }),
                  PropTypes.shape({
                    absolutePath: PropTypes.string.isRequired,
                  }),
                ]).isRequired,
              }),
            }),
            items: PropTypes.arrayOf(
              PropTypes.shape({
                galleryimage: PropTypes.shape({
                  localFile: PropTypes.oneOfType([
                    PropTypes.shape({
                      childImageSharp: PropTypes.shape({
                        fluid: PropTypes.shape({
                          src: PropTypes.string.isRequired,
                        }).isRequired,
                      }).isRequired,
                    }),
                    PropTypes.shape({
                      absolutePath: PropTypes.string.isRequired,
                    }),
                  ]).isRequired,
                }),
                pointicon: PropTypes.shape({
                  url: PropTypes.string.isRequired,
                }),
                pointtext: PropTypes.shape({
                  html: PropTypes.string.isRequired,
                }),
              }).isRequired
            ),
          }).isRequired
        ),
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
          html
        }
        pricetitle {
          text
        }
      }
    }
    index: prismicHomepage {
      ...ProductsFragment
      ...BodyFragment
      ...FooterFragment
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
