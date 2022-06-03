import React from "react";
import PropTypes from "prop-types";

import css from "./Show.module.css";

const Show = ({ todos, setTodos }) => {
    const DeleteHandler = (id) => {
        let filtertodos = todos.filter((todo) => todo.id !== id);
        localStorage.setItem("todos", JSON.stringify(filtertodos));
        setTodos(filtertodos);
    };

    const style = {
        color: "tomato",
        font: "500 1.5vmax montserrat",
    };

    let todolist = <p className="text-center text-muted">ALL TASKS DONE!</p>;

    if (todos.length !== 0) {
        todolist = todos.map((todo) => (
            <label key={todo.id} className={`list-group-item ${css.arrange}`}>
                <span style={style}>
                    {todo.title} | {todo.desc}
                </span>
                <span onClick={() => DeleteHandler(todo.id)}>❌</span>
            </label>
        ));
    }

    return (
        <div className="list-group m-auto w-50">
            <h3 className="mb-3">Task to be done 👍</h3>
            {todolist}
        </div>
    );
};

Show.propTypes = {
    todos: PropTypes.array,
    setTodos: PropTypes.func,
};

export default Show;
