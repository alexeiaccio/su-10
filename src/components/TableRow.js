/* global tw */
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import s4 from 'node-uuid'
import styled, { css } from 'react-emotion'

import Form from './Form'
import Modal from './Modal'

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

const formStyles = css`
  ${tw(['text-black'])};
`

class TableRow extends Component {
  constructor() {
    super()
    this.toggleModal = this.toggleModal.bind(this)
    this.state = {
      modal: false,
      value: '',
    }
  }

  toggleModal(value) {
    const { modal } = this.state
    const valueString = typeof value === 'string' ? value : ''

    this.setState({
      modal: !modal,
      value: valueString,
    })
  }

  render() {
    const { isThead, values } = this.props
    const { modal, value } = this.state
    return (
      <>
        {values.map((row, i) => (
          <Tr key={s4()}>
            {row.map((cell, j) => (
              <Td key={s4()} isOdd={i % 2 === 0}>
                {cell}
                {!isThead &&
                  j === row.length - 1 && (
                    <OrderButton onClick={() => this.toggleModal(row[0])}>
                      Заказать
                    </OrderButton>
                  )}
              </Td>
            ))}
          </Tr>
        ))}
        <Modal modal={modal} toggleModal={this.toggleModal}>
          <Form
            className={formStyles}
            name="table-form"
            textarea
            value={value}
          />
        </Modal>
      </>
    )
  }
}

TableRow.propTypes = {
  isThead: PropTypes.bool,
  values: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
}

TableRow.defaultProps = {
  isThead: false,
}

export default TableRow
