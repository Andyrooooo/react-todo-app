import { useRef } from 'react'
import {useState} from 'react'

const AddTodo = (props) => {
    const [todoInput, setTodoInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    const handleChange = e => {
        setTodoInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            name: todoInput
        })
        setTodoInput('')
    }
    

    return ( 
        <form onSubmit={handleSubmit}>
             {props.edit ? (
            <>
                <input value={todoInput} type="text" placeholder="Update todo"  onChange={handleChange} ref={inputRef} className="update-input"/>
                <button className="edit-button">Update</button>
            </> ) : ( <>
                <input value={todoInput} type="text" placeholder="New Todo"  onChange={handleChange} ref={inputRef} className="new-input"/>
                <button className="add-button"><i className="fa fa-plus" aria-hidden="true"></i></button>
            </>
            )}
        </form>
     );
}

 
export default AddTodo;
