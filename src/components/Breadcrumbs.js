/* global tw */
import PropTypes from 'prop-types'
import React from 'react'
import s4 from 'node-uuid'
import styled, { css } from 'react-emotion'
import { StaticQuery, Link, graphql } from 'gatsby'

import { Col, Container, JustifyCenter, Row } from './Styles'

import woodBoard from '../assets/wood-board.svg'
import woodBoardOrange from '../assets/wood-board-orange.svg'

const Icon = css`
  ${tw(['mt-q12', 'ml-q48', 'pl-q48', 'relative', 'whitespace-no-wrap'])};
  &::before {
    ${tw([
      'absolute',
      'bg-center',
      'bg-contain',
      'bg-no-repeat',
      'block',
      'pin-l',
    ])};
    content: '';
    height: 2.625rem;
    top: -1.15rem;
    width: 2.375rem;
  }
`

const Current = styled('span')`
  ${Icon};
  ${tw(['text-orange'])};
  &::before {
    background-image: url(${woodBoardOrange});
  }
`

const StyledLink = styled(Link)`
  ${Icon};
  ${tw(['underline', 'hover:no-underline'])};
  color: inherit;
  &::before {
    background-image: url(${woodBoard});
  }
`

const Wrapper = styled('div')`
  ${tw([
    'bg-black',
    'hidden',
    'md:block',
    'font-bold',
    'py-q24',
    'text-white',
    'tracking-button',
    'uppercase',
    'w-full',
  ])};
`

const Breadcrumbs = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allPrismicProduct {
          edges {
            node {
              uid
              data {
                title {
                  text
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Container>
          <Row className={JustifyCenter}>
            {data.allPrismicProduct.edges.map(({ node }) => (
              <Col className={JustifyCenter} key={s4()} number={3}>
                {location.pathname.replace(/\//g, '') === node.uid ? (
                  <Current key={s4()}>{node.data.title.text}</Current>
                ) : (
                  <StyledLink key={s4()} to={node.uid}>
                    {node.data.title.text}
                  </StyledLink>
                )}
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    )}
  />
)

Breadcrumbs.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default Breadcrumbs
