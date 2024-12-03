import {Fragment} from "react";
import style from "../styles/todo.title.module.css";


interface Props {
	todoCompleted: number;
	todoTotal: number
}

const TodoCountComponent = ({todoTotal, todoCompleted}: Props) => {
	return (
		<Fragment>
			<h1 className={style.title}>Has completado {todoCompleted} de {todoTotal} TODOS</h1>
		</Fragment>
	)
}


export {TodoCountComponent};