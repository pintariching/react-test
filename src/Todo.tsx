import React from "react";
import { TodoType } from "./App";

interface TodoProps {
	todo: TodoType;
}

const Todo = ({ todo }: TodoProps) => {
	return (
		<div>
			<input type="checkbox" checked={todo.complete} />
			{todo.name}
		</div>
	);
};

export default Todo;
