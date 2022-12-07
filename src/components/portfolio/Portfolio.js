import React, { useEffect, useState } from 'react'
import { PortfolioList } from '../portfolioList/PortfolioList';
import './portfolio.scss'
import {
    featuredPortfolio,
    WebAppPortfolio,
    movileAppPortfolio,
    designsPortfolio,
} from '../../data'



export const Portfolio = () => {

    const [select, setSelect] = useState('featured')
    const [data, setData] = useState([])

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

    useEffect(() => {

        switch (select) {
            case 'featured':
                setData(featuredPortfolio);
                break;
            case 'web':
                setData(WebAppPortfolio);
                break;
            case 'movile':
                setData(movileAppPortfolio);
                break;
            case 'designs':
                setData(designsPortfolio);
                break;
            default: setData(featuredPortfolio);
        }
    }, [select])

    return (
        <div className='PortfolioContainer' id='portfolio'>

            <h1>Portfolio</h1>
            <ul>
                {list.map(({ title, id }) => (
                    <PortfolioList key={id} title={title}
                        active={select === id}
                        setSelect={setSelect}
                        id={id} />
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
