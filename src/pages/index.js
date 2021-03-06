import React, { useLayoutEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Landing from "../components/Landing"
import ContactForm from "../components/ContactForm"
import Skills from "../components/Skills"
import Loader from "../components/Loader"
import Bio from "../components/Bio"

const IndexPage = () => {

  const [loading, setLoading] = React.useState(false)

  useLayoutEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);



  return (
    <>
      {loading ? <Loader /> :
        <Layout>
          <Seo title="Home" />
          <Landing />
          <Bio />
          <ContactForm />
        </Layout>
      }
    </>
  )
}

export default IndexPage
