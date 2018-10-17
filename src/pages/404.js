/* global tw */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { css } from 'react-emotion'

import Layout from '../components/Layout'
import {
  Button,
  Col,
  Container,
  JustifyCenter,
  Row,
} from '../components/Styles'

const colStyles = css`
  ${tw(['text-center'])};
`

const NotFoundPage = ({ data }) => (
  <Layout data={data.index.data}>
    <Container>
      <Row className={JustifyCenter}>
        <Col className={colStyles} number={{ xs: 12, md: 8 }}>
          <h1>404</h1>
          <p>Такой страницы нет :(</p>
          <Link to="/">
            <Button>Вернутся на главную</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  </Layout>
)

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    index: PropTypes.shape({
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
    }).isRequired,
  }).isRequired,
}

export default NotFoundPage

export const pageQuery = graphql`
  query NotFoundPageQuery {
    index: prismicHomepage {
      ...FooterFragment
    }
  }
`
