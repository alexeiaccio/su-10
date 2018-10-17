/* global tw */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'react-emotion'
import s4 from 'node-uuid'

import HTMLContent from './Content'
import Points from './Points'
import Slider from './Slider'

const Text = styled('div')`
  ${tw(['mt-q96', 'text-center'])};
  & h2 {
    ${tw(['font-normal', 'mb-q48', 'text-4xl'])};
  }
  & a {
    ${tw(['font-bold', 'no-underline', 'text-black', 'text-2xl'])};
  }
  & p {
    ${tw(['font-normal', 'mb-q36', 'text-base'])};
  }
`

const Body = ({ body }) => (
  <section>
    {body.map(({ __typename, primary, items }) => (
      <div key={s4()}>
        {__typename === 'PrismicHomepageBodyText' && (
          <Text key={s4()}>
            <HTMLContent key={s4()} content={primary.text.html} />
          </Text>
        )}
        {__typename === 'PrismicHomepageBodyImageGallery' && (
          <Text key={s4()}>
            <h2 key={s4()}>{primary.gallerytitle.text}</h2>
            <Slider items={items} />
          </Text>
        )}
        {__typename === 'PrismicHomepageBodyPoints' && <Points items={items} />}
      </div>
    ))}
  </section>
)

Body.propTypes = {
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
  ).isRequired,
}

export default Body

export const query = graphql`
  fragment BodyFragment on PrismicHomepage {
    data {
      body {
        __typename
        ... on PrismicHomepageBodyText {
          primary {
            text {
              html
            }
          }
        }
        ... on PrismicHomepageBodyImageGallery {
          primary {
            gallerytitle {
              text
            }
          }
          items {
            galleryimage {
              localFile {
                absolutePath
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
        ... on PrismicHomepageBodyPoints {
          items {
            pointicon {
              url
            }
            pointtext {
              html
            }
          }
        }
        ... on PrismicHomepageBodyForm {
          primary {
            formtext {
              html
            }
            formimage {
              localFile {
                absolutePath
                childImageSharp {
                  fluid(maxWidth: 1920, quality: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
