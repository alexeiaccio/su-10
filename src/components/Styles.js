/* global tw */
import PropTypes from 'prop-types'
import styled from 'react-emotion'

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
    'outline-none',
    'py-q12',
    'md:py-q16',
    'rounded-full',
    'text-base',
    'uppercase',
    'w-full',
  ])};
`

/* Col */
const Col = styled('div')`
  ${tw(['px-q16'])};
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

/* Row */
const Row = styled('div')`
  ${tw(['flex', 'flex-row', '-mx-q16'])};
`

export { Button, Col, Container, Row }
