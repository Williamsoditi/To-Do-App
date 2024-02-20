import { useState } from "react";
import styles from "./form.module.css";

const Form = ({todos, settodos}) => {
    const [todo, setTodo] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        settodos([...todos, todo]);
        setTodo("");
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit} className={styles.toDoForm}>
                <div className={styles.inputContainer}>
                    <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} className={styles.modernInput} placeholder="Enter task here..." />
                    <button type="submit" className={styles.modernButton}>Add</button>
                </div>
            </form>
        </div>
     );
}
 
export default Form;