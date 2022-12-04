import React from 'react'
import styled from 'styled-components'
import './topBar.css'
import {Person,Email} from '@mui/icons-material'

const TopBarContainer = styled.div`
width:100%;
height:70px;
background-color:white;
color:black;
position:fixed;
top:0;
z-index:2;
`

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
const Logo = styled.a`
font-size:40px;
font-weight:700;
text-decoration:none;
color:black;
margin-right: 40px;
`


const ItemConteiner = styled.div`
display:flex;
align-items:center;
margin-left: 30px;
`

export const TopBar = () => {
    return (
        <TopBarContainer>
            <Wrapper>
                <Left>
                    <Logo href='#intro'>Jwilv</Logo>
                    <ItemConteiner>
                    <Person className='icon'/>
                    <span>+54 9 11 3904-1378</span>
                    </ItemConteiner>
                    <ItemConteiner>
                    <Email className='icon'/>
                    <span>juan.ignacio.wilvers@gmail.com</span>
                    </ItemConteiner>
                    {/* <a href='#works'>fgfdgdfgd</a>
                <a href='#portfolio'>fgfdgdfgd</a>
                <a href='#contact'>fgfdgdfgd</a> */}
                </Left>
               
                <Right>
                </Right>
            </Wrapper>

        </TopBarContainer>
    )
}
