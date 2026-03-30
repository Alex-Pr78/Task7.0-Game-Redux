import { GameLayout } from './GameLayout';
import { useState } from 'react';

// содержит один из вариантов побед
const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

// массив игрового поля 9 клток
const array = ['', '', '', '', '', '', '', '', ''];

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X'); // кто ходит в данный момент
	const [isGameEnded, setIsGameEnded] = useState(false); // завершена игра
	const [isDraw, setIsDraw] = useState(false); // была ли ничья
	const [field, setField] = useState(array); // игровое поле

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
			setIsGameEnded(true);
			return;
		}

		// условие ничьей
		if (newField.every((cell) => cell !== '')) {
			setIsDraw(true);
			return;
		}
		// меняем текущего игрока
		setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
	}

	// функция рестарт игры
	function restartGame() {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(array);
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
