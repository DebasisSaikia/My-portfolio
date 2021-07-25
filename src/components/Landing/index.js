import React from 'react'
import { MainContainer, LandingItem } from './landingStyles'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Landing = () => {

    const data = useStaticQuery(graphql`
        query landing {
        mdx {
        body
        frontmatter {
            name
            type
        }
        }
  }
  `)

    return (
        <MainContainer data-scroll-section>
            <LandingItem>
                <div className="grid_1" data-scroll data-scroll-speed="2">
                    <h2>My Name is {data.mdx.frontmatter.name} , <span className="yellow">  frontend engineer </span>
                        currently based in Bangalore</h2>
                </div>
                <div className="introduction" data-scroll data-scroll-speed="2">
                    <h2>
                        I love to build interactive and <span className="yellow">visually </span>
                        <span className="yellow">impressive frontend</span> with modern tools and framework
                    </h2>
                </div>
            </LandingItem>
        </MainContainer>
    )
}

export default Landing


