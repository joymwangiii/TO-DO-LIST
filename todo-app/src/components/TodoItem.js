// src/components/TodoItem.js
import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

const TodoItem = ({ todo, deleteTodo, toggleComplete }) => {
  return (
    <ListItem style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <ListItemText primary={todo.title} secondary={new Date(todo.timestamp).toLocaleString()} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="complete" onClick={() => toggleComplete(todo._id)}>
          <CheckIcon color={todo.completed ? 'success' : 'inherit'} />
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo._id)}>
          <DeleteIcon color="error" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
