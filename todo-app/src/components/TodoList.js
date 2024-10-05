// src/components/TodoList.js

import React, { useEffect } from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox, Typography, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

const TodoList = ({ todos, getTodos }) => {
    // You don't need to fetch todos here since you're passing them as a prop
    // useEffect(() => {
    //     fetchTodos();
    // }, []);

    const handleToggle = async (id, completed) => {
        await axios.patch(`http://localhost:5000/api/todos/${id}`, { completed: !completed });
        getTodos(); // Refresh the list
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/todos/${id}`);
        getTodos(); // Refresh the list
    };

    return (
        <List>
            {todos.length > 0 ? (
                todos.map((todo) => (
                    <ListItem key={todo._id} dense button>
                        <Checkbox
                            edge="start"
                            checked={todo.completed}
                            onChange={() => handleToggle(todo._id, todo.completed)}
                        />
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item xs>
                                <ListItemText 
                                    primary={<span style={{ fontWeight: 'bold', textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</span>}
                                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} 
                                />
                                <Typography variant="caption" color="textSecondary">
                                    {new Date(todo.createdAt).toLocaleString()} {/* Displaying the timestamp */}
                                </Typography>
                            </Grid>
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(todo._id)}>
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="edit">
                                    <EditIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </Grid>
                    </ListItem>
                ))
            ) : (
                <Typography variant="body1" align="center">
                    No todos available.
                </Typography>
            )}
        </List>
    );
};

export default TodoList;
