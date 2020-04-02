import React from 'react'
import { Grid } from 'semantic-ui-react'
import Open2close from '../../assets/open2close.svg'
import tmt from '../../assets/tmt.svg'
import logo from '../../assets/logo.svg'
import Link from 'gatsby-link'
const Other = () => {
  return (
    <Grid>
      <Grid.Column mobile={0} tablet={3} computer={3} />
      <Grid.Column mobile={12} tablet={9} computer={9}>
        <h3 class="header">Odds & Ends.</h3>
      </Grid.Column>

      <Grid.Column mobile={12} tablet={3} computer={3}>
        <p class="left-label">feedback</p>
        <p class="left-info">
          Have feedback for my projects, or my site? Please leave a message{' '}
          <Link to="/inquiry" class="bodyLink">
            here{' '}
          </Link>{' '}
        </p>
      </Grid.Column>

      <Grid.Column mobile={12} tablet={3} computer={3}>
        <h4>Client Work.</h4>
        <div class="client">
          <a href="https://www.open2close.com" class="client" target="_blank">
            <Grid>
              <Grid.Column mobile={4} tablet={4} computer={3}>
                <img
                  src={Open2close}
                  alt="Garrett Vercoe"
                  style={{ width: '60px' }}
                />
              </Grid.Column>

              <Grid.Column mobile={8} tablet={8} computer={9}>
                <p class="client-title">
                  <span>Open2Close</span>
                </p>

                <p class="client-description"> Restaurant Website</p>
              </Grid.Column>
            </Grid>
          </a>
        </div>
        <div class="client">
          <a href="http://trevormooreteam.com/" class="client" target="_blank">
            <Grid>
              <Grid.Column mobile={4} tablet={4} computer={3}>
                <img src={tmt} alt="Garrett Vercoe" style={{ width: '60px' }} />
              </Grid.Column>

              <Grid.Column mobile={8} tablet={8} computer={9}>
                <p class="client-title">
                  <span>Trevor Moore Team</span>
                </p>

                <p class="client-description">Real Estate Website</p>
              </Grid.Column>
            </Grid>
          </a>
        </div>
      </Grid.Column>
      <Grid.Column mobile={12} tablet={3} computer={3}>
        <h4>Publishings.</h4>
        <div class="client">
          <a
            href="https://www.dropbox.com/s/1wsmmrtnpqcsfkt/Vercoe_An-Effective-Model-of-Service-Oriented-Architecture.pdf?dl=0"
            target="_blank"
          >
            <p class="publish-title">
              <span>Service-oriented Architecture.</span>
            </p>
            <p>The Rise of a WeWork Model.</p>
          </a>
        </div>
        <div class="client">
          <a
            href="https://www.dropbox.com/s/8qgqd6u0intopc9/Amori%20Concept%20Proposal%20%281%29.pdf?dl=0"
            target="_blank"
          >
            <p class="publish-title">
              <span>Amori Venture Proposal</span>
            </p>
            <p>A Sustainable Model for Water Filtration in India.</p>
          </a>
        </div>
      </Grid.Column>
      <Grid.Column mobile={12} tablet={3} computer={3}>
        <h4>Links.</h4>

        <div class="client">
          <div class="link-fix">
            <a
              href="https://www.dropbox.com/s/q27z4mc6pl0of8t/VercoeGarrett.pdf?dl=0"
              class="bodyLink"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
        <div class="client">
          <a
            href="https://github.com/garrettvercoe"
            class="bodyLink"
            target="_blank"
          >
            Github
          </a>
        </div>
        <div class="client">
          <a
            href="https://www.linkedin.com/in/garrett-vercoe/"
            class="bodyLink"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div class="client">
          <a
            href="https://www.instagram.com/garrettvercoe/"
            class="bodyLink"
            target="_blank"
          >
            Instagram
          </a>
        </div>
      </Grid.Column>
    </Grid>
  )
}

export default Other
