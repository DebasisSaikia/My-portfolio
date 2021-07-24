import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Landing from "../components/Landing"
import LocomotiveScroll from 'locomotive-scroll';


const IndexPage = () => {

  const ref = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const centreRef = useRef(null)
  const scrollRef = useRef({
    cache: 0,
    current: 0
  })

  useEffect(() => {
    const scrollElement = new LocomotiveScroll({
      el: ref.current,
      smooth: true,
      multiplier: 0.7,
      smartphone: {
        smooth: true,
      },
      getDirection: true,
      getSpeed: true
    })

    // scrollElement.on('scroll', (obj) => {
    //   scrollRef.current.current = obj.scroll.y;
    //   const distance = scrollRef.current.current - scrollRef.current.cache;
    //   scrollRef.current.cache = scrollRef.current.current

    //   // leftRef.current.style.transform = `skewY(${clamp(distance, -10, 10)}deg)`
    //   leftRef.current.style.transform = `skewY(${distance}deg)`

    // })

  }, [])


  return (
    <div ref={ref} data-scroll-container>
      <Layout>
        <Seo title="Home" />
        <Landing />
      </Layout>
    </div>
  )
}

export default IndexPage
