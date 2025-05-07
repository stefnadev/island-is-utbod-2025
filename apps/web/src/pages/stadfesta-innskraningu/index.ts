import type { GetServerSideProps } from 'next';
import { ConfirmLogin } from '@/screens/ConfirmLogin/ConfirmLogin';

export default ConfirmLogin;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      securityCode: Math.floor(Math.random() * (9999 - 1000) + 1000).toString(),
    },
  };
};
