import {useState} from 'react'
import AddTodo from './AddTodo'

const Todo = ({name, todo, todos, setTodos, updateTodo}) => {
    const [edit, setEdit] = useState({
        id: null,
        name: ''
    })

    const submitUpdate = name => {
        updateTodo(edit.id, name)
        setEdit({
            id: null,
            name: ''
        })
    }

    if (edit.id) {
        return <AddTodo edit={edit} onSubmit={submitUpdate} />
    }
    
    const deleteTodo = () => {
        setTodos(todos.filter(item => item.id !== todo.id ))
    }

    const checked = () => {
        let updatedTodos = todos.map(item => {
            if(item.id === todo.id) {
                todo.completed = !todo.completed
                if (todo.completed === true) {
                    alert(`Awesome you complete: ${todo.name}`)
                }
                
            }
            return item
        })
        setTodos(updatedTodos)
    }


    
    return ( 
        <div className={`todo ${todo.completed ? "completed" : ""}`}>
            <div className="check">
            <input onClick={checked} type="checkbox"></input>
            </div>

            <div className="todo-item">
            <li>{name}</li>
            </div>

            <div className="edit-delete">
            <button onClick={deleteTodo} className="delete"><i className="fa fa-trash" aria-hidden="true"></i></button>
            <button onClick={() => setEdit({id: todo.id, name: todo})} className="edit"><i className="fa fa-wrench" aria-hidden="true"></i></button>
            </div>

        </div>
     );
}
 
export default Todo;