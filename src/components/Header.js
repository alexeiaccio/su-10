/* global tw */
import React from 'react'
/* import PropTypes from 'prop-types'  */
import { Link } from 'gatsby'
import styled from 'react-emotion'

import Container from './Styles'
import logoSvg from '../assets/logo.svg'

const StyledHeader = styled('header')`
  ${tw(['bg-white', 'py-q20'])};
`

const Logo = styled(Link)`
  ${tw(['block'])}
  background-image: url(${logoSvg});
  height: 58px;
  width: 170px;
`

const Header = () => (
  <StyledHeader>
    <Container>
      <Logo to="/" />
    </Container>
  </StyledHeader>
)

export default Header
