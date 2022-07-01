import React from 'react';

const Task = ({ task }) => {
    const { text } = task;
    return (
        <div className='ml-32 mt-4 bg-red-400 rounded-md w-[25%] p-8'>
            <input type="checkbox" name="" id="" />
            <span className='ml-4 text-white'>{text}</span>
        </div>
    );
};

export default Task;