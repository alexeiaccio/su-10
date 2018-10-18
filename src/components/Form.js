/* global tw */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'

import { sendMail } from '../api'
import Input from './Input'
import Sending from './Sending'
import Success from './Success'
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
    this.submit = this.submit.bind(this)
    this.closeSucces = this.closeSucces.bind(this)
    this.state = {
      values: {},
      sending: false,
      success: true,
      message: '',
    }
  }

  componentDidMount() {
    const { values } = this.state
    const { value } = this.props
    this.setState({
      values: { ...values, order: value },
    })
  }

  changeHandler(e) {
    const { name, value } = e.target
    const { values } = this.state

    this.setState({
      values: { ...values, [name]: value },
    })
  }

  async submit(e) {
    e.preventDefault()
    this.setState({
      sending: true,
    })
    const { values } = this.state
    const { name } = this.props
    const response = await sendMail({ ...values, form: name })
    this.setState({
      sending: false,
      success: true,
      message: response.res[1],
      values: {},
    })
    setTimeout(() => {
      this.setState({
        success: false,
        message: '',
      })
    }, 4000)
  }

  closeSucces() {
    this.setState({
      success: false,
      message: '',
    })
  }

  render() {
    const { value, textarea, ...props } = this.props
    const { values, sending, success, message } = this.state

    return (
      <StyledForm {...props} onSubmit={this.submit}>
        <p hidden>
          <label htmlFor="bot-field">
            Don’t fill this out: <input id="bot-field" name="bot-field" />
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
        {sending && <Sending sending={sending} />}
        {success && <Success message={message} close={this.closeSucces} />}
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
