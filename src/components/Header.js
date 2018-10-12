/* global tw */
import React from 'react'
/* import PropTypes from 'prop-types'  */
import { Link } from 'gatsby'
import styled, { cx, css } from 'react-emotion'

import { Button, Col, Container, Row } from './Styles'
import logoSvg from '../assets/logo.svg'

const Description = styled('div')`
  ${tw(['leading-normal', 'text-base'])};
`

const HiddenToMD = css`
  ${tw(['hidden', 'md:block'])};
`

const HiddenToSM = css`
  ${tw(['hidden', 'sm:block'])};
`

const HiddenToXL = css`
  ${tw(['hidden', 'xl:block'])};
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
`

const MarginLeftAuto = css`
  ${tw(['ml-auto'])};
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
        <Col number={{ xs: 6, md: 4, lg: 3, xl: 2 }}>
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
        <Col
          number={{ xs: 6, md: 3 }}
          className={cx(HiddenToSM, MarginLeftAuto)}
        >
          <Button>оставить заявку</Button>
        </Col>
      </RowItemsCentered>
    </Container>
  </StyledHeader>
)

export default Header
