/* global tw */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import posed from 'react-pose'

const AnimatedSending = posed.div({
  enter: {
    opacity: 1,
    delay: 300,
  },
  exit: {
    opacity: 0,
    transition: { duration: 200 },
  },
})

const Message = styled('div')`
  ${tw(['fixed', 'flex', 'flex-col', 'items-center', 'justify-center', 'pin'])};
  z-index: 80;
`

const Shade = styled('div')`
  ${tw(['fixed', 'pin'])};
  z-index: 70;
  background-color: rgba(0, 0, 0, 0.6);
`

const Container = styled('div')`
  ${tw([
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

const animatingStyles = css`
  ${tw(['fixed', 'pin'])} z-index: 60;
`

const Sending = ({ sending }) => (
  <AnimatedSending
    className={animatingStyles}
    pose={sending ? 'enter' : 'exit'}
  >
    <Shade />
    <Message>
      <Container>Отправляется... Подождите...</Container>
    </Message>
  </AnimatedSending>
)

Sending.propTypes = {
  sending: PropTypes.bool.isRequired,
}

export default Sending
