import { useState } from "react";

const Create = () => {
    const [todo, setTodo] = useState({
        title: "",
        desc: "",
    });
    const ChangeHandler = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(todo);
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
            <button className="btn btn-primary">ADD TODO</button>
        </form>
    );
};

export default Create;
