import React from 'react'
import './skillsIcon.css'

export const SkillsIcon = () => {


    return (
        <div className='skillsIconContainer'>
            <div className='card'>
                <div className='percent' >
                    <div className='dot'></div>
                    <svg>
                        <circle cx='70' cy='70' r='70' ></circle>
                        <circle cx='70' cy='70' r='70' ></circle>
                    </svg>
                </div>
            </div>
        </div>
    )
}
