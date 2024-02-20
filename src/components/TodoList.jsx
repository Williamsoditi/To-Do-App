import ToDoItem from "./ToDoItem";
import "./toDoList.css"

const TodoList = ({ todos, settodos }) => {
    const sortedTodos = todos.slice().sort((a,b) => Number(a.done) - Number(b.done));
    return (
        <div className="container mt-4 p-4 list">
            {sortedTodos.map((item) => (
                <ToDoItem key={item.name} item={item} todos={todos} settodos={settodos}/>
            ))}
        </div>
    );
}
 
export default TodoList;