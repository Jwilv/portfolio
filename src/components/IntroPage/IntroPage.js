import React from 'react'
import styled from 'styled-components'
import IglooIllustration from "../../assets/imgs/IglooIllustration.png"

const Intro = styled.div`

width:100%;
height:calc(100vh - 70px);
background-color:royalblue;
top:70px;
//position:relative;
`
const Intr2 = styled.div`

width:100%;
height:calc(100vh - 70px);
background-color:red;
top:70px;
//position:relative;
`
// const Igloo = styled.img`
// width:100px;
// height:100px;
// position:absolute;`

export const IntroPage = () => {
  return (
    <>
      <Intro>
        <img src={IglooIllustration} alt='imagen que no carga' />
        <h1>hola mundo</h1>
      </Intro>
      <Intr2>
        
        <h1>hola buenas</h1>
      </Intr2>
    </>
  )
}
