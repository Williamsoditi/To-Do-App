import ToDoItem from "./ToDoItem";
import "./toDoList.css"

const TodoList = ({ todos, settodos }) => {
    return (
        <div className="container mt-4 p-4 list">
            {todos.map((item) => (
                <ToDoItem key={item.name} item={item} todos={todos} settodos={settodos}/>
            ))}
        </div>
    );
}
 
export default TodoList;