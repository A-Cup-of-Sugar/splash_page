import React from 'react'
import { Button, input, Grid, Form, Divider } from 'semantic-ui-react'
import Greeting from '../components/greeting'
import ProjectGrid from '../components/gridBlocks/projectGrid'
import ThoughtGrid from '../components/gridBlocks/thoughtGrid'
import ExperimentGrid from '../components/gridBlocks/experimentGrid'
import OtherGrid from '../components/gridBlocks/otherGrid'
const IndexPage = () => (
  <>
    <Grid>
      <Grid.Column mobile={0} tablet={3} computer={3} />
      <Grid.Column mobile={12} tablet={9} computer={9}>
        <div class="box">
          <h1 class="header-1">Design with Intent.</h1>
        </div>
      </Grid.Column>
    </Grid>

    <Grid>
      <Grid.Column mobile={12} tablet={3} computer={3}>
        <Greeting />
        <p class="left-block">
          Currently looking for a full-time summer internship.
          <br /> <br />
          Not able to accept long-term freelance projects at the moment.
        </p>
      </Grid.Column>

      <Grid.Column mobile={12} tablet={3} computer={3}>
        <p>
          Hey! My name is Garrett Vercoe and I use data science and design to
          solve problems in the community. 🇺🇸
        </p>
        <p>
          Currently a third year at the University of Virginia pursuing a double
          major. ⚡️{' '}
          <a
            class="bodyLink"
            href="https://www.dropbox.com/s/q27z4mc6pl0of8t/VercoeGarrett.pdf?dl=0"
          >
            View my resume
          </a>
        </p>
        <p>
          I currently am Head of Design at a Charlottesville creative agency,
          <a class="bodyLink" href="https://thisisradical.com/">
            {' '}
            Radical
          </a>
          , and serve on the board of directors to help oversee our great 20+
          employees. 👨‍💻
        </p>
        {/* <div class="icon chart">
          <i />
          <i />
          <i />
        </div> */}
      </Grid.Column>
      <Grid.Column mobile={12} tablet={3} computer={3}>
        <p>
          In the past, I've been at{' '}
          <a class="bodyLink" href="https://parse.ly/">
            Parsely
          </a>{' '}
          as a Data Scientist intern, and prototyped a{' '}
          <a href="/benchmark" class="bodyLink">
            web application tool{' '}
          </a>
          using petabyte-scale data. 📈
        </p>
        <p>
          I've also created a{' '}
          <a class="bodyLink" href="/fire-risk">
            machine learning tool
          </a>{' '}
          for the fire department which locates buildings at high risk of fire.
          🚒
        </p>
        <p>
          Right now, I'm working with several clients on web-development
          projects — from a restaurant in France 🇫🇷 to a pilates studio site
          redesign.{' '}
        </p>
      </Grid.Column>
      <Grid.Column mobile={12} tablet={3} computer={3}>
        <p>
          For development I'm comfortable with Python, React, D3, CSS, C++,
          Java, x86 assembly, SQL, and GraphQL.
        </p>
        <p>
          For design, I'm proficient in Photoshop, Illustrator, InDesign, XD,
          After Effects, Figma, AutoCAD, Cinema4D, and Rhino.
        </p>
        <p>
          If you've read this far, let's connect. Say hi on{' '}
          <a
            class="bodyLink"
            href="https://www.linkedin.com/in/garrett-vercoe/"
          >
            LinkedIn
          </a>
          , {' '}
          <a class="bodyLink" href="https://www.instagram.com/garrettvercoe/">
            Instagram
          </a>
          , or send a message to 
          <a
            class="bodyLink"
            href="mailto:hello@garrettvercoe.com?Subject=Hello!"
          >
            hello@garrettvercoe.com
          </a>
          .💯
        </p>
      </Grid.Column>

      <Divider section hidden />
      <ProjectGrid />
      <Divider section hidden />
      <ExperimentGrid />
      <Divider section hidden />
      <ThoughtGrid />
      <Divider section hidden />
      <OtherGrid />
      <Divider section hidden />
    </Grid>
  </>
)

export default IndexPage
