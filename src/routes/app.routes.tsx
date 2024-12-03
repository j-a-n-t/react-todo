import {Route, Routes} from "react-router";
import {TodoView} from "../modules/todos/todo.view.tsx";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<TodoView/>}/>
		</Routes>
	)
}

export {AppRoutes};