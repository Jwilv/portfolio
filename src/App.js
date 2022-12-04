import React from 'react'
import styled from 'styled-components'
import { Contact } from './components/contact/Contact'
import { IntroPage } from './components/IntroPage/IntroPage'
import { Portfolio } from './components/portfolio/Portfolio'
import { TopBar } from './components/topBar/TopBar'
import { Works } from './components/works/Works'

const AppContainer = styled.div`
    height: 100vh;
    
`
const Sections = styled.div`
width:100%;
height:calc(100vh - 70px);
background-color:gray;
position:relative;
top:70px;
scroll-snap-type: y mandatory;

> *{
    width:100vw;
    height:calc(100vh - 70px);
}
`

export const App = () => {
    return (
        <AppContainer>
            <TopBar />
            <Sections>
                <IntroPage />
                <Portfolio />
                <Works />
                <Contact />
            </Sections>
        </AppContainer>
    )
}
