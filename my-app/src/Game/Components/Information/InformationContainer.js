import { InformationLayout } from './InformationLayout';

export const InformationContainer = ({ currentPlayer, isGameEnded, isDraw }) => {
	let message = '';

	if (isDraw) {
		message = 'Ничья';
	} else if (isGameEnded) {
		message = `Победа: ${currentPlayer}`;
	} else {
		message = `Ходит: ${currentPlayer}`;
	}

	return <InformationLayout message={message} />;
};

