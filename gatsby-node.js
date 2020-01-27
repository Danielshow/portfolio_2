/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql, reporter}) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors){
    reporter.panic('failed to create post', result.errors)
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach(element => {
    actions.createPage({
      path: `/blog/${element.frontmatter.slug}`,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: element.frontmatter.slug
      },
    });
  });
}
