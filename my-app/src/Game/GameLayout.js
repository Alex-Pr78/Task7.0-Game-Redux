import { InformationContainer } from './Components/Information/InformationContainer';
import { FieldContainer } from './Components/Field/FieldContainer';
import styles from './GameLayout.module.css';

export const GameLayout = ({
	field,
	currentPlayer,
	isGameEnded,
	isDraw,
	onCellClick,
	onRestart,
}) => {
	return (
		<div className={styles.game}>
			<InformationContainer
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<FieldContainer
				field={field}
				isGameEnded={isGameEnded}
				onCellClick={onCellClick}
			/>
			<button className={styles.restartBtn} onClick={onRestart}>
				Начать заново
			</button>
		</div>
	);
};
