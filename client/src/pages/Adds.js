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
const Adds = () => {
    const {
        state: { adds, page, perPage },
    } = useAdds();
    let newAdds = adds.slice(page * perPage, (page + 1) * perPage);
    return (
        <div>
            <Link></Link>
            <p>10 properties were found</p>
            <TopDiv>
                <div>
                    <TbBoxPadding />
                    <span>Gallery</span>
                </div>
                <div>
                    <TbMap2 />
                    <span>Map</span>
                </div>
                <div>
                    <CgNotes />
                    <span>Summary</span>
                </div>
            </TopDiv>
            <div>
                <Pagination />
                <AddsDiv>
                    {newAdds
                        
                        .map((el) => (
                                <SingleAddDiv key={el._id}>
                                    <img src={el.image[0]} alt="img" />
                                    <div>
                                        <h4>{el.price}</h4>
                                        <h3>House for sale</h3>
                                        <p>{el.street}</p>
                                        <p>{el.city}</p>
                                        <BottomDiv>
                                            <div>
                                                <TbBed
                                                    style={{ fontSize: "40px" }}
                                                />
                                                <span>{el.bedrooms}</span>
                                            </div>
                                            <div>
                                                <TbBath
                                                    style={{ fontSize: "40px" }}
                                                />
                                                <span>{el.bathrooms}</span>
                                            </div>
                                        </BottomDiv>
                                    </div>
                                </SingleAddDiv>
                        ))}
                </AddsDiv>
            </div>
        </div>
    );
};
const TopDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    align-items: center;
    gap: 10px;
    border: 1px solid white;
    color: #fff;
    div {
        display: flex;
        align-items: center;
        gap: 5px;
    }
`;
const AddsDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
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
    max-width: 300px;
    &:hover {
        background-color: #b6d0e2;
        cursor: pointer;
        color: white;
    }
    img {
        width: 100%;
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
export default Adds;
