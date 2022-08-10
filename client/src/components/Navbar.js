import React from "react";
import { FaBars } from "react-icons/fa";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";

const Navbar = () => {
    return (
        <div>
            <h4>ABOUT US</h4>
            <h4>REAL ESTATE</h4>
            <h4>SERVICES</h4>
            <h4>PUBLICATIONS</h4>
            <h4>CAREEERS</h4>
            <input type="text" placeholder="SEARCH" />
            <FaBars />
            <LoginButton />
            <LogoutButton />
        </div>
    );
};

export default Navbar;
