import React from 'react'
import styled from 'styled-components'

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
`
const Right = styled.div`
`
const Logo = styled.a`
font-size:40px;
font-weight:700;
text-decoration:none;
color:black;
`

const ItemConteiner = styled.div`
`

export const TopBar = () => {
    return (
        <TopBarContainer>
            <Wrapper>
                <Left>
                    <Logo href='#intro'>Jwilv</Logo>
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
