/* global tw */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled, { css } from 'react-emotion'

import Img from './Img'

const Wrapper = styled('div')`
  ${tw(['absolute', 'pin-t', 'pin-l', 'pin-r'])};
  min-height: 75vh;
`

const ImgStyles = css`
  ${tw(['pin'])};
`

const Banner = ({ image }) => (
  <Wrapper>
    <Img src={image} className={ImgStyles} style={{ position: 'absolute' }} />
  </Wrapper>
)

Banner.propTypes = {
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
}

export default Banner

export const query = graphql`
  fragment BannerImage on PrismicHomepage {
    data {
      image {
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
`
