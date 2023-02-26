import React, { useContext } from 'react';
import { TodoContext } from '../reduce/todoReduce';
import { todoReducer } from '../reduce/todoReduce';
function TodoList() {
    const { state, dispatch } = useContext(TodoContext);
  
    function handleAddTodo() {
      const todoText = prompt('Enter todo:');
      if (todoText) {
        dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), text: todoText, completed: false } });
      }
    }
  
    return (
      <div>
        <ul>
          {state.todos.map(todo => (
            <li key={todo.id}>
              <input type="checkbox" checked={todo.completed} onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })} />
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
              <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>Delete</button>
            </li>
          ))}
        </ul>
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    );
  }
  
  export default TodoList;