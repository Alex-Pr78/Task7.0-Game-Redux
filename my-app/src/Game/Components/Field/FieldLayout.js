import PropTypes from 'prop-types';
import styles from './FieldLayout.module.css';

export const FieldLayout = ({ field, onCellClick }) => (
		<div className={styles.field}>
			{field.map((cell, index) => (
				<button
					key={index}
					className={styles.cell}
					onClick={() => onCellClick(index)}
					disabled={cell !== ''}
					type="button"
				>
					{cell}
				</button>
			))}
		</div>
	);


FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	onCellClick: PropTypes.func.isRequired,
};
