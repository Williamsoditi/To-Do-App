import { useState } from "react";
import "./form.css";

const Form = ({ todos, settodos }) => {
    // const [todo, setTodo] = useState("");
    const [todo, setTodo] = useState({ name:"", done:false });



    function handleSubmit(e) {
        e.preventDefault();
        settodos([...todos, todo]);
        setTodo({ name: "", done: false });
    }

    return (
        <div className="container text-center">
            <form onSubmit={handleSubmit} className="form-control mt-3 p-4 inputForm">
                <div className="row">
                    <input type="text" value={todo.name} onChange={(e) => setTodo({ name:e.target.value, done:false })} placeholder="Enter task here..."  className="col-sm-10 modernInput"/>
                    <button type="submit" className="btn btn-warning mt-3 col-sm-2 modernButton">Add Task</button>
                </div>
            </form>
        </div>
    );
}

export default Form;