import { useState } from "react";

const Date = (props) => {
    const { mydate } = props;
    return (
        <>
            <h1>
                {mydate.toLocaleDateString("default", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                })}
            </h1>
        </>
    );
};

export default Date;
