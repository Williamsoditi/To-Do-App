import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";


const Todo = () => {
    const [todos, settodos] = useState([]);
    const completedTodos = todos.filter((todo)=> todo.done).length
    const totalTasks = todos.length

    return (  
        <div>
            <Form todos={todos} settodos={settodos}/>
            <TodoList todos={todos} settodos={settodos}/>
            <Footer completedTodos = {completedTodos} totalTasks={totalTasks}/>
        </div>
    ); 
}
 
export default Todo;