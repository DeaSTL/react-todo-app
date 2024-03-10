import {Button,FormCheck}from 'react-bootstrap';

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import { Item } from '../Types'

import { faTrash } from '@fortawesome/free-solid-svg-icons'

interface ITodoItem {
  item: Item,
  deleteTodo: (id:number) => void
  toggleDone: (id:number) => void
}

function TodoItem({ item, deleteTodo, toggleDone}:ITodoItem) {


  const doneStyles = {
      textDecoration: item.status ? 'line-through' : '',
      textDecorationThickness: item.status ? '1.5px' : '',
      color: item.status ? 'gray' : ''
    }

  return (
    <tr>
      <td>
        <FormCheck checked={item.status} onChange={()=>{toggleDone(item.id)}}/>
      </td>
      <td style={doneStyles}>{item.text}</td>
      <td>
        <Button variant="" onClick={()=>{deleteTodo(item.id)}}>
          <FontAwesomeIcon icon={faTrash}/>
        </Button>
      </td>
    </tr>
  );
}


export default TodoItem;

