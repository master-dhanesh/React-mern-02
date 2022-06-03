import { useState } from "react";
import Create from "./Components/Create";
import Show from "./Components/Show";
import "./App.css";

const App = () => {
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todos")) || []
    );

    return (
        <div className="container mt-5 p-2">
            <Create todos={todos} setTodos={setTodos} />
            <hr />
            <Show todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default App;
