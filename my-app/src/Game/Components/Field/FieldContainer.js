import { FieldLayout } from './FieldLayout';
import { WIN_PATTERNS, PLAYER, STATUS } from '../../../Game/constants';
import { useReduxState, useDispatch } from '../../redux-manager';
import { setField, setCurrentPlayer, setIsGameEnded, setIsDraw } from '../../../Game/actions';

export const FieldContainer = () => {
	const { field, currentPlayer, isGameEnded, isDraw } = useReduxState();
	const dispatch = useDispatch();
	
		function checkWinner(field) {
			return WIN_PATTERNS.some((pattern) => {
				const [a, b, c] = pattern;
				return field[a] && field[a] === field[b] && field[a] === field[c];
			});
		}

		function handleCellClick(index) {
			if (isGameEnded || isDraw) return;
			if (field[index] !== '') return;

			const newField = [...field];
			newField[index] = currentPlayer;
			dispatch(setField(newField));

			if (checkWinner(newField)) {
				dispatch(setIsGameEnded(STATUS.WIN));
				return;
			}

			if (newField.every((cell) => cell !== '')) {
				dispatch(setIsDraw(STATUS.DRAW));
				return;
			}

			dispatch(setCurrentPlayer(currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS));
		}

	return <FieldLayout field={field} handleCellClick={handleCellClick} />;
};


