/* eslint-disable react/prop-types */
import styles from './Button.module.css';

export default function Button({ type, onClick = null }) {
  if (type === 'empty')
    return (
      <button
        className={`${styles.btn} ${styles.btnEmpty}`}
        onClick={e => e.preventDefault()}
      ></button>
    );
  if (type === 'next')
    return (
      <button className={`${styles.btn} ${styles.btnNext}`} onClick={onClick}>
        next step
      </button>
    );
  if (type === 'back')
    return (
      <button className={`${styles.btn} ${styles.btnBack}`} onClick={onClick}>
        {' '}
        go back
      </button>
    );
  if (type === 'confirm')
    return (
      <button
        className={`${styles.btn} ${styles.btnConfirm}`}
        onClick={onClick}
      >
        confirm
      </button>
    );
}
