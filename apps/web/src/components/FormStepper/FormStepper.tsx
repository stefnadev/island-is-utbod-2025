import styled from 'styled-components';
import { Box, Icon, Text } from '@/components/island-ui/core/src';

interface StepProps {
  title: string;
  number: number;
  completed?: boolean;
  current?: boolean;
}

const StepNumber = styled.div`
  height: 32px;
  min-width: 32px;
  width: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: ${(props) => (props.focused ? '#6a2ea0' : '#c3abd9')};
  margin-right: 24px;
  font-size: 16px;
  font-weight: 600;
  z-index: 9;

  @media (max-width: 767px) {
    margin-right: 12px;
  }
`;

const Line = styled.div`
  position: absolute;
  height: 40px;
  width: 2px;
  background: ${(props) => (props.focused ? '#6a2ea0' : '#c3abd9')};
  left: 15px;
  top: -20px;

  @media (max-width: 767px) {
    display: none;
  }

  & ~ p {
    @media (max-width: 992px) and (min-width: 767px) {
      font-size: 16px;
    }
  }
`;

const StepWrapper = styled.div`
  margin-top: 32px;

  @media (max-width: 992px) {
    margin-top: 0;
  }
  @media (max-width: 767px) {
    display: flex;
    overflow: hidden;
    white-space: nowrap;

    > div {
      margin-right: 24px;
    }
  }
`;

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
    {number > 1 && <Line focused={current || completed} />}
    <StepNumber focused={current || completed}>
      {completed ? <Icon type="check" /> : number}
    </StepNumber>
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
    <StepWrapper>
      {steps.map((step) => (
        <Step
          key={step.number}
          {...step}
          completed={step.number < current}
          current={step.number === current}
        />
      ))}
    </StepWrapper>
  );
};
