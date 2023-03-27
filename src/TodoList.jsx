import Todo from './Todo'

const TodoList = ({todos, setTodos, updateTodo}) => {

    return ( 
        <div className="todo-list">
            <div className="content-container">
                <ul>
                    {todos.map(todo => (
                        <Todo key={todo.id} todo={todo} name={todo.name} todos={todos} setTodos={setTodos} updateTodo={updateTodo}/>
                    ))}
                </ul>
            </div>

        </div>
     );
}
 
export default TodoList;