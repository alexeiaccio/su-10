/* global tw */
import React from 'react'
import PropTypes from 'prop-types'
import s4 from 'node-uuid'
import styled, { css } from 'react-emotion'
import { StaticQuery, Link, graphql } from 'gatsby'

import { Button, Container } from './Styles'

const Wrapper = styled('nav')`
  ${tw([
    'pt-q24',
    'pb-q12',
    'tracking-button',
    'uppercase',
    'w-full',
    'md:hidden',
  ])};
`

const LinkWrapper = styled('div')`
  ${tw(['flex', 'items-center', 'justify-center', 'w-full'])};
`

const Current = styled('span')`
  ${tw(['flex-1', 'py-q12', 'text-orange', 'text-center'])};
`

const StyledLink = styled(Link)`
  ${tw(['flex-1', 'py-q12', 'no-underline', 'hover:underline', 'text-center'])};
  color: inherit;
`

const buttonStyles = css`
  ${tw(['mt-q24'])};
`

const MobileMenu = ({ location, toggleModal }) => (
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
          {data.allPrismicProduct.edges.map(({ node }) => (
            <LinkWrapper key={s4()}>
              {location.pathname.replace(/\//g, '') === node.uid ? (
                <Current key={s4()}>{node.data.title.text}</Current>
              ) : (
                <StyledLink key={s4()} to={node.uid}>
                  {node.data.title.text}
                </StyledLink>
              )}
            </LinkWrapper>
          ))}
          <Button className={buttonStyles} onClick={toggleModal}>
            оставить заявку
          </Button>
        </Container>
      </Wrapper>
    )}
  />
)

MobileMenu.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  toggleModal: PropTypes.func.isRequired,
}

export default MobileMenu
