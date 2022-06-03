import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Create = ({ todos, setTodos, name }) => {
    console.log(name);
    const [todo, setTodo] = useState({
        title: "",
        desc: "",
    });
    const ChangeHandler = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
        let sendTodo = {
            id: uuidv4(),
            ...todo,
        };

        let newTodos = [...todos, sendTodo];
        localStorage.setItem("todos", JSON.stringify(newTodos));

        setTodos(newTodos);
        setTodo({ title: "", desc: "" });
    };

    return (
        <form onSubmit={HandleSubmit} className="w-50 m-auto">
            <input
                className="form-control"
                type="text"
                name="title"
                placeholder="Title"
                onChange={ChangeHandler}
                value={todo.title}
            />
            <input
                className="form-control mt-3 mb-3"
                type="text"
                name="desc"
                placeholder="Description"
                onChange={ChangeHandler}
                value={todo.desc}
            />
            <button className="btn btn-primary tomato">ADD TODO</button>
        </form>
    );
};

Create.defaultProps = {
    name: "Creating Todos",
};

export default Create;
