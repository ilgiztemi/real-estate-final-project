import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  //this component is responsible for  log out button of user athentification
  return (
    isAuthenticated && (
      <Button onClick={() => logout({ returnTo: window.location.origin })}>
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
    background-color: #f0ffff;
    color: #7393b3;
    cursor: pointer;
  }
`;
export default LogoutButton;
