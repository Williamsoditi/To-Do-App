import ToDoItem from "./ToDoItem";

const TodoList = ({ todos }) => {
    return (
        <div>
            {todos.map((item) => (
                <ToDoItem key={item} item={item} />
            ))}
        </div>
    );
}
 
export default TodoList;