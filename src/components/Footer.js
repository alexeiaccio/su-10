/* global tw */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled, { css } from 'react-emotion'

import HTMLContent from './Content'
import Img from './Img'
import { Col, Container, HeaderDescription, Logo, Row, TelIcon } from './Styles'

const StyledFooter = styled('footer')`
  ${tw(['my-q60'])};
`

const TextBlock = styled('div')`
  ${tw(['mt-q36'])};
  & h3 {
    ${tw(['font-bold', 'mb-q20', 'text-xl'])};
  }
  & a {
    ${tw(['no-underline', 'text-black'])};
  }
  & p {
    ${tw([
      'border-t-0',
      'border-b-0',
      'border-r-0',
      'border-l-2',
      'border-black',
      'border-solid',
      'font-normal',
      'leading-normal',
      'mb-q16',
      'pl-q16',
      'text-lg',
    ])};
  }
`

const TelBlock = styled('div')`
  ${tw(['leading-normal', 'mt-q36', 'pl-q32', 'text-xs'])};
  & p,
  & h3 {
    ${tw(['m-0'])};
  }
  & a {
    ${tw([
      'font-bold',
      '-m-2',
      'no-underline',
      'relative',
      'text-black',
      'text-xl',
    ])};
    &:before {
      ${tw([
        'absolute',
        'bg-center',
        'bg-contain',
        'bg-no-repeat',
        'block',
        'h-q20',
        'w-q20',
      ])};
      ${TelIcon};
      content: '';
      left: -1.5rem;
      top: 0;
    }
  }
`

const Copy = styled('div')`
  ${tw(['mt-q24', 'text-xs'])};
`

const logoStyles = css`
  ${tw(['mb-q24', 'sm:mb-0'])};
`

const mapStyles = css`
  ${tw(['mt-q24', 'md:mt-0'])};
`

const RowStyles = css`
  ${tw(['flex-wrap', 'md:flex-no-wrap'])};
`

const Footer = ({ data }) => (
  <StyledFooter>
    <Container>
      <Row className={RowStyles}>
        <Col className={logoStyles} number={{ xs: 4, md: 2 }}>
          <Logo to="/" />
          <Copy>
            © 1998—
            {new Date().getFullYear()} / СУ-10
          </Copy>
        </Col>
        <Col number={{ xs: 12, sm: 6, md: 4 }}>
          <HeaderDescription>
            Работаем в Санкт-Петербурге
            <br />и Ленинградской области
          </HeaderDescription>
          <TelBlock>
            <HTMLContent content={data.footertel.html} />
          </TelBlock>
          <TextBlock>
            <HTMLContent content={data.footertext.html} />
          </TextBlock>
        </Col>
        <Col number={{ xs: 12, md: 6 }}>
          <a href={data.map.url} rel="noopener noreferrer" target="_blank">
            <Img className={mapStyles} src={data.mapimage} />
          </a>
        </Col>
      </Row>
    </Container>
  </StyledFooter>
)

Footer.propTypes = {
  data: PropTypes.shape({
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
  }).isRequired,
}

export default Footer

export const query = graphql`
  fragment FooterFragment on PrismicHomepage {
    data {
      footertel {
        html
      }
      footertext {
        html
      }
      map {
        url
      }
      mapimage {
        url
        localFile {
          childImageSharp {
            fluid(maxWidth: 600, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
