import React from 'react'
import { Form, Input, Label, Message } from 'semantic-ui-react'
import './greeting.css'
export default class Greeting extends React.Component {
  state = {
    firstName: '',
    hidden: true,
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    const target = event.target
    const hidden = target.hidden
    event.preventDefault()
    this.setState({
      hidden: false,
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label pointing="right">
          Hey! What's your name?
          <div class="input-underline">
            <Input
              transparent
              fluid
              placeholder="First Name"
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              onSubmit={this.handleSubmit}
            />{' '}
          </div>
        </Label>

        <Message size="mini" compact hidden={this.state.hidden}>
          <p>
            <strong> Hey {this.state.firstName}, welcome to my site. </strong>
            <br />
            Take a look around and drop me a message in the bottom right if
            you'd <br /> like to chat or have questions!
          </p>
        </Message>
      </Form>
    )
  }
}
