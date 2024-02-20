import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

const Todo = () => {
    const [todos, settodos] = useState([]);

    return (  
        <div>
            <Form todos={todos} settodos={settodos}/>
            <TodoList todos={todos} />
        </div>
    ); 
}
 
export default Todo;