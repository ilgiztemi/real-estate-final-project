import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import GlobalStyle from "./components/GlobalStyle";
import Footer from "./components/Footer";
import styled from "styled-components";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Adds from "./pages/Adds";
import Discover from "./pages/Discover";
import SingleAdd from "./pages/SingleAdd";
//this component has multiple paths that were mainly used in this project
function App() {
  return (
    <Main>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/adds" element={<Adds />} />
        <Route path="/services" element={<Discover />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/:add" element={<SingleAdd />} />
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
