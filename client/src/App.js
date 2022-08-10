import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Navbar from "./components/Navbar";
import GlobalStyle from "./components/GlobalStyle";
import Footer from "./components/Footer";
import styled from "styled-components";
import Homepage from "./pages/Homepage";

function App() {
    return (
        <Main>
            <GlobalStyle />
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            <Footer />
        </Main>
    );
}
const Main = styled.main`
    min-width: 100vw;
    min-height: 100vh;
`;
export default App;
