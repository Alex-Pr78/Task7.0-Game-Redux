import PropTypes from 'prop-types';
import { InformationLayout } from './InformationLayout';

export const InformationContainer = ({ currentPlayer, isGameEnded, isDraw }) => {
	return <InformationLayout currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw}/>;
};

InformationContainer.propTypes = {
	currentPlayer: PropTypes.oneOf(['X', '0']).isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
};
