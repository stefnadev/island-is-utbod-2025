import Head from 'next/head';
import { LoginForm } from '@/components/LoginForm/LoginForm';

export const Login = () => {
  return (
    <>
      <Head>
        <title>Innskráning</title>
      </Head>
      <LoginForm />
    </>
  );
};
