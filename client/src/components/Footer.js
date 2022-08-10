import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Div>
        <p>ABOUT US</p>
        <p>PROJECTS</p>
        <p>SERVICES</p>
        <p>PUBLICATIONS</p>
        <p>CAREERS</p>
    </Div>
  )
}
const Div = styled.div`
    position: fixed;
    bottom: 0;
    background-color: #7393B3;
    width: 100%;
    height: 100px;
    color: whitesmoke;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 40px;
`
export default Footer