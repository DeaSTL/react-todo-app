import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';



function TodoInput({ addTodo }:any) {

  var [input, setInput] = useState('deez');

  function submitInput() {
    addTodo(input.valueOf());
  }

  return (
    <div className="mb-4">
      <InputGroup>

        <Form.Control
          placeholder="Add a new todo"
          aria-label="Add a new todo"
          aria-describedby="basic-addon1"
          onChange={e => { setInput(e.target.value) }}
        />

        <Button variant="primary" type="submit" onClick={submitInput}>Submit</Button>
      </InputGroup>


    </div>
  )

}

export default TodoInput;

