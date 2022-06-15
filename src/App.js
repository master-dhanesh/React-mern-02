import React, { useState } from "react";
import Create from "./components/Create";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Show from "./components/Show";

import { Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import Notfound from "./components/Notfound";

import IndexContext from './context';

const App = () => {
    const [data, setData] = useState("Data to transfer")

    return (
        <div>

            <Navbar />
            
            <IndexContext value={{data, setData}}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/show" element={<Show />}>
                    <Route path="/show/:name" element={<Details />} />
                    {/* <Route path="/show/:name/*" element={<Notfound />} /> */}
                </Route>
                <Route path="*" element={<Notfound />} />
            </Routes>
            </IndexContext>
        </div>
    );
};

export default App;
