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
                    {/* <h1>{data.mdx.frontmatter.name}</h1> */}
                    <h2>My Name is Debasis Saikia , software developer
                        currently based in Bangalore</h2>
                </div>
                <div className="introduction" data-scroll data-scroll-speed="2">
                    <h2>
                        <MDXRenderer>
                            {data.mdx.body}
                        </MDXRenderer>
                    </h2>
                </div>
            </LandingItem>
        </MainContainer>
    )
}

export default Landing


