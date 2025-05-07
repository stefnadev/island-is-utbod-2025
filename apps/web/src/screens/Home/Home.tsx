import * as styles from './Home.css';

import Header from '@/components/Header/Header';
import { MainWrapper } from '@/components/Layouts/MainWrapper/MainWrapper';

export const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <MainWrapper />
    </div>
  );
};
