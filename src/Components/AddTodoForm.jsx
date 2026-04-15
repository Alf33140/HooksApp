import React,{useState} from "react";


const AddTodoForm = ({ addNewTodo }) => {
    
    const [addTodo, setAddTodo] = useState('');

        // addNewTodo(addTodo);

    const handleTodo = (e) => {
        e.preventDefault();
        addNewTodo(addTodo);           
        setAddTodo('');
    }
    
    return (
        <form onSubmit={handleTodo} className="mt-4">
            <div className="card card-body">
               <div className="form-group">
                   <label>Ajouter Todo</label>
                   <input className="form-control" value={addTodo} type="text" onChange={(e) => setAddTodo(e.target.value)} />
                   <input className="btn btn-primary mt-4" type="submit" value="Ajouter"   />
                </div>
            </div>
        </form>
        )
    }

export default AddTodoForm