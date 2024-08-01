import { useEffect, useState } from 'react'
import axios from "axios"

function useTodos(){
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
    .then((response)=>{
      setTodos(response.data.todos)
    })
  }, [])

  return todos;
}
function App() {
  const todos = useTodos()
  return (
    <div>
      {
        todos.map(todo=><Todo title={todo.title} description={todo.description}></Todo>)
      }
    </div>
  )
}

function Todo({title, description}){
  return <div>
    <h1>
      {title}
    </h1>
    <h3>
      {description}
    </h3>
  </div>
}

export default App
