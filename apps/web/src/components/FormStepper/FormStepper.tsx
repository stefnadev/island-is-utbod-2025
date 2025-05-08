import { Box, Icon, Text } from '@/components/island-ui/core/src';
import * as styles from './FormStepper.css';
interface StepProps {
  title: string;
  number: number;
  completed?: boolean;
  current?: boolean;
}

const Step = ({
  title,
  number,
  completed = false,
  current = false,
}: StepProps) => (
  <Box
    style={{
      alignItems: 'center',
      height: 64,
      position: 'relative',
    }}
    display={completed ? ['none', 'none', 'flex'] : 'flex'}
  >
    {number > 1 && (
      <div
        className={styles.Line}
        style={{ background: current || completed ? '#6a2ea0' : undefined }}
      />
    )}
    <div
      className={styles.StepNumber}
      style={{ background: current || completed ? '#6a2ea0' : undefined }}
    >
      {completed ? <Icon type="check" /> : number}
    </div>
    <Text variant="default" fontWeight={current ? 'semiBold' : 'light'}>
      {title}
    </Text>
  </Box>
);

interface FormStepperProps {
  steps: StepProps[];
  current: number;
}

export const FormStepper = ({ steps, current }: FormStepperProps) => {
  return (
    <div className={styles.StepWrapper}>
      {steps.map((step) => (
        <Step
          key={step.number}
          {...step}
          completed={step.number < current}
          current={step.number === current}
        />
      ))}
    </div>
  );
};
