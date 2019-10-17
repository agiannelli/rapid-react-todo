import React, { useState, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TodoList from './lib/TodoList';

function App() {
  const textFieldRef = useRef(null);
  const [todos, setTodos] = useState(['test1', 'test2', 'test3']);

  function handleAddClick() {
    const newTodo = textFieldRef.current.value;
    if (newTodo.length > 0) {
      setTodos([...todos, newTodo]);
      textFieldRef.current.value = '';
    }
  }

  function handleDeleteClick(index) {
    setTodos(oldTodos => oldTodos.filter((e, i) => i !== index));
  }

  return (
    <>
      <Grid container justify="center">
        <Grid item xs={6} md={2}>
          <Typography variant="h3" gutterBottom>Todo List</Typography>
        </Grid>
      </Grid>
      <TodoList
        textFieldRef={textFieldRef}
        todos={todos}
        onAdd={handleAddClick}
        onDelete={handleDeleteClick}
      />
    </>
  );
}

export default App;
