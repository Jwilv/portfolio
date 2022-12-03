import React from 'react'
import styled from 'styled-components'
import IglooIllustration from "../../assets/imgs/IglooIllustration.png"


// const Title = styled.h2`
// color:red;
// font-size:100px;

// `

const Intro = styled.div`
/* display:grid;
gap:1rem;
grid-auto-rows:22rem;
grid-template-columns:repeat(auto-fill,minmax(14rem,1fr)); */
width:100%;
height:calc(100vh - 70px);
background-color:royalblue;
top:70px;
//position:relative;
`
const Intr2 = styled.div`
/* display:grid;
gap:1rem;
grid-auto-rows:22rem;
grid-template-columns:repeat(auto-fill,minmax(14rem,1fr)); */
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
