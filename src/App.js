import React, { useState, createContext } from "react";
import Create from "./components/Create";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Show from "./components/Show";

import { Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import Notfound from "./components/Notfound";


export const ContextData = createContext();

const App = () => {
    const [data, setData] = useState("Data to transfer")

    return (
        <div>

            <Navbar />
            
            <ContextData.Provider value={{data, setData}}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/show" element={<Show />}>
                    <Route path="/show/:name" element={<Details />} />
                    {/* <Route path="/show/:name/*" element={<Notfound />} /> */}
                </Route>
                <Route path="*" element={<Notfound />} />
            </Routes>
            </ContextData.Provider>
        </div>
    );
};

export default App;
