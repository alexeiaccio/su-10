/* global tw */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { cx, css } from 'react-emotion'
import posed from 'react-pose'

import HTMLContent from './Content'
import Form from './Form'
import MobileMenu from './MobileMenu'
import Modal from './Modal'
import {
  Button,
  CloseIcon,
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

const formStyles = css`
  ${tw(['text-black'])};
`

const poseStyles = css`
  ${tw(['overflow-hidden'])};
`

const AnimatedMenu = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' },
})

class Header extends Component {
  constructor() {
    super()
    this.toggleMenu = this.toggleMenu.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.state = {
      mobileMenu: false,
      modal: false,
    }
  }

  toggleMenu() {
    const { mobileMenu } = this.state
    this.setState({
      mobileMenu: !mobileMenu,
    })
  }

  toggleModal() {
    const { modal } = this.state
    this.setState({
      modal: !modal,
      mobileMenu: false,
    })
  }

  render() {
    const { tel, location } = this.props
    const { mobileMenu, modal } = this.state
    return (
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
              <Button onClick={this.toggleModal}>оставить заявку</Button>
            </Col>
            <Col number={{ xs: 2, sm: 3 }} className={cx(ShowToMD, JustifyEnd)}>
              <SquareButton
                className={mobileMenu ? CloseIcon : MenuIcon}
                onClick={this.toggleMenu}
              />
            </Col>
          </RowItemsCentered>
        </Container>
        <AnimatedMenu
          className={poseStyles}
          pose={mobileMenu ? 'open' : 'closed'}
        >
          <MobileMenu {...{ location }} toggleModal={this.toggleModal} />
        </AnimatedMenu>
        <Modal modal={modal} toggleModal={this.toggleModal}>
          <Form className={formStyles} name="header-form" textarea />
        </Modal>
      </StyledHeader>
    )
  }
}

Header.propTypes = {
  tel: PropTypes.shape({
    html: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default Header
