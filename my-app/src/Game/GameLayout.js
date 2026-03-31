import { InformationContainer } from './Components/Information/InformationContainer';
import { FieldContainer } from './Components/Field/FieldContainer';

import styles from './GameLayout.module.css';

export const GameLayout = ({ restartGame }) => {
	return (
		<div className={styles.game}>
			<InformationContainer />
			<FieldContainer />
			<button className={styles.restartBtn} onClick={restartGame}>
				Начать заново
			</button>
		</div>
	);
};
