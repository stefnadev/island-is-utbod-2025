import {
  GagnasofnunStep,
  PersonuupplysingarStep,
  VinnumarkadurStep,
  YfirlitStep,
} from '../';

export interface StepProps {
  formData: any;
  setFormData: (data: any) => void;
  nextStep: () => void;
  previousStep: () => void;
}

export const Step = ({ number, ...props }: { number: number } & StepProps) => {
  switch (number) {
    case 1:
      return <GagnasofnunStep {...props} />;
    case 2:
      return <PersonuupplysingarStep {...props} />;
    case 3:
      return <VinnumarkadurStep {...props} />;
    case 4:
      return <YfirlitStep {...props} />;
    default:
      <></>;
  }
};
