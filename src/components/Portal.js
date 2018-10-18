/* global document */
import { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

class Portal extends Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount() {
    const modalRoot = document.getElementById('modal-root')
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    const modalRoot = document.getElementById('modal-root')
    modalRoot.removeChild(this.el)
  }

  render() {
    const { children } = this.props
    return ReactDOM.createPortal(children, this.el)
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Portal
