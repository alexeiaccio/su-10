/* global tw */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled, { cx } from 'react-emotion'

import Banner from '../components/Banner'
import HTMLContent from '../components/Content'
import Layout from '../components/Layout'
import Products from '../components/Products'
import { Container, HiddenFromMD, TextBase } from '../components/Styles'
/* import Seo from '../components/Seo'

const seo = {
  pageTitle: 'Welcome',
} */

const Description = styled('div')`
  ${tw([
    'leading-normal',
    'my-q36',
    'md:my-q48',
    'text-lg',
    'md:text-3xl',
    'text-center',
  ])};
  & p {
    ${tw(['m-0', 'p-0'])};
  }
`

const H1 = styled('h1')`
  ${tw([
    'font-bold',
    'mb-0',
    'mt-q36',
    'md:mt-q60',
    'text-2xl',
    'md:text-5xl',
    'text-center',
  ])};
`

const IndexPage = ({ data }) => {
  const { image, title, description, products } = data.index.data
  return (
    <Layout data={data.index.data}>
      {/* <Seo {...seo} pathname={location.pathname} /> */}
      <Banner image={image} />
      <Container>
        <Description className={cx(HiddenFromMD, TextBase)}>
          Работаем в Санкт-Петербурге
          <br />и Ленинградской области
        </Description>
        <H1>{title.text}</H1>
        <Description>
          <HTMLContent content={description.html} />
        </Description>
        <Products products={products} />
      </Container>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    index: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }).isRequired,
        description: PropTypes.shape({
          html: PropTypes.string.isRequired,
        }).isRequired,
        image: PropTypes.shape({
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
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    index: prismicHomepage {
      ...BannerImage
      ...ProductsFragment
      ...FooterFragment
      data {
        title {
          text
        }
        description {
          html
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
