import React from "react";
import { TodoType } from "./App";

interface TodoProps {
  todo: TodoType;
  toggleTodo(id: number): void;
}

const Todo = ({ todo, toggleTodo }: TodoProps) => {
  const handleChange = () => {
    toggleTodo(todo.id);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          defaultChecked={todo.complete}
          onChange={handleChange}
        />
        {todo.name}
      </label>
    </div>
  );
};

export default Todo;
