import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import TodoList from "./TodoList";

export type TodoType = {
  id: number;
  name: string;
  complete: boolean;
};

const LOCAL_STORAGE_KEY = "todoApp.todos";

const App = () => {
  const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);

  const [todos, setTodos] = useState<TodoType[]>(
    storedTodos ? JSON.parse(storedTodos) : []
  );
  const [newTodoName, setNewTodoName] = useState<string>("");

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const updateNewTodoName = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoName(e.target.value);
  };

  const toggleTodo = (id: number) => {
    const newTodos = [...todos];
    const selectedTodo = newTodos.find((todo) => todo.id === id);
    if (selectedTodo) selectedTodo.complete = !selectedTodo.complete;
    setTodos(newTodos);
  };

  const handleAddTodo = () => {
    if (newTodoName === "") return;

    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: prevTodos.length + 1, name: newTodoName, complete: false },
      ];
    });

    setNewTodoName("");
  };

  const handleClearTodos = () => {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input value={newTodoName} onChange={updateNewTodoName} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Complete</button>
      <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
    </>
  );
};

export default App;
