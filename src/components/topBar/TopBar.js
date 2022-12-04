import React from 'react'
import styled from 'styled-components'
import './topBar.scss'
import {Person,Email} from '@mui/icons-material'

const Wrapper = styled.div`
padding: 10px 30px;
display:flex;
align-items:center;
justify-content:space-between;

`
const Left = styled.div`
display:flex;
align-items:center;
`
const Right = styled.div`
`



const ItemConteiner = styled.div`
display:flex;
align-items:center;
margin-left: 30px;
`

const Info = styled.p`
font-size: 15px;
font-weight:500;

`


const Icon =styled(Person,Email)`
    font-size: 18px;
    margin-right: 5px;
    `





export const TopBar = ({open,setOpen}) => {
    return (
        <div className={'TopBarContainer' + (open && ' active')}>
            <Wrapper>
                <Left>
                    <a className='Logo' href='#intro' id='cambio'>Jwilv</a>
                    <ItemConteiner>
                    <Icon />
                    <Info>+54 9 11 3904-1378</Info>
                    </ItemConteiner>
                    <ItemConteiner>
                    <Icon />
                    <Info>juan.ignacio.wilvers@gmail.com</Info>
                    </ItemConteiner>
                    {/* <a href='#works'>fgfdgdfgd</a>
                <a href='#portfolio'>fgfdgdfgd</a>
                <a href='#contact'>fgfdgdfgd</a> */}
                </Left>
                <Right>
                <div className='Hamburger'>
                    <span className = 'Line1 '></span>
                    <span className = 'Line2 '></span>
                    <span className = 'Line3 '></span>
                </div>
                </Right>
            </Wrapper>

        </div>
    )
}
