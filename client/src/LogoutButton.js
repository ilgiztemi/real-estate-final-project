import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <Button
                onClick={() => logout({ returnTo: window.location.origin })}
            >
                Log Out
            </Button>
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
    font-weight: bolder;
    &:hover {
        background-color: #F0FFFF;
        color: #7393B3;
        cursor: pointer;
    }
`
export default LogoutButton;
