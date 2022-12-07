import React from 'react'
import './portfolioList.scss'

export const PortfolioList = ({ title, active,setSelect,id}) => {

    return (
        <li className={active ? 'PortfolioList active' : 'PortfolioList'}
        onClick={ ()=> setSelect(id) }>
            {title}
        </li>
    )
}
