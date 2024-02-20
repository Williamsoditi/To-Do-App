import { useState } from "react";
import "./form.css";

const Form = ({ todos, settodos }) => {
    const [todo, setTodo] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        settodos([...todos, todo]);
        setTodo("");
    }

    return (
        <div className="container text-center">
            <form onSubmit={handleSubmit} className="form-control mt-3 p-4 inputForm">
                <div className="row">
                    <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Enter task here..."  className="col-sm-10 modernInput"/>
                    <button type="submit" className="btn btn-warning mt-3 col-sm-2 modernButton">Add Task</button>
                </div>
            </form>
        </div>
    );
}

export default Form;