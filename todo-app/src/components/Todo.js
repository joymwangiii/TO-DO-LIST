// src/components/Todo.js

import React from 'react';
import { Checkbox, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const Todo = ({ todo, fetchTodos }) => {
    const handleDelete = async () => {
        await axios.delete(`http://localhost:5000/api/todos/${todo._id}`);
        fetchTodos(); // Re-fetch todos after deleting
    };

    const handleToggle = async () => {
        await axios.patch(`http://localhost:5000/api/todos/${todo._id}`, {
            completed: !todo.completed,
        });
        fetchTodos(); // Re-fetch todos after toggling
    };

    return (
        <ListItem>
            <Checkbox
                checked={todo.completed}
                onChange={handleToggle}
            />
            <ListItemText primary={todo.title} />
            <IconButton onClick={handleDelete}>
                <DeleteIcon />
            </IconButton>
        </ListItem>
    );
};

export default Todo;
