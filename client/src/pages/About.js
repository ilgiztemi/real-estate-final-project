import React from "react";
import {
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramLine,
  RiPinterestFill,
  RiYoutubeLine,
  RiWechatFill,
} from "react-icons/ri";
import { SiTiktok, SiVivaldi } from "react-icons/si";
import styled from "styled-components";

const About = () => {
  //about page with some paragraph and images
  return (
    <MainDiv>
      <h2>About us</h2>
      <FlexDiv>
        <div>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            laborum!
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            enim assumenda rem pariatur ullam, laborum consequuntur in iste ad
            vero tempora sequi aliquam sit, asperiores maxime quia architecto
            possimus, nobis neque debitis quod? Cum ut omnis perferendis
            consequuntur! Alias ullam quisquam error aliquam consequuntur quis
            inventore quas ipsam totam perferendis.
          </p>
        </div>
        <div>
          <button>BECOME A MEMBER</button>
          <h4>
            ALREADY A MEMBER? <span>SIGN IN</span>
          </h4>
          <IconDiv>
            <RiFacebookFill />
            <RiTwitterFill />
            <RiInstagramLine />
            <SiTiktok />
            <RiPinterestFill />
            <RiYoutubeLine />
            <SiVivaldi />
            <RiWechatFill />
          </IconDiv>
        </div>
      </FlexDiv>
      <img src="https://images.pexels.com/photos/383568/pexels-photo-383568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="about-img" />
    </MainDiv>
  );
};
const MainDiv = styled.div`
  letter-spacing: 0;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 300px;
  h2 {
    font-weight: bold;
    font-size: 30px;
  }
  img {
    width: 80%;
    background-size: cover;
    object-fit: cover;
    background-repeat: no-repeat;
  }
`
const FlexDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  div {
    flex-basis: 40%;
    button {
      border: none;
      background-color: #101010;
      color: #fff;
      padding: 15px;
      border-radius: 10px;
    }
    h4 {
      font-weight: bold;
      font-size: 20px;
    }
    h4 span {
      border-bottom: 1px solid #101010;
    }
  }
`
const IconDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 20px;
  padding-left: 50px;
  width: 60%;
  row-gap: 10px;
  background-color: #101010;
  color: #fff;
  font-size: 25px;
  height: 100px;
  text-align: center;
`
export default About;
