import styles from "./header.module.css";

const Header = () => {
    return ( 
        <div className={styles.header}>
            <h3 className="display-2">To-Do List</h3>
        </div>
     );
}
 
export default Header;