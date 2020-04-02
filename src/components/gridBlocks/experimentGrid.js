import React from 'react'
import Link from 'gatsby-link'
import { StaticQuery, graphql } from 'gatsby'
import { Grid, Divider } from 'semantic-ui-react'
import Img from 'gatsby-image'

export default props => (
  <StaticQuery
    query={graphql`
      query experimentGridQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { fileAbsolutePath: { regex: "/(experiments)/.*.md$/" } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 100)
              id
              frontmatter {
                title
                subtitle
                tags
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
    render={data => <ExperimentGrid data={data} {...props} />}
  />
)

const ExperimentGrid = ({ data }) => {
  const { edges: experiments } = data.allMarkdownRemark
  return (
    <Grid>
      <Grid.Column mobile={0} tablet={3} computer={3} />
      <Grid.Column mobile={12} tablet={9} computer={9}>
        <h3 class="header">Experiments.</h3>
      </Grid.Column>
      <Grid.Column mobile={12} tablet={3} computer={3}>
        <p class="left-label">The lab</p>
        <p class="left-info">
          Quick experiments with less time devoted to them, but things I find
          fun + interesting.
        </p>
      </Grid.Column>
      <Grid.Column mobile={12} tablet={9} computer={9}>
        <div className="experiments">
          <Grid>
            {experiments
              .filter(
                experiment => experiment.node.frontmatter.title.length > 0
              )
              .map(({ node: experiment }) => {
                return (
                  <Grid.Column mobile={12} tablet={6} computer={4}>
                    <div className="project-preview" key={experiment.id}>
                      <div class="imgBox">
                        <Link to={experiment.frontmatter.path} class="itemLink">
                          <Img
                            className="underline"
                            fluid={
                              experiment.frontmatter.cover.childImageSharp.fluid
                            }
                          />
                        </Link>
                      </div>
                      <p class="date">{experiment.frontmatter.date}</p>
                      {experiment.frontmatter.tags.map(elem => (
                        <div class="tag">{elem}</div>
                      ))}
                      <h4 class="noPad">
                        {' '}
                        <Link to={experiment.frontmatter.path} class="itemLink">
                          {experiment.frontmatter.title}
                        </Link>
                      </h4>

                      <p class="excerpt">{experiment.frontmatter.subtitle}</p>
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
