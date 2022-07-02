import React from 'react';
import { Link } from "react-router-dom";

const Task = ({ task, setTasks, tasks }) => {
    const { text, _id } = task;

    const handleOnClick = e => {
        e.preventDefault();
        const task = { text: text };
        fetch('http://localhost:5000/complete', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('users added successful');
            })





        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log('deleting user with id, ', _id);
            const url = `http://localhost:5000/tasks/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const remaining = tasks.filter(task => task._id !== _id);
                        setTasks(remaining);
                    }
                })
        }


    }
    return (
        <div className='ml-32 mt-4 bg-red-400 rounded-md w-[25%] p-8'>
            <input onClick={handleOnClick} type="checkbox" name="" id="" />
            <span className='ml-4 text-white'>{text}</span>
            <br />
            <Link to={`/edit/${_id}`} className='btn btn-sm'><button>Edit</button></Link>
        </div>
    );
};

export default Task;