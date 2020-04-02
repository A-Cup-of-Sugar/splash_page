import React from 'react'

import './index.css'

export default class Row extends React.Component {
  render() {
    return (
      <div className="row mb-3">
        <hr style={{ marginBottom: '1.5rem' }} />
        {this.props.children}
      </div>
    )
  }
}
