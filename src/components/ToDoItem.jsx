import styles from "./toDoItem.module.css"

const ToDoItem = ({ item, todos, settodos }) => {
    function handleDelete(item) {
        // console.log("Delete button clicked for item", item);
        settodos(todos.filter((todo) => todo !== item));
    }

    function handleClick(name) {
        const newArray = todos.map((todo) => todo.name === name ? { ...todo, done: !todo.done } : todo)
        settodos(newArray)
    }

    const strikeThrough = item.done ? styles.completed : ""

    return (
        <div className=" row item">
            <div className="col-sm-10 mt-3 fw-bold itemName"><h4 className={strikeThrough} onClick={() => { handleClick(item.name) }}>{item.name}</h4></div>
            <div className="col-sm-2">
                <button className="btn btn-sm btn-danger px-4 mb-1 mt-3 deleteBtn" onClick={() => handleDelete(item)}>X</button>
            </div>
            <hr className="mt-3" />
        </div>
    );
}

export default ToDoItem;