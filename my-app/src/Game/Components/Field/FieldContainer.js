import { FieldLayout } from './FieldLayout';
import PropTypes from 'prop-types';

export const FieldContainer = ({ field, onCellClick }) => {
	return <FieldLayout field={field} onCellClick={onCellClick} />;
};

FieldContainer.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
};
