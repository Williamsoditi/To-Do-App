import ToDoItem from "./ToDoItem";
import "./toDoList.css"

const TodoList = ({ todos }) => {
    return (
        <div className="container mt-4 p-4 list">
            {todos.map((item) => (
                <ToDoItem key={item} item={item} />
            ))}
        </div>
    );
}
 
export default TodoList;