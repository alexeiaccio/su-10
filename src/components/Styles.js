/* global tw */
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'

import MenuSvg from '../assets/menu.svg'
import TelSvg from '../assets/tel.svg'

const screens = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
}

const evalWidth = number => `width: ${(100 / 12) * number}%`

const objectKeystoString = obj =>
  Object.keys(obj)
    .filter(key => key !== 'xs')
    .map(key => `@media (min-width: ${screens[key]}) {${evalWidth(obj[key])}}`)
    .join(' ')

const makeWidths = number =>
  number instanceof Object
    ? `${evalWidth(number.xs)}; ${objectKeystoString(number)}`
    : evalWidth(number)

/* Button */
const Button = styled('button')`
  ${tw([
    'bg-orange',
    'border-none',
    'cursor-pointer',
    'font-bold',
    'h-q48',
    'outline-none',
    'p-0',
    'text-sm',
    'tracking-button',
    'uppercase',
    'w-full',
  ])};
  box-shadow: -3px 3px 0px rgba(0, 0, 0, 0.3);
  &:active {
    transform: translate(-2px, 2px);
    box-shadow: -1px 1px 0px rgba(0, 0, 0, 0.3);
  }
`

/* Col */
const Col = styled('div')`
  ${tw(['px-q8', 'md:px-q16'])};
  ${({ number }) => (number ? makeWidths(number) : tw(['w-auto']))};
`

Col.propTypes = {
  number: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      xs: PropTypes.number.isRequired,
      sm: PropTypes.number,
      md: PropTypes.number,
      lg: PropTypes.number,
      xl: PropTypes.number,
    }),
  ]),
}

Col.defaultProps = {
  number: 1,
}

/* Container */
const Container = styled('div')`
  ${tw(['mx-auto', 'max-w-container', 'px-q16', 'w-full'])};
  box-sizing: border-box;
`

/* Heading */
const H1 = styled('h1')`
  ${tw(['font-normal', 'mb-0', 'mt-q72', 'text-4xl', 'text-center'])};
`

const H2 = styled('h2')`
  ${tw(['font-normal', 'mb-0', 'mt-q48', 'text-2xl', 'text-center'])};
`

/* Row */
const Row = styled('div')`
  ${tw(['flex', 'flex-row', '-mx-q8', 'md:-mx-q16'])};
`

/* SquareButton */
const SquareButton = styled('button')`
  ${tw([
    'bg-center',
    'bg-no-repeat',
    'bg-white',
    'border-none',
    'cursor-pointer',
    'flex-no-shrink',
    'h-q36',
    'sm:h-q48',
    'outline-none',
    'p-0',
    'text-base',
    'uppercase',
    'w-q36',
    'sm:w-q48',
  ])};
`

/* Utils */
const HiddenToLG = css`
  ${tw(['hidden', 'lg:block'])};
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

const JustifyCenter = css`
  ${tw(['flex', 'flex-no-shrink', 'flex-row', 'justify-center'])};
`

const JustifyEnd = css`
  ${tw(['flex', 'flex-row', 'justify-end'])};
`

const MarginLeftTwoCol = css`
  ${tw(['ml-1/6', 'sm:ml-auto'])};
`

const MenuIcon = css`
  background-image: url(${MenuSvg});
`

const ShowToMD = css`
  ${tw(['block', 'md:hidden'])};
`

const TelIcon = css`
  background-image: url(${TelSvg});
`

export {
  Button,
  Col,
  Container,
  H1,
  H2,
  HiddenToMD,
  HiddenToLG,
  HiddenToSM,
  HiddenToXL,
  JustifyCenter,
  JustifyEnd,
  MarginLeftTwoCol,
  MenuIcon,
  Row,
  SquareButton,
  ShowToMD,
  TelIcon,
}
