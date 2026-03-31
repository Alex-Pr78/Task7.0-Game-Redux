import styles from './FieldLayout.module.css';

export const FieldLayout = ({ field, handleCellClick }) => (
		<div className={styles.field}>
			{field.map((cell, index) => (
				<button
					key={index}
					className={styles.cell}
					onClick={() => handleCellClick(index)}
					disabled={cell !== ''}
					type="button"
				>
					{cell}
				</button>
			))}
		</div>
	);


