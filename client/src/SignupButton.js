import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignupButton = () => {
  //this component is responsible for sign up features of user athentification
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      Sign Up
    </button>
  );
};

export default SignupButton;
