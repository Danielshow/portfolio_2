import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"


const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            date
            slug
          }
        }
      }
    }
  `)
  const { nodes } = data.allMdx
  console.log(nodes)
  return (
    <Layout>
      <SEO title="All blogs page" />
      <div className="all__blogs">
        <h1>All Blogs</h1>
        <div className="all">
          { nodes.map(node => {
            return (
              <div key={node.id}>
                <h1><Link to={`/blog/${node.frontmatter.slug}`}> {node.frontmatter.title}</Link></h1>
                <p>{node.frontmatter.date}</p>
              </div>
            )
          }) }
        </div>
      </div>
    </Layout>
  )
}

export default Blog
