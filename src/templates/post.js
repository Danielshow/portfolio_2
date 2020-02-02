import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx';
import BackgroundImage from 'gatsby-image'

import SEO from '../components/seo'
import Layout from '../components/layout'

export const query = graphql`
 query($slug: String!) {
    mdx(frontmatter: {slug:{eq: $slug}}) {
        id
        frontmatter {
          title
          date
          slug
          image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
       <SEO title={post.frontmatter.title} />
       <div className="post">
        <div className="post__content">
            <div className="post__content--img">
              <BackgroundImage
                Tag="div"
                className={'post__content--img'}
                fluid={post.frontmatter.image.childImageSharp.fluid}
              />
            </div>
                       <div className="post__content--blog">
              <p>
               <MDXRenderer>
                 { post.body }
               </MDXRenderer>
              </p>
              { post.timeToRead }
              { post.wordCount.words }
            </div>
          </div>
       </div>
    </Layout>
  )
}

export default Post
