import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
// import { FaBars } from "react-icons/fa";
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
          <h4 onClick={() => navigate("/about")}>ABOUT US</h4>
          <h4 onClick={() => navigate("/adds")}>REAL ESTATE</h4>
          <h4 onClick={() => navigate("/services")}>SERVICES</h4>
          <h4 onClick={() => navigate("/")}>HOMEPAGE</h4>
          <h4 onClick={() => navigate("/profile")}>PROFILE</h4>
        </>
      )}

      <Input type="text" placeholder="Search..." />
      {/* <FaBars /> */}
      <LoginButton />
      <LogoutButton />
    </Div>
  );
};
const Div = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: #b6d0e2;
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
