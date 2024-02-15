import { useState } from "react";
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
            {console.log(todos)}
        </div>
    );
}
 
export default Todo;