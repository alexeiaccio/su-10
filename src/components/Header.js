/* global tw */
import React from 'react'
/* import PropTypes from 'prop-types'  */
import { Link } from 'gatsby'
import styled, { cx } from 'react-emotion'

import {
  Button,
  Col,
  Container,
  HiddenToMD,
  HiddenToSM,
  HiddenToXL,
  JustifyEnd,
  MarginLeftAuto,
  Row,
  SquareButton,
  ShowToMD,
} from './Styles'
import logoSvg from '../assets/logo.svg'

const Description = styled('div')`
  ${tw(['leading-normal', 'text-base'])};
`

const Logo = styled(Link)`
  ${tw([
    'bg-contain',
    'bg-no-repeat',
    'block',
    'h-q36',
    'sm:h-q48',
    'md:h-q64',
    'w-full',
  ])}
  background-image: url(${logoSvg});
  min-width: 6.85rem;
`

const RowItemsCentered = styled(Row)`
  ${tw(['items-center'])};
`

const StyledHeader = styled('header')`
  ${tw(['bg-white', 'py-q20'])};
`

const Tel = styled('a')`
  ${tw(['font-bold', 'no-underline', 'text-black', 'text-xl'])};
`

const TelBlock = styled('div')`
  ${tw(['leading-normal', 'text-xs'])};
`

const Header = () => (
  <StyledHeader>
    <Container>
      <RowItemsCentered>
        <Col number={{ xs: 6, md: 3, xl: 2 }}>
          <Logo to="/" />
        </Col>
        <Col number={4} className={HiddenToXL}>
          <Description>
            Работаем в Санкт-Петербурге
            <br />и Ленинградской области
          </Description>
        </Col>
        <Col number={3} className={cx(HiddenToMD, MarginLeftAuto)}>
          <TelBlock>
            <Tel href="tel:+7812556678">+7 (812) 55-66-78</Tel>
            <br />
            Работаем ежедневно с 9 до 21
          </TelBlock>
        </Col>
        <Col number={{ xs: 6, md: 3 }} className={HiddenToSM}>
          <Button>оставить заявку</Button>
        </Col>
        <Col number={{ xs: 6, sm: 1 }} className={cx(ShowToMD, JustifyEnd)}>
          <SquareButton>×</SquareButton>
        </Col>
      </RowItemsCentered>
    </Container>
  </StyledHeader>
)

export default Header
