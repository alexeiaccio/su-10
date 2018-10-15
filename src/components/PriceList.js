/* global fetch */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Table from './Table'
import { H2 } from './Styles'

const SLS_URL =
  'https://3pc83kxpa5.execute-api.us-east-1.amazonaws.com/dev/get?list='

const trimLocationPath = location => location.pathname.replace(/\//g, '')

class PriceList extends Component {
  constructor() {
    super()
    this.state = {
      values: [],
    }
  }

  componentDidMount() {
    const { location } = this.props
    fetch(`${SLS_URL}${trimLocationPath(location)}`)
      .then(res => res.json())
      .then(json => json.values)
      .then(values => {
        this.setState({ values })
      })
  }

  render() {
    const {
      data: { pricetitle },
    } = this.props
    const { values } = this.state

    return (
      <div>
        <H2>{pricetitle.text}</H2>
        {values && <Table values={values} />}
      </div>
    )
  }
}

PriceList.propTypes = {
  data: PropTypes.shape({
    pricetitle: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default PriceList
