import { useState } from "react";
import Time from "./Components/Time";

const App = () => {
    const [toggle, setToggle] = useState(false);

    const toggletime = () => {
        setToggle(!toggle);
    };
    return (
        <div className="container mt-5 p-5 bg-light">
            <button onClick={toggletime} className="btn btn-dark">
                {toggle ? "Hide Time" : "Show Time"}
            </button>
            <hr />

            {toggle ? <Time /> : <h3>Click to watch the live time</h3>}
        </div>
    );
};

export default App;
