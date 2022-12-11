import React from 'react'
import'./contact.scss'
import pinguinoContact from '../../assets/imgs/pinguinoContact.png'



export const Contact = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return (
        <div className='ContactContainer' id='contact'>

            <div className='left'>
                <img src={pinguinoContact} alt='imagen que no carga'/>
            </div>
            <div className='right'>
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Email'/>
                    <textarea placeholder='Message'></textarea>
                    <button type='submit'>Send</button>
                </form>
            </div>

        </div>
    )
}
