import "./toDoItem.css"

const ToDoItem = ({ item, todos, settodos }) => {
    function handleDelete(item) {
        console.log("Delete button clicked for item", item);
        settodos(todos.filter((todo) => todo !== item));
    }
    return ( 
        <div className=" row item">
            <div className="col-sm-10 itemName">{item}</div>
            <div className="col-sm-2">
                <button className="btn btn-sm btn-danger px-4 mb-1 deleteBtn" onClick={()=>handleDelete(item)}>X</button>
            </div>
            <hr className="mt-3"/>
        </div>
     );
}
 
export default ToDoItem;