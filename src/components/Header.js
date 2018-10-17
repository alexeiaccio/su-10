/* global tw */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'

import HTMLContent from './Content'
import {
  Button,
  Col,
  Container,
  HeaderDescription,
  HiddenToMD,
  HiddenToLG,
  JustifyEnd,
  Logo,
  MarginLeftTwoCol,
  MenuIcon,
  Row,
  SquareButton,
  ShowToMD,
  TelBlock,
} from './Styles'

const RowItemsCentered = styled(Row)`
  ${tw(['items-center'])};
`

const StyledHeader = styled('header')`
  ${tw(['bg-white', 'py-q20', 'relative', 'z-50'])};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`

const Header = ({ tel }) => (
  <StyledHeader>
    <Container>
      <RowItemsCentered>
        <Col number={{ xs: 2, xl: 2 }}>
          <Logo to="/" />
        </Col>
        <Col number={4} className={HiddenToLG}>
          <HeaderDescription>
            Работаем в Санкт-Петербурге
            <br />и Ленинградской области
          </HeaderDescription>
        </Col>
        <Col number={{ xs: 6, sm: 4, lg: 3 }} className={MarginLeftTwoCol}>
          <TelBlock>
            <HTMLContent content={tel.html} />
          </TelBlock>
        </Col>
        <Col number={{ xs: 6, md: 3 }} className={HiddenToMD}>
          <Button>оставить заявку</Button>
        </Col>
        <Col number={{ xs: 2, sm: 3 }} className={cx(ShowToMD, JustifyEnd)}>
          <SquareButton className={MenuIcon} />
        </Col>
      </RowItemsCentered>
    </Container>
  </StyledHeader>
)

Header.propTypes = {
  tel: PropTypes.shape({
    html: PropTypes.string.isRequired,
  }).isRequired,
}

export default Header
