import React, { Component } from 'react'
import PropTypes from 'prop-types'

import getValues from '../api'
import Table from './Table'
import { H2 } from './Styles'

const trimLocationPath = location => location.pathname.replace(/\//g, '')

class PriceList extends Component {
  constructor() {
    super()
    this.state = {
      values: [],
    }
  }

  async componentDidMount() {
    const { location } = this.props
    const values = await getValues(trimLocationPath(location))

    this.setState({ values })
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
