import React from 'react'
import './skills.scss'
import {dataSkills} from './dataSkills'
import { SkillsIcon } from '../skillIcon/SkillsIcon'




export const Skills = () => {

    return (
        <div className='SkillsContainer' id='portfolio'>

            <h1>Skills</h1>

            <div className="container">
                {dataSkills.map( ({id,desc,Img})=>(
                    <div key={id} className='item'>
                    <img src={Img} 
                    alt='imagen de prueba' />
                    <SkillsIcon desc={desc} porcentaje={80}/>
                </div>
                ))}
                
            </div>

        </div>
    )
}
