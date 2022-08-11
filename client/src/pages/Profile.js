import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <Div>Loading ...</Div>;
  }
  console.log(user);
  return (
    isAuthenticated && (
      <Div>
        <div>
          <img
            src="https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg"
            alt="profile"
          />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/2882688/pexels-photo-2882688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="welcome-img"
          />
        </div>
      </Div>
    )
  );
};
const Div = styled.div`
  margin: 20px;
  display: flex;
  flex-flow: row wrap;
  height: 380px;
  width: 70%;
  max-width: 800px;
  margin: 20px auto;
  border: 2px solid skyblue;
  background: whitesmoke;
  border-radius: 10px;
  div {
    flex-basis: 50%;
    img {
      width: 100%;
      height: 250px;
    }
    h2,
    p {
      padding-left: 10px;
    }
  }
`;
export default Profile;
