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
        <MainContainer>
            <LandingItem>
                <div className="grid_1">
                    <h1>{data.mdx.frontmatter.name}</h1>
                </div>
                <div className="introduction">
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


