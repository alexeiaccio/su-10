/* global tw */
import React from 'react'
import styled, { css } from 'react-emotion'

import Input from './Input'
import { Button, Col, Row } from './Styles'

const StyledForm = styled('form')`
  ${tw(['mb-q60', 'mt-q36'])};
`

const rowStyles = css`
  ${tw(['flex-wrap'])};
`

const buttonStyles = css`
  ${tw(['mt-q24'])};
`

const Form = props => (
  <StyledForm {...props}>
    <p hidden>
      <label htmlFor="bot-field">
        Don’t fill this out: <input id="bot-field" name="bot-field" />
      </label>
    </p>
    <Row className={rowStyles}>
      <Col order={{ xs: 1, sm: 1 }} number={{ xs: 12, sm: 6 }}>
        <Input label="Ваше имя" name="name" required type="text" />
      </Col>
      <Col order={{ xs: 2, sm: 2 }} number={{ xs: 12, sm: 6 }}>
        <Input label="Телефон" name="tel" required type="tel" />
      </Col>
      <Col order={{ xs: 4, sm: 3 }} number={{ xs: 12, sm: 6 }}>
        <Input
          label="Что вы хотите заказать?"
          name="order"
          required={false}
          type="text"
        />
      </Col>
      <Col order={{ xs: 3, sm: 4 }} number={{ xs: 12, sm: 6 }}>
        <Input
          label="Электронная почта"
          name="email"
          required={false}
          type="email"
        />
      </Col>
    </Row>
    <Button className={buttonStyles} type="submit">
      оставить заявку
    </Button>
  </StyledForm>
)

export default Form
