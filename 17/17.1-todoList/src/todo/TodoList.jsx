import { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem";
export const TodoList = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')));
  const [newTodoText, setNewTodoText] = useState('');

  // useEffect(() => {
  //   debugger
  //   const storedTodos = JSON.parse(localStorage.getItem('todos'));
  //   if (storedTodos) {
  //     setTodos(storedTodos);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodoText.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodoText }]);
      setNewTodoText('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} onUpdate={updateTodo} />
        ))}
      </ul>
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};