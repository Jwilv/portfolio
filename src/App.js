import React, { useState } from 'react'
import styled from 'styled-components'
import { Contact } from './components/contact/Contact'
import { IntroPage } from './components/IntroPage/IntroPage'
import { Menu } from './components/menu/Menu'
import { Portfolio } from './components/portfolio/Portfolio'
import { Skills } from './components/skills/Skills'
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
    height:calc(100vh - 50px);
}
`

export const App = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <AppContainer>
            <TopBar open={openMenu} setOpen={setOpenMenu} />
            <Menu open={openMenu} setOpen={setOpenMenu}/>
            <Sections>
                <IntroPage />
                <Portfolio />
                <Works />
                <Skills />
                <Contact />
            </Sections>
        </AppContainer>
    )
}
