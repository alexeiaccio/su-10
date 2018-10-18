/* global tw */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import posed, { PoseGroup } from 'react-pose'

import Portal from './Portal'
import { CloseIcon, SquareButton } from './Styles'

const AnimatedModal = posed.div({
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

const ShadeButton = styled('button')`
  ${tw([
    'fixed',
    'bg-transparent',
    'border-none',
    'cursor-pointer',
    'p-0',
    'pin',
    'w-full',
  ])};
`

const CloseWrapper = styled('div')`
  ${tw(['absolute', 'm-q12', 'pin-t', 'pin-r'])};
`

const Container = styled('div')`
  ${tw([
    'bg-white',
    'flex',
    'flex-col',
    'items-center',
    'overflow-y-auto',
    'pt-q36',
    'px-q24',
    'relative',
    'w-full',
  ])};
  max-width: 50rem;
  box-sizing: border-box;
`

const Content = styled('div')`
  max-width: 40rem;
`

const Text = styled('div')`
  ${tw(['text-center'])};
  & h3 {
    ${tw(['font-bold', 'mb-q24', 'text-xl', 'uppercase'])};
  }
  & p {
    ${tw(['font-normal', 'mb-q12', 'text-base'])};
  }
`

const modalStyles = css`
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

const Modal = ({ modal, toggleModal, children }) => (
  <Portal>
    <PoseGroup>
      {modal && [
        <Shade className={shadeStyles} key="shade" />,
        <AnimatedModal key="modal" className={modalStyles}>
          <ShadeButton type="button" onClick={toggleModal} />
          <Container>
            <CloseWrapper>
              <SquareButton className={CloseIcon} onClick={toggleModal} />
            </CloseWrapper>
            <Content>
              <>
                <Text>
                  <h3>заявка</h3>
                  <p>
                    Заполните форму ниже, и мы свяжемся с вами в ближайшее
                    время, для обсуждения деталей.
                  </p>
                </Text>
                {children}
              </>
            </Content>
          </Container>
        </AnimatedModal>,
      ]}
    </PoseGroup>
  </Portal>
)

Modal.propTypes = {
  modal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Modal
