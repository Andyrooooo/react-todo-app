import {useState} from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    const newTodos = [todo, ...todos]

    setTodos(newTodos)
    console.log(...todos)
}

const updateTodo = (todoId, newValue) => {
  setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
}

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todos={todos} setTodos={setTodos} updateTodo={updateTodo}/>
      <AddTodo onSubmit={addTodo}/>
    </div>
  )
}

export default App
