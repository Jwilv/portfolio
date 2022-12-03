import React from 'react'
import styled from 'styled-components'

const TopBarContainer = styled.div`
width:100%;
height:70px;
background-color:green;
position:fixed;
top:0;
z-index:2;
`

export const TopBar = () => {
    return (
        <TopBarContainer>

        </TopBarContainer>
    )
}
