/* global tw */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

const Group = styled('div')`
  ${tw(['flex', 'flex-col'])};
`

const StyledInput = styled('textarea')`
  ${tw([
    'border',
    'border-grey',
    'border-solid',
    'flex-1',
    'font-medium',
    'font-montserrat',
    'mb-q24',
    'p-q12',
    'text-base',
    'rounded-sm',
  ])};
  box-shadow: inset -2px 2px 2px rgba(0, 0, 0, 0.1);
  &:invalid {
    ${tw(['border-red'])};
  }
`

const Label = styled('label')`
  ${tw(['mb-q12', 'text-base'])};
`

const TextArea = ({ changeHandler, label, name, value }) => (
  <Group>
    <Label htmlFor={name}>{label}</Label>
    <StyledInput
      id={name}
      name={name}
      value={value}
      onChange={changeHandler}
      rows="6"
    />
  </Group>
)

TextArea.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
}

TextArea.defaultProps = {
  value: '',
}

export default TextArea
