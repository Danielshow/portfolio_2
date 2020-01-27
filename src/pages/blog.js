import React, {useState} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {
  return (
    <Layout>
      <SEO title="All blogs page" />
      <div className="all__blogs">
        <h1>All Blogs</h1>
      </div>
    </Layout>
  )
}

export default Blog
