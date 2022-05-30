import { useState } from "react";

const Time = () => {
    const [date, setDate] = useState(new Date().toLocaleTimeString());

    setInterval(() => {
        setDate(new Date().toLocaleTimeString());
    }, 1000);
    return (
        <>
            <h1>{date}</h1>
            <p>Live Time Status</p>
        </>
    );
};

export default Time;
