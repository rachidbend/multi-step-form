/* eslint-disable react/prop-types */
import { useForm } from '../context/FormContext';

export default function AddOnCard({ addOn }) {
  const { selectedAddOns, isYearly, onAddOnChange, selectedAddOnsNames } =
    useForm();
  console.log(selectedAddOnsNames);
  return (
    <div>
      <label htmlFor={addOn.addOnName.split(' ').at(0)}>
        <input
          type="checkbox"
          value={addOn.addOnName}
          checked={selectedAddOnsNames.includes(addOn.addOnName)}
          id={addOn.addOnName.split(' ').at(0)}
          onChange={onAddOnChange}
        />
        <div>
          <h3>{addOn.addOnName} </h3>
          <p>{addOn.addOndescription}</p>
          <span>
            +$
            {isYearly ? `${addOn.yearlyPrice}/mo` : `${addOn.monthlyPrice}/mo`}
          </span>
        </div>
      </label>
    </div>
  );
}
