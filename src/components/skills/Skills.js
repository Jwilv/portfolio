import React from 'react'
import { SkillsItem } from '../skillsItem/SkillsItem'
import { dataSkills } from './dataSkills'

export const Skills = () => {
    return (
        <div>

            <h2>Skills</h2>

            {dataSkills.map(({ id, desc, Img }) => (
                <SkillsItem 
                id={id}
                desc={desc}
                img={Img}/>
            ))}

        </div>
    )
}
