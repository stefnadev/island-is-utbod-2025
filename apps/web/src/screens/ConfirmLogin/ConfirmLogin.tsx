import LoginConfirm from '@/components/LoginForm/LoginStates/LoginConfirm';
import { useEffect } from 'react';

interface ConfirmLoginProps {
  securityCode: string;
}

export const ConfirmLogin = ({ securityCode }: ConfirmLoginProps) => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = '/skattframtol/2025';
    }, 3000);
  });
  return <LoginConfirm securityCode={securityCode} />;
};
