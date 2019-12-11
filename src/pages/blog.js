import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <h1>Blog</h1>

      <ol>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <li key={node.frontmatter.title}>
              <h2>
                <Link to={`/blog/${node.fields.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>{node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
