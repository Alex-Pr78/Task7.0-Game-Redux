import { FieldLayout } from './FieldLayout';
import { WIN_PATTERNS, PLAYER, STATUS } from '../../../Game/constans';
import { useReduxState, useDispatch } from '../../redux-manager';
import { setField, setCurrentPlayer, setIsGameEnded, setIsDraw } from '../../../Game/actions';

export const FieldContainer = () => {
	const { field, currentPlayer, isGameEnded, isDraw } = useReduxState();
	const dispatch = useDispatch();

	// Функция проверяет все выигрышные линии
		function checkWinner(field) {
			return WIN_PATTERNS.some((pattern) => {
				const [a, b, c] = pattern;
				return field[a] && field[a] === field[b] && field[a] === field[c];
			});
		}

		// Функция обработка клика на игровом поле
		function handleCellClick(index) {
			if (isGameEnded || isDraw) return;
			if (field[index] !== '') return;

			// копия текущего массива
			const newField = [...field];
			newField[index] = currentPlayer;
			dispatch(setField(newField));

			// проверка, есть ли победитель
			if (checkWinner(newField)) {
				dispatch(setIsGameEnded(STATUS.WIN));
				return;
			}

			// условие ничьей
			if (newField.every((cell) => cell !== '')) {
				dispatch(setIsDraw(STATUS.DRAW = true));
				return;
			}
			// меняем текущего игрока
			dispatch(setCurrentPlayer(currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS));
		}

	return <FieldLayout field={field} handleCellClick={handleCellClick} />;
};


