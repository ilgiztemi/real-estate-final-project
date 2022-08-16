import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Homepage = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  if (isAuthenticated) {
    navigate("/profile");
  }
  return (
    <Div>
      <TopDiv>
        <h1>FINAL</h1>
      </TopDiv>
      <SecondDiv>
        <LeftDiv>
          <h2>FOUNDER</h2>
          <p>ILGIZ TEMI</p>
          <img
            src="https://images.pexels.com/photos/2529179/pexels-photo-2529179.jpeg?cs=srgb&dl=pexels-guillaume-meurice-2529179.jpg&fm=jpg"
            alt="portrait"
          />
          <span>
            <h3>WE DO IT</h3>
            <h3>BETTER</h3>
          </span>
          <span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              pariatur quam quo illum repellendus rerum perferendis fuga
              facilis, laboriosam amet.
            </p>
          </span>
        </LeftDiv>
        <MainDiv>
          <AddsDiv>
            <div>
              <img
                src="https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="img"
              />
              <p>ARCHITECTURE</p>
              <h3>CAVE RESIDENCE</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quaerat tenetur iste est.
              </p>
              <button>Learn More</button>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1454805/pexels-photo-1454805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="img"
              />
              <p>INTERIOR</p>
              <h3>VEGA COTTAGE</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quaerat tenetur iste est.
              </p>
              <button>Learn More</button>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/7031608/pexels-photo-7031608.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="img"
              />
              <p>LANDSCAPE</p>
              <h3>AGUANTAO HOUSE</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quaerat tenetur iste est.
              </p>
              <button>Learn More</button>
            </div>
          </AddsDiv>
          <BottomDiv>
            <div>
              <h4>PALAZZI UNIVERSITY</h4>
              <h1>COMMUNITY CENTER</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati commodi ullam enim officiis ad vitae officia
                perferendis tempora doloremque a.
              </p>
            </div>
            <img
              src="https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="img"
            />
          </BottomDiv>
        </MainDiv>
      </SecondDiv>
    </Div>
  );
};
const Div = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;
const TopDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  overflow-y: scroll;
  h1 {
    color: lightskyblue;
    background-color: azure;
    opacity: 0.8;
    padding: 50px 200px;
    font-weight: bolder;
    border-radius: 10px;
    font-size: 50px;
    letter-spacing: 10px;
  }
`;
const SecondDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 800px;
  margin-bottom: 20px;
  gap: 10px;
`;
const LeftDiv = styled.div`
  color: #101010;
  background-color: white;
  border-radius: 5px;
  flex-basis: 50%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  h2 {
    border-bottom: 2px solid #101010;
    padding-bottom: 30px;
    width: 90%;
    text-align: center;
  }
  p {
    font-family: "Caveat", cursive;
    font-size: 20px;
  }
  img {
    width: 90%;
    border-radius: 20px;
    height: 300px;
    object-fit: cover;
  }
  span {
    background-color: #a7c7e7;
    width: 100%;
    text-align: center;
    color: #101010;
    margin-top: 20px;
  }
`;
const AddsDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
  justify-content: space-evenly;
  div {
    max-width: 300px;
    border: 1px solid skyblue;
    border-radius: 5px;
    height: 424px;
    background-color: whitesmoke;
    img {
      width: 100%;
      height: 200px;
      background-size: cover;
      object-fit: cover;
      background-repeat: no-repeat;
    }
    p {
      padding-left: 10px;
      color: goldenrod;
    }
    h3 {
      padding-left: 10px;
      color: #101010;
      font-weight: bold;
    }
    button {
      width: 100%;
      line-height: 20px;
      border: none;
      background-color: #ccccff;
      color: #fff;
      text-transform: uppercase;
      &:hover {
        color: #6082b6;
        cursor: pointer;
      }
    }
  }
`;
const MainDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
const BottomDiv = styled.div`
  border-radius: 10px;
  margin-top: 25px;
  display: flex;
  flex-flow: row nowrap;
  height: 400px;
  div {
    background-color: #6082b6;
    color: #fff;
    padding: 10px;
    h4 {
      border-bottom: 2px solid #fff;
      padding-bottom: 20px;
    }
  }
  img {
    flex-basis: 60%;
    width: 100%;
    height: 100%;
  }
`;
export default Homepage;
