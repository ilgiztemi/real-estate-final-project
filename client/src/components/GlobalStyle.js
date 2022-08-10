import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url('https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?cs=srgb&dl=pexels-pixabay-290275.jpg&fm=jpg');
    background-size: cover;
    object-fit: cover;
    background-repeat: no-repeat;
    font-family: 'Poppins', sans-serif;
;
  }
`;
 
export default GlobalStyle;