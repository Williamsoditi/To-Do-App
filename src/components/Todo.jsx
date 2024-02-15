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
            <form onSubmit={handleSubmit}>
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
                <button type="submit">Add</button>
            </form>

            {todos.map((item) => (
                <ToDoItem key={item} item={item}/>
            ))}
        </div>
    ); 
}
 
export default Todo;