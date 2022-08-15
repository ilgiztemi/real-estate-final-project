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
  return (
    <div>
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
    </div>
  );
};
const FlexDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  div {
    flex-basis: 48%;
  }
`
const IconDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 30px;
  width: 80%;
  row-gap: 10px;
  background-color: #101010;
  color: #fff;
  /* height: 80px; */
`
export default About;
