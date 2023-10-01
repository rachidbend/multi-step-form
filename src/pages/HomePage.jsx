import { Outlet } from 'react-router';
import SideBar from '../components/side-bar/SideBar';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.homepage}>
      <SideBar />
      <form className={styles.mainForm}>
        <Outlet />
      </form>
    </div>
  );
}
