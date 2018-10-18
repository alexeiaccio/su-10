/* global tw */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'react-emotion'

import Img from './Img'
import HTMLContent from './Content'
import { Button } from './Styles'
import Form from './Form'
import Modal from './Modal'

import eco from '../assets/eco.svg'
import woodBoardBlack from '../assets/wood-board-black.svg'

const Card = styled('div')`
  ${tw([
    'bg-white',
    'flex',
    'flex-col',
    'justify-between',
    'h-full',
    'rounded-sm',
  ])};
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.12);
  transition: all 0.4s ease-in-out;
  &:hover {
    box-shadow: 0 0 48px rgba(0, 0, 0, 0.36);
  }
`

const Content = styled('div')`
  ${tw(['flex', 'flex-col', 'items-center', 'pb-q36', 'relative', 'z-10'])};
`

const Description = styled('div')`
  ${tw(['leading-normal', 'my-q36', 'text-white', 'text-xs', 'text-center'])};
  & p {
    ${tw(['m-0', 'p-0'])};
  }
`

const H3 = styled('h3')`
  ${tw(['pt-q48', 'm-0', 'text-white', 'text-center'])};
`

const Price = styled('div')`
  ${tw(['font-bold', 'py-q36', 'text-sm', 'uppercase'])};
`

const RoundIcon = styled('div')`
  ${tw([
    'bg-orange',
    'bg-center',
    'bg-no-repeat',
    'border-solid',
    'border-white',
    'border-8',
    'h-q112',
    'w-q112',
    'rounded-full',
    '-mt-8',
  ])};
  background-image: url(${woodBoardBlack});
  background-size: 4rem;
`

const Wrapper = styled(Link)`
  ${tw([
    'overflow-hidden',
    'flex-1',
    'no-underline',
    'relative',
    'rounded-t-sm',
  ])};
  &::before {
    ${tw(['absolute', 'bg-black', 'opacity-60', 'pin', 'z-10'])};
    content: '';
  }
  &::after {
    ${tw([
      'absolute',
      'bg-green',
      'bg-no-repeat',
      'font-medium',
      'pin-t',
      'pin-l',
      'py-q2',
      'pr-q4',
      'pl-q24',
      'rounded-sm',
      'text-black',
      'text-xs',
      'uppercase',
      'z-20',
    ])};
    content: '100% eco';
    background-image: url(${eco});
    background-position: 0.25rem 50%;
    background-size: 12px;
  }
`

const contentStyles = css`
  ${tw(['px-q36'])};
`

const ImgStyles = css`
  ${tw(['pin'])};
`

const ButtonContainer = styled('div')`
  ${tw(['px-q36', 'w-full'])};
  box-sizing: border-box;
`

const linkStyles = css`
  ${tw([
    'flex',
    'flex-col',
    'items-center',
    'no-underline',
    'text-black',
    'w-full',
  ])};
`

const formStyles = css`
  ${tw(['text-black'])};
`

class PropductCard extends Component {
  constructor() {
    super()
    this.toggleModal = this.toggleModal.bind(this)
    this.state = {
      modal: false,
    }
  }

  toggleModal() {
    const { modal } = this.state
    this.setState({
      modal: !modal,
    })
  }

  render() {
    const {
      product: {
        productlink,
        producttitle,
        productcaption,
        productprice,
        productimage,
      },
    } = this.props
    const { modal } = this.state

    return (
      <Card>
        <Wrapper to={productlink.uid}>
          <Img
            src={productimage}
            className={ImgStyles}
            style={{ position: 'absolute' }}
          />
          <Content className={contentStyles}>
            <H3>{producttitle.text}</H3>
            <Description>
              <HTMLContent content={productcaption.html} />
            </Description>
          </Content>
        </Wrapper>
        <Content>
          <Link className={linkStyles} to={productlink.uid}>
            <RoundIcon />
            <Price>{`от ${productprice} руб./м3`}</Price>
          </Link>
          <ButtonContainer>
            <Button onClick={this.toggleModal}>заказать</Button>
          </ButtonContainer>
        </Content>
        <Modal modal={modal} toggleModal={this.toggleModal}>
          <Form
            className={formStyles}
            name="header-form"
            textarea
            value={producttitle.text}
          />
        </Modal>
      </Card>
    )
  }
}

PropductCard.propTypes = {
  product: PropTypes.shape({
    producttitle: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }).isRequired,
    productcaption: PropTypes.shape({
      html: PropTypes.string.isRequired,
    }).isRequired,
    productprice: PropTypes.string.isRequired,
    productlink: PropTypes.shape({
      uid: PropTypes.string.isRequired,
    }).isRequired,
    productimage: PropTypes.shape({
      url: PropTypes.string,
      localFile: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.shape({
            src: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }),
    }).isRequired,
  }).isRequired,
}

export default PropductCard
