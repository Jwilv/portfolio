import React from 'react'
import styled from 'styled-components'
import IglooIllustration from "../../assets/imgs/IglooIllustration.png"
import flecha from "../../assets/imgs/flecha.png"


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
position:relative;
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

const Wrapper = styled.div`
width: 100%;
height: 100%;
padding-left:50px;
display:flex;
flex-direction:column;
justify-content:center;
`

const H1 = styled.h1`
font-size:60px;
margin:10px 0;
`

const H2 = styled.h2`
font-size:35px;
`

const H3 = styled.h3`
font-size:35px;
`

const FlechaCointainer = styled.a`
position:absolute;
bottom: 10px;
left:40%;
`


const Flecha = styled.img`
width: 30px;
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
        <Wrapper>
          <H2>que se pone aca ?</H2>
          <H1>no puede hacer tarnco calor</H1>
          <H3>freelance<span></span></H3>
          <FlechaCointainer href='#intro'>
            <Flecha src={flecha} alt='imagen que no carga' />
          </FlechaCointainer>
          

        </Wrapper>

      </Right>
    </IntroContainer>
  )
}
