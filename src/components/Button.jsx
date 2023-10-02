/* eslint-disable react/prop-types */
import styles from './Button.module.css';

export default function Button({ type, onClick = null, disabled = false }) {
  if (type === 'empty')
    return (
      <button
        className={`${styles.btn} ${styles.btnEmpty}`}
        onClick={e => e.preventDefault()}
        disabled={true}
      ></button>
    );
  if (type === 'next')
    return (
      <button
        className={`${styles.btn} ${styles.btnNext}`}
        onClick={onClick}
        disabled={disabled}
      >
        next step
      </button>
    );
  if (type === 'back')
    return (
      <button className={`${styles.btn} ${styles.btnBack}`} onClick={onClick}>
        {' '}
        Go back
      </button>
    );
  if (type === 'confirm')
    return (
      <button
        className={`${styles.btn} ${styles.btnConfirm}`}
        onClick={onClick}
        disabled={disabled}
      >
        confirm
      </button>
    );
}
