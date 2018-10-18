/* global tw */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import s4 from 'node-uuid'

import HTMLContent from './Content'
import RotateAround from './RotateAround'
import { Col, Container, Row, WrapToMD } from './Styles'

const colStyles = css`
  ${tw(['flex', 'flex-col', 'items-center'])};
`

const textStyles = css`
  ${tw(['mb-q48', 'text-base', 'text-center'])};
`

const Point = styled('div')`
  ${tw([
    'bg-orange',
    'bg-center',
    'bg-no-repeat',
    'border-solid',
    'border-white',
    'border-4',
    'cursor-pointer',
    'h-q96',
    'mb-q24',
    'relative',
    'rounded-full',
    'w-q96',
  ])};
  background-image: url(${({ url }) => url});
  background-size: 50%;
  &::before {
    ${tw(['absolute', 'bg-orange', 'h-q112', 'w-q112', 'rounded-full'])};
    content: '';
    z-index: -1;
    left: calc(50% - 3.5rem);
    top: calc(50% - 3.5rem);
  }
`

const Points = ({ items }) => (
  <Container
    className={css`
      ${tw(['mt-q60'])};
    `}
  >
    <Row className={WrapToMD}>
      {items.map(({ pointicon, pointtext }) => (
        <Col className={colStyles} key={s4()} number={{ xs: 12, sm: 6, md: 3 }}>
          <RotateAround>
            <Point key={s4()} url={pointicon.url} />
          </RotateAround>
          <HTMLContent
            className={textStyles}
            content={pointtext.html}
            key={s4()}
          />
        </Col>
      ))}
    </Row>
  </Container>
)

Points.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      pointicon: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
      pointtext: PropTypes.shape({
        html: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Points
