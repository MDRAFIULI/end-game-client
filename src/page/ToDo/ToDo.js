import React, { useEffect, useState } from 'react';
import Task from './Task';

const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState('');
    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks]);

    const handleTaskBlur = (e) => {
        setText(e.target.value)
    }
    const handleOnSubmit = e => {
        e.preventDefault();
        const task = { text };
        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('users added successful');
                // btn e click krar por inp er lekha sorate
                e.target.reset();

            })
    }
    return (
        <div className='mt-16'>
            <div className='ml-32'>
                <form onSubmit={handleOnSubmit} className='w-[50%]'>
                    <input onBlur={handleTaskBlur} type="text" placeholder="Type here" class="input input-bordered input-warning w-full max-w-7xl" />
                    <input className='btn' type="submit" value="Add Task" />
                </form>
            </div>
            <div className='mx-auto mt-16'>
                {tasks.map(task => <Task task={task} setTasks={setTasks} tasks={tasks}></Task>)}
            </div>
        </div>
    );
};

export default ToDo;