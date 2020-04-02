import React from 'react'
import { Form, Input, Grid } from 'semantic-ui-react'
import Gleft from '../components/GLeft'
import Gright from '../components/GRight'

const Inquiry = () => (
  <>
    <Grid>
      <Gleft />
      <Gright>
        <h3>Inquiries.</h3>
      </Gright>
      <Gleft>
        <p class="left-block">
          My rate starts at $60 an hour for freelance work. <br />
          <br /> I'll respond to all requests within one business day.
        </p>
      </Gleft>
      <Gright>
        <p>
          If you think I'd be a good fit for a project, make sure to leave me
          with some details of the work and the timeframe you're looking to have
          it done by. Otherwise, message away!{' '}
          <span role="img" aria-label="Eyes">
            🌟
          </span>{' '}
        </p>
        <br />
        <Form
          id="contactform"
          action="https://formspree.io/garrettvercoe@gmail.com"
          method="POST"
        >
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="First name"
              name="first"
              placeholder="First name"
            />
            <Form.Input
              fluid
              label="Last name"
              name="last"
              placeholder="Last name"
            />
            <Form.Input
              fluid
              label="Email"
              name="_replyto"
              placeholder="johndoe@gmail.com"
            />
          </Form.Group>
          <Input type="hidden" name="_subject" value="Contact form" />
          <Form.TextArea
            label="Message"
            name="message"
            placeholder="Hey Garrett..."
          />
          <br />
          <Form.Button>Submit</Form.Button>
        </Form>
      </Gright>
    </Grid>
  </>
)

export default Inquiry
