import { useEffect } from 'react';
import { useForm } from '../../context/FormContext';
import useNavigateButton from '../../hooks/useNavigateButton';
import Button from '../Button';

export default function Summary() {
  const backPage = useNavigateButton('add-ons');
  const nextPage = useNavigateButton('thank-you');

  const { selectedPlan, isYearly, selectedAddOns, calcTotal, totalPrice } =
    useForm();
  console.log(selectedAddOns);
  useEffect(function () {
    calcTotal();
  }, []);
  if (!selectedPlan) return <p> select a plan first</p>;

  return (
    <div>
      <div>
        <h2 className="heading headingPrimary">finishing up</h2>
        <p className="text headingText">
          double-check everything looks OK before confirming.
        </p>
      </div>
      <div>
        <p>
          {selectedPlan.planName} ({isYearly ? 'Yearly' : 'Monthly'})
        </p>
        <p>
          $
          {isYearly
            ? `${selectedPlan.yearlyPrice}/yr`
            : `${selectedPlan.monthlyPrice}/mo`}
        </p>
        {selectedAddOns.map(addOn => (
          <p key={addOn.addOnName}>
            {addOn.addOnName}{' '}
            <span> {isYearly ? addOn.yearlyPrice : addOn.monthlyPrice}</span>{' '}
          </p>
        ))}
        <p>{totalPrice}</p>
      </div>
      <div>
        <Button type={'back'} onClick={backPage} />
        <Button type={'confirm'} onClick={nextPage} />
      </div>
    </div>
  );
}
