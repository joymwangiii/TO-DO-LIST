// src/components/AddTodo.js

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const AddTodo = ({ getTodos }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title) return; // Prevent adding empty todos

        try {
            // Send POST request to add a new todo
            await axios.post('http://localhost:5000/api/todos', { title });
            setTitle(''); // Clear the input field after adding

            // Call getTodos to refresh the todo list
            getTodos();
        } catch (error) {
            console.error("Error adding todo:", error); // Log any errors
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                value={title}
                fullWidth
                onChange={(e) => setTitle(e.target.value)}
                label="Add a new Todo"
                variant="outlined"
                size="small"
                style={{ margin: 'o auto', maxWidth: '300px'}}
            />
            <Button type="submit" variant="contained" color="secondary" style={{backgroundColor: '#9370DB'}}>
                Add
            </Button>
        </form>
    );
};

export default AddTodo;
