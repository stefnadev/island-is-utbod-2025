import Head from 'next/head';
import * as styles from './Home.css';
import { ProcessEntry } from '@/components/island-ui/contentful/src/';
import { Text } from '@/components/island-ui/core/src';
import Header from '@/components/Header/Header';

export const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Head>
        <title>Að skila skattframtali</title>
      </Head>
      <Text variant="h1">Að skila skattframtali</Text>
      <ProcessEntry
        processTitle="Framtal 2025"
        processLink="/skattframtol"
        buttonText="Opna"
        newTab={false}
      />
    </div>
  );
};
