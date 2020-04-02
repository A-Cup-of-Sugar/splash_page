import React from 'react'
import ReactDOM from 'react-dom'
import Container from './Container'
import './index.css'
import Header from './Header'
import Row from './Row'
import LeftText from './LeftText'
import CenterText from './CenterText'
ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Header />

      <Row>
        <LeftText>What is it?</LeftText>
        <CenterText>
          <h1>Hi, Do You Have A Cup of Sugar? </h1>{' '}
          <h2> Connect with your neighborhood and help those in need.</h2>
        </CenterText>
      </Row>
      <Row>
        <LeftText>What is it?</LeftText>
        <CenterText>
          <h1>Your Neighborhood Mutual Aid Network </h1>{' '}
          <h2>
            {' '}
            A free community platform for sharing services and resources so that
            no one is left stranded during the Coronavirus outbreak.
          </h2>
        </CenterText>
      </Row>
      <Row>
        <LeftText>How does it work?</LeftText>
      </Row>
      <Row>
        <LeftText>What is it?</LeftText>
        <CenterText>
          <h2>
            {' '}
            We’re working hard to release by end of April. Want us to let you
            know when it’s ready?
          </h2>
        </CenterText>
      </Row>
      <Row></Row>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
)
