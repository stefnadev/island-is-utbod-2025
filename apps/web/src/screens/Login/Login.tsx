import Head from 'next/head';
import { LoginForm } from '@/components/LoginForm/LoginForm';

interface LoginProps {
  errorMessage?: string;
  phonenumber?: string;
}

export const Login = ({ errorMessage, phonenumber }: LoginProps) => {
  return (
    <>
      <Head>
        <title>Innskráning</title>
      </Head>
      <LoginForm errorMessage={errorMessage} phonenumber={phonenumber} />
    </>
  );
};
