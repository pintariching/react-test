import React from "react";
import PropTypes from "prop-types";
import { TodoType } from "./App";
import Todo from "./Todo";

interface TodoListProps {
	todos: TodoType[];
}

const TodoList = ({ todos }: TodoListProps) => {
	return (
		<>
			{todos.map((todo) => {
				return <Todo todo={todo} />;
			})}
		</>
	);
};

export default TodoList;
