import React, { useState } from "react";
import TodoList from "./TodoList";

export type TodoType = {
	id: number;
	name: string;
	complete: boolean;
};

const App = () => {
	const [todos, setTodos] = useState<TodoType[]>([
		{ id: 1, name: "test1", complete: false },
	]);

	return (
		<>
			<TodoList todos={todos} />
			<input type="text" />
			<button>Add Todo</button>
			<button>Clear Complete</button>
			<h1>0 complete todos</h1>
		</>
	);
};

export default App;
