import type { GetServerSideProps } from 'next';
import { Login } from '@/screens/Login/Login';

export default Login;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      errorMessage: query?.invalidLogin ? 'Símanúmer finnst ekki' : null,
      phonenumber: query?.phonenumber ?? null,
    },
  };
};
