import { useEffect } from 'react';
import { useForm } from '../../context/FormContext';
import useNavigateButton from '../../hooks/useNavigateButton';
import Button from '../Button';
import styles from './Summary.module.css';
import { useNavigate } from 'react-router';

export default function Summary() {
  const backPage = useNavigateButton('add-ons');
  const nextPage = useNavigateButton('thank-you');

  const navigate = useNavigate();

  const {
    selectedPlan,
    isYearly,
    selectedAddOns,
    selectedAddOnsNames,
    calcTotal,
    totalPrice,
    canConfirm,
    onConfirm,
  } = useForm();

  useEffect(function () {
    calcTotal();
    onConfirm();
    console.log(canConfirm);
    console.log(selectedAddOnsNames);
  }, []);
  if (!selectedPlan) return <p> select a plan first</p>;

  return (
    <>
      <div className="form-container--mobile">
        <div>
          <h2 className="heading headingPrimary">Finishing up</h2>
          <p className="text headingText">
            Double-check everything looks OK before confirming.
          </p>
        </div>
        <div>
          <div className={`${styles.palnAndAddOnsContainer}`}>
            <div className={`${styles.selectedPlanContaniner}`}>
              <p className={`${styles.selectedPlanTitle}`}>
                {Object.keys(selectedPlan).length > 0
                  ? `${selectedPlan.planName} (${
                      isYearly ? 'Yearly' : 'Monthly'
                    }) `
                  : `You haven't selected a plan`}
                <br />
                <button
                  className={styles.btnChange}
                  onClick={e => {
                    e.preventDefault();
                    navigate('/plan');
                  }}
                >
                  Change
                </button>
              </p>
              {Object.keys(selectedPlan).length > 0 ? (
                <p className={`${styles.selectedPlanPrice}`}>
                  $
                  {isYearly
                    ? `${selectedPlan.yearlyPrice}/yr`
                    : `${selectedPlan.monthlyPrice}/mo`}
                </p>
              ) : (
                ''
              )}
            </div>
            <div className={`${styles.selectedAddOnsContainer}`}>
              {selectedAddOnsNames.length !== 0 ? (
                selectedAddOns.map(addOn => (
                  <div
                    key={addOn.addOnName}
                    className={`${styles.selectedAddOnContainer}`}
                  >
                    <p className={`${styles.selectedAddOnsTitle}`}>
                      {addOn.addOnName}
                    </p>
                    <p className={`${styles.selectedAddOnsPrice}`}>
                      {isYearly
                        ? `+$${addOn.yearlyPrice}/yr`
                        : `+$${addOn.monthlyPrice}/mo`}
                    </p>
                  </div>
                ))
              ) : (
                <p className={`${styles.selectedAddOnsTitle}`}>
                  You haven&apos;t picked any add-ons{' '}
                </p>
              )}
            </div>
          </div>
          <div className={`${styles.totalPriceContainer}`}>
            <p className={`${styles.totalPriceHeading}`}>
              Total ({isYearly ? 'per year' : 'per month'}){' '}
            </p>
            <p className={`${styles.totalPrice}`}>
              {isYearly
                ? `+$${totalPrice}/yr`
                : `+$${totalPrice ? totalPrice : '0'}/mo`}{' '}
            </p>
          </div>
        </div>
      </div>
      <div className="btn--container">
        <Button type={'back'} onClick={backPage} />
        <Button type={'confirm'} onClick={nextPage} disabled={!canConfirm} />
      </div>
    </>
  );
}
