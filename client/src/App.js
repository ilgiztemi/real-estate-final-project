import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Navbar from "./components/Navbar";

function App() {

    return (
        <main>
            <Navbar />
            <Profile />
        </main>
    );
}

export default App;
