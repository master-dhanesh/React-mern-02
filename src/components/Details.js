import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const Details = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { name } = useParams();

    const NavigateHandler = () => {
        // take form data from state
        // send form to api
        // if api requies success ?
        navigate("/show");
        // else
        // ..
    };

    return (
        <div className="p-5 container alert alert-info">
            <h1>This is Details of {name}</h1>
            <button onClick={NavigateHandler} className="btn btn-primary">
                Show Page
            </button>
        </div>
    );
};

export default Details;
