import React from "react";
import { useParams } from "react-router-dom";
import { useAdds } from "../context/AddsContext";
import { TbBed } from "react-icons/tb";
import { TbBath } from "react-icons/tb";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";

const SingleAdd = () => {
  const { add } = useParams();
  console.log(add);
  const {
    state: { adds },
  } = useAdds();
  console.log(adds);
  if (!adds) {
    return (
      <div>
        <P>Loading...</P>
      </div>
    );
  }
  return (
    <div>
      {adds.map(
        (el) =>
          el._id === parseInt(add) && (
            <SingleAddDiv key={el._id}>
              <ImgDiv>
                {el.image.map((img) => (
                  <img src={img} alt="img" />
                ))}
              </ImgDiv>

              <div>
                <h4>{el.price}</h4>
                <h3>House for sale</h3>
                <p>{el.street}</p>
                <p>{el.city}</p>
                <BottomDiv>
                  <div>
                    <TbBed style={{ fontSize: "40px" }} />
                    <span>{el.bedrooms}</span>
                  </div>
                  <div>
                    <TbBath style={{ fontSize: "40px" }} />
                    <span>{el.bathrooms}</span>
                  </div>
                  <div onClick={() => console.log('edit button')}>
                    <FiEdit style={{ fontSize: "40px" }} />
                    <span>Edit</span>
                  </div>
                  <div onClick={() => console.log('delete button')}>
                    <AiOutlineDelete style={{ fontSize: "40px" }} />
                    <span>Delete</span>
                  </div>
                </BottomDiv>
              </div>
            </SingleAddDiv>
          )
      )}
    </div>
  );
};
const P = styled.p`
  padding-left: 30px;
  color: #fff;
  font-size: 25px;
  font-style: italic;
`;
const SingleAddDiv = styled.div`
  margin: 0 auto;
  width: 100%;
  flex-basis: 30%;
  border: 2px solid azure;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 0;
  height: 650px;
  max-width: 500px;
  &:hover {
    background-color: #b6d0e2;
    cursor: pointer;
    color: white;
  }
  img {
    width: 100%;
    min-width: 280px;
    height: 360px;
    background-size: cover;
    object-fit: cover;
    background-repeat: no-repeat;
  }
  div {
    padding: 10px;
    h4,
    h3,
    p {
      margin: 0;
      padding: 0;
    }
  }
`;
const BottomDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    span {
      font-size: 20px;
      font-weight: bolder;
    }
  }
`;
const ImgDiv = styled.div`
  overflow-y: scroll;
  height: 350px;
`;
export default SingleAdd;
