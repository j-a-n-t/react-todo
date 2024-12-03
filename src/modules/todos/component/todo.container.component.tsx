import React from "react";
import styles from "../styles/todo.container.module.css";

interface Props {
	children: React.ReactNode;
}

const TodoContainerComponent = ({children}: Props) => {
	return (
		<section className={styles.container}>
			{children}
		</section>
	)
}

export {TodoContainerComponent};