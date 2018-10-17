/* global tw */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'

import HTMLContent from './Content'
import Form from './Form'
import Img from './Img'
import { Col, Container, FluidContainer, JustifyCenter, Row } from './Styles'

const Text = styled('div')`
  ${tw(['mt-q60', 'text-center', 'text-white'])};
  & h2 {
    ${tw(['font-bold', 'mb-q36', 'text-xl'])};
  }
  & a {
    ${tw(['font-normal', 'no-underline', 'text-white', 'text-base'])};
  }
  & p {
    ${tw(['font-normal', 'mb-q12', 'text-base'])};
  }
`

const ImgStyles = css`
  ${tw(['pin'])};
  &::after {
    ${tw(['absolute', 'bg-black', 'opacity-60', 'pin'])};
    content: '';
  }
`

const formStyles = css`
  ${tw(['text-white'])};
`

const OpenForm = ({ primary }) => (
  <FluidContainer>
    <Img
      src={primary.formimage}
      className={ImgStyles}
      style={{ position: 'absolute' }}
    />
    <Container>
      <Row className={JustifyCenter}>
        <Col number={{ xs: 12, md: 8 }}>
          <Text>
            <HTMLContent content={primary.formtext.html} />
          </Text>
          <Form className={formStyles} />
        </Col>
      </Row>
    </Container>
  </FluidContainer>
)

OpenForm.propTypes = {
  primary: PropTypes.shape({
    formtext: PropTypes.shape({
      html: PropTypes.string.isRequired,
    }).isRequired,
    formimage: PropTypes.shape({
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
}

export default OpenForm
