import { useState } from "react";
import ToDoItem from "./ToDoItem";
const Todo = () => {

    const [todo, setTodo] = useState("");
    const [todos, settodos] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        settodos([...todos, todo]);
        setTodo("");
    }

    return (  
        <div>
            <form onSubmit={handleSubmit} className="form-control text-center">
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
                <button type="submit" className="btn btn-sm btn-primary">Add</button>
            </form>

            {todos.map((item) => (
                <ToDoItem key={item} item={item}/>
            ))}
        </div>
    ); 
}
 
export default Todo;