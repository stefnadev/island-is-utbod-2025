import { Box, Button, Stack } from '@/components/island-ui/core/src';
import type { StepProps } from './types';

export const DebtStep = ({ previousStep, nextStep }: StepProps) => {
  return (
    <Stack space={3}>
      <Box
        marginTop={8}
        display="flex"
        justifyContent="spaceBetween"
        marginBottom={4}
      >
        <Button preTextIcon="arrowBack" variant="ghost" onClick={previousStep}>
          Til baka
        </Button>
        <Button icon="arrowForward" onClick={nextStep}>
          Áfram í næsta skref
        </Button>
      </Box>
    </Stack>
  );
};
