import React from 'react'
import styled from 'styled-components'
//import './skillsIcon.css'

const SkillsIconContainer = styled.div`
position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    `

const Card = styled.div`
    position: relative;
    width: 220px;
    height: 250px;
    background-color: aquamarine;
    display: flex;
    justify-content: center;
    align-items: center;
    `

const Percent = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    `

const Dot = styled.div`
    position: absolute;
    inset: 5px;
    z-index: 10;
    /* transform: rotate(calc( 3.6deg * 20 )); */
    animation: animateDot 2s linear forwards;
    `

const Svg = styled.svg`
    position: relative;
    width: 150px;
    height: 150px;
    transform: rotate(270deg);
`

const Circle = styled.circle`
    width: 100%;
    height: 100%;
    fill: transparent;
    stroke-width: 2;
    transform: translate(5px, 5px);

    &:nth-child(2){
    stroke: blue;
    stroke-dasharray: 440;
    stroke-dashoffset: calc(440 - 440 * 80 / 100);
    opacity: 0;
    animation : fadeIn 1s linear forwards;
    animation-delay: 2.5s;

    @keyframes fadeIn {
        0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
    
    }
    }
`

export const SkillsIcon = () => {


    return (
        <SkillsIconContainer className='skillsIconContainer'>
            <Card className='card'>
                <Percent className='percent' >
                    <Dot className='dot'></Dot>
                    <Svg>
                        <Circle cx='70' cy='70' r='70' ></Circle>
                        <Circle cx='70' cy='70' r='70' ></Circle>
                    </Svg>
                    <div className='number'>
                        <h2>80<span>%</span></h2>
                        <p>Html</p>
                    </div>
                </Percent>
            </Card>
        </SkillsIconContainer>
    )
}
