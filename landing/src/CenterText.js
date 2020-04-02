import React from 'react'

import './index.css'

export default class CenterText extends React.Component {
  render() {
    return (
      <div className="col-12 col-md-10 col-lg-8">
        <div style={{ marginTop: '0.375rem' }}>{this.props.children}</div>
      </div>
    )
  }
}
