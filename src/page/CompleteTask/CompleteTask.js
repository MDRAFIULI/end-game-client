import React, { useEffect, useState } from 'react';
import Task from '../ToDo/Task';

const CompleteTask = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/complete')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks]);
    return (
        <div>
            <div className='mx-auto mt-16'>
                {tasks.map(task => <Task task={task}></Task>)}
            </div>
        </div>
    );
};

export default CompleteTask;