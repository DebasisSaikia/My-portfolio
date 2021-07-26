
import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyles } from "../styles/GlobalStyles"
import Footer from "./Footer"
import Navbar from "./Navbar"
import locomotiveScroll from "locomotive-scroll";


const Layout = ({ children }) => {


  const scrollRef = React.createRef();

  React.useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.7,
      smartphone: {
        smooth: true,
      },
      getDirection: true,
      getSpeed: true
    });
  });

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <div ref={scrollRef} data-scroll-container id="container">
      <GlobalStyles />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
