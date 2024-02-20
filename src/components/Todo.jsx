import { useState } from "react";
import ToDoItem from "./ToDoItem";
import Form from "./Form";

const Todo = () => {

    const [todos, settodos] = useState([]);

    

    return (  
        <div>
            <Form />
            {todos.map((item) => (
                <ToDoItem key={item} item={item}/>
            ))}
        </div>
    ); 
}
 
export default Todo;