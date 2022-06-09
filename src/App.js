import React from "react";
import Create from "./components/Create";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Show from "./components/Show";

import { Routes, Route } from "react-router-dom";
import Details from "./components/Details";

const App = () => {
    return (
        <div>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/show" element={<Show />}>
                    <Route path="/show/:name" element={<Details />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
