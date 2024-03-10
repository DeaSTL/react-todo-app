import { useReducer, useState } from 'react';
import TodoItem from './TodoItem';
import Table from 'react-bootstrap/Table';
import TodoInput from './TodoInput';
import {Card,CardBody,Container} from 'react-bootstrap';
import { Item } from '../Types';

function TodoItems({items,deleteTodo,toggleDone}:any) {
    console.log(items)
  if(items.length > 0){
   return (
     <Card>
         <CardBody>
         <Table borderless>
           <thead>
             <tr>
               <td></td>
               <td></td>
               <td></td>
             </tr>
           </thead>
           <tbody>
           {items.map((item:any, index:any) => (
                 <TodoItem key={index} item={item} deleteTodo={deleteTodo} toggleDone={toggleDone}/>
           ))}
           </tbody>
         </Table>
       </CardBody>
     </Card>
   )
  }
  return ('')

}

function addTodo(items:Item[]) {
  const item:Item = {
id: Math.random() * 10000,
    item.text,
    status: false
  } 
  setItems([...items, item ]);
}

function deleteTodo (id:number) {
  setItems(items.filter((item)=>{
        return item.id != id
        }))
} 

function toggleDone(id:number) {
  let new_items = [...items]

    items.map((item)=>{
        if(item.id == id){
        item.status = !item.status
        }
        })

  setItems(new_items)
}
function reducer(state:any,action:any){
  switch(action){
    case 'add':
      addTodo(state)
    case 'del':
      deleteTodo(state)
    case 'toggle':
      toggleDone(state)
  }
}

function TodoList() {

  const [items, setItems] = useState<Item[]>([]);


  const [state,dispatch] = useReducer<Item[]>(reducer)


  return (
    <Container>
      <TodoInput addTodo={addTodo}/>
      <TodoItems items={items} deleteTodo={deleteTodo} toggleDone={toggleDone}/>
    </Container>
  )
      
}


export default TodoList;

