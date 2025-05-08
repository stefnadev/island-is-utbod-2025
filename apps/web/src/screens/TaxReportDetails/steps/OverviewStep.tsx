import { Box, Button, Text } from '@/components/island-ui/core/src';
import type { StepProps } from './types';

export const OverviewStep = ({ previousStep, nextStep }: StepProps) => {
  return (
    <Box paddingTop={3}>
      <Text>
        Vinsamlegast farðu yfir gögnin og staðfestu að réttar upplýsingar hafi
        verið gefnar upp áður en þú skilar skattframtalinu.
      </Text>
      <Box
        marginTop={8}
        display="flex"
        justifyContent="spaceBetween"
        marginBottom={4}
      >
        <Button preTextIcon="arrowBack" variant="ghost" onClick={previousStep}>
          Til baka
        </Button>
        <Button onClick={nextStep}>Skila skattframtali</Button>
      </Box>
    </Box>
  );
};
