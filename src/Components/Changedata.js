import React from "react";

const Changedata = (props) => {
    const { data, setData, children } = props;
    // const handleData = () => {
    //     changeData("Data from CHangeData.js");
    // };

    return (
        <>
            {/* <button onClick={handleData}>Click to change data</button> */}
            <button onClick={() => setData("Changedata.js Data")}>
                Click to change data
            </button>
            <h4>{data}</h4>
            <p>{children}</p>
        </>
    );
};

export default Changedata;
