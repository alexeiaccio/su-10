/* global tw */
import React from 'react'
import PropTypes from 'prop-types'
import { injectGlobal } from 'emotion'

import Header from './Header'
/* import Seo from './Seo' */

import '../fonts/montserrat/stylesheet.css'

/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
injectGlobal`
  body {
    ${tw(['m-0', 'font-montserrat'])};
  }
`

const Layout = ({ children }) => (
  <React.Fragment>
    {/* <Seo /> */}
    <Header />
    <div>{children}</div>
    {/* Footer component goes here */}
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
