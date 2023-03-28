import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import TodoWithRedux from "./projects/todo-redux/TodoWithRedux"
import Todo from "./projects/todoList/Todo"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/todo-with-redux" element={<TodoWithRedux />} />
      </Routes>
    </>
  )
}

export default App
