import React from "react";
import styled from "styled-components";

const Discover = () => {
  return (<StyledDiv>
      <div>
        <a href="https://www.mtl.org/en/what-to-do/heritage-and-architecture/quartier-des-spectacles">
        <img src="https://www.mtl.org/sites/default/files/styles/hero/public/2020-11/44695.jpg?itok=xhMNV6gR" alt="img" />
        <h3>Quartier des Spectacles</h3>
        <p>Patrimony and Architecture</p>
        </a>
      </div>
      <div>
          <a href="https://www.mtl.org/en/experience/montreal-summer-festival-guide">
          <img src="https://www.mtl.org/sites/default/files/styles/playlist_banner_big/public/2022-06/49643.jpg?itok=IvjZROBh" alt="img" />
          <h3>Summer 2022 is festival season in Montréal!</h3>
          </a>
      </div>
      <div>
        <a href="https://www.mtl.org/en/what-to-do/food/street-food-montreal">
        <img src="https://www.mtl.org/sites/default/files/styles/hero/public/2018-06/35784_0.jpg?itok=wfDYU6Ya" alt="img" />
        <h3>Street Food Montréal</h3>
        <p>Gastronomy</p>
        </a>
      </div>
      <div>
        <a href="https://www.mtl.org/en/experience/quick-guide-favourite-seasonal-spaces">
        <img src="https://www.mtl.org/sites/default/files/styles/playlist_banner_big/public/2020-07/43978_0.jpg?h=beaf1e9b&itok=SeQ1MpR2" alt="img" />
        <h3>Take a tour of summer 2022’s seasonal installations</h3>
        </a>
      </div>
  </StyledDiv>)
};
const StyledDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100vh;
  margin-bottom: 300px;
  color: #101010;
  div {
    width: 350px;
    border-radius: 10px;
    height: 420px;
    border: 2px solid whitesmoke;
    background-color: whitesmoke;
    background-size: cover;
    object-fit: cover;
    background-repeat: no-repeat;
    a {
      text-decoration: none;
      color: #101010;
    }
    img {
      width: 100%;
      height: 300px;
    }
    h3, p {
      padding-left: 10px;
    }
  }
`
export default Discover;
