/* global tw */
import React from 'react'
import PropTypes from 'prop-types'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'

import Footer from './Footer'
import Header from './Header'
/* import Seo from './Seo' */

import '../fonts/montserrat/stylesheet.css'

/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
injectGlobal`
  body {
    ${tw(['m-0', 'font-montserrat'])};
  }
`

const Wrapper = styled('div')``

const Layout = ({ data, children }) => (
  <>
    {/* <Seo /> */}
    <Header tel={data.footertel} />
    <Wrapper>{children}</Wrapper>

    <Footer {...{ data }} />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
