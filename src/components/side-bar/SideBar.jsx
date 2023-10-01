import { NavLink } from 'react-router-dom';
import styles from './SideBar.module.css';
export default function SideBar() {
  return (
    <div className={styles.sideBar}>
      <NavLink to={'/info'}>
        <div className={styles.sideBarStepContainer}>
          <span className={styles.sideBarNumber}>1</span>
          <div>
            <p className={styles.sideBarStep}>step 1</p>
            <h3 className={styles.sideBarTitle}>your info</h3>
          </div>
        </div>
      </NavLink>

      <NavLink to={'/plan'}>
        <div className={styles.sideBarStepContainer}>
          <span className={styles.sideBarNumber}>2</span>
          <div>
            <p className={styles.sideBarStep}>step 2</p>
            <h3 className={styles.sideBarTitle}>Select plan</h3>
          </div>
        </div>
      </NavLink>

      <NavLink to={'/add-ons'}>
        <div className={styles.sideBarStepContainer}>
          <span className={styles.sideBarNumber}>3</span>
          <div>
            <p className={styles.sideBarStep}>step 3</p>
            <h3 className={styles.sideBarTitle}>Add-ons</h3>
          </div>
        </div>
      </NavLink>

      <NavLink to={'/summary'}>
        <div className={styles.sideBarStepContainer}>
          <span className={styles.sideBarNumber}>4</span>
          <div>
            <p className={styles.sideBarStep}>step 4</p>
            <h3 className={styles.sideBarTitle}>summary</h3>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
