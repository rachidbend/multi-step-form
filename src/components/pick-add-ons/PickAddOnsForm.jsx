import { useForm } from '../../context/FormContext';
import useNavigateButton from '../../hooks/useNavigateButton';
import AddOnCard from '../AddOnCard';
import Button from '../Button';

export default function PickAddOnsForm() {
  const backPage = useNavigateButton('plan');
  const nextPage = useNavigateButton('summary');
  const { onAddOnChange, addOns, selectedAddOns } = useForm();
  return (
    <div>
      <div>
        <h2 className="heading headingPrimary">Pick add-ons</h2>
        <p className="text headingText">
          add-ons help enhance your gaming exprerience.
        </p>
      </div>
      <div>
        {addOns.map(addOn => (
          <AddOnCard addOn={addOn} key={addOn.addOnName} />
        ))}
      </div>
      <div>
        <Button type={'back'} onClick={backPage} />
        <Button type={'next'} onClick={nextPage} />
      </div>
    </div>
  );
}
