import {Fragment} from "react";
import {TodoAddComponent, TodoContainerComponent, TodoListComponent, TodoCountComponent} from "./component";
import {useTodoHook} from "./hooks";

const TodoView = () => {
	const {task, todos, todoCompleted, onChange, onSubmit, onCompleteTodo} = useTodoHook();
	return (
		<Fragment>
			<TodoCountComponent
				todoCompleted={todoCompleted}
				todoTotal={todos.length}/>
			<TodoContainerComponent>
				<TodoAddComponent
					onChange={onChange}
					onSubmit={onSubmit}
					task={task}/>
				<TodoListComponent
					todos={todos}
					onCompleteTodo={onCompleteTodo}/>
			</TodoContainerComponent>
		</Fragment>
	)
}

export {TodoView};