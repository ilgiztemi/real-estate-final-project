import React from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";

const Navbar = () => {
    return (
        <Div>
            <h4>ABOUT US</h4>
            <h4>REAL ESTATE</h4>
            <h4>SERVICES</h4>
            <h4>PUBLICATIONS</h4>
            <h4>CAREEERS</h4>
            <Input type="text" placeholder="Search..." />
            {/* <FaBars /> */}
            <LoginButton />
            <LogoutButton />
        </Div>
    );
};
const Div = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: #B6D0E2;
    color: #F0FFFF;
    h4 {
        &:hover {
            cursor: pointer;
            color: #6F8FAF;
            font-weight: bolder;
        }
    }
`
const Input = styled.input`
padding: 5px;
padding-left: 10px;
width: 200px;
border: none;
border-radius: 5px;
outline: none;
color: #101010;
`
export default Navbar;
