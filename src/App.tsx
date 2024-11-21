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
import Game from "./pages/Game";

function App() {

    const {getAllGames, listOfAllGames} = gameStore();

    useEffect(() => {
        if(listOfAllGames.length === 0){
            getAllGames();
        }
      }, []);

    return (
        <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/user" element={<User />} />
                <Route path="/game/:id" element={<Game />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
