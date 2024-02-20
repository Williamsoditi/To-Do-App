import "./toDoItem.css"

const ToDoItem = ({ item }) => {
    return ( 
        <div className="item">
            <div className="itemName">{item}</div>
            <hr />
        </div>
     );
}
 
export default ToDoItem;