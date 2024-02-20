import './footer.css';

const Footer = ({ completedTodos, totalTasks }) => {
    return (
        <div className="fixed-bottom text-center p-3 bg-warning">
            <h3 className='fw-bold'>
                Completed Tasks : {completedTodos}
            </h3>
            <h3 className='fw-bold'>Total Tasks : {totalTasks}</h3>
        </div>
    );
}

export default Footer;