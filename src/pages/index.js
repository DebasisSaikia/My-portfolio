import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Landing from "../components/Landing"
import ContactForm from "../components/ContactForm"



const IndexPage = () => {

  return (
    <Layout>
      <Seo title="Home" />
      <Landing />
      <ContactForm />
    </Layout>

  )
}

export default IndexPage
