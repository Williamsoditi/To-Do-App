import { useState } from "react";

const Form = () => {
    const [todo, setTodo] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        settodos([...todos, todo]);
        setTodo("");
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit} className="form-control text-center">
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button type="submit" className="btn btn-sm btn-primary">Add</button>
            </form>
        </div>
     );
}
 
export default Form;