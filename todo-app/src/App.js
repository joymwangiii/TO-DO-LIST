// src/App.js

import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { Container } from '@mui/material';
import axios from 'axios';

const App = () => {
    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        const response = await axios.get('http://localhost:5000/api/todos');
        setTodos(response.data);
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <Container>
            <h1 style={{ textAlign: 'center', fontWeight: 'bold', color: '#C8A2E0' }}>HEY, LET'S MAKE A TO-DO LIST</h1> 
            <AddTodo getTodos={getTodos} />
            <TodoList todos={todos} getTodos={getTodos} />
        </Container>
    );
};

export default App;
