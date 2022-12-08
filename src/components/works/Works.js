import React from 'react'
import './works.scss'
import flecha from "../../assets/imgs/flecha.png"
import { dataWorks } from './dataWorks'
import { Slider } from '../../slider/Slider'



export const Works = () => {
    return (
        <div className='worksContainer' id='works'>
            {dataWorks.map(({title,id,desc}) => (
                <Slider key={id} title={title} desc={desc}/> 
            ))}


            <img src={flecha}
                alt='imagen que no carga'
                className='flecha Left' />
            <img src={flecha}
                alt='imagen que no carga'
                className='flecha Right' />

        </div>
    )
}
