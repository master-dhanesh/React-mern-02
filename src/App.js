import { useState } from "react";
import Changedata from "./Components/Changedata";
import MyDate from "./Components/Date";
import MyTime from "./Components/Time";

const App = () => {
    const [toggle, setToggle] = useState(false);
    const [datetime, setDatetime] = useState(new Date());

    const [data, setData] = useState("App.js Data");

    const toggletime = () => {
        setToggle(!toggle);
    };

    // const changeData = (newdata) => {
    //     setData(newdata);
    // };

    setInterval(() => {
        setDatetime(new Date());
    }, 1000);

    return (
        <div className="container mt-5 p-5 bg-light">
            <button onClick={toggletime} className="btn btn-dark">
                {toggle ? "Hide Time" : "Show Time"}
            </button>
            <hr />

            {toggle ? (
                <>
                    <MyDate mydate={datetime} />
                    <MyTime mytime={datetime} />
                    <small>Live date & time</small>
                </>
            ) : (
                <h3>Click to watch the live time</h3>
            )}
            <hr />
            <Changedata data={data} setData={setData}>
                Extra data of Change Data JS file
            </Changedata>
        </div>
    );
};

export default App;
