import './footer.css';

const Footer = ({ completedTodos, totalTasks }) => {
    return (
        <div className="sticky-bottom text-center p-3 bg-success bg-gradient">
            <h3 className='fw-bold text-white'>
                Completed Tasks : {completedTodos}
            </h3>
            <h3 className='fw-bold text-white'>Total Tasks : {totalTasks}</h3>
        </div>
    );
}

export default Footer;