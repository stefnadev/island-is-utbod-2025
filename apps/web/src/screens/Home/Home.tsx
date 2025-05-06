import * as styles from './Home.css';
import { ProcessEntry } from '@/components/island-ui/contentful/src/';

export const Home = () => {
  return (
    <div className={styles.container}>
      <ProcessEntry
        processTitle={'Framtal 2025'}
        processLink={'/skattframtol'}
        buttonText={'Opna'}
        newTab={false}
      ></ProcessEntry>
    </div>
  );
};
