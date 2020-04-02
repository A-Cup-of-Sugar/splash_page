import React from 'react'
import styled from '@emotion/styled'

const ContainerClass = styled.div`
  max-width: 1080px;
  width: 90.9090909091%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 720px) {
    width: 93.3333333333%;
  }
`

export default class Container extends React.Component {
  render() {
    return <ContainerClass>{this.props.children}</ContainerClass>
  }
}
