import React from 'react'
import './skillsItem.scss'

export const SkillsItem = ({ img }) => {
    return (
        <div className='SkillsItem'>
            <div className='Container'>
                <div className='Item'>
                    <img src={img} alt='' />
                </div>
            </div>
        </div>

    )
}
