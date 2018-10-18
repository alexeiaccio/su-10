/* global document */
import { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

class Portal extends Component {
  constructor(props) {
    super(props)
    this.el = null
    this.modalRoot = null
  }

  componentDidMount() {
    if (typeof document !== 'undefined') {
      this.el = document.createElement('div')
      this.modalRoot = document.getElementById('modal-root')
      this.modalRoot.appendChild(this.el)
    }
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el)
  }

  render() {
    const { children } = this.props
    return this.el ? ReactDOM.createPortal(children, this.el) : false
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Portal
