import iconThanks from '../../assets/images/icon-thank-you.svg';
import styles from './ThankYou.module.css';

export default function ThankYou() {
  return (
    <div className={`${styles.thanksContainer}`}>
      <div className="form-container--mobile">
        <img
          className={`${styles.thanksIcon}`}
          src={iconThanks}
          alt="thank you icon"
        />
        <h2 className={`${styles.thanksHeading} heading headingPrimary`}>
          Thank you
        </h2>
        <p className={`${styles.thanksText}  headingText`}>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </div>
    </div>
  );
}
