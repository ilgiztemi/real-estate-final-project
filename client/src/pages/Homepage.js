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
  //this page is visible both for users who signed in and for others
  return (
    <Div>
      <TopDiv>
        <h1>FINAL</h1>
      </TopDiv>
      <SecondDiv>
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
  align-items: center;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 350px;
  gap: 20px;
`;
const TopDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 300px;
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
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const BottomDiv = styled.div`
  border-radius: 10px;
  margin-top: 25px;
  display: flex;
  flex-flow: row nowrap;
  height: 420px;
  width: 100%;
  max-width: 945px;
  margin: auto;
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
    width: 100%;
    max-width: 500px;
    height: 100%;
  }
`;
export default Homepage;
