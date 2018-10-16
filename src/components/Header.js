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
  HiddenToLG,
  JustifyEnd,
  MarginLeftTwoCol,
  MenuIcon,
  Row,
  SquareButton,
  ShowToMD,
  TelIcon,
} from './Styles'
import logoSvg from '../assets/logo.svg'

const Description = styled('div')`
  ${tw(['leading-normal', 'text-base'])};
`

const Logo = styled(Link)`
  ${tw([
    'bg-center',
    'bg-contain',
    'bg-no-repeat',
    'block',
    'h-q36',
    'sm:h-q48',
    'md:h-q64',
    'w-full',
  ])}
  background-image: url(${logoSvg});
  min-width: 4.5rem;
`

const RowItemsCentered = styled(Row)`
  ${tw(['items-center'])};
`

const StyledHeader = styled('header')`
  ${tw(['bg-white', 'py-q20', 'relative', 'z-50'])};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`

const Tel = styled('a')`
  ${tw([
    'font-bold',
    '-m-2',
    'no-underline',
    'relative',
    'text-black',
    'text-sm',
    'md:text-xl',
  ])};
  &:before {
    ${tw([
      'absolute',
      'bg-center',
      'bg-contain',
      'bg-no-repeat',
      'hidden',
      'sm:block',
      'h-q16',
      'w-q16',
      'md:h-q20',
      'md:w-q20',
    ])};
    ${TelIcon};
    content: '';
    left: -1.15rem;
    top: 0;
  }
  @media (min-width: 768px) {
    &:before {
      left: -1.5rem;
    }
  }
`

const TelBlock = styled('div')`
  ${tw(['leading-normal', 'p-2', 'text-xxs', 'md:text-xs'])};
`

const Header = () => (
  <StyledHeader>
    <Container>
      <RowItemsCentered>
        <Col number={{ xs: 2, xl: 2 }}>
          <Logo to="/" />
        </Col>
        <Col number={4} className={HiddenToLG}>
          <Description>
            Работаем в Санкт-Петербурге
            <br />и Ленинградской области
          </Description>
        </Col>
        <Col number={{ xs: 6, sm: 4, lg: 3 }} className={MarginLeftTwoCol}>
          <TelBlock>
            <Tel href="tel:+7812556678">+7 (812) 55-66-78</Tel>
            <br />
            Работаем ежедневно с 9 до 21
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

export default Header
