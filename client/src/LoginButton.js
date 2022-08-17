import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    //this component is responsible for log in features of user athentification
    return (
        !isAuthenticated && (
            <Button onClick={() => loginWithRedirect()}>Sign In</Button>
        )
    );
};
const Button = styled.button`
    border: none;
    padding: 5px 10px;
    background-color: skyblue;
    color: whitesmoke;
    font-size: 18px;
    border-radius: 10px;
    &:hover {
        background-color: #F0FFFF;
        color: #7393B3;
        cursor: pointer;
    }
`
export default LoginButton;
