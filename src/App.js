import React from 'react'
import styled from 'styled-components'
import { Contact } from './components/contact/Contact'
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
                <Portfolio />
                <Works />
                <Contact />
            </Sections>
        </AppContainer>
    )
}
