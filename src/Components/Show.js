import React from "react";
import PropTypes from "prop-types";

const Show = ({ todos, setTodos }) => {
    const DeleteHandler = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    let todolist = <p className="text-center text-muted">ALL TASKS DONE!</p>;

    if (todos.length !== 0) {
        todolist = todos.map((todo) => (
            <label key={todo.id} className="list-group-item">
                <span onClick={() => DeleteHandler(todo.id)}>❌</span>
                {"  "}
                {todo.title} | {todo.desc}
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
