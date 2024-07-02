import React, { useState, useEffect } from "react";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "./services/todoService";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import ReactPlayer from "react-player";
const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos();
      setTodos(todos);
    };

    fetchTodos();
  }, []);

  const handleAddTodo = async (newTodo) => {
    const addedTodo = await addTodo(newTodo);
    setTodos([...todos, addedTodo]);
  };

  const handleUpdateTodo = async (id, updatedTodo) => {
    const updated = await updateTodo(id, updatedTodo);
    setTodos(todos.map((todo) => (todo.id === id ? updated : todo)));
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="box">
      {/* <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" /> */}
      <h1>Todo App</h1>
      <TodoForm addTodo={handleAddTodo} />
      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          updateTodo={handleUpdateTodo}
          deleteTodo={handleDeleteTodo}
        />
      ) : (
        <p className="error">No todos available. Please add a todo.</p>
      )}
    </div>
  );
};

export default App;
