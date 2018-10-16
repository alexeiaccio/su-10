/* global tw */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import GatsbyImage from 'gatsby-image'

const Holder = styled('div')`
  ${tw([
    'bg-grey-lighter',
    'h-full',
    'mb-q16',
    'overflow-hidden',
    'rounded-sm',
    'w-full',
  ])};
`

const Image = styled('img')`
  ${tw(['w-full'])};
`

const Img = ({ src, ...props }) => {
  if (src.localFile) {
    return src.localFile.childImageSharp ? (
      <GatsbyImage fluid={src.localFile.childImageSharp.fluid} {...props} />
    ) : (
      <Image src={src.localFile.absolutePath} {...props} />
    )
  }
  return <Holder {...props} />
}

Img.propTypes = {
  src: PropTypes.shape({
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

export default Img
