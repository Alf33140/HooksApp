import React from "react";
import { useState } from "react";
import AddTodoForm from './AddTodoForm';
import { v4 as uuidv4 } from 'uuid';



const Todo = () => {
    const [warning,setWarning] = useState(false);       
    const [todos, setTodos] = useState([
        { id: 1, todo: 'Acheter du lait' },
        { id: 2, todo: 'Acheter du Beurre' },
        { id: 3, todo: 'Acheter du Pain' }
    ])
    
    console.log(todos);
const myTodos = todos.map(todo => {
    return (
        <li className='list-group-item' key={todo.id}>{todo.todo}</li>
        )
    })


 const addNewTodo = (newTodo) => {
            const newid = uuidv4();
            if(newTodo !== ''){
                warning && setWarning(false);
                setTodos([...todos, 
                    {
                        id: newid,
                        todo: newTodo
                    }
                ])
            } else {
            setWarning(true);
        } 
 } 
//  warning && <div className="alert alert-danger">Veuillez entrer une tâche</div>
 
 const warningMsg = warning && <div className="alert alert-danger" role="alert">Veuillez entrer une tâche</div>
    return (
        <div>
                {warningMsg}
                <h1 className="text-center">{todos.length} To-do</h1>
                <ul className='list-group'>
                    {myTodos}
                    
                </ul>
                <hr />
                <AddTodoForm addNewTodo={addNewTodo} />
        </div>
    )
}

export default Todo