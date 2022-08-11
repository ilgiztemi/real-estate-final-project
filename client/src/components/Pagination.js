import React from "react";
import styled from "styled-components";
import { useAdds } from '../context/AddsContext'

const Pagination = () => {
    const {
        state: { adds, perPage }, actions: {paginate} } = useAdds();
    let number = [];
    let total = adds ? adds.length : 0;
    for (let i = 1; i < Math.ceil(total / perPage); i++) {
        number.push(i);
    }
    
    return (
        <Div>
            <ul>
                {number.map((el, ind) => (
                    <li key={el} onClick={() => paginate(el, ind)}>
                        {el}
                    </li>
                ))}
            </ul>
        </Div>
    );
};
const Div = styled.div`
    ul {
        display: flex;
        list-style: none;
        gap: 2px;
    }
    ul li {
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
        font-weight: lighter;
        background-color: #B6D0E2;
        color: #fff;
        padding: 5px;
        border-radius: 50%;
        width: 18px;
        text-align: center;
        &:hover {
            background-color: #40B5AD;
            color: #F0FFFF;
            cursor: pointer;
        }
    }
`;
export default Pagination;
