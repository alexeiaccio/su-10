/* global tw */
import React, { Component } from 'react'

import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'

import Input from './Input'
import TextArea from './TextArea'
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

class Form extends Component {
  constructor() {
    super()
    this.changeHandler = this.changeHandler.bind(this)
    this.state = {
      values: {},
    }
  }

  changeHandler(e) {
    const { name, value } = e.target
    const { values } = this.state

    this.setState({
      values: { ...values, [name]: value },
    })
  }

  render() {
    const { value, textarea, ...props } = this.props
    const { values } = this.state

    return (
      <StyledForm
        {...props}
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <p hidden>
          <label htmlFor="bot-field">
            Don’t fill this out:{' '}
            <input id="bot-field" name="form-name" value="contact" />
          </label>
        </p>
        <Row className={rowStyles}>
          <Col order={1} number={{ xs: 12, sm: 6 }}>
            <Input
              changeHandler={this.changeHandler}
              label="Ваше имя"
              name="name"
              required
              type="text"
              value={values.name || ''}
            />
          </Col>
          <Col order={2} number={{ xs: 12, sm: 6 }}>
            <Input
              changeHandler={this.changeHandler}
              label="Телефон"
              name="tel"
              required
              type="tel"
              value={values.tel || ''}
            />
          </Col>
          <Col order={{ xs: 4, sm: 3 }} number={{ xs: 12, sm: 6 }}>
            <Input
              changeHandler={this.changeHandler}
              label="Что вы хотите заказать?"
              name="order"
              required={false}
              type="text"
              value={values.order || value}
            />
          </Col>
          <Col order={{ xs: 3, sm: 4 }} number={{ xs: 12, sm: 6 }}>
            <Input
              changeHandler={this.changeHandler}
              label="Электронная почта"
              name="email"
              required={false}
              type="email"
              value={values.email || ''}
            />
          </Col>
          {textarea && (
            <Col order={5} number={12}>
              <TextArea
                changeHandler={this.changeHandler}
                label="Коментарий к заказу"
                name="comment"
                required={false}
                value={values.comment || ''}
              />
            </Col>
          )}
        </Row>
        <Button className={buttonStyles} type="submit">
          оставить заявку
        </Button>
      </StyledForm>
    )
  }
}

Form.propTypes = {
  value: PropTypes.string,
  textarea: PropTypes.bool,
}

Form.defaultProps = {
  value: '',
  textarea: false,
}

export default Form
