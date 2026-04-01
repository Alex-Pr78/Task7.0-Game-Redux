import { currentField } from './utils/field';
import { ACTION_TYPE } from './actions';
import { STATUS, PLAYER } from './constants';

const initialState = {
	isGameEnded: STATUS.TURN,
	currentPlayer: PLAYER.CROSS,
	isDraw: STATUS.DRAW,
	field: currentField,
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_FIELD:
			return {
				...state,
				field: payload,
			};
		case ACTION_TYPE.SET_CURRENT_PLAYER:
			return {
				...state,
				currentPlayer: payload,
			};
		case ACTION_TYPE.SET_IS_DRAW:
			return {
				...state,
				isDraw: payload,
			};
		case ACTION_TYPE.SET_IS_GAME_ENDED:
			return {
				...state,
				isGameEnded: payload,
			};
		case ACTION_TYPE.RESTART_GAME:
			return initialState;
		default:
			return state;
	}
};
