import { useState } from "react";
import Create from "./Components/Create";
import Show from "./Components/Show";

const App = () => {
    const [todos, setTodos] = useState([
        { id: "1", title: "Todo1", desc: "Description1" },
        { id: "2", title: "Todo2", desc: "Description2" },
        { id: "3", title: "Todo3", desc: "Description3" },
        { id: "4", title: "Todo4", desc: "Description4" },
        { id: "5", title: "Todo5", desc: "Description5" },
        { id: "6", title: "Todo6", desc: "Description6" },
    ]);

    return (
        <div className="container mt-5 p-2">
            <Create todos={todos} setTodos={setTodos} />
            <hr />
            <Show todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default App;
