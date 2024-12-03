import styles from "../styles/todo.list.module.css";
import {TodoCardComponent} from "./todo.card.component.tsx";


export interface Props {
	todos: { todo: string, realizado: boolean }[];
	onCompleteTodo: (t: string) => void
}

const TodoListComponent = ({todos, onCompleteTodo}: Props) => {
	return (
		<div className={styles.listContainer}>
			<h1 className={styles.title}>Tareas guardadas</h1>
			<div className={styles.containerCard}>
				{todos.length < 1
					? <p>Sin tareas almacenadas</p>
					: todos.map((item: { todo: string, realizado: boolean }, index: number) =>
						<TodoCardComponent
							key={index}
							text={item.todo}
							realizado={item.realizado}
							onCompleteTodo={onCompleteTodo}
						/>)
				}
			</div>
		</div>
	)
}

export {TodoListComponent}