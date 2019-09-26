import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Velkommen til din co2 beregner</h1>
    <p>Har du cyklet til job/skole i dag</p>
    <p>Tryk her for cykel</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Gå til side 2</Link>
    <Link to="/page-3/">Gå til side 3</Link>
  </Layout>
)

export default IndexPage
