import { useRef, useState } from "react";
import Inputs from "./components/Inputs";

const App = () => {
    const [valid, setValid] = useState(false);

    const inputRef = useRef(null);
    // inputRef.current.style.color = "red";
    const ChangeHandler = (e) => {
        if (inputRef.current.value.length > 4) {
            setValid(false);
        } else {
            setValid(true);
        }
    };
    return (
        <div className="container mt-3 alert">
            <form>
                <input
                    type="text"
                    className="form-control w-25"
                    placeholder="Username"
                    ref={inputRef}
                    onChange={ChangeHandler}
                    name="username"
                />
                <Inputs
                    type="number"
                    ClassName="mt-3 form-control w-25"
                    placeholder="Contact Details"
                    mref={inputRef}
                    OnChange={ChangeHandler}
                    name="contact"
                />
                {valid && (
                    <p className="text-danger">
                        Usernane is required and need atleast 4 characters
                    </p>
                )}

                <button className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    );
};

export default App;
