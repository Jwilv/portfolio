import React from 'react'
import styled from 'styled-components'
//import './skillsIcon.css'

const skillsIconContainer = styled.div`
position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    `

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
                    <div className='number'>
                        <h2>80<span>%</span></h2>
                        <p>Html</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
