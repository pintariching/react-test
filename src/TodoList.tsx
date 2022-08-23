import React from "react";
import { TodoType } from "./App";
import Todo from "./Todo";

interface TodoListProps {
  todos?: TodoType[];
  toggleTodo(id: number): void;
}

const TodoList = ({ todos, toggleTodo }: TodoListProps) => {
  return (
    <>
      {todos?.map((todo) => {
        return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />;
      })}
    </>
  );
};

export default TodoList;
