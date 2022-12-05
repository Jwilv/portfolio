import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import IglooIllustration from "../../assets/imgs/IglooIllustration.png"
import flecha from "../../assets/imgs/flecha.png"
import { init } from 'ityped'


const IntroContainer = styled.div`
/* background-color:#33C4FF ; */
background-color:#edf5ff ;
display:flex;
`

const Left = styled.div`
flex:0.5;
overflow:hidden;
`

const Right = styled.div`
flex:0.5;
position:relative;
color: #000;
`
const ImageContainer = styled.div`
width: 800px;
height: 800px;
background-color:#edf5ff;
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
font-size:40px;
`

const H3 = styled.h3`
font-size:50px;
`

const FlechaCointainer = styled.a`
position:absolute;
bottom: 10px;
left:40%;
`


const Flecha = styled.img`
width: 70px;
animation: arrowBlink 3s infinite;
@keyframes arrowBlink {
  50%{
    opacity:0;
  }
  100%{
    opacity:100;
  }
}
`

const Texto = styled.span`
font-size:50px;
color:#00A7FF ;

`



export const IntroPage = () => {

  const textRef = useRef()

  useEffect(() => {

    init(textRef.current, {
      showCursor: true,
      backSpeed:60,
      backDelay:1500,
      strings: ['Dev front-end', 'Made in Tec N5'],
    })

  }, [])

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
          <H3>Freelance <Texto  ref={textRef}></Texto></H3>
          <FlechaCointainer href='#portfolio'>
            <Flecha src={flecha} alt='imagen que no carga' />
          </FlechaCointainer>


        </Wrapper>

      </Right>
    </IntroContainer>
  )
}
