import {FormEvent, useEffect, useState} from "react";
import toast from "react-hot-toast";

const useTodoHook = () => {
	const [task, setTask] = useState("");
	const [todos, setTodos] = useState<{ todo: string, realizado: boolean }[]>([]);
	const [todoCompleted, setTodoCompleted] = useState<number>(0);
	
	const onChange: (t: string) => void = (text: string): void => setTask(text)
	const onSubmit: (e: FormEvent<HTMLFormElement>) => string = (e: FormEvent<HTMLFormElement>): string => {
		e.preventDefault();
		if (!task) return toast.error("Tarea no puede ir vacia", {duration: 1500});
		const todos: string | null = localStorage.getItem("todos");
		if (!todos) {
			const todo: { todo: string, realizado: boolean }[] = [{todo: task, realizado: false}]
			localStorage.setItem("todos", JSON.stringify(todo));
			setTodoCompleted(completedTodos(todo));
			setTodos(todo);
		} else {
			const values: { todo: string, realizado: boolean }[] = Array.from(JSON.parse(todos));
			values.unshift({todo: task, realizado: false});
			setTodos(orderArray(values));
			setTodoCompleted(completedTodos(values));
			localStorage.setItem("todos", JSON.stringify(values));
		}
		setTask("");
		return toast.success("Tarea almacenada", {duration: 1500});
	}
	const onCompleteTodo: (t: string) => string = (todoSelected: string): string => {
		const row: { todo: string, realizado: boolean } | undefined = todos.find(todo => todo.todo.includes(todoSelected));
		if (!row) return toast.error("No se encontro tarea", {duration: 1500});
		if (row.realizado) return toast.error("Tarea ya finalizada", {duration: 1500});
		row.realizado = true;
		const allTodos: {
			todo: string,
			realizado: boolean
		}[] | undefined = todos.filter(todo => todo.todo !== todoSelected);
		allTodos.unshift(row);
		setTodoCompleted(completedTodos(allTodos));
		setTodos(orderArray(allTodos));
		localStorage.setItem("todos", JSON.stringify(allTodos));
		return toast.success("Tarea realizada", {duration: 1500});
	}
	const orderArray = (todos: { todo: string, realizado: boolean }[]) => {
		return todos.sort((a, b) => {
			if (a.realizado > b.realizado) return 1;
			if (a.realizado < b.realizado) return -1;
			return 0;
		})
	}
	
	const completedTodos: (t: { todo: string, realizado: boolean }[]) => number = (todos: {
		todo: string,
		realizado: boolean
	}[]): number => todos.filter(todo => todo.realizado).length;
	
	useEffect(() => {
		if (localStorage.getItem("todos")) {
			const todos: { todo: string, realizado: boolean }[] = JSON.parse(<string>localStorage.getItem("todos"));
			setTodoCompleted(completedTodos(todos));
			setTodos(orderArray(todos));
		}
	}, []);
	
	
	return {
		task,
		todos,
		todoCompleted,
		onChange,
		onSubmit,
		onCompleteTodo
	};
}

export {useTodoHook};