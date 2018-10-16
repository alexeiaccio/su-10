/* global tw */
import React from 'react'
import PropTypes from 'prop-types'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'
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

const Layout = ({ children }) => (
  <>
    {/* <Seo /> */}
    <Header />
    <Wrapper>{children}</Wrapper>
    {/* Footer component goes here */}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
