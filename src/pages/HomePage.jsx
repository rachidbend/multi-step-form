import { Outlet, useNavigate } from 'react-router';
import SideBar from '../components/side-bar/SideBar';
import styles from './HomePage.module.css';
import { useEffect } from 'react';

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(function () {
    navigate('/info');
  }, []);

  return (
    <div className={styles.homepage}>
      <SideBar />
      <form className={styles.mainForm}>
        <Outlet />
      </form>
    </div>
  );
}
