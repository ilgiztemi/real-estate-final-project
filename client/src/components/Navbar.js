import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  return (
    <Div>
      {isAuthenticated && (
        <>
          <h4 onClick={() => navigate("/")}>HOMEPAGE</h4>
          <h4 onClick={() => navigate("/profile")}>PROFILE</h4>
          <h4 onClick={() => navigate("/adds")}>REAL ESTATE</h4>
          <h4 onClick={() => navigate("/services")}>DISCOVER</h4>
          <h4 onClick={() => navigate("/about")}>ABOUT US</h4>
        </>
      )}

      <Input type="text" placeholder="Search..." />
      <LoginButton />
      <LogoutButton />
    </Div>
  );
};
const Div = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: #a7c7e7;
  color: #f0ffff;
  h4 {
    &:hover {
      cursor: pointer;
      color: #6f8faf;
      font-weight: bolder;
    }
  }
`;
const Input = styled.input`
  padding: 5px;
  padding-left: 10px;
  width: 200px;
  border: none;
  border-radius: 5px;
  outline: none;
  color: #101010;
`;
export default Navbar;
