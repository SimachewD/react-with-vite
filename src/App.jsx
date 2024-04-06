
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Navbar from "./partials/Navbar"

import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"
import EditTodo from "./components/EditTodo"
import TodoDetails from "./components/TodoDetails"
import NotFound from "./components/NotFound"


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/react-with-vite" element={<Navigate to="/todos" replace />} />
            <Route path="/todos" element={<Navbar />}>
              <Route path="/todos" element={<TodoList />}>
                <Route path="add" element={<AddTodo />} />
                <Route path="edit/:id" element={<EditTodo />} />
                <Route path="details/:id" element={<TodoDetails />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>      
    </div>
    </>
  )
}

export default App
