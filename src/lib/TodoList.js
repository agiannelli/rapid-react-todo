import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Form from './Form';
import TodoItem from './TodoItem';

export default function TodoList(props) {
    return (
        <>
            <Form inputRef={props.textFieldRef} onAddClick={props.onAdd} />
            <Grid container justify="center">
                <Grid item xs={12} md={6}>
                    <List>
                        {props.todos.map((todo, index) => (
                            <TodoItem
                                key={index}
                                todo={todo}
                                onDelete={() => props.onDelete(index)}
                            />
                        ))}
                    </List>
                </Grid>
            </Grid>
        </>
    )
}