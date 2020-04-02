import React from 'react'
import styled from '@emotion/styled'
import Container from './Container'
import './index.css'

export default class Header extends React.Component {
  render() {
    return (
      <div style={{ padding: '1rem 0' }}>
        <div className="nav-row row d-flex justify-content-between align-items-center">
          <div className="col-2">Logo</div>
          <div className="col">
            <h4>Cup of Sugar</h4>
          </div>
          <div className="col-auto">
            <a className="fade">✉️Email me when it's ready!</a>
          </div>
        </div>
      </div>
    )
  }
}
