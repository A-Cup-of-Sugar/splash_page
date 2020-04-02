import React from 'react'
import Link from 'gatsby-link'
import { StaticQuery, graphql } from 'gatsby'
import { Grid, Divider } from 'semantic-ui-react'
import Img from 'gatsby-image'

export default props => (
  <StaticQuery
    query={graphql`
      query ThoughtGridQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { fileAbsolutePath: { regex: "/(thoughts)/.*.md$/" } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 120)
              id
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                path
                subtitle
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
    render={data => <ThoughtGrid data={data} {...props} />}
  />
)

const ThoughtGrid = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Grid>
      <Grid.Column mobile={0} tablet={3} computer={3} />
      <Grid.Column mobile={12} tablet={9} computer={9}>
        <h3 class="header">Thoughts.</h3>
      </Grid.Column>
      <Grid.Column mobile={12} tablet={3} computer={3}>
        <p class="left-label">Topics </p>
        <ul class="left-info">
          <li> Data stories</li>
          <li> Tutorials</li>
          <li> Food for thought</li>
        </ul>
      </Grid.Column>
      <Grid.Column mobile={12} tablet={9} computer={9}>
        <div className="blog-posts">
          <Grid>
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => {
                return (
                  <Grid.Column mobile={12} tablet={6} computer={4}>
                    <div className="project-preview" key={post.id}>
                      <div class="imgBox">
                        <Link to={post.frontmatter.path} class="itemLink">
                          <Img
                            className="underline"
                            fluid={post.frontmatter.cover.childImageSharp.fluid}
                          />
                        </Link>
                      </div>
                      <p class="date">{post.frontmatter.date}</p>
                      <h4 class="noPad">
                        {' '}
                        <Link to={post.frontmatter.path} class="itemLink">
                          {post.frontmatter.title}
                        </Link>
                      </h4>

                      <p>{post.excerpt}</p>
                      <p>
                        <Link to={post.frontmatter.path} class="itemLink">
                          <span class="bodyLink">Read More</span>
                        </Link>
                      </p>
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
