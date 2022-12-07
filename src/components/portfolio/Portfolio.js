import React, { useState } from 'react'
import { PortfolioList } from '../portfolioList/PortfolioList';
import './portfolio.scss'



export const Portfolio = () => {

    const [select, setSelect] = useState('featured')

    const list = [{
        id: 'featured',
        title: 'Featured',
    },
    {
        id: 'web',
        title: 'Web App',
    },
    {
        id: 'movile',
        title: 'Movile App',
    },
    {
        id: 'designs',
        title: 'Designs',
    },];
    return (
        <div className='PortfolioContainer' id='portfolio'>

            <h1>Portfolio</h1>
            <ul>
                {list.map( ({title,id}) =>(
                    <PortfolioList key={id} title={title}
                    active={select === id}
                    setSelect={setSelect}
                    id={id}/>
                ))}

            </ul>

            <div className="Container">

                <div className='Item'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCzGjj6cpYkZ7fUDtoPSxBfdrUTsbdCYpTA&usqp=CAU" alt='imagen de prueba' />
                    <h3>imagen de prueba</h3>
                </div>


                <div className='Item'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCzGjj6cpYkZ7fUDtoPSxBfdrUTsbdCYpTA&usqp=CAU" alt='imagen de prueba' />
                    <h3>imagen de prueba</h3>
                </div>


                <div className='Item'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCzGjj6cpYkZ7fUDtoPSxBfdrUTsbdCYpTA&usqp=CAU" alt='imagen de prueba' />
                    <h3>imagen de prueba</h3>
                </div>

                <div className='Item'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCzGjj6cpYkZ7fUDtoPSxBfdrUTsbdCYpTA&usqp=CAU" alt='imagen de prueba' />
                    <h3>imagen de prueba</h3>
                </div>


                <div className='Item'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCzGjj6cpYkZ7fUDtoPSxBfdrUTsbdCYpTA&usqp=CAU" alt='imagen de prueba' />
                    <h3>imagen de prueba</h3>
                </div>


                <div className='Item'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCzGjj6cpYkZ7fUDtoPSxBfdrUTsbdCYpTA&usqp=CAU" alt='imagen de prueba' />
                    <h3>imagen de prueba</h3>
                </div>

            </div>

        </div>
    )
}
