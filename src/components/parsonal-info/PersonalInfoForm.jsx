import Button from '../Button';
import useNavigateButton from '../../hooks/useNavigateButton';
import { useForm } from '../../context/FormContext';
import styles from './PersonalInfoForm.module.css';
import { useEffect, useState } from 'react';

export default function PersonalInfoForm() {
  const nextPage = useNavigateButton('plan');
  const { onNameChange, name, onEmailChange, email, onPhoneChange, phone } =
    useForm();
  const [nameClassName, setNameClassName] = useState('');
  const [emailClassName, setEmailClassName] = useState('');
  const [phoneClassName, setPhoneClassName] = useState('');

  // nameInputEmpty

  // emailInputEmpty

  // phoneInputEmpty

  function onNextClick() {
    !name ? setNameClassName(styles.nameInputEmpty) : setNameClassName('');
    !email ? setEmailClassName(styles.emailInputEmpty) : setEmailClassName('');
    !phone ? setPhoneClassName(styles.phoneInputEmpty) : setPhoneClassName('');

    console.log(!name);
  }

  return (
    <>
      <div className="form-container--mobile">
        <div>
          <h2 className="heading headingPrimary">Personal info</h2>
          <p className="text headingText">
            Please provide your name, email address, and phone number.
          </p>
        </div>

        <div className={`${styles.personalInfoContainer} `}>
          <div
            className={`${styles.personalInfoInputCOntainer} ${nameClassName}`}
          >
            <label htmlFor="name" className={styles.personalInfoLabel}>
              <p>Name</p>
              <p className={styles.inputReqiredText}>This fiels is reqired</p>
            </label>
            <input
              type="text"
              name=""
              id="name"
              placeholder="e.g. Stephen King"
              value={name}
              onChange={onNameChange}
              className={styles.personalInfoInput}
              required
            />
          </div>
          <div
            className={`${styles.personalInfoInputCOntainer} ${emailClassName}`}
          >
            <label htmlFor="email" className={styles.personalInfoLabel}>
              <p>Email Address</p>
              <p className={styles.inputReqiredText}>This fiels is reqired</p>
            </label>
            <input
              type="email"
              name=""
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              value={email}
              onChange={onEmailChange}
              className={styles.personalInfoInput}
              required
            />
          </div>
          <div
            className={`${styles.personalInfoInputCOntainer} ${phoneClassName}`}
          >
            <label htmlFor="phone" className={styles.personalInfoLabel}>
              <p>Phone number</p>
              <p className={styles.inputReqiredText}>This fiels is reqired</p>
            </label>
            <input
              type="number"
              name=""
              id="phone"
              placeholder="e.g +1 234 567 890"
              value={phone}
              onChange={onPhoneChange}
              className={styles.personalInfoInput}
              required
            />
          </div>
        </div>
      </div>
      <div className="btn--container">
        <Button type={'empty'} />

        <Button
          type={'next'}
          onClick={e => {
            onNextClick();
            if (name && email && phone) nextPage(e);
          }}
          disabled={name || email || phone ? false : true}
        />
      </div>
    </>
  );
}
