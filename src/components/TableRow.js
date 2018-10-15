/* global tw */
import PropTypes from 'prop-types'
import React from 'react'
import s4 from 'node-uuid'
import styled from 'react-emotion'

const Td = styled('td')`
  ${tw(['p-q12', 'text-center'])};
  ${({ isOdd }) => (isOdd ? tw(['bg-white']) : tw(['bg-grey-lightest']))};
`

const Tr = styled('tr')`
  &:hover > ${Td} {
    ${tw(['bg-grey-lighter'])};
  }
`

const OrderButton = styled('button')`
  ${tw([
    'bg-transparent',
    'border-none',
    'cursor-pointer',
    'ml-q8',
    'p-0',
    'text-orange',
    'underline',
  ])};
`

const TableRow = ({ isThead, values }) =>
  values.map((row, i) => (
    <Tr key={s4()}>
      {row.map((cell, j) => (
        <Td key={s4()} isOdd={i % 2 === 0}>
          {cell}
          {!isThead &&
            j === row.length - 1 && <OrderButton>Заказать</OrderButton>}
        </Td>
      ))}
    </Tr>
  ))

TableRow.propTypes = {
  isThead: PropTypes.bool,
  values: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
}

export default TableRow
