/* global tw */
import React from 'react'
import PropTypes from 'prop-types'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'

import Body from './Body'
import Footer from './Footer'
import Header from './Header'
/* import Seo from './Seo' */

import '../fonts/montserrat/stylesheet.css'

/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
injectGlobal`
  body {
    ${tw(['m-0', 'font-montserrat'])};
  }
`

const Wrapper = styled('div')``

const Layout = ({ data, children }) => (
  <>
    {/* <Seo /> */}
    <Header tel={data.footertel} />
    <Wrapper>{children}</Wrapper>
    <Body body={data.body.slice(1)} />
    <Footer {...{ data }} />
  </>
)

Layout.propTypes = {
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
            url: PropTypes.string,
            localFile: PropTypes.shape({
              childImageSharp: PropTypes.shape({
                fluid: PropTypes.shape({
                  src: PropTypes.string.isRequired,
                }).isRequired,
              }).isRequired,
            }),
          }),
        }),
        items: PropTypes.arrayOf(
          PropTypes.shape({
            galleryimage: PropTypes.shape({
              url: PropTypes.string,
              localFile: PropTypes.shape({
                childImageSharp: PropTypes.shape({
                  fluid: PropTypes.shape({
                    src: PropTypes.string.isRequired,
                  }).isRequired,
                }).isRequired,
              }),
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
  children: PropTypes.node.isRequired,
}

export default Layout
