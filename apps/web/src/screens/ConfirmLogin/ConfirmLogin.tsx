import LoadingDots from '@/components/island-ui/core/src/lib/LoadingDots/LoadingDots';
import { useEffect } from 'react';

interface ConfirmLoginProps {
  securityCode: string;
}

export const ConfirmLogin = ({ securityCode }: ConfirmLoginProps) => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = '/skattframtol/2025';
    }, 2000);
  });
  return (
    <div>
      <div>{securityCode}</div>
      <LoadingDots />
    </div>
  );
};
