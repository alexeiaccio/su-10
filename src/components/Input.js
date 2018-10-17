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
    'border-black',
    'border-solid',
    'flex-1',
    'mb-q24',
    'p-q12',
    'text-base',
  ])};
  &:invalid {
    ${tw(['border-red'])};
  }
`

const Label = styled('label')`
  ${tw(['text-base'])};
`

const Star = styled('span')`
  ${tw(['text-red'])};
`

const Input = ({ label, name, required, type }) => (
  <Group>
    <Label htmlFor={name}>
      {label}
      {required && <Star> *</Star>}
    </Label>
    <StyledInput id={name} type={type} required={required} />
  </Group>
)

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['text', 'tel', 'email']).isRequired,
}

export default Input
