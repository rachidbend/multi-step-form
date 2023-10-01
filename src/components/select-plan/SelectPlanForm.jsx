import { useForm } from '../../context/FormContext';
import useNavigateButton from '../../hooks/useNavigateButton';
import Button from '../Button';
import PlanCard from '../PlanCard';
import styles from './SelectPlanForm.module.css';

export default function SelectPlanForm() {
  const nextPage = useNavigateButton('add-ons');
  const backPage = useNavigateButton('info');
  const { plans, isYearly, onYearlyChange } = useForm();

  return (
    <div>
      <div>
        <h2 className=" heading headingPrimary">Select your plan</h2>
        <p className="text headingText">
          You have the option of monthly or yearly billing
        </p>
      </div>
      <div>
        <div className={styles.plansContainer}>
          {plans.map((plan, i) => (
            <PlanCard plan={plan} key={i} />
          ))}
        </div>

        <div>
          <span>monthly</span>
          <label htmlFor="monthly-or-yearly"></label>
          <input
            type="checkbox"
            checked={isYearly}
            onChange={onYearlyChange}
            id="monthly-or-yearly"
          />
          <span>yearly</span>
        </div>
      </div>
      <div className="btn--container">
        <Button type={'back'} onClick={backPage} />
        <Button type={'next'} onClick={nextPage} />
      </div>
    </div>
  );
}
