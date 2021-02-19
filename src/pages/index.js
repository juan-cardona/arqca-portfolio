import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby";

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <h1>{data.sanityProject.squareMeters}</h1>
    <p className="leading-loose bg-red-500" >Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className="block w-1/2 mx-auto  mb-3">
      <Image />
    </div>
    <Link className="" to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
query  {
  sanityProject {
    _id
    title
    description
    body {
      _key
      _type
      style
      _rawChildren
    }
    squareMeters
    ubicacion
    mainImage {
      asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
      }
    }
  }
}
`