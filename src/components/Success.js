/* global tw */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import posed, { PoseGroup } from 'react-pose'

const AnimatedMessage = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 200 },
  },
})

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
})

const messageStyles = css`
  ${tw([
    'fixed',
    'flex',
    'flex-col',
    'items-center',
    'justify-center',
    'pin',
    'z-50',
  ])};
`

const shadeStyles = css`
  ${tw(['fixed', 'pin', 'z-50'])};
  background-color: rgba(0, 0, 0, 0.6);
`

const Container = styled('div')`
  ${tw([
    'bg-orange',
    'flex',
    'flex-col',
    'items-center',
    'overflow-y-auto',
    'py-q36',
    'px-q24',
    'relative',
    'text-white',
    'w-full',
  ])};
  max-width: 45rem;
  box-sizing: border-box;
`

const Success = ({ message, close }) => (
  <PoseGroup>
    {message && [
      <Shade className={shadeStyles} key="shade" />,
      <AnimatedMessage key="modal" className={messageStyles} onClick={close}>
        <Container>{message}</Container>
      </AnimatedMessage>,
    ]}
  </PoseGroup>
)

Success.propTypes = {
  message: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
}

export default Success
