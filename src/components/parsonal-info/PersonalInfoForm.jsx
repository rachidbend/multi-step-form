import Button from '../Button';
import useNavigateButton from '../../hooks/useNavigateButton';
import { useForm } from '../../context/FormContext';
import styles from './PersonalInfoForm.module.css';
import { useEffect } from 'react';

export default function PersonalInfoForm() {
  const nextPage = useNavigateButton('plan');
  const { onNameChange, name, onEmailChange, email, onPhoneChange, phone } =
    useForm();

  let canAdvance = false;

  if (!name || !email || !phone) canAdvance = false;
  if (name && email && phone) canAdvance = true;

  return (
    <>
      <div>
        <div>
          <h2 className="heading headingPrimary">Personal info</h2>
          <p className="text headingText">
            Please provide your name, email address, and phone number.
          </p>
        </div>

        <div className={styles.personalInfoContainer}>
          <label htmlFor="name" className={styles.personalInfoLabel}>
            Name
          </label>
          <input
            type="text"
            name=""
            id="name"
            placeholder="e.g. Stephen King"
            value={name}
            onChange={onNameChange}
            className={styles.personalInfoInput}
          />

          <label htmlFor="email" className={styles.personalInfoLabel}>
            Email Address
          </label>
          <input
            type="email"
            name=""
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            value={email}
            onChange={onEmailChange}
            className={styles.personalInfoInput}
          />

          <label htmlFor="phone" className={styles.personalInfoLabel}>
            Phone number
          </label>
          <input
            type="number"
            name=""
            id="phone"
            placeholder="e.g +1 234 567 890"
            value={phone}
            onChange={onPhoneChange}
            className={styles.personalInfoInput}
          />
        </div>
      </div>
      <div className="btn--container">
        <Button type={'empty'} />
        <Button
          type={'next'}
          onClick={nextPage}
          disabled={name && email && phone ? false : true}
        />
      </div>
    </>
  );
}
