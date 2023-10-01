import { useForm } from '../context/FormContext';
import styles from './PlanCard.module.css';

/* eslint-disable react/prop-types */
export default function PlanCard({ plan }) {
  const { isYearly, onPlanChange, selectedPlan } = useForm();

  return (
    <div
      className={`${styles.planCard} ${
        selectedPlan.planName === plan.planName ? 'planCardActive' : ''
      }`}
    >
      <input
        type="checkbox"
        name=""
        id={`plan-${plan.planName}`}
        value={plan.planName}
        onChange={onPlanChange}
        checked={selectedPlan.planName === plan.planName ? true : false}
        className={styles.planCardCheckbox}
      />
      <label
        className={`${styles.planCardLabel} `}
        htmlFor={`plan-${plan.planName}`}
      >
        <img
          src={plan.icon}
          alt={`icon of ${plan.planName} plan`}
          className={styles.planCardIcon}
        />
        <p className={styles.planCardTitle}>{plan.planName}</p>
        <p className={styles.planCardPrice}>
          ${isYearly ? `${plan.yearlyPrice}/yr` : `${plan.monthlyPrice}/mo`}{' '}
        </p>
        {isYearly && <p className={styles.planCardFree}>2 months free</p>}
      </label>
    </div>
  );
}
