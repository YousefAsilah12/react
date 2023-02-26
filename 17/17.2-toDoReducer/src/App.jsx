import './App.css'
import React, { useReducer } from 'react';
import  TodoList  from './component/AddtoDo'
import { TodoContext,todoReducer  } from './reduce/todoReduce';


function App() {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <TodoList />
    </TodoContext.Provider>
    )

}

export default App
