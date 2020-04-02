import React from 'react'

import './index.css'

export default class LeftText extends React.Component {
  render() {
    return (
      <div className="col-12 col-md-2 col-lg-2">
        <div className="small-copy mb-0.5 mt-0 mt-md-0.25">
          {this.props.children}
        </div>
      </div>
    )
  }
}
