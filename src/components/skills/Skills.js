import React from 'react'
import './skills.scss'
import {dataSkills} from './dataSkills'




export const Skills = () => {

    return (
        <div className='SkillsContainer' id='portfolio'>

            <h1>Skills</h1>

            <div className="container">
                {dataSkills.map( ({id,desc,Img})=>(
                    <div key={id} className='item'>
                    <img src={Img} 
                    alt='imagen de prueba' />
                </div>
                ))}
            </div>

        </div>
    )
}
