import { IncomeStep } from '@/screens/TaxReportDetails/steps/IncomeStep';
import { GagnasofnunStep, PersonuupplysingarStep } from '../';
import { AssetStep } from '@/screens/TaxReportDetails/steps/AssetStep';
import { DebtStep } from '@/screens/TaxReportDetails/steps/DebtStep';
import { OverviewStep } from '@/screens/TaxReportDetails/steps/OverviewStep';

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
      return <IncomeStep {...props} />;
    case 4:
      return <AssetStep {...props} />;
    case 5:
      return <DebtStep {...props} />;
    case 6:
      return <OverviewStep {...props} />;
    default:
      return <></>;
  }
};
