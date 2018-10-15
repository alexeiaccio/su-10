/* global tw */
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'react-emotion'

import TableRow from './TableRow'

const StyledTable = styled('table')`
  ${tw(['border-collapse', 'my-q36', 'table-auto', 'text-sm', 'w-full'])};
`

const TableWrapper = styled('div')`
  ${tw(['overflow-x-auto', 'w-full'])};
`

const Thead = styled('thead')`
  ${tw(['font-bold'])};
  & td {
    ${tw(['bg-grey-lightest'])};
  }
`

const Table = ({ values }) => (
  <TableWrapper>
    <StyledTable>
      <Thead>
        {values && <TableRow values={values.slice(0, 1)} isThead />}
      </Thead>
      <tbody>{values && <TableRow values={values.slice(1)} />}</tbody>
    </StyledTable>
  </TableWrapper>
)

Table.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
}

export default Table
