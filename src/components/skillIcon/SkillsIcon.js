import React from 'react'
import styled from 'styled-components'
import { selectorType } from './selectortType'

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
    transform: rotate(calc(3.6deg * ${({ value }) => value}));

    &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: chocolate;
    box-shadow: 0 0 10px chocolate,
        0 0 30px #d2691e;
}
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
    stroke: ${props => selectorType(props.variant)};
    stroke-dasharray: 440;
    stroke-dashoffset: calc(440 - 440 * ${({ value }) => value} / 100);
    }
`

const Number = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Percentage = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-weight: 700;
    font-size: 2.5rem;
    margin: 0;
`

const PercentageIcon = styled.span`
    font-weight: 300;
    color: black;
    font-size: 1.5rem;
`

const Description = styled.p`
    font-weight: 300;
    font-size: 0.8em;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(210, 105, 30);
    margin: 0;
`

export const SkillsIcon = () => {
    const wrapper = 'Js'
    const porcentaje = 50;
    return (
        <SkillsIconContainer>
            <Card>
                <Percent>
                    <Dot value={porcentaje}></Dot>
                    <Svg>
                        <Circle cx='70' cy='70' r='70' ></Circle>
                        <Circle variant={wrapper} value={porcentaje} cx='70' cy='70' r='70' ></Circle>
                    </Svg>
                    <Number>
                        <Percentage>{porcentaje}<PercentageIcon>%</PercentageIcon></Percentage>
                        <Description>Html</Description>
                    </Number>
                </Percent>
            </Card>
        </SkillsIconContainer>
    )
}
