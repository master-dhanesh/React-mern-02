import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

const App = () => {
    const [url, setUrl] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();
        const newData = { url, _id: nanoid() };
        console.log(newData);
    };

    return (
        <div>
            <form
                onSubmit={SubmitHandler}
                className="container mt-5 m-auto w-50 d-flex justify-content-center"
            >
                <input
                    type="url"
                    className="w-50 me-3 form-control"
                    placeholder="Image URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button className="btn btn-dark tomato">Add Image</button>
            </form>
        </div>
    );
};

export default App;
