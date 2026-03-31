import { GameLayout } from './GameLayout';
import { useDispatch } from './redux-manager';
import { RESTART_GAME } from './actions';

export const Game = () => {
	const dispatch = useDispatch();

	// функция рестарт игры
		function restartGame() {
			dispatch(RESTART_GAME);
		}

	return (
		<GameLayout restartGame={restartGame}/>
	);
};
