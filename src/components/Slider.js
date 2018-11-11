/* global tw */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import posed from 'react-pose'

import Img from './Img'
import { Container, FluidContainer } from './Styles'

const prevNextStyle = css`
  ${tw(['absolute', 'cursor-pointer', 'opacity-60', 'pin-b'])};
  height: 90%;
  width: 90%;
`

const Buttons = styled('div')`
  ${tw(['absolute', 'flex', 'flex-row', 'pin-r', 'pin-b'])};
`

const Button = styled('button')`
  ${tw([
    'bg-orange',
    'border-none',
    'cursor-pointer',
    'font-bold',
    'h-q24',
    'md:h-q40',
    'm-0',
    'outline-none',
    'p-0',
    'text-lg',
    'w-q36',
    'md:w-q60',
  ])};
`

const Hovers = styled('div')`
  ${tw(['relative'])};
`

const NextHover = styled('div')`
  ${tw([
    'absolute',
    'cursor-pointer',
    'hidden',
    'md:block',
    'opacity-0',
    'pin',
  ])};
`

const Prev = styled('div')`
  ${prevNextStyle};
  ${tw(['pin-l'])};
  transform: translateX(calc(-100% - 0.75rem));
`

const Next = styled('div')`
  ${prevNextStyle};
  ${tw(['pin-r'])};
  transform: translateX(calc(100% + 0.75rem));
`

const Draggable = posed.div({
  draggable: 'x',
  dragBounds: { left: '-100%', right: '100%' },
})

class Slider extends Component {
  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
    this.dragHandler = this.dragHandler.bind(this)
    this.dragStartHandler = this.dragStartHandler.bind(this)
    this.state = {
      current: 0,
      clientX: 0,
    }
  }

  handler(type) {
    const { items } = this.props
    const { current } = this.state
    let value
    if (type === 'next') {
      value = current + 1 < items.length ? current + 1 : 0
    } else {
      value = current - 1 >= 0 ? current - 1 : items.length - 1
    }
    this.setState({
      current: value,
    })
  }

  dragStartHandler(e) {
    this.setState({
      clientX: e.changedTouches ? e.changedTouches[0].clientX : e.clientX,
    })
  }

  dragHandler(e) {
    const { clientX } = this.state
    const newClientX = e.changedTouches
      ? e.changedTouches[0].clientX
      : e.clientX
    if (clientX - newClientX > 50) {
      this.handler('next')
    }
    if (newClientX - clientX > 50) {
      this.handler('prev')
    }
  }

  render() {
    const { items } = this.props
    const { current } = this.state
    const currentSlide = items[current]
    const prevSlide =
      current - 1 >= 0 ? items[current - 1] : items[items.length - 1]
    const nextSlide = current + 1 < items.length ? items[current + 1] : items[0]

    return (
      <FluidContainer>
        <Draggable
          onDragStart={this.dragStartHandler}
          onDragEnd={this.dragHandler}
        >
          <Container>
            <Prev onClick={() => this.handler('prev')}>
              <Img src={prevSlide.galleryimage} />
            </Prev>
            <Hovers>
              <Img src={currentSlide.galleryimage} />
              <NextHover onClick={() => this.handler('next')} />
              <Buttons>
                <Button onClick={() => this.handler('prev')}>←</Button>
                <Button onClick={() => this.handler('next')}>→</Button>
              </Buttons>
            </Hovers>
            <Next onClick={() => this.handler('next')}>
              <Img src={nextSlide.galleryimage} />
            </Next>
          </Container>
        </Draggable>
      </FluidContainer>
    )
  }
}

Slider.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      galleryimage: PropTypes.shape({
        url: PropTypes.string,
        localFile: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            fluid: PropTypes.shape({
              src: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }),
      }),
    }).isRequired
  ).isRequired,
}

export default Slider
