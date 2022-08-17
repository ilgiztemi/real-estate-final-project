import React from "react";
import { Link } from "react-router-dom";
import { TbBoxPadding } from "react-icons/tb";
import { TbMap2 } from "react-icons/tb";
import { CgNotes } from "react-icons/cg";
import styled from "styled-components";
import Pagination from "../components/Pagination";
import { useAdds } from "../context/AddsContext";
import { TbBed } from "react-icons/tb";
import { TbBath } from "react-icons/tb";
import { AiOutlineFileAdd } from "react-icons/ai";
import Map from "../components/Map";
const Adds = () => {
  const {
    state: { adds, page, perPage, tabs },
    actions: { tabsHandler, handleSubmitForm },
  } = useAdds();
  if (!adds) {
    return (
      <div>
        <P>Loading...</P>
      </div>
    );
  }
  return (
    //this is like navbar for main part of the page
    <div>
      <P>{adds.length} properties were found!</P>
      <TopDiv>
        <div onClick={() => tabsHandler("gallery")}>
          <TbBoxPadding />
          <span>Gallery</span>
        </div>
        <div onClick={() => tabsHandler("maps")}>
          <TbMap2 />
          <span>Map</span>
        </div>
        <div onClick={() => tabsHandler("summary")}>
          <CgNotes />
          <span>Summary</span>
        </div>
        <div onClick={() => tabsHandler("add")}>
          <AiOutlineFileAdd />
          <span>Add</span>
        </div>
      </TopDiv>
      <>
        {tabs === "gallery" && (
          //gallery shows all adds with dynamic pagination feature
          <StyledDiv>
            <Pagination />
            <AddsDiv>
              {adds.slice(page * perPage, (page + 1) * perPage).map((el) => (
                <Link
                  key={el._id}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  to={`/${el._id}`}
                >
                  <SingleAddDiv>
                    <img src={el.image[0]} alt="img" />
                    <div>
                      <h4>{el.price}</h4>
                      <h3>House for sale</h3>
                      <p>{el.street}</p>
                      <p>{el.city}</p>
                      <BottomDiv>
                        <div>
                          <TbBed
                            style={{
                              fontSize: "40px",
                            }}
                          />
                          <span>{el.bedrooms}</span>
                        </div>
                        <div>
                          <TbBath
                            style={{
                              fontSize: "35px",
                            }}
                          />
                          <span>{el.bathrooms}</span>
                        </div>
                      </BottomDiv>
                    </div>
                  </SingleAddDiv>
                </Link>
              ))}
            </AddsDiv>
          </StyledDiv>
        )}
        {tabs === "maps" && (
          //maps shows a google map with dynamic location of all adds coming from data base
          <StyledDiv>
            <Map />
          </StyledDiv>
        )}
        {tabs === "summary" && (
          //summary has nothing yet
          <StyledDiv>
            <h1>Summary</h1>
          </StyledDiv>
        )}
        {tabs === "add" && (
          //add shows you a form where you can create a new add which will then saved in database and shown in the list of all adds
          <StyledDiv>
            <StyledForm
              onSubmit={(e) => {
                handleSubmitForm(e);
                tabsHandler("gallery");
              }}
            >
              <h1>Create An Add</h1>
              <div>
                <input type="text" placeholder="Image url..." />
                <label>Image Url</label>
              </div>
              <div>
                <input type="text" placeholder="Price..." />
                <label>Price</label>
              </div>
              <div>
                <input type="addres" placeholder="Address..." />
                <label>Address</label>
              </div>
              <div>
                <input type="text" placeholder="City..." />
                <label>City</label>
              </div>
              <div>
                <input type="text" placeholder="Postal code..." />
                <label>Postal Code</label>
              </div>
              <div>
                <input type="text" placeholder="Province..." />
                <label>Province</label>
              </div>
              <div>
                <input type="text" placeholder="Bathrooms..." />
                <label>Bathrooms</label>
              </div>
              <div>
                <input type="text" placeholder="Bedrooms..." />
                <label>Bedrooms</label>
              </div>
              <div>
                <input type="text" placeholder="Lattitude..." />
                <label>Latitude</label>
              </div>
              <div>
                <input type="text" placeholder="Longitude..." />
                <label>Longitude</label>
              </div>
              <button type="submit">SUBMIT</button>
            </StyledForm>
          </StyledDiv>
        )}
      </>
    </div>
  );
};
const P = styled.p`
  padding-left: 30px;
  color: white;
  font-size: 25px;
  font-style: italic;
`;
const TopDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
  align-items: center;
  gap: 10px;
  border: 1px solid white;
  color: #101010;
  padding-left: 10px;
  div {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    padding: 5px;
    background-color: white;
    border-radius: 30px;
    &:hover {
      background-color: lightblue;
      color: white;
      border-radius: 30px;
    }
  }
`;
const AddsDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 320px;
  gap: 5px;
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
  height: 450px;
  max-width: 280px;
  &:hover {
    background-color: #b6d0e2;
    cursor: pointer;
    color: white;
  }
  img {
    width: 100%;
    min-width: 280px;
    height: 230px;
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
const StyledDiv = styled.div`
  margin-bottom: 100px;
  height: 100vh;
`;
const StyledForm = styled.form`
  border: 1px solid lightblue;
  width: 80%;
  height: 500px;
  margin: 20px auto;
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
  border-radius: 20px;
  padding: 10px;
  h1 {
    color: #008080;
    text-align: center;
    font-weight: bold;
    text-shadow: 3px 3px 5px;
  }
  div {
    width: 90%;
    margin: auto;
    input {
      color: #101010;
      width: 60%;
      outline: none;
      border: none;
      line-height: 25px;
      padding-left: 10px;
      border-radius: 5px;
    }
    label {
      margin-left: 10px;
      color: #40e0d0;
      font-weight: bolder;
    }
  }
  button {
    line-height: 35px;
    width: 90%;
    margin: auto;
    border: none;
    border-radius: 10px;
    background-color: #008080;
    color: azure;
    font-size: 20px;
    &:hover {
      cursor: pointer;
      background-color: #40e0d0;
    }
  }
`;
export default Adds;
