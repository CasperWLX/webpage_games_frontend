import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Navbar from "./components/global_components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import User from "./pages/User"
import { useEffect } from "react";
import gameStore from "./store/GameStore";

function App() {

    const {getAllGames} = gameStore();

    useEffect(() => {
        getAllGames();
      }, []);

    return (
        <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/user" element={<User />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
