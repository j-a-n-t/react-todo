import styles from "../styles/todo.app.module.css";
import {Toaster} from "react-hot-toast";
import {FormEvent} from "react";


export interface Props {
	task: string;
	onChange: (t: string) => void;
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const TodoAddComponent = ({task, onSubmit, onChange}: Props) => {
	return (
		<section className={styles.container}>
			<h1 className={styles.title}>Ingresa nueva tarea</h1>
			<form className={styles.container} onSubmit={(e) => onSubmit(e)}>
				<div className={styles.inputContainer}>
					<label htmlFor="taskId" className={styles.inputLabel}>Nueva Tarea</label>
					<input
						className={styles.input}
						id="taskId"
						placeholder="Nueva tarea"
						type="text"
						value={task}
						onChange={({target}) => onChange(target.value)}
					/>
				</div>
				<button className={styles.button}>Guardar</button>
			</form>
			<Toaster position="top-right"/>
		</section>
	
	)
}

export {TodoAddComponent};