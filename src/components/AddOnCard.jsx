/* eslint-disable react/prop-types */
import { useForm } from '../context/FormContext';
import iconCheckmark from '../assets/images/icon-checkmark.svg';
import styles from './AddOnCard.module.css';

export default function AddOnCard({ addOn }) {
  const { isYearly, onAddOnChange, selectedAddOnsNames } = useForm();

  return (
    <label
      htmlFor={addOn.addOnName.split(' ').at(0)}
      className={`${styles.addOnLabel}`}
    >
      <span
        className={`${styles.addOnCheckbox} ${
          selectedAddOnsNames.includes(addOn.addOnName)
            ? styles.addOnCheckboxActive
            : ''
        }  `}
      >
        <img
          src={iconCheckmark}
          alt="checkmark icon"
          className={`${styles.addOnImage}`}
        />
      </span>
      <input
        type="checkbox"
        value={addOn.addOnName}
        checked={selectedAddOnsNames.includes(addOn.addOnName)}
        id={addOn.addOnName.split(' ').at(0)}
        onChange={onAddOnChange}
        className={`${styles.addOnInput}`}
      />
      <div>
        <h3 className={`${styles.addOnTitle} `}>{addOn.addOnName} </h3>
        <p className={`${styles.addOntext}`}>{addOn.addOndescription}</p>
      </div>
      <p className={`${styles.addOnPrice}`}>
        +$
        {isYearly ? `${addOn.yearlyPrice}/mo` : `${addOn.monthlyPrice}/mo`}
      </p>
    </label>
  );
}
