/* global tw */
import PropTypes from 'prop-types'
import React from 'react'
import s4 from 'node-uuid'
import styled, { css, cx } from 'react-emotion'
import { StaticQuery, Link, graphql } from 'gatsby'
import words from 'lodash.words'

import { Col, Container, JustifyCenter, Row } from './Styles'

import woodBoard from '../assets/wood-board.svg'
import woodBoardOrange from '../assets/wood-board-orange.svg'
import cabinWhite from '../assets/cabin-white.svg'
import cabinOrange from '../assets/cabin-orange.svg'

const Icon = css`
  ${tw(['mt-q12', 'ml-q36', 'pl-q48', 'relative', 'whitespace-no-wrap'])};
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
    left: 0;
  }
`

const IconHome = ({ iconHome }) => css`
  height: ${iconHome && '3.1rem'};
  top: ${iconHome && '-1.5rem'};
  width: ${iconHome && '3.1rem'};
  left: ${iconHome && '-0.8rem'};
`

const Current = styled('span')`
  ${Icon};
  ${({ iconHome }) => iconHome && tw(['ml-48'])};
  ${tw(['text-orange'])};
  &::before {
    ${IconHome};
    background-image: url(${({ iconHome }) =>
      iconHome ? cabinOrange : woodBoardOrange});
  }
`

const StyledLink = styled(Link)`
  ${tw(['mt-q12', 'underline', 'hover:no-underline'])};
  color: inherit;
`

const StyledSpan = styled('span')`
  ${Icon};
  ${({ iconHome }) => iconHome && tw(['ml-48'])};
  &::before {
    ${IconHome};
    background-image: url(${({ iconHome }) =>
      iconHome ? cabinWhite : woodBoard});
  }
`

const Wrapper = styled('nav')`
  ${tw([
    'bg-black',
    'font-bold',
    'overflow-x-auto',
    'py-q24',
    'text-white',
    'tracking-button',
    'uppercase',
    'w-full',
  ])};
`

const rowStyles = css`
  min-width: 68rem;
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
          <Row className={cx(JustifyCenter, rowStyles)}>
            {data.allPrismicProduct.edges.map(({ node }) => {
              const title = node.uid.includes('stroitelstvo')
                ? words(node.data.title.text)
                    .slice(0, 2)
                    .join(' ')
                : node.data.title.text
              return (
                <Col className={JustifyCenter} key={s4()} number={{ xs: 3 }}>
                  {location.pathname.replace(/\//g, '') === node.uid ? (
                    <Current
                      iconHome={node.uid.includes('stroitelstvo')}
                      key={s4()}
                    >
                      {title}
                    </Current>
                  ) : (
                    <StyledLink key={s4()} to={node.uid}>
                      <StyledSpan
                        iconHome={node.uid.includes('stroitelstvo')}
                        key={s4()}
                      >
                        {title}
                      </StyledSpan>
                    </StyledLink>
                  )}
                </Col>
              )
            })}
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
