import styles from "../styles/todo.card.module.css";

interface Props {
	text: string;
	realizado: boolean;
	onCompleteTodo: (t: string) => void
}

const TodoCardComponent = ({text, realizado, onCompleteTodo}: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.cardContainer}>
				<div className={styles.cardBody}>
					<p className={`${styles.cardTitle} ${realizado && styles.underlinedText}`}>{text}</p>
					{!realizado &&
              <button
                  className={styles.cardButton}
                  onClick={() => onCompleteTodo(text)}>completar tarea
              </button>
					}
				
				</div>
				<p className={styles.cardStatus}>  {realizado ? "✔️" : "✖️"}</p>
			</div>
		
		</div>
	)
}

export {TodoCardComponent};