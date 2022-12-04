import React from 'react'
import styled from 'styled-components'

const PortfolioContainer = styled.div`
background-color:white;
display:flex;
flex-direction:column;
align-items:center;

`

const Title = styled.h1`
font-size:50px;
`

const Container = styled.div`

`

const Item = styled.div`

`

const Lista = styled.ul`
margin: 10px;
padding:0;
list-style:none;
display:flex;
`

const Items = styled.li`
font-size:14px;
margin-right: 50px;
padding: 0.7;
`

export const Portfolio = () => {
    return (
        <PortfolioContainer id='portfolio'>

            <Title>Portfolio</Title>
            <Lista>
                <li>Featured</li>
                <li>Web App</li>
                <li>Android App</li>
                <li>Designs</li>
            </Lista>
            <Container>
            <Item>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmKvoSz5GPO4YHunnOXkaMJVyNX6Dn-8McfQ&usqp=CAU' alt='imagen de prueba' />
                <h3>imagen de prueba</h3>

            </Item>

            </Container>

        </PortfolioContainer>
    )
}
