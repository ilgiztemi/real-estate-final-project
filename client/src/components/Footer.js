import React from "react";
import styled from "styled-components";
import {
  TiSocialPinterestCircular,
  TiSocialTumblerCircular,
  TiSocialSkype,
  TiSocialLinkedinCircular,
  TiSocialInstagram,
  TiSocialGooglePlusCircular,
  TiSocialFacebookCircular,
  TiSocialTwitterCircular,
  TiSocialAtCircular,
} from "react-icons/ti";

const Footer = () => {
  //simple footer page without any functionality expect for ui improvements
  return (
    <Div>
      <TopDiv>
        <div>
          <h3>FOLLOW US</h3>
          <div>
            <TiSocialPinterestCircular style={{ fontSize: "30px" }} />
            <TiSocialTumblerCircular style={{ fontSize: "30px" }} />
            <TiSocialSkype style={{ fontSize: "30px" }} />
            <TiSocialLinkedinCircular style={{ fontSize: "30px" }} />
            <TiSocialInstagram style={{ fontSize: "30px" }} />
            <TiSocialGooglePlusCircular style={{ fontSize: "30px" }} />
            <TiSocialFacebookCircular style={{ fontSize: "30px" }} />
            <TiSocialTwitterCircular style={{ fontSize: "30px" }} />
            <TiSocialAtCircular style={{ fontSize: "30px" }} />
          </div>
        </div>
        <MainDiv>
          <div>
            <h3>DISCOVER</h3>
            <p>Schools</p>
            <p>Neighborhoods</p>
            <p>Facilities</p>
            <p>Public transit</p>
            <p>Kids playgrounds</p>
            <p>Outdor training stations</p>
          </div>
          <div>
            <h3>INFORMATION</h3>
            <p>About Us</p>
            <p>Customers</p>
            <p>Service</p>
            <p>Collection</p>
            <p>Sellers</p>
          </div>
          <div>
            <h3>PRESS</h3>
            <p>Press Releases</p>
            <p>Awards</p>
            <p>Testomonials</p>
            <p>Timeline</p>
          </div>
        </MainDiv>
      </TopDiv>
      <BottomDiv>
        <h4>HOME</h4>
        <h4>EXPLORE</h4>
        <h4>WORKS</h4>
        <h4>SHOP</h4>
        <h4>ABOUT US</h4>
        <h4>CONTACT</h4>
      </BottomDiv>
    </Div>
  );
};
const Div = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #7393b3;
  width: 100%;
  padding-bottom: 20px;
  height: fit-content;
  max-height: 280px;
  color: whitesmoke;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 10px;
  overflow-y: scroll;
  p {
    &:hover {
      color: skyblue;
      cursor: pointer;
    }
  }
`;
const TopDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding: 10px;
  gap: 50px;
  width: 100%;
  justify-content: space-around;
`;
const MainDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 30px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  div p {
    padding: 0;
    margin: 0;
  }
`;
const BottomDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  width: 100%;
  gap: 20px;
  border-top: 1px solid white;
  h4 {
    margin: 0;
    padding: 0;
    &:hover {
      cursor: pointer;
      color: skyblue;
    }
  }
`;
export default Footer;
