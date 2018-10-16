/* global tw */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'

import Img from './Img'
import HTMLContent from './Content'
import { Button } from './Styles'

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
  box-shadow: 0 0 26px rgba(0, 0, 0, 0.12);
`

const Content = styled('div')`
  ${tw([
    'flex',
    'flex-col',
    'items-center',
    'pb-q36',
    'px-q48',
    'relative',
    'z-10',
  ])};
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

const Wrapper = styled('div')`
  ${tw(['overflow-hidden', 'relative', 'rounded-t-sm'])};
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

const ImgStyles = css`
  ${tw(['pin'])};
`

const PropductCard = ({
  product: { producttitle, productcaption, productprice, productimage },
}) => (
  <Card>
    <Wrapper>
      <Img
        src={productimage}
        className={ImgStyles}
        style={{ position: 'absolute' }}
      />
      <Content>
        <H3>{producttitle.text}</H3>
        <Description>
          <HTMLContent content={productcaption.html} />
        </Description>
      </Content>
    </Wrapper>
    <Content>
      <RoundIcon />
      <Price>{`от ${productprice} руб./м3`}</Price>
      <Button>заказать</Button>
    </Content>
  </Card>
)

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
      localFile: PropTypes.oneOfType([
        PropTypes.shape({
          childImageSharp: PropTypes.shape({
            fluid: PropTypes.shape({
              src: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }),
        PropTypes.shape({
          absolutePath: PropTypes.string.isRequired,
        }),
      ]).isRequired,
    }).isRequired,
  }).isRequired,
}

export default PropductCard
