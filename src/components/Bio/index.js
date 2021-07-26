import React from 'react'
import { BioContainer, SkillSection } from './bioStyles'
import { datas, tools } from './data'

const Bio = () => {
    return (
        <BioContainer data-scroll-section>
            <SkillSection>
                <div className="skills_div" data-scroll data-scroll-speed="2">
                    <h1>Technology</h1>
                    <div className="skills_container">
                        {datas.map((data) => {
                            return (
                                <ul key={data.id}>
                                    <li>{data.skill}</li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
                <div className="tools_div" data-scroll data-scroll-speed="3" >
                    <h1>Tools</h1>
                    <div className="tools_container">
                        <div>
                            {tools.map((data) => {
                                return (
                                    <ul key={data.id}>
                                        <li>{data.tool}</li>
                                    </ul>
                                )
                            })}
                        </div>
                        <div className="resume_container">
                            <h2>View My Resume</h2>
                        </div>

                    </div>
                </div>
            </SkillSection>
        </BioContainer>
    )
}

export default Bio
