import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout'

export const query = graphql`
 query($slug: String!) {
    mdx(frontmatter: {slug:{eq: $slug}}) {
        id
        frontmatter {
          title
          date
          slug
        }
    body
    timeToRead
    wordCount {
      words
    }
  }
}
` 

const Post = ({ data: {mdx: post} }) => {
  return (
    <Layout>
       <h1>{post.frontmatter.title}</h1>
       <h1>Opps</h1>
       <div>
        <p>
         <MDXRenderer>
           { post.body }
         </MDXRenderer>
        </p>
        { post.timeToRead }
        { post.wordCount.words }
       </div>
    </Layout>
  )
}

export default Post
