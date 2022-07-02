import React from 'react';
import { useParams } from 'react-router-dom';

const Edit = () => {

    const handleEditTask = event => {
        event.preventDefault();
        const text = event.target.task.value;

        const updatedTask = { text };

        // send data to the server
        const url = `http://localhost:5000/tasks/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('users added successfully!!!');
                event.target.reset();
            })
    }

    const { id } = useParams();
    return (
        <div>
            <p>id: {id}</p>

            <form onSubmit={handleEditTask}>
                <input type="text" name="task" placeholder='Task' required />
                <br />
                <input className='btn btn-md' type="submit" value="EDIT TASK" />
            </form>
        </div>
    );
};

export default Edit;