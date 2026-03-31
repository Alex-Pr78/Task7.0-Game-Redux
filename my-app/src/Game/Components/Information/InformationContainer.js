import { InformationLayout } from './InformationLayout';
import { useReduxState } from '../../redux-manager';

export const InformationContainer = () => {
	const { currentPlayer, isGameEnded, isDraw } = useReduxState();

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
