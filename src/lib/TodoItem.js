import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core'
import { 
  Delete as DeleteIcon,
  Edit as EditIcon
} from '@material-ui/icons';

export default function TodoItem(props) {
  return (
    <ListItem key={props.index}>
      <ListItemText>{props.todo}</ListItemText>
      <ListItemSecondaryAction onClick={props.onEdit}>
        <EditIcon />
      </ListItemSecondaryAction>
      <ListItemSecondaryAction onClick={props.onDelete}>
        <DeleteIcon />
      </ListItemSecondaryAction>
    </ListItem>
  )
}