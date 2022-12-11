import React from 'react'
import'./contact.scss'
import pinguinoContact from '../../assets/imgs/pinguinoContact.png'



export const Contact = () => {
    return (
        <div className='ContactContainer' id='contact'>

            <div className='left'>
                <img src={pinguinoContact} alt='imagen que no carga'/>
            </div>
            <div className='right'>
                <h2>Contact</h2>
                <form></form>
            </div>

        </div>
    )
}
