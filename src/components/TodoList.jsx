
import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const TodoList = () => {

  const [selectedTodoId, setSelectedTodoId] = useState(null); // State to track selected todo item


  // Assume todos is an array of todo objects
  const todos = [
    { id: 1, title: 'Todo 1' },
    { id: 2, title: 'Todo 2' },
    // More todo items...
  ];


  // Function to handle click on todo item
  const handleTodoClick = (id) => {
    setSelectedTodoId(id);
    
  };


  return (
    <div className="container mx-auto md:grid md:grid-cols-2 md:gap-36 h-screen">
      <div className=' bg-slate-600 mt-8 mb-4 py-5 px-2 lg-24 xl:ml-36 h-6/7 rounded overflow-auto '>
        <div className='flex flex-col sm:flex-row sm:justify-between mb-10'>
          <h1 className=" mb-5 sm:mb-0 text-4xl font-bold text-center">Todo List</h1>
          <Link to="add" className=" bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded-md w-fit mx-auto">
            Add Todo
          </Link>
        </div>
        <ul className="space-y-2 mx-5">
          {todos.map(todo => (
            <li key={todo.id} className='bg-slate-300 text-blue-950 rounded-md'>
              <div className='py-4'><NavLink to={`details/${todo.id}`} className=" mx-5 text-xl hover:text-2xl hover:underline hover:cursor-pointer" onClick={() => handleTodoClick(todo.id)}>{todo.title}</NavLink></div>
              {selectedTodoId === todo.id && <div className=' border-red-50 border px-2 pb-3 pt-5 mt-2 rounded bg-slate-600 md:hidden'><Outlet /></div>} {/* Render details if selectedTodoId matches */}
            </li>
          ))}
        </ul>
      </div>
      <div className='mt-8 mb-4 p-5 hidden md:block '>
        <Outlet />
      </div>
    </div>
  );
};

export default TodoList;
