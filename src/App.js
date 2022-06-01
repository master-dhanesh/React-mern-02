import React from "react";
import Create from "./Components/Create";
import NavWrapper from "./helpers/NavWrapper";

const App = () => {
    return (
        <NavWrapper>
            This is Casual Data
            <Create />
        </NavWrapper>
    );
};

export default App;
