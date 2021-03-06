/* global tw */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

const Group = styled('div')`
  ${tw(['flex', 'flex-col'])};
`

const StyledInput = styled('input')`
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

const Star = styled('span')`
  ${tw(['text-red'])};
`

const Input = ({ changeHandler, label, name, required, type, value }) => (
  <Group>
    <Label htmlFor={name}>
      {label}
      {required && <Star> *</Star>}
    </Label>
    <StyledInput
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={changeHandler}
      required={required}
    />
  </Group>
)

Input.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['text', 'tel', 'email']).isRequired,
}

Input.defaultProps = {
  value: '',
}

export default Input
