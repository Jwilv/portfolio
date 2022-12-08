import React from 'react'
import './slider.scss'

export const Slider = ({ title, desc }) => {
    return (
        <div className='slider'>
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
    )
}
