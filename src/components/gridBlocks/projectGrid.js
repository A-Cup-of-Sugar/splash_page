import React from 'react'
import Link from 'gatsby-link'
import { StaticQuery, graphql } from 'gatsby'
import { Grid, Divider, Label } from 'semantic-ui-react'
import Img from 'gatsby-image'
import './gridBlocks.css'

export default props => (
  <StaticQuery
    query={graphql`
      query ProjectGridQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { fileAbsolutePath: { regex: "/(projects)/.*.md$/" } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 100)
              id
              frontmatter {
                title
                tags
                subtitle
                date(formatString: "YYYY")
                path

                cover {
                  childImageSharp {
                    fluid(maxWidth: 700) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <ProjectGrid data={data} {...props} />}
  />
)

const ProjectGrid = ({ data }) => {
  const { edges: projects } = data.allMarkdownRemark
  return (
    <Grid>
      <Grid.Column mobile={0} tablet={3} computer={3} />
      <Grid.Column mobile={12} tablet={9} computer={9}>
        <h3 class="header-project">Projects.</h3>
      </Grid.Column>
      <Grid.Column mobile={12} tablet={3} computer={3}>
        <p class="left-label">Services</p>
        <ul class="left-info">
          <li>Data Visualization</li>
          <li> Machine Learning </li>
          <li>Data Analysis + Cleaning</li>
          <li>UX Design</li>
          <li>Web Design + Development</li>
          <li>Graphic + Branding</li>
          <li>Architectural Services</li>
        </ul>
      </Grid.Column>
      <Grid.Column mobile={12} tablet={9} computer={9}>
        <div className="projects">
          <Grid>
            {projects
              .filter(project => project.node.frontmatter.title.length > 0)
              .map(({ node: project }) => {
                return (
                  <Grid.Column mobile={12} tablet={6} computer={4}>
                    <div className="project-preview" key={project.id}>
                      <div class="imgBox">
                        <Link to={project.frontmatter.path} class="itemLink">
                          <Img
                            className="underline"
                            fluid={
                              project.frontmatter.cover.childImageSharp.fluid
                            }
                          />
                        </Link>
                      </div>
                      <p class="date">{project.frontmatter.date}</p>
                      {project.frontmatter.tags.map(elem => (
                        <div class="tag">{elem}</div>
                      ))}

                      <h4 class="noPad">
                        {' '}
                        <Link to={project.frontmatter.path} class="itemLink">
                          {project.frontmatter.title}
                        </Link>
                      </h4>
                      <p class="excerpt">{project.frontmatter.subtitle}</p>
                    </div>
                  </Grid.Column>
                )
              })}
          </Grid>
        </div>
      </Grid.Column>
      <Divider hidden />
    </Grid>
  )
}
