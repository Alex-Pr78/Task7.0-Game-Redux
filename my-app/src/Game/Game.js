import { GameLayout } from './GameLayout';
import { currentField } from './utils/field';
import { WIN_PATTERNS, STATUS, PLAYER } from './constans';
import { useState } from 'react';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS); // кто ходит в данный момент
	const [isGameEnded, setIsGameEnded] = useState(STATUS.TURN); // завершена игра
	const [isDraw, setIsDraw] = useState(STATUS.DRAW); // была ли ничья
	const [field, setField] = useState(currentField); // игровое поле

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
		setField(newField);

		// проверка, есть ли победитель
		if (checkWinner(newField)) {
			setIsGameEnded(STATUS.WIN);
			return;
		}

		// условие ничьей
		if (newField.every((cell) => cell !== '')) {
			setIsDraw(STATUS.DRAW = true);
			return;
		}
		// меняем текущего игрока
		setCurrentPlayer(currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS);
	}

	// функция рестарт игры
	function restartGame() {
		setCurrentPlayer(PLAYER.CROSS);
		setIsGameEnded(STATUS.TURN);
		setIsDraw(STATUS.DRAW);
		setField(currentField);
	}

	return (
		<GameLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			field={field}
			onCellClick={handleCellClick}
			onRestart={restartGame}
		/>
	);
};
