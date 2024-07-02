import React from "react";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const handleToggleComplete = () => {
    updateTodo(todo.id, { ...todo, completed: !todo.completed });
  };

  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        <p className="paragraph">Id: {todo.id}</p>
        <p className="paragraph">Title: {todo.title}</p>
        <p className="paragraph">Body: {todo.body}</p>
      </span>
      <div className="buttons">
        <button onClick={handleToggleComplete}>
          {todo.completed ? "Unmark" : "Complete"}
        </button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
