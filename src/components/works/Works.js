import React, { useState } from 'react'
import './works.scss'
import flecha from "../../assets/imgs/flecha.png"
import { dataWorks } from './dataWorks'
//import { Slider } from '../../slider/Slider'



export const Works = () => {

    const [sliderGo, setSliderGo] = useState(0);

    const handleSlider = (way)=>{
        way === 'left' ? setSliderGo( sliderGo > 0 ? sliderGo-1 : 3)
        : setSliderGo( sliderGo < dataWorks.length - 1 ? sliderGo+1 : 0)
    }
    return (
        <div className='worksContainer' id='works'>
            {dataWorks.map(({ title, id, desc }) => (
                // <Slider key={id}
                //     title={title}
                //     desc={desc}
                //     slider={sliderGo} />
                <div key={id} className='slider' style={{ transform: `translateX(-${sliderGo * 100}vw)` }}>
                    <div className='container'>
                        <div className='item'>
                            <div className='left'>
                                <div className='leftContainer'>
                                    <div className='imgCointainer'>
                                        {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb_tu7GgJWDljnoor35A4-jwLC93qS6VGPfw&usqp=CAU'
                                            alt='imagen que no carga' /> */}
                                    </div>
                                    <h2>{title}</h2>
                                    <p>{desc}</p>
                                    <span>Proyects</span>
                                </div>
                            </div>
                            <div className='right'></div>
                        </div>
                    </div>
                </div>
            ))}


            <img src={flecha}
                alt='imagen que no carga'
                className='flecha Left' 
                onClick={ ()=> handleSlider('left')}/>
            <img src={flecha}
                alt='imagen que no carga'
                className='flecha Right' 
                onClick={ ()=> handleSlider()}/>

        </div>
    )
}
