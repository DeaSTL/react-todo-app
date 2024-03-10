import { useMemo, useReducer, useState } from 'react';
import TodoItem from './TodoItem';
import Table from 'react-bootstrap/Table';
import TodoInput from './TodoInput';
import { Card, CardBody, Container, FormCheck,  FormLabel } from 'react-bootstrap';
import { Item } from '../Types';

function TodoItems({ items, deleteTodo, toggleDone, toggleImportant }: any) {

  if (items.length > 0) {
    return (
      <>
        {
          items.map((item: any, index: any) => (
            <TodoItem key={index} item={item} deleteTodo={deleteTodo} toggleDone={toggleDone} toggleImportant={toggleImportant} />
          ))
        }
      </>
    )
  }
  return ('')

}

type ActionProp = {
  type: string,
  text?: string,
  id?: number
}


const reducer = (state: Item[], action: ActionProp) => {
  switch (action.type) {
    case "toggle":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, status: !todo.status };
        } else {
          return todo;
        }
      });
    case "add": {
      const todo: Item = {
        id: Math.random() * 69000,
        text: action?.text as string,
        status: false,
        important: false
      }
      return [...state, todo]
    }
    case "toggleImportant": {
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, important: !todo.important };
        } else {
          return todo;
        }
      });
    }
    case "delete":
      return state.filter((item) => action?.id != item.id)
    default:
      return state;
  }
};

function TodoList() {
  const [initialItems, _] = useState<Item[]>([]);
  const [items, dispatch] = useReducer(reducer, initialItems)


  const toggleDone = (id: number) => {
    dispatch({ type: "toggle", id })
  }
  const deleteTodo = (id: number) => {
    dispatch({ type: "delete", id })
  }
  const addTodo = (text: string) => {
    dispatch({ type: "add", text })
  }

  const toggleImportant = (id: number) => {
    dispatch({ type: "toggleImportant", id })
  }

  const [important, setImportant] = useState(false)
  const importantItems = useMemo(() => {
    return items.filter((item: Item) => item.important)

  }, [items])
  return (
    <Container>
      <TodoInput addTodo={addTodo} />
      <Card>
        <CardBody>
          <Table borderless>
            <thead>
              <tr>
                <td style={{gap:"1rem"}} className="d-inline-flex">
                  <FormCheck checked={important} onChange={() => setImportant((prev: boolean) => !prev)} />
                  <FormLabel >Done</FormLabel>
                </td>
                <td style={{gap:"1rem"}} className="d-inline-flex">
                  <FormCheck checked={important} onChange={() => setImportant((prev: boolean) => !prev)} />
                  <FormLabel >Important</FormLabel>
                </td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {
                important ?
                  <TodoItems items={importantItems} deleteTodo={deleteTodo} toggleDone={toggleDone} setImportant={setImportant} important={important} toggleImportant={toggleImportant} />
                  :
                  <TodoItems items={items} deleteTodo={deleteTodo} toggleDone={toggleDone} setImportant={setImportant} important={important} toggleImportant={toggleImportant} />
              }
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Container>
  )

}


export default TodoList;

