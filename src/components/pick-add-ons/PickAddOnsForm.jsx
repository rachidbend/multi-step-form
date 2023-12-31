import { useForm } from '../../context/FormContext';
import useNavigateButton from '../../hooks/useNavigateButton';
import AddOnCard from '../AddOnCard';
import Button from '../Button';
import styles from './PickAddOnsForm.module.css';

export default function PickAddOnsForm() {
  const backPage = useNavigateButton('plan');
  const nextPage = useNavigateButton('summary');
  const { addOns, selectedAddOnsNames } = useForm();
  return (
    <>
      <div className="form-container--mobile">
        <div>
          <h2 className="heading headingPrimary">Pick add-ons</h2>
          <p className="text headingText">
            Add-ons help enhance your gaming experience.
          </p>
        </div>
        <div className={`${styles.addOnsContainer}`}>
          {addOns.map(addOn => (
            <AddOnCard addOn={addOn} key={addOn.addOnName} />
          ))}
        </div>
      </div>
      <div className="btn--container">
        <Button type={'back'} onClick={backPage} />
        <Button type={'next'} onClick={nextPage} />
      </div>
    </>
  );
}
