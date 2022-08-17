import { createGlobalStyle } from "styled-components";
//global stylings
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url('https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    background-size: cover;
    object-fit: cover;
    background-repeat: no-repeat;
    font-family: 'Poppins', sans-serif;
;
  }
`;

export default GlobalStyle;
