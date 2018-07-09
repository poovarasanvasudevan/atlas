import React, {Component} from 'react'
import {Link} from "react-router-dom"

export default class LinkComponent extends Component<*, *> {

  constructor() {
    super()
  }

  render() {
    return (
      <Link className={this.props.className} to={this.props.href}>{this.props.children}</Link>
    )
  }
}
