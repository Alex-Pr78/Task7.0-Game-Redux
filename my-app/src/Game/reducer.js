import { currentField } from './utils/field';
import { STATUS, PLAYER } from './constans';

const initialState = {
	isGameEnded: STATUS.TURN,
	currentPlayer: PLAYER.CROSS,
	isDraw: STATUS.DRAW,
	field: currentField,
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		default:
			return state;
	}
};
