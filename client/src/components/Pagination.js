import React from "react";
import styled from "styled-components";
import { useAdds } from "../context/AddsContext";

const Pagination = () => {
  const {
    state: { adds, perPage },
    actions: { paginate },
  } = useAdds();
  let number = [];
  let total = adds ? adds.length + 3 : 0;
  for (let i = 1; i < Math.ceil(total / perPage); i++) {
    number.push(i);
  }
  //this component generates number of pages dynamically based on the number of adds i have on my database
  return (
    <Div>
      <ul>
        {number.map((el, ind) => (
          <li key={el} onClick={() => paginate(ind)}>
            {el}
          </li>
        ))}
      </ul>
    </Div>
  );
};
const Div = styled.div`
  width: fit-content;
  margin: 0 auto;
  ul {
    display: flex;
    list-style: none;
    gap: 10px;
  }
  ul li {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-weight: lighter;
    background-color: #b6d0e2;
    color: #fff;
    padding: 10px;
    border-radius: 50%;
    width: 20px;
    text-align: center;
    &:hover {
      background-color: #40b5ad;
      color: #f0ffff;
      cursor: pointer;
    }
  }
`;
export default Pagination;
