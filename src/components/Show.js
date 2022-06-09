import React from "react";
import { Link, Outlet } from "react-router-dom";

const Show = () => {
    return (
        <>
            <div className="p-5 container alert alert-info">
                <h1>This is Show page.</h1>
                <ol>
                    <li>
                        <Link to="/show/john">John Doe</Link>
                    </li>
                    <li>
                        <Link to="/show/anney">Anney Besent</Link>
                    </li>
                    <li>
                        <Link to="/show/json">Json</Link>
                    </li>
                </ol>
            </div>
            <Outlet />
        </>
    );
};

export default Show;
