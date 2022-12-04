import React from 'react'
import styled from 'styled-components'
import IglooIllustration from "../../assets/imgs/IglooIllustration.png"


const IntroContainer = styled.div`
background-color:white ;
display:flex;
`

const Left = styled.div`
flex:0.5;
overflow:hidden;
`

const Right = styled.div`
flex:0.5;
`
const ImageContainer = styled.div`
width: 800px;
height: 800px;
background-color:blue;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;

`

const Img = styled.img`
height:100%;
`
export const IntroPage = () => {
  return (
    <IntroContainer id='intro'>
      <Left>
        <ImageContainer>
        <Img src={IglooIllustration} alt='imagen que no carga' />
        </ImageContainer>
      </Left>
      <Right>

      </Right>
    </IntroContainer>
  )
}
