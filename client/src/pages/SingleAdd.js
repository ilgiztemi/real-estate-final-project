import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAdds } from "../context/AddsContext";
import { TbBed } from "react-icons/tb";
import { TbBath } from "react-icons/tb";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";
import SinglePageMap from "../components/SinglePageMap";
//this component shows big sized add with google map based on selected add address
const SingleAdd = () => {
  const { add } = useParams();
  const navigate = useNavigate();
  const {
    state: { adds, edit, editAdd },
    actions: { deleteAnAdd, editAddFn, handleEditInput },
  } = useAdds();
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
            <Div>
              <SingleAddDiv key={el._id}>
                <ImgDiv>
                  {el.image.map((img) => (
                    <img src={img} alt="img" />
                  ))}
                </ImgDiv>

                <div>
                  {edit ? (
                    <>
                      <input
                        value={editAdd.price}
                        type="text"
                        placeholder="Price..."
                        onChange={handleEditInput("price")}
                      />
                      <h3>House for sale</h3>
                      <input
                        value={editAdd.street}
                        type="text"
                        placeholder="Street..."
                        onChange={handleEditInput("street")}
                      />
                      <input
                        value={editAdd.city}
                        type="text"
                        placeholder="City..."
                        onChange={handleEditInput("city")}
                      />
                    </>
                  ) : (
                    <>
                      <h4>{el.price}</h4>
                      <h3>House for sale</h3>
                      <p>{el.street}</p>
                      <p>{el.city}</p>
                    </>
                  )}
                  <BottomDiv>
                    <div>
                      <TbBed style={{ fontSize: "40px" }} />
                      <span>{el.bedrooms}</span>
                    </div>
                    <div>
                      <TbBath style={{ fontSize: "35px" }} />
                      <span>{el.bathrooms}</span>
                    </div>
                    {!edit ? (
                      <div onClick={() => editAddFn(el)}>
                        <FiEdit style={{ fontSize: "30px" }} />
                        <span>Edit</span>
                      </div>
                    ) : (
                      <div onClick={() => editAddFn(el)}>
                        <FiEdit style={{ fontSize: "30px" }} />
                        <button
                          style={{
                            border: "none",
                            background: "inherit",
                            fontSize: "20px",
                          }}
                        >
                          Save
                        </button>
                      </div>
                    )}
                    <div
                      onClick={() => {
                        deleteAnAdd(el._id);
                        navigate("/adds");
                      }}
                    >
                      <AiOutlineDelete style={{ fontSize: "30px" }} />
                      <span>Delete</span>
                    </div>
                  </BottomDiv>
                </div>
              </SingleAddDiv>
              <SinglePageMap center={el.center} />
            </Div>
          )
      )}
    </div>
  );
};
const Div = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 30px;
`;
const P = styled.p`
  padding-left: 30px;
  color: #fff;
  font-size: 25px;
  font-style: italic;
`;
const SingleAddDiv = styled.div`
  margin: 20px auto;
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
  div h3 {
    font-style: oblique;
    color: goldenrod;
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
